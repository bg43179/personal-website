---
title: Apollo Cache 的操作與理解
date: "2020-09-09"
template: "post"
draft: true
slug: "apollo-server-cache"
category: "apollo-server"
tags:
  - "graphql"
description: "

"
---

## Intro

Apollo 作為 graphql engine 提供了非常便利的 cache 機制，然而在 cahce 提供的便利性之外，卻也導致後續的 request 及 graphql 錯誤讀取 cache 中資料的可能性，進而造成資料無法正確更新的問題。本文將基於我最近的經驗與理解做基礎的介紹，並試圖釐清作為初學者所遇到的問題。

作為一個新接觸 ApolloServer 的使用者，其中一個問題是該怎麼理解 apollo 所提供的 Cache。
在初步讀完 document 之後，可以發現 apollo 在 ApolloServer 端提供 Cache (Redis, Memcached, etc.) 的同時，也在 ApolloClient 端提供了 `InMemoryCahce`，如何理解兩者與前端的互動就成為了第一個頭痛的點。

## ApolloClient & InMemoryCache

```javascript
import { InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  // ...other arguments...
  cache: new InMemoryCache(options)
});
```

## ApolloServer & HTTP cacheing
再來我們可以看到 ApolloServer 提供了以下的介面

```javascript
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache,
  dataSources: () => ({
    moviesAPI: new MoviesAPI(),
  }),
});

class MoviesAPI extends RESTDataSource {
  public getMovie(id) {
  this.get(`/v1/movie/${id}`, null, { cacheOptions: { ttl: 60 } })
}
```
其中最大的關鍵在於 `cahceOptions`， `cahceOptions` 存在的目的是讓 HTTP request 能夠在 header 中加入 `Cache-Control`，進而做到 cache response 的效果。在此可以理解 ApolloServer 端的 cahce 是為 RestDataSource 而設計，使其能夠在給定的 ttl 有效期間內，讓從 server 端提取的資料不需要額外發送一個 request，可以從現存的 response 提取。

雖然這很方便但也對我們的應用造成了下面這種情形：

```
1. query page (GET v1/movie/:id)
2. mutation   (PATCH v1/movie/:id)
3. refresh page (GET v1/movie/:id)
```
按造步驟操作後，會發現在第三步重新整理過後，mutation 的結果並沒有成功地顯示在前端，儘管資料可能已經正確的存在DB當中了。


## Automatic Persisted Queries

看完這部分之後，大家可能會發現還有一個類似 Cache 的東西（至少我覺得）叫做 Automatic Persisted Query，簡稱為APQ，APQ的結構如下圖：

<img src="https://www.apollographql.com/docs/apollo-server/98cb0f1ed777fbd3fb0d0701e41d5dee/persistedQueries.optPath.png">

APQ 的存在主要是為了處理 GraphQL query 大小太大導致的延遲問題，其會將一個 query 包成 hash 傳送給介於 Apollo Server 及 Client 中間的 cache layer，並透過確認是否有hash key 來決定是否要發送完整的 graphql query 給 server，因此無論如何再 server 端都會執行 query，而其 cache 的目的並不是回傳的資料本身，而是從 client 端傳到 server端的 query body。

APQ的設定在文檔中也寫得非常清楚:


延伸閱讀:
- [graphql-caching-the-elephant-in-the-room](https://www.apollographql.com/blog/graphql-caching-the-elephant-in-the-room-11a3df0c23ad/)
- [RestDataResource cache vs InMemoryCache](https://stackoverflow.com/questions/53358443/apollo-server-confusion-about-cache-datasource-options)



---
title: Apollo Cache 的操作與理解
date: "2020-09-24"
template: "post"
draft: false
slug: "apollo-server-cache"
category: "apollo-server"
tags:
  - "graphql"
  - "apollo"
description: "Apollo 作為 graphql engine 提供了非常便利的 cache 機制，然而在 cahce 提供的便利性之外，卻也導致後續的 request 及 graphql 錯誤讀取 cache 中資料的可能性，產生資料無法正確更新的問題。本文將基於我最近的經驗與理解做基礎的介紹，並試圖釐清作為初學者所遇到的問題。
"
---

## Intro

Apollo 作為 graphql engine 提供了非常便利的 cache 機制，然而在 cahce 提供的便利性之外，卻也導致後續的 request 及 graphql 錯誤讀取 cache 中資料的可能性，產生資料無法正確更新的問題。本文將基於我最近的經驗與理解做基礎的介紹，並試圖釐清作為初學者所遇到的問題。

作為一個新接觸 ApolloServer 的使用者，其中一個問題是該怎麼理解 apollo 所提供的 Cache。
在初步讀完 document 之後，可以發現 apollo 在 ApolloServer 端提供 Cache (Redis, Memcached, etc.) 的同時，也在 ApolloClient 端提供了 `InMemoryCahce`，如何理解兩者與前端的互動就成為了第一個頭痛的點。

## ApolloClient & InMemoryCache

`InMemoryCache` 既然是 Cache，那必然提供我們緩存資料的功能。沒錯，透過`InMemoryCache`，Clinet 端的可以透過 Cache 去紀錄使用者發送給 Server 的 GraphqQL query，並將query 與其回傳的資料緩存起來，當使用者再次發送同樣的 query 時， apollo 並不會實際送一個 request 到前端，而是從 Cahce 中去讀取資料。藉有減少發送請求的數量去加快在前端的反應速度。

```javascript
const GET_MOVIE = gql`
  mutation getMovie($id: Int!) {
    getMovie(id: $id) {
      name
    }
  }
`;

const UPDATE_MOVIE = gql`
  mutation UpdateMovie($id: Int!, $name: String!) {
    updateMovie(id: $id, name: $name) {
      id
      name
    }
  }
`;
```
<span></span>

這邊提一點，`InMemoryCache` 會透過發送 query 的 `__typename__`，以及 `id` 去生成一組 ID。因此當 Client 端發送上列的 Query 去拿取 ID 為 12 的 Movie 時 ，Cache 會為 Movie 生成一組 `Movie:12`，並在後續的 query 與這組 ID 有關時，透過其去查找Cache 中的資料。若發送的是 mutation，也能夠藉此更新存在 cache 中的資料。

因此當我們分別發送上列的 query 與 mutation 時，apollo 會先從 server 中取得資料並存入 cache，而在進行 mutation 的時候，發送 request 到 server 端並用 `Movie:12` 去更新存在 Cache 中的資料，節省手動操作的麻煩。

然而，上述的特性在某些特殊情形下會無法正確的更新的 Cache，這裡不多贅述，有興趣的朋友可以參照 [Umbrella ussue](https://github.com/apollographql/apollo-feature-requests/issues/4)。因為有這些特殊情形，apollo 也提供了 API 去操作 Cache，以下列出兩種我嘗試過的 API 給大家參考

```javascript
// update: modify cache with readQuery and writeQuery
apollClient.mutate({
  mutation: UPDATE_MOVIES,
  variables: {
    name
  },
  update: (apollClient, { data: { addMovie } }) => {
    // Read the data from our cache for this query.
    const data = apollClient.readQuery({ query: getMovies });
    // Add our movie from the mutation to the end.
    data.movies.push(addMovie);
    // Write our data back to the cache.
    apollClient.writeQuery({ query: getMovies, data });
  }
})

// refetchQuery: query after mutation, passed an array of queries
apollClient.mutate({
  mutation: GET_MOVIES,
  variables: {
    name
  },
  refetchQuery: [
    {
      query: GET_MOVIES
    }
  ]
})
```
<span></span>

這邊必須注意，`InMemoryCache` 顧名思義是 in memory，所以在前端 refresh 過後 `writeQuery` 修改的資料就會消失！

最後，`InMemoryCache` 的設置方面十分容易，可以直接在 ApolloClinet 中建立

```javascript
import { InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  // ...other arguments...
  cache: new InMemoryCache(options)
});
```
<span></span>

## ApolloServer & HTTP cacheing

開門見山，在文擋的副標題有這麼一句: Automatically set HTTP cache headers and save full responses in a cache ，直截了當告訴你 ApolloServer 支援 HTTP 的 Cache Header，而究竟是怎麼個支持法，讓我們看下去。

首先我們可以看到 ApolloServer 提供了以下的介面

```javascript
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: new MemcachedCache(
    ['memcached-server-1', 'memcached-server-2', 'memcached-server-3'],
    { retries: 10, retry: 10000 }, // Options
  ),
  dataSources: () => ({
    moviesAPI: new MoviesAPI(),
  }),
});

class MoviesAPI extends RESTDataSource {
  public getMovie(id) {
  this.get(`/v1/movie/${id}`, null, { cacheOptions: { ttl: 60 } })
}
```
<span></span>

其中最大的關鍵在於 `cahceOptions`， `cahceOptions` 存在的目的是讓 HTTP request 能夠在 header 中加入 `Cache-Control`，進而做到 cache response 的效果。在此可以理解 ApolloServer 端的 cahce 是為 RestDataSource 而設計，使其能夠在給定的 ttl 有效期間內，讓從 server 端提取的資料不需要額外發送一個 request，可以從現存的 response 提取。

雖然這很方便但也對我們的應用造成了下面這種情形：
```
1. query page (GET v1/movie/:id)
2. mutation   (PATCH v1/movie/:id)
3. refresh page (GET v1/movie/:id)
```
<span></span>

按照步驟操作後，會發現在第三步重新整理過後，mutation 的結果並沒有成功地顯示在前端，儘管資料可能已經正確的存在DB當中了。

同樣的為了避免這種情況，可以透過在 Server 去確認 request 並針對想要 invalidate 的 request 去做設計。例如在資料被修改過的情形下，把 GET 回傳的資料從 Cache 中刪除，例如可以透過 Context 以及 Id 去做操作。

## Automatic Persisted Queries

看完這部分之後，大家可能會發現還有一個類似 Cache 的東西（至少我覺得）叫做 Automatic Persisted Query，簡稱為APQ，APQ的結構如下圖：

<img src="https://www.apollographql.com/docs/apollo-server/98cb0f1ed777fbd3fb0d0701e41d5dee/persistedQueries.optPath.png" class="mb-4">

> Photo Credit: Apollo Docs

APQ 的存在主要是為了處理 GraphQL query 大小太大導致的延遲問題，其會將一個 query 包成 hash 傳送給介於 Apollo Server 及 Client 中間的 cache layer，並透過確認是否有hash key 來決定是否要發送完整的 graphql query 給 server，因此無論如何再 server 端都會執行 query，而其 cache 的並不是回傳的資料本身，而是從 client 端傳到 server端的 query body。

## Summary

Apollo cahce 的設計博大而精深，也在最新的 ApolloClient 3.0 中引進了不少新的操作，實在無法用一篇文章去解釋全部的操作與細節。總而言之，ApolloClient 的 `InMemoryCahce` 是為前端的 graphql 而設計，ApolloServer 端的是針對發送給不同 Data Service 的 response 做 cache。


參考資料:
- [graphql-caching-the-elephant-in-the-room](https://www.apollographql.com/blog/graphql-caching-the-elephant-in-the-room-11a3df0c23ad/)
- [RestDataResource cache vs InMemoryCache](https://stackoverflow.com/questions/53358443/apollo-server-confusion-about-cache-datasource-options)
- [Apollo Docs](https://www.apollographql.com/docs/)
- [ApolloClinet cache confugration](https://www.apollographql.com/docs/react/caching/cache-configuration/)
- [ApolloServer cache confugration](https://www.apollographql.com/docs/apollo-server/performance/caching/)


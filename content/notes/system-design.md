---
title: System Design
date: "2020-07-26"
template: "note"
draft: false
slug: "system-design"
note: "System Design"
---
## Concept

## GFS
**each chunkserver can have multiple chunks, each chunk have lots of files**

Read:
client
master => namespace => find the chunkserver for client side
chunkserver: Provide data for client; communicate with the master thru heart signals

## MapReduce

System architecture
master + workers

MapReduce: 6 steps
```
input
split (for worker)
map, Map (key, value)
shuffle (sorted/hash across worker, group key)
reduce, Reduce (key, value)
output
```

Q. how to use MapReduce to count?

Q. how to use MapReduce to calculate inverted index?

Q. how to use MapReduce to group anagram?


### Bloomfilter
### Inverted index

-----
## Case Study

## Snake
1. Scenario
2. Nessecary:
3. Application:
4. Kilobat
5. Evolve
## Necessaries:
  - Network
    - latency
  - QPS
  - computation
    -
  - storage
    - memory
    - disk


## Rate limiter
### Token Bucket Algorithm
  Generate a token in a fixed rate, put the token in a bucket until it fill
  when there is a coming request, fetch the token

### Leaky Bucket Algorithm

-----

## Design typeAhead (autocomplete)

### Functionality:
  - autocomplete
  - lookup

### Necessaries:
  - Network
    - average latency < 100 ms
    - 95% < 50 ms

### Algorithm:
  Trie Tree: look up time: O(length(word) + k)
  - average length of word: m
  - number of words: n
  - space complexity: O(m * n * 26 * ptr)

  SQL:
  `SELECT NAME FROM table WHERE name like ${query}% ORDER BY NAME`

### Architecture
```
             Browser -> Local cache
                |
    Aggregator (Dispather) --> Cahce
     /                      \
Personal Ranking        Golbal Ranking
```

-----

## Design Twitter
### Write Tweet
Fanout + social graph
Push Timeline lists

TimeLine lists have all the following post

Pull Feed lists
Each person write to its own feedlists.
Followers then pull from their following feedlists

### Read Timeline
DAU
Only consider `active users`

Timline Builder

build timeline with UserID
integrate feeds to generate timeline

```
GET(userIDList)
GET(userIDList, k), # k: top k users, lazy load
GET(userIDList, k, endTime, beginTime)
```

## Principles

### [Pattern: Backends For Frontend](https://samnewman.io/patterns/architectural/bff/#)
   - When you don't have BFFs, then often the 'common' logic ends up being baked into the different clients themselves
   - [Other](http://www.ayqy.net/blog/backend-for-frontend-bff/)

### [Strangler fig problem](https://martinfowler.com/bliki/StranglerFigApplication.html)
  - How to maintain the old code base and at the mean time rewrite/refactor the code
  - An alternative route is to gradually create a new system around the edges of the old, letting it grow slowly over several years until the old system is strangled
  - When designing a new application you should design it in such a way as to make it easier for it to be strangled in the future. Let's face it, all we are doing is writing tomorrow's legacy software today

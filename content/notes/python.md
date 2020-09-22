---
title: Python
date: "2020-07-26"
template: "note"
draft: false
slug: "python"
note: "Python"
---
## Array
- create array in one line

```python
grid = [[0,0,0,0], [0,0,0,0]]

n = len(grid) # 2
m = len(grid[0]) # 4

explored = [0] * m
# [0, 0, 0, 0]

explored = [[0] * m ]
# [[0, 0, 0, 0]]

explored = [[0] * m for i in range(n)]
# [[0,0,0,0], [0,0,0,0]]

''' Don't do this'''
explored = [[0]] * m
# [[0], [0], [0], [0]] but all 0 reference to same object

''' Don't do this'''
explored = [[0] * m] * n
# [[0,0,0,0], [0,0,0,0]]
```
`[0] * m` returns a reference to a list of m zeros, but not a list. <br/>
`*n` then creates a list of n items that all reference to the same list.

### slicing

### reverse array
```python
# slicing, create new array
res arr[::-1]

# in-place
arr.reverse()

# reversed create a iterator, list then create a new array
result = list(reversed(arr))
```

## Collection

- `defaultdict`

```python
import collections

# Init a dict with zero as defulat value
dic = collection.defaultdict(0)

# Init a dict with []
dic = collection.defaultdict[]
```

```
Colloetcions.counter
```

## Heapq
- heapq is a min-heap (priority queue)
- Complexity
  - heapify: `O(logN)`
  - heappush: `O(logN)`
  - heappop: 	`O(logN)`
  - heappushpop: `O(logN)`

```python
import heapq

# Min Heap
min_heap = [1,7,3,5]
heapq.heapify(min_heap) # [1, 5, 3, 7]
heapq.heappush(max_heap,4) # [1 ,4, 3, 7, 5]

# Max Heap
max_heap = [i * -1 for i in l]
heapq.heapify(max_heap)

heapq.heappush(max_heap, 4*-1)
```

## Queue
- Complexity
  - popleft: `O(1)`
  - append: `O(1)`

```python
from collections import deque

queue = [1,2,3]
queue.popleft() #[2,3]
# 1
queue.append(4) #[2,3,4]
```

### `bisect`

```python
import bisect

data = [2, 3, 4, 7, 9]

bisect.bisect_left(data, 7)
# 3

bisect.bisect_right(data, 7)
# 4
```
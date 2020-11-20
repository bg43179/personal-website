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

### Travse
```python
# nums =
# [
#  [1,2,3],
#  [4,5,6],
#  [7,8,9]
# ]
n = len(nums)
m = len(nums[0])

# top-down left
for i in range(n):
  for j in range(m):
    print(nums[i][j])
# 1, 2, 3, 4, 5, 6, 7, 8, 9

# bottom-up right
for i in range(n-1, -1, -1):
  for j in range(m-1, -1, -1):
    print(nums[i][j])
# 9, 8, 7, 6, 5, 4, 3, 2, 1

# top-down-left top triangular matrix
for i in range(n):
  for j in range(i, n):
    print(nums[i][j])
# 1, 2, 3, 5, 6, 9

# top-down-left down triangular matrix
for i in range(n):
  for j in range(i+1):
    print(nums[i][j])
# 1, 4, 5, 7, 8, 9

# bottom-up-right top triangular matrix
for i in range(n-1, -1, -1):
  for j in range(i, n):
    print(nums[i][j])
# 9, 5, 6, 1, 2, 3

# bottom-up down triangular matrix
for i in range(n-1, -1, -1):
  for j in range(i):
    print(nums[i][j])
# 7, 8, 9, 4, 5, 1

for i in range(n):
    for j in range(m):
        rows[i] = max(rows[i], grid[i][j])
        col[j] = max(col[j], grid[i][j])

# rows, cols = list(map(max, grid)), list(map(max, zip(*grid)))
```


### slicing [reference](https://railsware.com/blog/python-for-machine-learning-indexing-and-slicing-for-lists-tuples-strings-and-other-sequential-types/)
- create shallow copy (new )
  - if element is primitive type, copy value
  - if element is object, copy reference

```python
nums = [10, 20, 30, 40, 50, 60, 70, 80, 90]

nums[2:7]
# [30, 40, 50, 60, 70]

nums[:5]
# [10, 20, 30, 40]

nums[-3:]
# [70, 80, 90]

nums[1:-1]
#  [20, 30, 40, 50, 60, 70, 80]

nums[-3:8]
#  [70, 80]

nums[-5:-1]
#  [50, 60, 70, 80]

nums[:-2]
# nums = [10, 20, 30, 40, 50, 60, 70]
```

#### Taking every nth-element of a list

```python
nums[::2]
# [10, 30, 50, 70, 90]

nums[1::2] # start from 1 and 2 step
# [20, 40, 60, 80]

nums[1:-3:2]
# [20, 40, 60]
```

#### Negative Step and Reversed List

```python
nums[::2]
# [10, 30, 50, 70, 90]

nums[1::2] # start from 1 and 2 step
# [20, 40, 60, 80]

nums[1:-3:2]
# [20, 40, 60]

### flip substring, at index 3
nums[:4] = nums[3::-1]
# [40, 30, 20, 10, 50, 60, 70, 80, 90]
```

### reverse array
```python
# slicing, create new array
res arr[::-1]

# in-place
arr.reverse()

# reversed create a iterator, list then create a new array
result = list(reversed(arr))
```

----

## Collections

- `defaultdict`

```python
import collections

# Init a dict with zero as defulat value
dic = collections.defaultdict(int)

# Init a dict with empty list []
dic = collections.defaultdict(list)
```

```
collections.counter
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

# bisect_left(a, x, lo=0, hi=len(a))
bisect.bisect_left(data, 7)
bisect.bisect_left(data, 7, 2) # start from index 2
# 3

# bisect_right(a, x, lo=0, hi=len(a))
bisect.bisect_right(data, 7)
bisect.bisect_right(data, 7, 2) # start from index 2
# 4

bisect.insort(5)

# []
```

## `zip`
```python
# in-node, out-node
# vertices = [["a","b"],["b","c"]]
# weight
# edges = [2.0, 3.0]
# [(['a', 'c'], 2.0), (['b', 'c'], 3.0)]
graph = defautldict(list)
for vertices, value in zip(vertices, edges):
  parent, child = vertices
  graph[f].append((t, value))
```

### Integer
```python
num = int("1" * 3, 2) # 7
```

## String
```python
number = 5
print('The binary equivalent of 5 is:', bin(number))
# The binary equivalent of 5 is: 0b101

print('The binary equivalent of 4 is:', bin(number))
# The binary equivalent of 5 is: 0b100

# get bitmap for combinations with length 4
for i in range(15):
  b = bin(i)[2:]
  b = b.zfill(4)
  print(b)

# 0010
# 0011
# 0100
# 0101
# 0110
# 0111
# 1000
# 1001
# 1010
# 1011
# 1100
# 1101
# 1110
```

### zfill (width)
```python
b = 'bx0b101'
b = b[2:].zfill(6)
# 000101
```
Returns original string leftpadded with zeros to a total of width characters; intended for numbers, `zfill()` retains any sign given (less one zero).

### mathc

```python
ceil
floor
```
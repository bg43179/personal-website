---
title: Python
date: "2020-11-19"
template: "note"
draft: false
slug: "leetcode"
note: "Leetcode"
---

### Qucik Sort [reference](https://github.com/michaelchen110/Learning-Notes/blob/master/leetcode.py)

- tricky part when encountering pivot value <br/>
  `nums[left] < pivot: left++` <br/>
  `nums[right] > pivot: right--`

1. Avoid infinite loop: <br/>
  If set <= pivot or >= pivot, then when one part is always <= pivot or >= pivot, divide and conquer will divide them into [nums] [] and cause inf loop

2. Balance: <br/>
  Can swap left pivot and right pivot to balance the split, as the result, when `[pivot,  pivot ... pivot]`, it will be divided into two subarray and will not cause inf loop

3. End status: <br/>
  each time it is done,
  `right | left`  or  `right | pivot | left`

```python
def qsort(self, nums, start, end):
    # remains one element or empty
    if start >= end:
        return
        # return nums[k], since partition finished

    pivot = nums[(start + end) // 2]

    left, right = start, end
    while left <= right:
        if nums[left] < pivot:
            left += 1
        elif nums[right] > pivot:
            right -= 1
        else:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1

    # qsort                           # ... right | left ... or ... right == left ...
    self.qsort(nums, start, left - 1) #  left - 1 |
    self.qsort(nums, left, end)       #           |  left

    # qselect kth idx
    if k < left: # k in left part
        return self.qselect(nums, start, left - 1, k)
    else: # k in right part
        return self.qselect(nums, left, end, k)
```

### Cylic sort
- complexity: O(N)
- in-place sort
```python
def cyclic_sort(nums):
```



### Binary Search
```python
def binary_search(nums, target):
  if not nums:
    return -1

  start, end = 0, len(nums) - 1

  while start + 1 < end:
    mid = (start + end) / 2

    # start | target | mid  | end
    # start | end (target)
    # corner case: start(target) | end
    if nums[mid] < target:
      start = mid
    else:
      end = mid

  if nums[start] == target:
    return start
  elif nums[end] == target:
    return end
  else:
    return -1
```

### Linked List

- slow and fast ptrs

```python
# prev = None

slow = fast = head

while fast and fast.next:
  # prev = slow -> to get he previous node of slow, then set peve.next = None
  slow = slow.next
  fast = fast.next.next

# 1 -> 2 -> 2 -> 1 -> null
#           ^          ^
#          slow       fast
# slow will stop at the next node of the middle one

# 1 -> 2 -> 3 -> 2 -> 1
#           ^         ^
#         slow      fast
# slow will stop at the middle one
```

- reverse Linked List

```python
# recursive
def reverse(head):
  # handle last node and empty list
  if not head and not head.next:
    return head

  new_head = reverse(head.next)
  # reverse
  head.next.next = head.next
  head.next = None

  return new_head

def reverse(head):
  prev = None
  curr = head
  while curr:
      nextTemp = curr.next
      curr.next = prev
      prev = curr
      curr = nextTemp

  return prev
```

### Dynamic Programming
計數型
最大最小
存在型

### 確定狀態
透過最後一步 將原問題轉成子問題
O(N) 都為最優
O(N) = O(N-1) + 最後一步

### 轉移方程
先看初始條件，與邊界條件
初始條件: 用轉移方程算不出來


序列性 前 i 個 最小 可行性


### LRU Cache
```python
class ListNode:
    def __init__(self, key=None, val=None, next=None):
        self.key = key
        self.val = val
        self.next = next

class LRUCache(object):
  def __init__(self, capacity):
      """
      :type capacity: int
      """
      self.pos = {}
      self.dummy = ListNode()
      self.tail = self.dummy
      self.capacity = capacity

  def append(self, node):
      self.pos[node.key] = self.tail
      self.tail.next = node
      self.tail = node

  def remove(self, key):
      prev = self.pos[key]
      del self.pos[key]

      if prev.next == self.tail:
          self.tail = prev
      else:
          prev.next = prev.next.next
          # move back pos of next node of removed node
          self.pos[prev.next.key] = prev

  def get(self, key):
      """
      :type key: int
      :rtype: int
      """
      if key not in self.pos:
          return -1

      value = self.pos[key].next.val
      self.remove(key)
      self.append(ListNode(key, value))

      return self.pos[key].next.val

  def put(self, key, value):
      """
      :type key: int
      :type value: int
      :rtype: void
      """
      if key in self.pos:
          self.remove(key)
          self.append(ListNode(key, value))
      else:
          self.append(ListNode(key, value))
          if len(self.pos) > self.capacity:
              self.remove(self.dummy.next.key)
```


# Sliding window
```python
''' Use right - left + 1 to calculate number for atMost K
[1, 2, 1, 2, 3]
1

12
 2

121
 21
  1

1212
 212
  12
   2

   23
    3
'''
def atMost(s, k):
  window = {}
  left = 0
  count = 0

  # index left and right are both in the window
  # element in window s[left:right+1]
  for right in range(len(s)):
      while len(window) == k and s[right] not in window and left <= right:
          window[s[left]] -= 1

          if window[s[left]] == 0:
              del window[s[left]]

          left += 1

      if s[right] not in window:
          window[s[right]] = 0

      window[s[right]] += 1

      count += right - left + 1
      # max_len = max(max_len, right - left + 1) find the longest window

  return count
```

### Prefix Sum
```python
[1,3,1,2,] target = 3 #Count 滿足 sum = k 的subarray, k = 3
```
首先 需要一個累積總和 (rolling sum) 去確認到當下index的所有數字總和<br/>
如果能在過去的累積總和當中找到 累積總和 - 目標值k的差值 (意即過去某一index的累積總和) <br/>
則我們知道 `過去某一段區間的累積總和 + 隨意一段總和為k的區間 = 在當下的累積總和`

```python
當我們在 index 3 的時候，累積總和為7
我們知道
# { 1: 1 }
# { 4: 1 }
# { 5: 1 }
# { 7: 1 }
```
累積總和 `7` - 目標值 `3` = 4

過去某一段區間的累積總和 4 (1,3 的累積總和)
隨意一段總和為k的區間 (此處為 1,2)
回推我們知道在 index 1 時，累積總和 `4` - 目標值 `3` = `1` 也存在，故在 index 3 之前有兩組滿足目標

我們稱過去一段的累積總和為 Prefix Sum</br>
```
Sum of subarray(i, j) = PrefixSum[j] - PrefixSum[i]
```
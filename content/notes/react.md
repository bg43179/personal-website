---
title: React
date: "2020-12-17"
template: "note"
draft: false
slug: "react"
note: "React"
---

## Life Cycle

### Mounting
- constructor (initialize state)
- render()
- `compoenentDidMount()`

### Update
- `shouldComponentUpdate()`
- render()
- `componentDidUpdate()`

### Unmounting
- `componentWillUnmount()`

Notes: Element will be unmounted if its key is remove

-------
Why do we need to use bind or arrow function to bind function in React with ES6?

A: ES introduce strict node, which cause this to be `undefined`
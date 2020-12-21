---
title: Javascript
date: "2020-12-17"
template: "note"
draft: false
slug: "javasript"
note: "Javasript"
---

## Events:

- capturing (trickling): from top(outermost) to button(innermost)
- bubbling: from button(innermost) to top(outermost)

```javascript
addEventListner(type, listener, useCapture)
```

> Bubbling by default, set `true` for useCapture to enable capturing

It's used to determine the exection order of events
```html
<div id="outer">
  <div id="middle">
    <a href="" id="inner" >click</a>
  </div>
</div>
```

```javascript
var outer = document.getElementById('outer');
var middle = document.getElementById('middle');
var inner = document.getElementById('inner');

outer.addEventListener('click',
  () => console.log('trigger outer div'), true);
middle.addEventListener('click',
  () => console.log('trigger middle div'), true);
inner.addEventListener('click',
  () => console.log('trigger inner button'), true);
```

Since the `useCapture` is `true`, it will trigger events from outermost to innermost on click the anchor tag.

```javascript
// output
trigger outer div
trigger middle div
```

### e.preventDefault
> Why was innermost not trigged here?

Becasue empty anchor tag will redirect to the current page by default,so it stopped the event chain. We can use `e.stopPreventDefault` here to get rid of the default behavior.

```javascript
inner.addEventListener('click',
  (e) => {
    e.preventDefault();
    console.log('trigger inner button');
  }, true));

//  and the output will be
trigger outer div
trigger middle div
trigger middle button
```

### e.stopPropgagtion:
> What if we want to click outer div but prevent midde div, inner button be triggered?

By using `stopPropgagtion`, we can stop the event chain.
```javascript
outer.addEventListener('click',
  (e) => {
    e.stopPropgagtion();
    console.log('trigger outer div');
  }, true));

//  and the output will be
trigger outer div
```


### Event Delegation

- Centralization (which makes it possible to monitor events)
- Tracking (from whom the event came)
- Filtering

Utilizing bubbling to delegate event. `target` is used here to identify where the event was triggered.
The benefit is we only have one event listener to track and it can potentailly increase the performance.

Note: `currentTarget` is where you bind the event listener

```javascript
const outer = document.getElementById('outer');
outer.addEventListener('click', e=>{
  switch(e.target.id){
    case 'middle':
      console.log('trigger middle div'), true);
      break;
    case 'inner':
      console.log('trigger inner div'), true);
      break;
    default:
      console.log('trigger outer div'), true);
      break;
  }
})
```

-  [Reference](https://segmentfault.com/a/1190000008227026)

### dispatchEvent

## call, apply, bind

## `this`

## import/export
```javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";

var promise = import("module-name");
```

- `defaultExport` Name that will refer to the default export from the module.
- `module-name`: The module to import from. This is often a relative or absolute path name to the .js file containing the module. Certain bundlers may permit or require the use of the extension; check your environment. Only single quoted and double quoted Strings are allowed.
- `name`: Name of the module object that will be used as a kind of namespace when referring to the imports.
- `exportN`: Name of the exports to be imported.
- `aliasN`: Names that will refer to the named imports.

(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/d1K":function(e,t,r){"use strict";r.d(t,"a",(function(){return te}));var a=r("q1tI"),n=r.n(a),c=r("Wbzz"),o=r("iSRb"),l=r.n(o),i=function(e){var t=e.author,r=e.isIndex;return n.a.createElement("div",{className:"ml-3 py-4"},n.a.createElement(c.Link,{to:"/"},n.a.createElement("img",{src:Object(c.withPrefix)(t.photo),className:l.a.author__photo,width:"100",height:"100",alt:t.name})),!0===r?n.a.createElement("h1",{className:l.a.author__title},n.a.createElement(c.Link,{className:l.a["author__title-link"],to:"/"},t.name)):n.a.createElement("h2",{className:l.a.author__title},n.a.createElement(c.Link,{className:l.a["author__title-link"],to:"/"},t.name)),n.a.createElement("span",{className:"text-muted",style:{fontSize:"16px"}},t.bio))},u=r("ma3e"),s=r("wx14"),f=r("zLVn"),d=r("TSYQ"),v=r.n(d),b=r("vUet"),m=n.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.size,c=e.toggle,o=e.vertical,l=e.className,i=e.as,u=void 0===i?"div":i,d=Object(f.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),m=Object(b.a)(r,"btn-group"),p=m;return o&&(p=m+"-vertical"),n.a.createElement(u,Object(s.a)({},d,{ref:t,className:v()(l,p,a&&m+"-"+a,c&&m+"-toggle")}))}));m.displayName="ButtonGroup",m.defaultProps={vertical:!1,toggle:!1,role:"group"};var p=m;var y=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];e.apply(this,a),t.apply(this,a)}}),null)};function h(e){return!e||"#"===e.trim()}var g=n.a.forwardRef((function(e,t){var r=e.as,a=void 0===r?"a":r,c=e.disabled,o=e.onKeyDown,l=Object(f.a)(e,["as","disabled","onKeyDown"]),i=function(e){var t=l.href,r=l.onClick;(c||h(t))&&e.preventDefault(),c?e.stopPropagation():r&&r(e)};return h(l.href)&&(l.role=l.role||"button",l.href=l.href||"#"),c&&(l.tabIndex=-1,l["aria-disabled"]=!0),n.a.createElement(a,Object(s.a)({ref:t},l,{onClick:i,onKeyDown:y((function(e){" "===e.key&&(e.preventDefault(),i(e))}),o)}))}));g.displayName="SafeAnchor";var j=g,O=n.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.variant,c=e.size,o=e.active,l=e.className,i=e.block,u=e.type,d=e.as,m=Object(f.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(b.a)(r,"btn"),y=v()(l,p,o&&"active",p+"-"+a,i&&p+"-block",c&&p+"-"+c);if(m.href)return n.a.createElement(j,Object(s.a)({},m,{as:d,ref:t,className:v()(y,m.disabled&&"disabled")}));t&&(m.ref=t),u?m.type=u:d||(m.type="button");var h=d||"button";return n.a.createElement(h,Object(s.a)({},m,{className:y}))}));O.displayName="Button",O.defaultProps={variant:"primary",active:!1,disabled:!1};var x=O,N=r("7Qib"),_=function(e){var t=e.contacts;return n.a.createElement(p,{className:"mb-2"},Object.keys(t).map((function(e){return t[e]?n.a.createElement(x,{className:"rounded-circle mr-2",variant:"outline-dark",href:Object(N.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},function(e){switch(e){case"github":return n.a.createElement(u.d,null);case"medium":return n.a.createElement(u.h,null);default:return n.a.createElement(u.g,null)}}(e)):null})))},w=r("Nrk+"),E=r.n(w),k=function(e){var t=e.copyright;return n.a.createElement("div",{className:E.a.copyright},t)},C=(r("K9S6"),r("JCAc")),P=n.a.createContext(null);P.displayName="NavbarContext";var I=P,K=r("Wzyw"),S=Function.prototype.bind.call(Function.prototype.call,[].slice);var A=r("YGJp"),R=r("lcWJ"),z=n.a.createContext(null);z.displayName="NavContext";var q=z,L=n.a.createContext(null),D=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},J=L,W=n.a.createContext(null),B=function(){},M=n.a.forwardRef((function(e,t){var r,c,o=e.as,l=void 0===o?"ul":o,i=e.onSelect,u=e.activeKey,d=e.role,v=e.onKeyDown,b=Object(f.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),m=Object(A.a)(),p=Object(a.useRef)(!1),y=Object(a.useContext)(J),h=Object(a.useContext)(W);h&&(d=d||"tablist",u=h.activeKey,r=h.getControlledId,c=h.getControllerId);var g=Object(a.useRef)(null),j=function(e){var t=g.current;if(!t)return null;var r,a=(r="[data-rb-event-key]:not(.disabled)",S(t.querySelectorAll(r))),n=t.querySelector(".active");if(!n)return null;var c=a.indexOf(n);if(-1===c)return null;var o=c+e;return o>=a.length&&(o=0),o<0&&(o=a.length-1),a[o]},O=function(e,t){null!=e&&(i&&i(e,t),y&&y(e,t))};Object(a.useEffect)((function(){if(g.current&&p.current){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}p.current=!1}));var x=Object(R.a)(t,g);return n.a.createElement(J.Provider,{value:O},n.a.createElement(q.Provider,{value:{role:d,activeKey:D(u),getControlledId:r||B,getControllerId:c||B}},n.a.createElement(l,Object(s.a)({},b,{onKeyDown:function(e){var t;switch(v&&v(e),e.key){case"ArrowLeft":case"ArrowUp":t=j(-1);break;case"ArrowRight":case"ArrowDown":t=j(1);break;default:return}t&&(e.preventDefault(),O(t.dataset.rbEventKey,e),p.current=!0,m())},ref:x,role:d}))))})),G=n.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,c=e.children,o=e.as,l=void 0===o?"div":o,i=Object(f.a)(e,["bsPrefix","className","children","as"]);return r=Object(b.a)(r,"nav-item"),n.a.createElement(l,Object(s.a)({},i,{ref:t,className:v()(a,r)}),c)}));G.displayName="NavItem";var T=G,V=r("ZCiN"),Y=(r("2W6z"),n.a.forwardRef((function(e,t){var r=e.active,c=e.className,o=e.eventKey,l=e.onSelect,i=e.onClick,u=e.as,d=Object(f.a)(e,["active","className","eventKey","onSelect","onClick","as"]),b=D(o,d.href),m=Object(a.useContext)(J),p=Object(a.useContext)(q),y=r;if(p){d.role||"tablist"!==p.role||(d.role="tab");var h=p.getControllerId(b),g=p.getControlledId(b);d["data-rb-event-key"]=b,d.id=h||d.id,d["aria-controls"]=g||d["aria-controls"],y=null==r&&null!=b?p.activeKey===b:r}"tab"===d.role&&(d.tabIndex=y?d.tabIndex:-1,d["aria-selected"]=y);var j=Object(V.a)((function(e){i&&i(e),null!=b&&(l&&l(b,e),m&&m(b,e))}));return n.a.createElement(u,Object(s.a)({},d,{ref:t,onClick:j,className:v()(c,y&&"active")}))})));Y.defaultProps={disabled:!1};var Q=Y,U={disabled:!1,as:j},F=n.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.disabled,c=e.className,o=e.href,l=e.eventKey,i=e.onSelect,u=e.as,d=Object(f.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return r=Object(b.a)(r,"nav-link"),n.a.createElement(Q,Object(s.a)({},d,{href:o,ref:t,eventKey:l,as:u,disabled:a,onSelect:i,className:v()(c,r,a&&"disabled")}))}));F.displayName="NavLink",F.defaultProps=U;var H=F,Z=n.a.forwardRef((function(e,t){var r,c,o,l=Object(C.a)(e,{activeKey:"onSelect"}),i=l.as,u=void 0===i?"div":i,d=l.bsPrefix,m=l.variant,p=l.fill,y=l.justify,h=l.navbar,g=l.className,j=l.children,O=l.activeKey,x=Object(f.a)(l,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),N=Object(b.a)(d,"nav"),_=!1,w=Object(a.useContext)(I),E=Object(a.useContext)(K.a);return w?(c=w.bsPrefix,_=null==h||h):E&&(o=E.cardHeaderBsPrefix),n.a.createElement(M,Object(s.a)({as:u,ref:t,activeKey:O,className:v()(g,(r={},r[N]=!_,r[c+"-nav"]=_,r[o+"-"+m]=!!o,r[N+"-"+m]=!!m,r[N+"-fill"]=p,r[N+"-justified"]=y,r))},x),j)}));Z.displayName="Nav",Z.defaultProps={justify:!1,fill:!1},Z.Item=T,Z.Link=H;var X=Z,$=function(e){var t=e.menu;return n.a.createElement(X,{className:"flex-column py-4 rounded"},t.map((function(e){return n.a.createElement(X.Link,{href:e.path,className:"pl-0"},n.a.createElement(x,{variant:"link",className:"text-secondary border-left"},e.label))})))},ee=r("gGy4"),te=function(e){var t=e.isIndex,r=Object(ee.c)(),a=r.author,c=r.copyright,o=r.menu;return n.a.createElement("div",{className:"sticky-top py-4 pl-2"},n.a.createElement("div",{className:"pl-4 py-4 border-right"},n.a.createElement(i,{author:a,isIndex:t}),n.a.createElement($,{menu:o}),n.a.createElement("div",{className:"ml-2 mt-4"},n.a.createElement(_,{contacts:a.contacts}),n.a.createElement(k,{copyright:c}))))}},"2W6z":function(e,t,r){"use strict";var a=function(){};e.exports=a},JCAc:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("wx14"),n=r("zLVn"),c=r("q1tI");r("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function i(e,t){return Object.keys(t).reduce((function(r,i){var u,s=r,f=s[o(i)],d=s[i],v=Object(n.a)(s,[o(i),i].map(l)),b=t[i],m=function(e,t,r){var a=Object(c.useRef)(void 0!==e),n=Object(c.useState)(t),o=n[0],l=n[1],i=void 0!==e,u=a.current;return a.current=i,!i&&u&&o!==t&&l(t),[i?e:o,Object(c.useCallback)((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];r&&r.apply(void 0,[e].concat(a)),l(e)}),[r])]}(d,f,e[b]),p=m[0],y=m[1];return Object(a.a)({},v,((u={})[i]=p,u[b]=y,u))}),e)}r("dI71"),r("94VI")},K9S6:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];function a(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];var n=null;return t.forEach((function(e){if(null==n){var t=e.apply(void 0,r);null!=t&&(n=t)}})),n}return(0,c.default)(a)};var a,n=r("pvIh"),c=(a=n)&&a.__esModule?a:{default:a};e.exports=t.default},"Nrk+":function(e,t,r){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,r){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("q1tI"),n=r.n(a),c=r("RBgx"),o=r.n(c),l=function(e){var t=e.children,r=Object(a.useRef)();return Object(a.useEffect)((function(){r.current.scrollIntoView()})),n.a.createElement("div",{ref:r},n.a.createElement("div",{className:"pt-4 px-4"},n.a.createElement("div",{className:o.a.page__body},t)))}},TSYQ:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)&&a.length){var o=n.apply(null,a);o&&e.push(o)}else if("object"===c)for(var l in a)r.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},Wzyw:function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a).a.createContext(null);n.displayName="CardContext",t.a=n},YGJp:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r("q1tI");function n(){return Object(a.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r("q1tI");var n=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function c(e){var t=n(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},iSRb:function(e,t,r){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},lcWJ:function(e,t,r){"use strict";var a=r("q1tI"),n=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var r=n(e),a=n(t);return function(e){r&&r(e),a&&a(e)}}(e,t)}),[e,t])}},pvIh:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,r,a,n,c,o){var l=n||"<<anonymous>>",i=o||a;if(null==r[a])return t?new Error("Required "+c+" `"+i+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,s=Array(u>6?u-6:0),f=6;f<u;f++)s[f-6]=arguments[f];return e.apply(void 0,[r,a,l,c,i].concat(s))}var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r},e.exports=t.default},vUet:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("wx14");var a=r("q1tI"),n=r.n(a),c=n.a.createContext({});c.Consumer,c.Provider;function o(e,t){var r=Object(a.useContext)(c);return e||r[t]||t}},wx14:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return a}))},zLVn:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=eae8c494124c449e48091d02ebb316c995cdade2-c3b2600fa1a30d139966.js.map
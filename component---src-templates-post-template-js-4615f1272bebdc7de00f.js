(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{J4bc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("k1TG"),o=n("8o2o"),s=n("TSYQ"),l=n.n(s),c=n("JCAc"),u=n("YdCC"),d=n("vUet"),m=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,s=e.as,c=Object(o.a)(e,["bsPrefix","className","as"]);n=Object(d.a)(n,"navbar-brand");var u=s||(c.href?"a":"span");return r.a.createElement(u,Object(i.a)({},c,{ref:t,className:l()(a,n)}))}));m.displayName="NavbarBrand";var p=m;function f(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var v=/([A-Z])/g;var E=/^ms-/;function g(e){return function(e){return e.replace(v,"-$1").toLowerCase()}(e).replace(E,"-ms-")}var x=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var b=function(e,t){var n="",a="";if("string"==typeof t)return e.style.getPropertyValue(g(t))||function(e,t){return f(e).getComputedStyle(e,t)}(e).getPropertyValue(g(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!x.test(e))}(r)?n+=g(r)+": "+i+";":a+=r+"("+i+") ":e.style.removeProperty(g(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n},h=n("ctsM"),N=!1,y=!1;try{var O={get passive(){return N=!0},get once(){return y=N=!0}};h.a&&(window.addEventListener("test",O,O),window.removeEventListener("test",O,!0))}catch(ke){}var _=function(e,t,n,a){if(a&&"boolean"!=typeof a&&!y){var r=a.once,i=a.capture,o=n;!y&&r&&(o=n.__once||function e(a){this.removeEventListener(t,e,i),n.call(this,a)},n.__once=o),e.addEventListener(t,o,N?a:i)}e.addEventListener(t,n,a)};var k=function(e,t,n,a){var r=a&&"boolean"!=typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var C=function(e,t,n,a){return _(e,t,n,a),function(){k(e,t,n,a)}};function j(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=C(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),i()}}function T(e,t,n,a){var r,i;null==n&&(r=b(e,"transitionDuration")||"",i=-1===r.indexOf("ms")?1e3:1,n=parseFloat(r)*i||0);var o=j(e,n,a),s=C(e,"transitionend",t);return function(){o(),s()}}var w=n("9Hrx"),S=n("i8i4"),P=n.n(S),L=!1,M=r.a.createContext(null),R=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r="exited",a.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:r},a.nextCallback=null,a}Object(w.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[P.a.findDOMNode(this),a],i=r[0],o=r[1],s=this.getTimeouts(),l=a?s.appear:s.enter;!e&&!n||L?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:P.a.findDOMNode(this);t&&!L?(this.props.onExit(a),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:P.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(o.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(M.Provider,{value:null},"function"==typeof n?n(e,a):r.a.cloneElement(r.a.Children.only(n),a))},t}(r.a.Component);function D(){}R.contextType=M,R.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:D,onEntering:D,onEntered:D,onExit:D,onExiting:D,onExited:D},R.UNMOUNTED="unmounted",R.EXITED="exited",R.ENTERING="entering",R.ENTERED="entered",R.EXITING="exiting";var I,U=R,Y=n("Qg85");var W={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function B(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],a=W[e];return n+parseInt(b(t,a[0]),10)+parseInt(b(t,a[1]),10)}var V=((I={}).exited="collapse",I.exiting="collapsing",I.entering="collapsing",I.entered="collapse show",I),X={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:B},Z=r.a.forwardRef((function(e,t){var n=e.onEnter,s=e.onEntering,c=e.onEntered,u=e.onExit,d=e.onExiting,m=e.className,p=e.children,f=e.dimension,v=void 0===f?"height":f,E=e.getDimensionValue,g=void 0===E?B:E,x=Object(o.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),b="function"==typeof v?v():v,h=Object(a.useMemo)((function(){return Object(Y.a)((function(e){e.style[b]="0"}),n)}),[b,n]),N=Object(a.useMemo)((function(){return Object(Y.a)((function(e){var t="scroll"+b[0].toUpperCase()+b.slice(1);e.style[b]=e[t]+"px"}),s)}),[b,s]),y=Object(a.useMemo)((function(){return Object(Y.a)((function(e){e.style[b]=null}),c)}),[b,c]),O=Object(a.useMemo)((function(){return Object(Y.a)((function(e){e.style[b]=g(b,e)+"px",e.offsetHeight}),u)}),[u,g,b]),_=Object(a.useMemo)((function(){return Object(Y.a)((function(e){e.style[b]=null}),d)}),[b,d]);return r.a.createElement(U,Object(i.a)({ref:t,addEndListener:T},x,{"aria-expanded":x.role?x.in:null,onEnter:h,onEntering:N,onEntered:y,onExit:O,onExiting:_}),(function(e,t){return r.a.cloneElement(p,Object(i.a)({},t,{className:l()(m,p.props.className,V[e],"width"===b&&"width")}))}))}));Z.defaultProps=X;var G=Z,J=n("qUpC"),q=r.a.forwardRef((function(e,t){var n=e.children,a=e.bsPrefix,s=Object(o.a)(e,["children","bsPrefix"]);return a=Object(d.a)(a,"navbar-collapse"),r.a.createElement(J.a.Consumer,null,(function(e){return r.a.createElement(G,Object(i.a)({in:!(!e||!e.expanded)},s),r.a.createElement("div",{ref:t,className:a},n))}))}));q.displayName="NavbarCollapse";var z=q,A=n("ZCiN"),H=r.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,c=e.children,u=e.label,m=e.as,p=void 0===m?"button":m,f=e.onClick,v=Object(o.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(d.a)(n,"navbar-toggler");var E=Object(a.useContext)(J.a)||{},g=E.onToggle,x=E.expanded,b=Object(A.a)((function(e){f&&f(e),g&&g()}));return"button"===p&&(v.type="button"),r.a.createElement(p,Object(i.a)({},v,{ref:t,onClick:b,"aria-label":u,className:l()(s,n,!x&&"collapsed")}),c||r.a.createElement("span",{className:n+"-icon"}))}));H.displayName="NavbarToggle",H.defaultProps={label:"Toggle navigation"};var Q=H,F=n("ILyh"),$=Object(u.a)("navbar-text",{Component:"span"}),K=r.a.forwardRef((function(e,t){var n=Object(c.a)(e,{expanded:"onToggle"}),s=n.bsPrefix,u=n.expand,m=n.variant,p=n.bg,f=n.fixed,v=n.sticky,E=n.className,g=n.children,x=n.as,b=void 0===x?"nav":x,h=n.expanded,N=n.onToggle,y=n.onSelect,O=n.collapseOnSelect,_=Object(o.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),k=Object(d.a)(s,"navbar"),C=Object(a.useCallback)((function(){y&&y.apply(void 0,arguments),O&&h&&N&&N(!1)}),[y,O,h,N]);void 0===_.role&&"nav"!==b&&(_.role="navigation");var j=k+"-expand";"string"==typeof u&&(j=j+"-"+u);var T=Object(a.useMemo)((function(){return{onToggle:function(){return N&&N(!h)},bsPrefix:k,expanded:!!h}}),[k,h,N]);return r.a.createElement(J.a.Provider,{value:T},r.a.createElement(F.a.Provider,{value:C},r.a.createElement(b,Object(i.a)({ref:t},_,{className:l()(E,k,u&&j,m&&k+"-"+m,p&&"bg-"+p,v&&"sticky-"+v,f&&"fixed-"+f)}),g)))}));K.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},K.displayName="Navbar",K.Brand=p,K.Toggle=Q,K.Collapse=z,K.Text=$;var ee=K,te=n("+YzT"),ne=n("Zttt"),ae=n("Wbzz"),re=n("3Z9Z"),ie=n("JI6e"),oe=n("ma3e"),se=n("Mvws"),le=n.n(se),ce=function(e){var t=e.body,n=e.title;return r.a.createElement(re.a,null,r.a.createElement(ie.a,{xl:2,lg:1,md:1,sm:1,xs:1}),r.a.createElement(ie.a,null,r.a.createElement("div",{className:"px-5 pt-5"},r.a.createElement(ae.Link,{className:"d-inline-block mt-4 btn btn-outline-dark rounded-pill",to:"/page"},r.a.createElement(oe.b,{className:"mx-2"}),r.a.createElement("span",null,"Back")),r.a.createElement("h1",{className:"d-flex my-4 justify-content-center"},n),r.a.createElement("div",{className:le.a.content__body,dangerouslySetInnerHTML:{__html:t}}))),r.a.createElement(ie.a,{xl:2,lg:1,md:1,sm:1,xs:1}))},ue=n("wd/R"),de=n.n(ue),me=n("myfg"),pe=n.n(me),fe=function(e){var t=e.date;return r.a.createElement("div",{className:pe.a.meta},r.a.createElement("p",{className:pe.a.meta__date},"Published ",de()(t).format("D MMM YYYY")))},ve=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.variant,s=e.pill,c=e.className,u=e.as,m=void 0===u?"span":u,p=Object(o.a)(e,["bsPrefix","variant","pill","className","as"]),f=Object(d.a)(n,"badge");return r.a.createElement(m,Object(i.a)({ref:t},p,{className:l()(c,f,s&&f+"-pill",a&&f+"-"+a)}))}));ve.displayName="Badge",ve.defaultProps={pill:!1};var Ee=ve,ge=n("WXWR"),xe=n.n(ge),be=function(e){var t=e.tags,n=e.tagSlugs;return r.a.createElement("div",{className:xe.a.tags},r.a.createElement("ul",{className:xe.a.tags__list},n&&n.map((function(e,n){return r.a.createElement("li",{className:xe.a["tags__list-item"],key:t[n]},r.a.createElement(ae.Link,{to:e},r.a.createElement("h3",{className:"mt-0"},r.a.createElement(Ee,{variant:"success"},t[n]))))}))))},he=n("gt/k"),Ne=n.n(he),ye=function(e){var t=e.post,n=t.html,a=t.fields.tagSlugs,i=t.frontmatter,o=i.tags,s=i.title,l=i.date;return r.a.createElement("div",{className:"mb-4"},r.a.createElement("div",{className:Ne.a.post},r.a.createElement("div",{className:Ne.a.post__content},r.a.createElement(ce,{body:n,title:s})),r.a.createElement("div",{className:Ne.a.post__footer},r.a.createElement(fe,{date:l}),o&&a&&r.a.createElement(be,{tags:o,tagSlugs:a}))))},Oe=n("SNpf"),_e=n("gGy4");t.default=function(e){var t=e.data,n=Object(_e.c)(),a=n.title,i=n.author,o=n.copyright,s=t.markdownRemark.frontmatter,l=s.title,c=s.description,u=s.socialImage,d=null!==c?c:"";return r.a.createElement(ne.a,{title:l+" - "+a,description:d,socialImage:u},r.a.createElement(ee,{bg:"light",variant:"light",expand:"md",className:"py-2 sticky-top"},r.a.createElement(ee.Brand,{href:"/",className:"mx-4 my-1"},r.a.createElement("img",{src:i.photo,width:"70",className:"rounded-circle",height:"70",style:{opacity:.9}})),r.a.createElement(ee.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(ee.Collapse,{id:"basic-navbar-nav"},r.a.createElement(te.a,{className:"mr-auto"},r.a.createElement(te.a.Link,{href:"/page",className:"mx-2"},"Articles"),r.a.createElement(te.a.Link,{href:"/about",className:"mx-2"},"About"),r.a.createElement(te.a.Link,{href:"/notes",className:"mx-2"},"Notes")))),r.a.createElement(ye,{post:t.markdownRemark}),r.a.createElement("div",{className:"d-flex mx-4 my-4 justify-content-center"},r.a.createElement(Oe.a,{copyright:o,isContent:!0})))}},Mvws:function(e,t,n){e.exports={content:"Content-module--content--3p512",content__title:"Content-module--content__title--2BDW9",content__body:"Content-module--content__body--2TrQ-"}},WXWR:function(e,t,n){e.exports={tags:"Tags-module--tags--1L_ct",tags__list:"Tags-module--tags__list--91FqN","tags__list-item":"Tags-module--tags__list-item--1M30P","tags__list-item-link":"Tags-module--tags__list-item-link--3SL_8"}},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("k1TG"),r=n("8o2o"),i=n("TSYQ"),o=n.n(i),s=/-(.)/g;var l=n("q1tI"),c=n.n(l),u=n("vUet"),d=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function m(e,t){var n=void 0===t?{}:t,i=n.displayName,s=void 0===i?d(e):i,l=n.Component,m=n.defaultProps,p=c.a.forwardRef((function(t,n){var i=t.className,s=t.bsPrefix,d=t.as,m=void 0===d?l||"div":d,p=Object(r.a)(t,["className","bsPrefix","as"]),f=Object(u.a)(s,e);return c.a.createElement(m,Object(a.a)({ref:n,className:o()(i,f)},p))}));return p.defaultProps=m,p.displayName=s,p}},ctsM:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},"gt/k":function(e,t,n){e.exports={post__footer:"Post-module--post__footer--3WzWU",post__comments:"Post-module--post__comments--25y6I","post__home-button":"Post-module--post__home-button--16Kl0"}},myfg:function(e,t,n){e.exports={meta__date:"Meta-module--meta__date--29eD7"}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-4615f1272bebdc7de00f.js.map
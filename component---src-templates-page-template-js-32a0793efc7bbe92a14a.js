(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),c=a("iSRb"),s=a.n(c),o=function(e){var t=e.author,a=e.isIndex;return n.a.createElement("div",{className:"mx-3 py-4"},n.a.createElement(l.Link,{to:"/"},n.a.createElement("img",{src:Object(l.withPrefix)(t.photo),className:s.a.author__photo,width:"100",height:"100",style:{opacity:.9},alt:t.name})),!0===a?n.a.createElement("h1",{className:s.a.author__title},n.a.createElement(l.Link,{className:s.a["author__title-link"],to:"/"},t.name)):n.a.createElement("h2",{className:s.a.author__title},n.a.createElement(l.Link,{className:s.a["author__title-link"],to:"/"},t.name)),n.a.createElement("div",{className:"text-muted d-flex flex-column",style:{fontSize:"16px"}},n.a.createElement("span",null,"SDE @ Appfolio"),n.a.createElement("span",null,"MS CS '19 @ UW-Madison"),n.a.createElement("span",{className:"mt-2"},"Enthusiastic about creating tools to make life better.")))},i=a("ma3e"),u=a("k1TG"),m=a("8o2o"),d=a("TSYQ"),p=a.n(d),f=a("vUet"),b=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.size,l=e.toggle,c=e.vertical,s=e.className,o=e.as,i=void 0===o?"div":o,d=Object(m.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(f.a)(a,"btn-group"),h=b;return c&&(h=b+"-vertical"),n.a.createElement(i,Object(u.a)({},d,{ref:t,className:p()(s,h,r&&b+"-"+r,l&&b+"-toggle")}))}));b.displayName="ButtonGroup",b.defaultProps={vertical:!1,toggle:!1,role:"group"};var h=b,v=a("dbZe"),g=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,l=e.size,c=e.active,s=e.className,o=e.block,i=e.type,d=e.as,b=Object(m.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(f.a)(a,"btn"),g=p()(s,h,c&&"active",h+"-"+r,o&&h+"-block",l&&h+"-"+l);if(b.href)return n.a.createElement(v.a,Object(u.a)({},b,{as:d,ref:t,className:p()(g,b.disabled&&"disabled")}));t&&(b.ref=t),i?b.type=i:d||(b.type="button");var k=d||"button";return n.a.createElement(k,Object(u.a)({},b,{className:g}))}));g.displayName="Button",g.defaultProps={variant:"primary",active:!1,disabled:!1};var k=g,E=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"vkontakte":a="https://vk.com/"+t;break;case"telegram":a="https://t.me/"+t;break;case"email":a="mailto:"+t;break;case"linkedin":a="https://www.linkedin.com/in/"+t;break;case"instagram":a="https://www.instagram.com/"+t;break;case"line":a="line://ti/p/"+t;break;case"facebook":a="https://www.facebook.com/"+t;break;case"gitlab":a="https://www.gitlab.com/"+t;break;case"weibo":a="https://www.weibo.com/"+t;break;case"codepen":a="https://www.codepen.io/"+t;break;case"youtube":a="https://www.youtube.com/channel/"+t;break;case"soundcloud":a="https://soundcloud.com/"+t;break;case"medium":a="https://medium.com/"+t;break;default:a=t}return a},w=function(e){var t=e.contacts;return n.a.createElement(h,{className:"mb-2"},Object.keys(t).map((function(e){return t[e]?n.a.createElement(k,{key:e,className:"rounded-circle mr-2",variant:"outline-dark",href:E(e,t[e]),rel:"noopener noreferrer",target:"_blank"},function(e){switch(e){case"github":return n.a.createElement(i.e,null);case"medium":return n.a.createElement(i.i,null);case"email":return n.a.createElement(i.d,null);default:return n.a.createElement(i.h,null)}}(e)):null})))},_=a("SNpf"),x=a("+YzT"),N=function(e){var t=e.menu;return n.a.createElement(x.a,{className:"flex-column py-4 rounded"},t.map((function(e,t){return n.a.createElement(x.a.Link,{key:t,href:e.path,className:"pl-0"},n.a.createElement(k,{variant:"link",className:"text-secondary border-left"},e.label))})))},y=a("gGy4"),j=function(e){var t=e.isIndex,a=Object(y.c)(),r=a.author,l=a.copyright,c=a.menu;return n.a.createElement("div",{className:"sticky-top py-4 px-2 d-flex"},n.a.createElement("div",{className:"px-4 py-4 border-right ml-auto"},n.a.createElement(o,{author:r,isIndex:t}),n.a.createElement(N,{menu:c}),n.a.createElement("div",{className:"mx-2 mt-4"},n.a.createElement(w,{contacts:r.contacts}),n.a.createElement(_.a,{copyright:l,isContent:!1}))))}},"3Z9Z":function(e,t,a){"use strict";var r=a("k1TG"),n=a("8o2o"),l=a("TSYQ"),c=a.n(l),s=a("q1tI"),o=a.n(s),i=a("vUet"),u=["xl","lg","md","sm","xs"],m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,s=e.noGutters,m=e.as,d=void 0===m?"div":m,p=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(i.a)(a,"row"),b=f+"-cols",h=[];return u.forEach((function(e){var t,a=p[e];delete p[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&h.push(""+b+r+"-"+t)})),o.a.createElement(d,Object(r.a)({ref:t},p,{className:c.a.apply(void 0,[l,f,s&&"no-gutters"].concat(h))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},"8vKr":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("RXmK"),c=a("UgVs");t.default=function(e){var t=e.data,a=t.markdownRemark.html,r=t.markdownRemark.frontmatter.title;return n.a.createElement(c.a,null,n.a.createElement(l.a,{title:r},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))}},JI6e:function(e,t,a){"use strict";var r=a("k1TG"),n=a("8o2o"),l=a("TSYQ"),c=a.n(l),s=a("q1tI"),o=a.n(s),i=a("vUet"),u=["xl","lg","md","sm","xs"],m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,s=e.as,m=void 0===s?"div":s,d=Object(n.a)(e,["bsPrefix","className","as"]),p=Object(i.a)(a,"col"),f=[],b=[];return u.forEach((function(e){var t,a,r,n=d[e];if(delete d[e],"object"==typeof n&&null!=n){var l=n.span;t=void 0===l||l,a=n.offset,r=n.order}else t=n;var c="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+p+c:""+p+c+"-"+t),null!=r&&b.push("order"+c+"-"+r),null!=a&&b.push("offset"+c+"-"+a)})),f.length||f.push(p),o.a.createElement(m,Object(r.a)({},d,{ref:t,className:c.a.apply(void 0,[l].concat(f,b))}))}));m.displayName="Col",t.a=m},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("q1tI"),n=a.n(r),l=a("RBgx"),c=a.n(l),s=function(e){var t=e.children,a=Object(r.useRef)();return Object(r.useEffect)((function(){a.current.scrollIntoView()})),n.a.createElement("div",{ref:a},n.a.createElement("div",{className:"pt-4 px-4"},n.a.createElement("div",{className:c.a.page__body},t)))}},UgVs:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("3Z9Z"),c=a("JI6e"),s=a("Zttt"),o=a("RXmK"),i=a("/d1K");t.a=function(e){var t=e.title,a=e.children;return n.a.createElement(s.a,{title:t},n.a.createElement(l.a,null,n.a.createElement(c.a,{xl:4,lg:4,md:3,sm:12,xs:12},n.a.createElement(i.a,null)),n.a.createElement(c.a,{xl:6,lg:6,md:8},n.a.createElement(o.a,null,a)),n.a.createElement(c.a,{xl:2,lg:2,md:1})))}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}}}]);
//# sourceMappingURL=component---src-templates-page-template-js-32a0793efc7bbe92a14a.js.map
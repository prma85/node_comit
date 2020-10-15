(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{327:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(9),c=(r(0),r(467)),a={},i={id:"exercises/node/ex_8",title:"ex_8",description:"Exercise 8",source:"@site/../docs/exercises/node/ex_8.md",permalink:"/node_comit/docs/exercises/node/ex_8",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/node/ex_8.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_7",permalink:"/node_comit/docs/exercises/node/ex_7"},next:{title:"ex_9",permalink:"/node_comit/docs/exercises/node/ex_9"}},l=[{value:"index.js",id:"indexjs",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"exercise-8"},"Exercise 8"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_8\n  |-- index.js\n")),Object(c.b)("h2",{id:"indexjs"},"index.js"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create an HTTP web server using port 3001"),Object(c.b)("li",{parentName:"ul"},"Execute an HTTP request to the server using the browser"),Object(c.b)("li",{parentName:"ul"},"The server will send the following text as response:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Congrats you're using your first Node.js Web Server\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"When the server starts it needs to show the following message:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"This HTTP server is running on port %port%\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"In case there's an error show the following message:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"Unable to start the server on port %port%\n")))}u.isMDXComponent=!0},467:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||c;return r?o.a.createElement(f,i({ref:t},s,{components:r})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
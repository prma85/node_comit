(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{454:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),l=(r(0),r(467)),c={},o={id:"exercises/browser/ex_27",title:"ex_27",description:"Exercise 27",source:"@site/../docs/exercises/browser/ex_27.md",permalink:"/node_comit/docs/exercises/browser/ex_27",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_27.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_26",permalink:"/node_comit/docs/exercises/browser/ex_26"},next:{title:"ex_28",permalink:"/node_comit/docs/exercises/browser/ex_28"}},i=[{value:"index.html",id:"indexhtml",children:[]}],b={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"exercise-27"},"Exercise 27"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_27\n  |-- index.html\n")),Object(l.b)("h2",{id:"indexhtml"},"index.html"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(l.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(l.b)("li",{parentName:"ul"},"Add the following html code")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>It\'s all JavaScript Baby!!</title>\n  </head>\n  <body></body>\n</html>\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Select the body element"),Object(l.b)("li",{parentName:"ul"},"Define a numbers array with numbers between 1 and 100"),Object(l.b)("li",{parentName:"ul"},"Create a ul element"),Object(l.b)("li",{parentName:"ul"},"Iterate the numbers array and execute the following task for each item:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Create a li element"),Object(l.b)("li",{parentName:"ul"},"Set the following text: Item %number% as li element content"),Object(l.b)("li",{parentName:"ul"},"Add ",Object(l.b)("inlineCode",{parentName:"li"},"color: #ddd")," as li element style property if it's even number"),Object(l.b)("li",{parentName:"ul"},"Else add ",Object(l.b)("inlineCode",{parentName:"li"},"color: #eee")," as li element style property"),Object(l.b)("li",{parentName:"ul"},"Insert each list item into the ul element"))),Object(l.b)("li",{parentName:"ul"},"Insert the ul element into the body element")))}u.isMDXComponent=!0},467:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(r),s=n,d=p["".concat(c,".").concat(s)]||p[s]||m[s]||l;return r?a.a.createElement(d,o({ref:t},b,{components:r})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<l;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);
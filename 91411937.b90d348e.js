(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{328:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),i=(n(0),n(467)),a={},c={id:"exercises/js/ex_161",title:"ex_161",description:"Exercise 161",source:"@site/../docs/exercises/js/ex_161.md",permalink:"/node_comit/docs/exercises/js/ex_161",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/js/ex_161.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_160",permalink:"/node_comit/docs/exercises/js/ex_160"},next:{title:"ex_162",permalink:"/node_comit/docs/exercises/js/ex_162"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"exercise-161"},"Exercise 161"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a new index161.js"),Object(i.b)("li",{parentName:"ul"},"Define a user variable and assign the following object:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "profile_sidebar_fill_color": "DDEEF6",\n  "profile_sidebar_border_color": "C0DEED",\n  "profile_background_tile": false,\n  "name": "Sean Cummings",\n  "profile_image_url": "http://a0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",\n  "created_at": "Mon Apr 26 06:01:55 +0000 2010",\n  "location": "LA, CA",\n  "follow_request_sent": null,\n  "profile_link_color": "0084B4",\n  "is_translator": false,\n  "id_str": "137238150",\n  "default_profile": true,\n  "contributors_enabled": false,\n  "favourites_count": 0,\n  "url": null,\n  "profile_image_url_https": "https://si0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",\n  "utc_offset": -28800,\n  "id": 137238150,\n  "profile_use_background_image": true,\n  "listed_count": 2,\n  "profile_text_color": "333333",\n  "lang": "en",\n  "followers_count": 70,\n  "protected": false,\n  "notifications": null,\n  "profile_background_image_url_https": "https://si0.twimg.com/images/themes/theme1/bg.png",\n  "profile_background_color": "C0DEED",\n  "verified": false,\n  "geo_enabled": true,\n  "time_zone": "Pacific Time (US & Canada)",\n  "description": "Born 330 Live 310",\n  "default_profile_image": false,\n  "profile_background_image_url": "http://a0.twimg.com/images/themes/theme1/bg.png",\n  "statuses_count": 579,\n  "friends_count": 110,\n  "following": null,\n  "show_all_inline_media": false,\n  "screen_name": "sean_cummings"\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use object keys method to get the properties names"),Object(i.b)("li",{parentName:"ul"},"Iterate over the properties array"),Object(i.b)("li",{parentName:"ul"},"Show the user properties names as output"),Object(i.b)("li",{parentName:"ul"},"This user is from the Twitter real API")))}u.isMDXComponent=!0},467:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||i;return n?o.a.createElement(d,c({ref:t},s,{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
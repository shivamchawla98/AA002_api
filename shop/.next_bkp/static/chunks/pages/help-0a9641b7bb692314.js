(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1233],{21486:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/help",function(){return e(82678)}])},66859:function(n,t,e){"use strict";e.d(t,{V:function(){return o}});var r=e(24246);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var o=function(n){return(0,r.jsx)("svg",function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){i(n,t,e[t])}))}return n}({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n,{children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 12H4"})}))}},90393:function(n,t,e){"use strict";e.d(t,{p:function(){return o}});var r=e(24246);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var o=function(n){return(0,r.jsx)("svg",function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){i(n,t,e[t])}))}return n}({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n,{children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}))}},10905:function(n,t,e){"use strict";var r=e(24246),i=e(60042),o=e.n(i),u=e(86677),l=e(91131),a=e(40972),c=e(6942),s=e(89730),d=e(65218),f=e(90269),v=e(48113),p=e(27378);function b(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function y(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,o=[],u=!0,l=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(a){l=!0,i=a}finally{try{u||null==e.return||e.return()}finally{if(l)throw i}}return o}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return b(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(0,d.default)((function(){return e.e(9871).then(e.bind(e,59871))}),{loadableGenerated:{webpack:function(){return[59871]}},ssr:!1}),(0,d.default)((function(){return e.e(100).then(e.bind(e,100))}),{loadableGenerated:{webpack:function(){return[100]}},ssr:!1}),(0,d.default)((function(){return e.e(9408).then(e.bind(e,69408))}),{loadableGenerated:{webpack:function(){return[69408]}},ssr:!1});t.Z=function(n){n.layout,(0,u.useRouter)(),(0,s.$G)("common").t;var t=y((0,l.KO)(a.y),2),e=(t[0],t[1]),i=(y((0,l.KO)(c.a),1)[0],y((0,l.KO)(f.O),1)[0],(0,v.M)());return(0,p.useEffect)((function(){i||e(!1)}),[i,e]),(0,r.jsx)("header",{className:o()("site-header-with-search h-14 md:h-16 lg:h-22")})}},45677:function(n,t,e){"use strict";e.d(t,{G:function(){return v}});var r=e(24246),i=e(4383),o=e(86944),u=e(86677),l=function(){var n,t,e=(0,o.c)({limit:i.Fi}),r=(0,u.useRouter)();if(/^\/$|^\/\?(.*)/.test(null===r||void 0===r?void 0:r.asPath)){var l,a,c,s,d,f=null!==(s=null===e||void 0===e||null===(l=e.types)||void 0===l?void 0:l.find((function(n){var t;return null===n||void 0===n||null===(t=n.settings)||void 0===t?void 0:t.isHome})))&&void 0!==s?s:null===e||void 0===e||null===(a=e.types)||void 0===a?void 0:a[0];return{layout:null!==(d=null===f||void 0===f||null===(c=f.settings)||void 0===c?void 0:c.layoutType)&&void 0!==d?d:"default",page:f}}var v,p=null===e||void 0===e||null===(n=e.types)||void 0===n?void 0:n.find((function(n){return r.asPath.includes(n.slug)}));return{layout:null!==(v=null===p||void 0===p||null===(t=p.settings)||void 0===t?void 0:t.layoutType)&&void 0!==v?v:"default",page:p}},a=e(29697),c=e(10905),s=e(56867),d=e(55315);function f(n){var t=n.children,e=l().layout;return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col bg-gray-100 transition-colors duration-150",children:[["minimal","compact"].includes(e)?(0,r.jsx)(c.Z,{layout:e}):(0,r.jsx)(a.Z,{layout:e}),t,["compact"].includes(e)&&(0,r.jsx)(d.Z,{}),(0,r.jsx)(s.Z,{})]})}var v=function(n){return(0,r.jsx)(f,{children:n})}},25815:function(n,t,e){"use strict";var r=e(24246),i=e(2962),o=e(27061);function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){u(n,t,e[t])}))}return n}function a(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}t.Z=function(n){var t=n.title,e=n.description,u=n.images,c=n.url,s=a(n,["title","description","images","url"]);return(0,r.jsx)(i.PB,l({title:t,openGraph:l({},Boolean(c)&&{url:"".concat(o.env.NEXT_PUBLIC_SITE_URL,"/").concat(c)},{title:t,description:e},Boolean(u)&&{images:null===u||void 0===u?void 0:u.map((function(n){var t;return{url:null===n||void 0===n||null===(t=n.image)||void 0===t?void 0:t.original,alt:null===n||void 0===n?void 0:n.title}}))})},s))}},4383:function(n,t,e){"use strict";e.d(t,{a9:function(){return r},Fi:function(){return i},LX:function(){return o},Vc:function(){return u}});var r=30,i=15,o=30,u=30},86944:function(n,t,e){"use strict";e.d(t,{o:function(){return p},c:function(){return v}});var r=e(82544),i=e(2779);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){o(n,t,e[t])}))}return n}function l(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function a(){var n=l(["\n    query Groups($text: String, $orderBy: [QueryTypesOrderByOrderByClause!]) {\n  types(text: $text, orderBy: $orderBy) {\n    id\n    name\n    slug\n    icon\n    banners {\n      id\n      title\n      image {\n        id\n        original\n        thumbnail\n      }\n    }\n    settings {\n      isHome\n      layoutType\n      productCard\n    }\n  }\n}\n    "]);return a=function(){return n},n}function c(){var n=l(["\n    query Group($id: ID, $slug: String) {\n  type(id: $id, slug: $slug) {\n    id\n    slug\n    banners {\n      id\n      title\n      description\n      image {\n        id\n        original\n        thumbnail\n      }\n    }\n    promotional_sliders {\n      id\n      thumbnail\n      original\n    }\n  }\n}\n    "]);return c=function(){return n},n}var s={},d=(0,r.Ps)(a());var f=(0,r.Ps)(c());function v(n){var t,e=function(n){var t=u({},s,n);return i.a(d,t)}(),r=e.data,o=e.loading,l=e.error;return{types:null!==(t=null===r||void 0===r?void 0:r.types)&&void 0!==t?t:[],isLoading:o,error:l}}function p(n){var t=function(n){var t=u({},s,n);return i.a(f,t)}({variables:{slug:n}}),e=t.data,r=t.loading,o=t.error;return{type:null===e||void 0===e?void 0:e.type,isLoading:r,error:o}}},82678:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return m},default:function(){return h}});var r=e(24246),i=e(27378),o=e(60042),u=e.n(o),l=e(82128),a=e(95421),c=e(66859),s=e(90393);var d=e(89730),f=function(n){var t=n.i,e=n.expanded,i=n.setExpanded,o=n.title,f=n.content,v=n.translatorNS,p=t===e,b=p?"shadow-sm":"",y=(0,d.$G)(v).t;return(0,r.jsxs)("div",{className:u()("border border-solid border-border-200 bg-light rounded mb-2.5 transition-all hover:border-border-base",b),children:[(0,r.jsxs)(l.E.header,{initial:!1,onClick:function(){return i(!p&&t)},className:"py-4 px-5 rounded cursor-pointer flex items-center justify-between transition-colors",children:[(0,r.jsx)("h2",{className:"text-sm md:text-base font-semibold leading-relaxed text-heading",children:y(o)}),p?(0,r.jsx)(c.V,{className:"flex-shrink-0 stroke-2",width:18,height:18}):(0,r.jsx)(s.p,{className:"flex-shrink-0 stroke-2",width:20,height:20})]}),(0,r.jsx)(a.M,{initial:!1,children:p&&(0,r.jsx)(l.E.div,{initial:"from",animate:"to",exit:"from",variants:{from:{opacity:0,height:0,transition:{ease:[.04,.62,.23,.98]}},to:{opacity:1,height:"auto",transition:{ease:[.04,.62,.23,.98]}}},children:(0,r.jsx)("div",{className:"md:pt-1 pb-4 px-5 leading-7 text-sm md:text-base md:leading-loose text-body-dark",children:y(f)})},"content")})]})},v=function(n){var t=n.items,e=n.translatorNS,o=(0,i.useState)(0),u=o[0],l=o[1];return(0,r.jsx)(r.Fragment,{children:t.map((function(n,t){var i=n.title,o=n.content;return(0,r.jsx)(f,{i:t,title:i,content:o,expanded:u,setExpanded:l,translatorNS:e},i)}))})},p=[{title:"faq-one-title",content:"faq-one-content"},{title:"faq-two-title",content:"faq-two-content"},{title:"faq-three-title",content:"faq-three-content"},{title:"faq-four-title",content:"faq-four-content"}],b=e(45677),y=e(25815),m=!0;function h(){var n=(0,d.$G)().t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.Z,{title:"Help",url:"help"}),(0,r.jsxs)("section",{className:"py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20",children:[(0,r.jsx)("header",{className:"mb-8 text-center",children:(0,r.jsx)("h1",{className:"text-xl font-bold md:text-2xl xl:text-3xl",children:n("common:nav-menu-faq")})}),(0,r.jsx)("div",{className:"mx-auto w-full max-w-screen-lg",children:(0,r.jsx)(v,{items:p,translatorNS:"faq"})})]})]})}h.getLayout=b.G}},function(n){n.O(0,[2375,9774,2888,179],(function(){return t=21486,n(n.s=t);var t}));var t=n.O();_N_E=t}]);
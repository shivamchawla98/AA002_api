(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8554],{35854:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout/guest",function(){return e(97777)}])},10905:function(n,t,e){"use strict";var r=e(24246),i=e(60042),u=e.n(i),o=e(86677),l=e(91131),a=e(40972),c=e(6942),s=e(89730),d=e(65218),f=e(90269),p=e(48113),y=e(27378);function v(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function b(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,u=[],o=!0,l=!1;try{for(e=e.call(n);!(o=(r=e.next()).done)&&(u.push(r.value),!t||u.length!==t);o=!0);}catch(a){l=!0,i=a}finally{try{o||null==e.return||e.return()}finally{if(l)throw i}}return u}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return v(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return v(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(0,d.default)((function(){return e.e(9871).then(e.bind(e,59871))}),{loadableGenerated:{webpack:function(){return[59871]}},ssr:!1}),(0,d.default)((function(){return e.e(100).then(e.bind(e,100))}),{loadableGenerated:{webpack:function(){return[100]}},ssr:!1}),(0,d.default)((function(){return e.e(9408).then(e.bind(e,69408))}),{loadableGenerated:{webpack:function(){return[69408]}},ssr:!1});t.Z=function(n){n.layout,(0,o.useRouter)(),(0,s.$G)("common").t;var t=b((0,l.KO)(a.y),2),e=(t[0],t[1]),i=(b((0,l.KO)(c.a),1)[0],b((0,l.KO)(f.O),1)[0],(0,p.M)());return(0,y.useEffect)((function(){i||e(!1)}),[i,e]),(0,r.jsx)("header",{className:u()("site-header-with-search h-14 md:h-16 lg:h-22")})}},45677:function(n,t,e){"use strict";e.d(t,{G:function(){return p}});var r=e(24246),i=e(4383),u=e(86944),o=e(86677),l=function(){var n,t,e=(0,u.c)({limit:i.Fi}),r=(0,o.useRouter)();if(/^\/$|^\/\?(.*)/.test(null===r||void 0===r?void 0:r.asPath)){var l,a,c,s,d,f=null!==(s=null===e||void 0===e||null===(l=e.types)||void 0===l?void 0:l.find((function(n){var t;return null===n||void 0===n||null===(t=n.settings)||void 0===t?void 0:t.isHome})))&&void 0!==s?s:null===e||void 0===e||null===(a=e.types)||void 0===a?void 0:a[0];return{layout:null!==(d=null===f||void 0===f||null===(c=f.settings)||void 0===c?void 0:c.layoutType)&&void 0!==d?d:"default",page:f}}var p,y=null===e||void 0===e||null===(n=e.types)||void 0===n?void 0:n.find((function(n){return r.asPath.includes(n.slug)}));return{layout:null!==(p=null===y||void 0===y||null===(t=y.settings)||void 0===t?void 0:t.layoutType)&&void 0!==p?p:"default",page:y}},a=e(29697),c=e(10905),s=e(56867),d=e(55315);function f(n){var t=n.children,e=l().layout;return(0,r.jsxs)("div",{className:"flex min-h-screen flex-col bg-gray-100 transition-colors duration-150",children:[["minimal","compact"].includes(e)?(0,r.jsx)(c.Z,{layout:e}):(0,r.jsx)(a.Z,{layout:e}),t,["compact"].includes(e)&&(0,r.jsx)(d.Z,{}),(0,r.jsx)(s.Z,{})]})}var p=function(n){return(0,r.jsx)(f,{children:n})}},25815:function(n,t,e){"use strict";var r=e(24246),i=e(2962),u=e(27061);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){o(n,t,e[t])}))}return n}function a(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},u=Object.keys(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}t.Z=function(n){var t=n.title,e=n.description,o=n.images,c=n.url,s=a(n,["title","description","images","url"]);return(0,r.jsx)(i.PB,l({title:t,openGraph:l({},Boolean(c)&&{url:"".concat(u.env.NEXT_PUBLIC_SITE_URL,"/").concat(c)},{title:t,description:e},Boolean(o)&&{images:null===o||void 0===o?void 0:o.map((function(n){var t;return{url:null===n||void 0===n||null===(t=n.image)||void 0===t?void 0:t.original,alt:null===n||void 0===n?void 0:n.title}}))})},s))}},4383:function(n,t,e){"use strict";e.d(t,{a9:function(){return r},Fi:function(){return i},LX:function(){return u},Vc:function(){return o}});var r=30,i=15,u=30,o=30},86944:function(n,t,e){"use strict";e.d(t,{o:function(){return y},c:function(){return p}});var r=e(82544),i=e(2779);function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){u(n,t,e[t])}))}return n}function l(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function a(){var n=l(["\n    query Groups($text: String, $orderBy: [QueryTypesOrderByOrderByClause!]) {\n  types(text: $text, orderBy: $orderBy) {\n    id\n    name\n    slug\n    icon\n    banners {\n      id\n      title\n      image {\n        id\n        original\n        thumbnail\n      }\n    }\n    settings {\n      isHome\n      layoutType\n      productCard\n    }\n  }\n}\n    "]);return a=function(){return n},n}function c(){var n=l(["\n    query Group($id: ID, $slug: String) {\n  type(id: $id, slug: $slug) {\n    id\n    slug\n    banners {\n      id\n      title\n      description\n      image {\n        id\n        original\n        thumbnail\n      }\n    }\n    promotional_sliders {\n      id\n      thumbnail\n      original\n    }\n  }\n}\n    "]);return c=function(){return n},n}var s={},d=(0,r.Ps)(a());var f=(0,r.Ps)(c());function p(n){var t,e=function(n){var t=o({},s,n);return i.a(d,t)}(),r=e.data,u=e.loading,l=e.error;return{types:null!==(t=null===r||void 0===r?void 0:r.types)&&void 0!==t?t:[],isLoading:u,error:l}}function y(n){var t=function(n){var t=o({},s,n);return i.a(f,t)}({variables:{slug:n}}),e=t.data,r=t.loading,u=t.error;return{type:null===e||void 0===e?void 0:e.type,isLoading:r,error:u}}},26343:function(n,t,e){"use strict";var r;e.d(t,{D:function(){return r}}),function(n){n.Billing="BILLING",n.Shipping="SHIPPING"}(r||(r={}))},97777:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return m},default:function(){return h}});var r=e(24246),i=e(89730),u=e(23047),o=e(65218),l=e(45677),a=e(26343),c=e(25815),s=e(91131),d=e(27378);function f(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function p(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,u=[],o=!0,l=!1;try{for(e=e.call(n);!(o=(r=e.next()).done)&&(u.push(r.value),!t||u.length!==t);o=!0);}catch(a){l=!0,i=a}finally{try{o||null==e.return||e.return()}finally{if(l)throw i}}return u}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return f(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=(0,o.default)((function(){return e.e(8107).then(e.bind(e,88107))}),{loadableGenerated:{webpack:function(){return[88107]}}}),v=(0,o.default)((function(){return e.e(8736).then(e.bind(e,38736))}),{loadableGenerated:{webpack:function(){return[38736]}}}),b=(0,o.default)((function(){return Promise.all([e.e(8593),e.e(9586)]).then(e.bind(e,99586))}),{loadableGenerated:{webpack:function(){return[99586]}}}),g=(0,o.default)((function(){return e.e(3944).then(e.bind(e,13944))}),{loadableGenerated:{webpack:function(){return[13944]}},ssr:!1}),m=!0;function h(){var n=(0,i.$G)().t,t=p((0,s.KO)(u.y9),2)[1],e=p((0,s.KO)(u.Km),1)[0],o=p((0,s.KO)(u.du),1)[0];return(0,d.useEffect)((function(){t()}),[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{noindex:!0,nofollow:!0}),(0,r.jsx)("div",{className:"bg-gray-100 px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20",children:(0,r.jsxs)("div",{className:"m-auto flex w-full max-w-5xl flex-col items-center rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8",children:[(0,r.jsxs)("div",{className:"w-full space-y-6 lg:max-w-2xl",children:[(0,r.jsx)(b,{className:"bg-light p-5 shadow-700 md:p-8",contact:null,label:n("text-contact-number"),count:1}),(0,r.jsx)(v,{className:"bg-light p-5 shadow-700 md:p-8",label:n("text-billing-address"),count:2,addresses:e?[e]:[],atom:u.Km,type:a.D.Billing}),(0,r.jsx)(v,{className:"bg-light p-5 shadow-700 md:p-8",label:n("text-shipping-address"),count:3,addresses:o?[o]:[],atom:u.du,type:a.D.Shipping}),(0,r.jsx)(y,{className:"bg-light p-5 shadow-700 md:p-8",label:n("text-delivery-schedule"),count:4})]}),(0,r.jsx)("div",{className:"mt-10 mb-10 w-full sm:mb-12 lg:mb-0 lg:w-96",children:(0,r.jsx)(g,{})})]})})]})}h.getLayout=l.G}},function(n){n.O(0,[2375,9774,2888,179],(function(){return t=35854,n(n.s=t);var t}));var t=n.O();_N_E=t}]);
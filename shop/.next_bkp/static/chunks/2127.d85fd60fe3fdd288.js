"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2127],{52127:function(e,r,a){a.r(r),a.d(r,{default:function(){return l}});var o=a(24246),t=a(1437),s=a(27436),i=a(11350),n=a(12242);function l(e){var r=e.variables;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.Z,{layout:"standard",variables:r.types}),(0,o.jsx)(n.Z,{variables:r.categories}),(0,o.jsx)(s.Z,{layout:"standard",variables:r.categories}),(0,o.jsx)("main",{className:"flex-1",children:(0,o.jsx)(i.Z,{className:"px-4 py-8 lg:p-8",variables:r.products})})]})}},51949:function(e,r,a){a.d(r,{r:function(){return x},Z:function(){return p}});var o=a(24246),t=a(75614),s=a(60042),i=a.n(s),n=a(39258),l=a(30640),c=a(43372),u=a(48654),d=a(75094),m=a(30110),g=a(52447),f=a(4383);function x(e){var r=e.className,a=e.gridClassName,s=e.products,g=e.isLoading,x=e.error,p=e.loadMore,v=e.isLoadingMore,b=e.hasMore,j=e.limit,h=void 0===j?f.a9:j,N=e.column,y=void 0===N?"auto":N,M=(0,t.$)("common").t;return x?(0,o.jsx)(m.default,{message:x.message}):g||(null===s||void 0===s?void 0:s.length)?(0,o.jsxs)("div",{className:i()("w-full",r),children:[(0,o.jsx)("div",{className:i()({"grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3":"auto"===y,"grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-11 2xl:grid-cols-5 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]":"five"===y},a),children:g&&!(null===s||void 0===s?void 0:s.length)?(0,u.Z)(h,(function(e){return(0,o.jsx)(l.Z,{uniqueKey:"product-".concat(e)},e)})):null===s||void 0===s?void 0:s.map((function(e){return(0,o.jsx)(d.Z,{product:e},e.id)}))}),b&&(0,o.jsx)("div",{className:"mt-8 flex justify-center lg:mt-12",children:(0,o.jsx)(n.Z,{loading:v,onClick:p,className:"h-11 text-sm font-semibold md:text-base",children:M("text-load-more")})})]}):(0,o.jsx)("div",{className:"min-h-full w-full px-4 pt-6 pb-8 lg:p-8",children:(0,o.jsx)(c.Z,{text:"text-not-found",className:"mx-auto w-7/12"})})}function p(e){var r=e.className,a=e.gridClassName,t=e.variables,s=e.column,i=void 0===s?"auto":s,n=(0,g.rn)(t),l=n.products,c=n.loadMore,u=n.isLoadingMore,d=n.isLoading,m=n.hasMore,f=n.error;return(0,o.jsx)(x,{products:l,loadMore:c,isLoading:d,isLoadingMore:u,hasMore:m,error:f,className:r,gridClassName:a,column:i})}},11350:function(e,r,a){a.d(r,{Z:function(){return c}});var o=a(24246),t=a(52447),s=a(4383),i=a(51949),n=a(86677);function l(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function c(e){var r=e.className,a=e.variables,c=e.column,u=e.gridClassName,d=(0,n.useRouter)().query,m=(0,t.rn)(function(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{},o=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),o.forEach((function(r){l(e,r,a[r])}))}return e}({},a,d.category&&{categories:d.category},d.text&&{text:d.text})),g=m.products,f=m.loadMore,x=m.isLoadingMore,p=m.isLoading,v=m.hasMore,b=m.error;return(0,o.jsx)(i.r,{products:g,loadMore:f,isLoading:p,isLoadingMore:x,hasMore:v,error:b,limit:s.a9,className:r,gridClassName:u,column:c})}}}]);
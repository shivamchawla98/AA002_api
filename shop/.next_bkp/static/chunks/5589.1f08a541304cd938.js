"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5589],{95589:function(e,r,t){t.r(r);var n=t(24246),a=t(38522),u=t(86677),o=t(89730),l=t(10476);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}function f(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}r.default=function(e){var r=e.label,t=e.variant,c=f(e,["label","variant"]),p=(0,o.$G)().t,b=(0,u.useRouter)(),s=(0,l.Rx)(),h=s.searchTerm,v=s.updateSearchTerm;return(0,n.jsx)(a.Z,i({label:r,onSubmit:function(e){if(e.preventDefault(),h){var r=b.pathname,t=b.query;b.push({pathname:r,query:i({},t,{text:h})},void 0,{scroll:!1})}},onClearSearch:function(){v("");var e=b.pathname,r=b.query,t=r.text,n=f(r,["text"]);t&&b.push({pathname:e,query:i({},n)},void 0,{scroll:!1})},onChange:function(e){var r=e.target.value;v(r)},value:h,name:"search",placeholder:p("common:text-search-placeholder"),variant:t},c))}}}]);
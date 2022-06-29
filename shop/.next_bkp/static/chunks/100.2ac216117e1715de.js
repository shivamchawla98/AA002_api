"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{100:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(24246),a=r(27378),o=r(13990),i=r(11355),u=r(38598),l=r(60042),s=r.n(l),c=r(80495);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=function(e){var t=e.src,r=e.className,a=e.title,o=f(e,["src","className","title"]);return(0,n.jsx)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({className:s()("relative cursor-pointer overflow-hidden rounded-full border border-border-100",r)},o,{children:(0,n.jsx)(c.E,{alt:a,src:t,layout:"fill",priority:!0})}))},m=r(86677),v=r(89730),b=r(92478);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 15.6 19.6"},e,{children:(0,n.jsx)("path",{id:"Path_11","data-name":"Path 11",d:"M16,7a4,4,0,1,1-4-4A4,4,0,0,1,16,7Zm-4,7a7,7,0,0,0-7,7H19a7,7,0,0,0-7-7Z",transform:"translate(-4.2 -2.2)",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.6"})}))},x=r(29370),g=function(e){var t,r,l,c=e.minimal,d=(0,x.aU)().mutate,f=(0,x.aF)().me,h=(0,m.useRouter)(),g=(0,v.$G)("common").t;return(0,n.jsxs)(o.v,{as:"div",className:"relative inline-block ltr:text-left rtl:text-right",children:[(0,n.jsxs)(o.v.Button,{className:"flex items-center focus:outline-none",children:[c?(0,n.jsx)(y,{className:"h-5 w-5"}):(0,n.jsx)(p,{src:null!==(l=null===f||void 0===f||null===(t=f.profile)||void 0===t||null===(r=t.avatar)||void 0===r?void 0:r.thumbnail)&&void 0!==l?l:b.Pb,title:"user name",className:"h-10 w-10"}),(0,n.jsx)("span",{className:"sr-only",children:g("user-avatar")})]}),(0,n.jsx)(i.u,{as:a.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,n.jsxs)(o.v.Items,{as:"ul",className:s()("absolute mt-1 w-48 rounded bg-white pb-4 shadow-700 focus:outline-none ltr:right-0 ltr:origin-top-right rtl:left-0 rtl:origin-top-left",{"!mt-2":c}),children:[u.U.authorizedLinks.map((function(e){var t=e.href,r=e.label;return(0,n.jsx)(o.v.Item,{children:function(e){var a=e.active;return(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:function(){return e=t,void h.push(e);var e},className:s()("block w-full py-2.5 px-6 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent focus:outline-none ltr:text-left rtl:text-right",a?"text-accent":"text-heading"),children:g(r)})})}},"".concat(t).concat(r))})),(0,n.jsx)(o.v.Item,{children:(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:function(){return d()},className:s()("block w-full py-2.5 px-6 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent focus:outline-none ltr:text-left rtl:text-right"),children:g("auth-menu-logout")})})})]})})]})}},13990:function(e,t,r){r.d(t,{v:function(){return Q}});var n=r(27378),a=r(32984),o=r(12351),i=r(9362),u=r(94192),l=r(16723),s=r(23784),c=r(19946),d=r(61363);var f,p=((f=p||{})[f.First=0]="First",f[f.Previous=1]="Previous",f[f.Next=2]="Next",f[f.Last=3]="Last",f[f.Specific=4]="Specific",f[f.Nothing=5]="Nothing",f);function m(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),a=null!=n?n:-1,o=(()=>{switch(e.focus){case 0:return r.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=r.slice().reverse().findIndex(((e,r,n)=>!(-1!==a&&n.length-r-1>=a)&&!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 2:return r.findIndex(((e,r)=>!(r<=a)&&!t.resolveDisabled(e)));case 3:{let e=r.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 4:return r.findIndex((r=>t.resolveId(r)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===o?n:o}var v,b,h=r(64103),y=r(84575),x=r(90292),g=r(31591),I=r(16567),R=r(14157),k=r(51074),w=((b=w||{})[b.Open=0]="Open",b[b.Closed=1]="Closed",b),P=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(P||{}),S=((v=S||{})[v.OpenMenu=0]="OpenMenu",v[v.CloseMenu=1]="CloseMenu",v[v.GoToItem=2]="GoToItem",v[v.Search=3]="Search",v[v.ClearSearch=4]="ClearSearch",v[v.RegisterItem=5]="RegisterItem",v[v.UnregisterItem=6]="UnregisterItem",v);function O(e,t=(e=>e)){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,y.z2)(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),a=r?n.indexOf(r):null;return-1===a&&(a=null),{items:n,activeItemIndex:a}}let j={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var r;let n=O(e),a=m(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:a,activationTrigger:null!=(r=t.trigger)?r:1}},3:(e,t)=>{let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled})),o=a?e.items.indexOf(a):-1;return-1===o||o===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:o,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let r=O(e,(e=>[...e,{id:t.id,dataRef:t.dataRef}]));return{...e,...r}},6:(e,t)=>{let r=O(e,(e=>{let r=e.findIndex((e=>e.id===t.id));return-1!==r&&e.splice(r,1),e}));return{...e,...r,activationTrigger:1}}},C=(0,n.createContext)(null);function E(e){let t=(0,n.useContext)(C);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,E),t}return t}function N(e,t){return(0,a.E)(t.type,j,e,t)}C.displayName="MenuContext";let T=n.Fragment,M=(0,o.yV)((function(e,t){let r=(0,n.useReducer)(N,{menuState:1,buttonRef:(0,n.createRef)(),itemsRef:(0,n.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:i,itemsRef:u,buttonRef:l},c]=r,d=(0,s.T)(t);(0,x.O)([l,u],((e,t)=>{var r;0===i&&(c({type:1}),(0,y.sP)(t,y.tJ.Loose)||(e.preventDefault(),null==(r=l.current)||r.focus()))}));let f=(0,n.useMemo)((()=>({open:0===i})),[i]),p=e,m={ref:d};return n.createElement(C.Provider,{value:r},n.createElement(I.up,{value:(0,a.E)(i,{0:I.ZM.Open,1:I.ZM.Closed})},(0,o.sY)({ourProps:m,theirProps:p,slot:f,defaultTag:T,name:"Menu"})))})),D=(0,o.yV)((function(e,t){var r;let[a,i]=E("Menu.Button"),l=(0,s.T)(a.buttonRef,t),f=`headlessui-menu-button-${(0,c.M)()}`,m=(0,u.G)(),v=(0,n.useCallback)((e=>{switch(e.key){case d.R.Space:case d.R.Enter:case d.R.ArrowDown:e.preventDefault(),e.stopPropagation(),i({type:0}),m.nextFrame((()=>i({type:2,focus:p.First})));break;case d.R.ArrowUp:e.preventDefault(),e.stopPropagation(),i({type:0}),m.nextFrame((()=>i({type:2,focus:p.Last})))}}),[i,m]),b=(0,n.useCallback)((e=>{switch(e.key){case d.R.Space:e.preventDefault()}}),[]),y=(0,n.useCallback)((t=>{if((0,h.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===a.menuState?(i({type:1}),m.nextFrame((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),t.stopPropagation(),i({type:0})))}),[i,m,a,e.disabled]),x=(0,n.useMemo)((()=>({open:0===a.menuState})),[a]),g=e,I={ref:l,id:f,type:(0,R.f)(e,a.buttonRef),"aria-haspopup":!0,"aria-controls":null==(r=a.itemsRef.current)?void 0:r.id,"aria-expanded":e.disabled?void 0:0===a.menuState,onKeyDown:v,onKeyUp:b,onClick:y};return(0,o.sY)({ourProps:I,theirProps:g,slot:x,defaultTag:"button",name:"Menu.Button"})})),F=o.AN.RenderStrategy|o.AN.Static,L=(0,o.yV)((function(e,t){var r,a;let[l,f]=E("Menu.Items"),m=(0,s.T)(l.itemsRef,t),v=(0,k.i)(l.itemsRef),b=`headlessui-menu-items-${(0,c.M)()}`,h=(0,u.G)(),y=(0,I.oJ)(),x=null!==y?y===I.ZM.Open:0===l.menuState;(0,n.useEffect)((()=>{let e=l.itemsRef.current;!e||0===l.menuState&&e!==(null==v?void 0:v.activeElement)&&e.focus({preventScroll:!0})}),[l.menuState,l.itemsRef,v]),(0,g.B)({container:l.itemsRef.current,enabled:0===l.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let R=(0,n.useCallback)((e=>{var t,r;switch(h.dispose(),e.key){case d.R.Space:if(""!==l.searchQuery)return e.preventDefault(),e.stopPropagation(),f({type:3,value:e.key});case d.R.Enter:if(e.preventDefault(),e.stopPropagation(),f({type:1}),null!==l.activeItemIndex){let{dataRef:e}=l.items[l.activeItemIndex];null==(r=null==(t=e.current)?void 0:t.domRef.current)||r.click()}(0,i.k)().nextFrame((()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case d.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),f({type:2,focus:p.Next});case d.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),f({type:2,focus:p.Previous});case d.R.Home:case d.R.PageUp:return e.preventDefault(),e.stopPropagation(),f({type:2,focus:p.First});case d.R.End:case d.R.PageDown:return e.preventDefault(),e.stopPropagation(),f({type:2,focus:p.Last});case d.R.Escape:e.preventDefault(),e.stopPropagation(),f({type:1}),(0,i.k)().nextFrame((()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case d.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(f({type:3,value:e.key}),h.setTimeout((()=>f({type:4})),350))}}),[f,h,l,v]),w=(0,n.useCallback)((e=>{switch(e.key){case d.R.Space:e.preventDefault()}}),[]),P=(0,n.useMemo)((()=>({open:0===l.menuState})),[l]),S=e,O={"aria-activedescendant":null===l.activeItemIndex||null==(r=l.items[l.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(a=l.buttonRef.current)?void 0:a.id,id:b,onKeyDown:R,onKeyUp:w,role:"menu",tabIndex:0,ref:m};return(0,o.sY)({ourProps:O,theirProps:S,slot:P,defaultTag:"div",features:F,visible:x,name:"Menu.Items"})})),A=n.Fragment,U=(0,o.yV)((function(e,t){let{disabled:r=!1,...a}=e,[u,d]=E("Menu.Item"),f=`headlessui-menu-item-${(0,c.M)()}`,m=null!==u.activeItemIndex&&u.items[u.activeItemIndex].id===f,v=(0,n.useRef)(null),b=(0,s.T)(t,v);(0,l.e)((()=>{if(0!==u.menuState||!m||0===u.activationTrigger)return;let e=(0,i.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=v.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[v,m,u.menuState,u.activationTrigger,u.activeItemIndex]);let h=(0,n.useRef)({disabled:r,domRef:v});(0,l.e)((()=>{h.current.disabled=r}),[h,r]),(0,l.e)((()=>{var e,t;h.current.textValue=null==(t=null==(e=v.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[h,v]),(0,l.e)((()=>(d({type:5,id:f,dataRef:h}),()=>d({type:6,id:f}))),[h,f]);let y=(0,n.useCallback)((e=>{if(r)return e.preventDefault();d({type:1}),(0,i.k)().nextFrame((()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))}),[d,u.buttonRef,r]),x=(0,n.useCallback)((()=>{if(r)return d({type:2,focus:p.Nothing});d({type:2,focus:p.Specific,id:f})}),[r,f,d]),g=(0,n.useCallback)((()=>{r||m||d({type:2,focus:p.Specific,id:f,trigger:0})}),[r,m,f,d]),I=(0,n.useCallback)((()=>{r||!m||d({type:2,focus:p.Nothing})}),[r,m,d]),R=(0,n.useMemo)((()=>({active:m,disabled:r})),[m,r]);return(0,o.sY)({ourProps:{id:f,ref:b,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,disabled:void 0,onClick:y,onFocus:x,onPointerMove:g,onMouseMove:g,onPointerLeave:I,onMouseLeave:I},theirProps:a,slot:R,defaultTag:A,name:"Menu.Item"})})),Q=Object.assign(M,{Button:D,Items:L,Item:U})},14157:function(e,t,r){r.d(t,{f:function(){return i}});var n=r(27378),a=r(16723);function o(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";return"string"==typeof r&&"button"===r.toLowerCase()?"button":void 0}function i(e,t){let[r,i]=(0,n.useState)((()=>o(e)));return(0,a.e)((()=>{i(o(e))}),[e.type,e.as]),(0,a.e)((()=>{r||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&i("button")}),[r,t]),r}},31591:function(e,t,r){r.d(t,{B:function(){return i}});var n=r(27378),a=r(16723),o=r(15466);function i({container:e,accept:t,walk:r,enabled:i=!0}){let u=(0,n.useRef)(t),l=(0,n.useRef)(r);(0,n.useEffect)((()=>{u.current=t,l.current=r}),[t,r]),(0,a.e)((()=>{if(!e||!i)return;let t=(0,o.r)(e);if(!t)return;let r=u.current,n=l.current,a=Object.assign((e=>r(e)),{acceptNode:r}),s=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,a,!1);for(;s.nextNode();)n(s.currentNode)}),[e,i,u,l])}}}]);
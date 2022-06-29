"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6228],{51007:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(24246),o=r(29581);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},e,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})}))},a=r(4320),u=r(60042),c=r.n(u),s=r(89730),d=function(e){var t=e.checked,r=e.address,l=e.onEdit,u=e.onDelete,d=(0,s.$G)().t;return(0,n.jsxs)("div",{className:c()("relative p-4 rounded border cursor-pointer group hover:border-accent",{"border-accent shadow-sm":t,"bg-gray-100 border-transparent":!t}),children:[(0,n.jsx)("p",{className:"text-sm text-heading font-semibold mb-3 capitalize",children:null===r||void 0===r?void 0:r.title}),(0,n.jsx)("p",{className:"text-sm text-sub-heading",children:(0,a.T)(null===r||void 0===r?void 0:r.address)}),(0,n.jsxs)("div",{className:"absolute top-4 ltr:right-4 rtl:left-4 flex space-x-2 rtl:space-x-reverse opacity-0 group-hover:opacity-100",children:[l&&(0,n.jsxs)("button",{className:"flex items-center justify-center w-5 h-5 rounded-full bg-accent text-light",onClick:l,children:[(0,n.jsx)("span",{className:"sr-only",children:d("text-edit")}),(0,n.jsx)(i,{className:"w-3 h-3"})]}),u&&(0,n.jsxs)("button",{className:"flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-light",onClick:u,children:[(0,n.jsx)("span",{className:"sr-only",children:d("text-delete")}),(0,n.jsx)(o.T,{className:"w-3 h-3"})]})]})]})}},35076:function(e,t,r){r.d(t,{V:function(){return i}});var n=r(24246),o=r(90393),l=r(89730),i=function(e){var t=e.onAdd,r=e.count,i=e.label,a=(0,l.$G)("common").t;return(0,n.jsxs)("div",{className:"flex items-center justify-between mb-5 md:mb-8",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse",children:[r&&(0,n.jsx)("span",{className:"rounded-full w-8 h-8 bg-accent flex items-center justify-center text-base lg:text-xl text-light",children:r}),(0,n.jsx)("p",{className:"text-lg lg:text-xl text-heading capitalize",children:i})]}),t&&(0,n.jsxs)("button",{className:"flex items-center text-sm font-semibold text-accent transition-colors duration-200 focus:outline-none focus:text-accent-hover hover:text-accent-hover",onClick:t,children:[(0,n.jsx)(o.p,{className:"w-4 h-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5"}),a("text-add")]})]})}},86228:function(e,t,r){r.r(t),r.d(t,{AddressGrid:function(){return p}});var n=r(24246),o=r(44144),l=r(70027),i=r(91131),a=r(27378),u=r(51007),c=r(35076),s=r(89730);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(e){var t=e.addresses,r=e.label,d=e.atom,p=e.className,m=e.userId,b=e.count,v=e.type,h=(0,s.$G)("common").t,g=f((0,i.KO)(d),2),y=g[0],x=g[1],j=(0,o.SO)().openModal;return(0,a.useEffect)((function(){if(null===t||void 0===t?void 0:t.length)if(null===y||void 0===y?void 0:y.id){var e=t.findIndex((function(e){return e.id===y.id}));x(t[e])}else x(null===t||void 0===t?void 0:t[0])}),[t,null===t||void 0===t?void 0:t.length,null===y||void 0===y?void 0:y.id,x]),(0,n.jsxs)("div",{className:p,children:[(0,n.jsx)(c.V,{onAdd:function(){j("ADD_OR_UPDATE_ADDRESS",{customerId:m,type:v})},count:b,label:r}),(null===t||void 0===t?void 0:t.length)?(0,n.jsxs)(l.E,{value:y,onChange:x,children:[(0,n.jsx)(l.E.Label,{className:"sr-only",children:r}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",children:null===t||void 0===t?void 0:t.map((function(e){return(0,n.jsx)(l.E.Option,{value:e,children:function(t){var r=t.checked;return(0,n.jsx)(u.Z,{checked:r,onDelete:function(){return function(e){j("DELETE_ADDRESS",{customerId:m,addressId:null===e||void 0===e?void 0:e.id})}(e)},onEdit:function(){return function(e){j("ADD_OR_UPDATE_ADDRESS",{customerId:m,address:e})}(e)},address:e})}},null===e||void 0===e?void 0:e.id)}))})]}):(0,n.jsx)("div",{className:"grid grid-cols-1 gap-4",children:(0,n.jsx)("span",{className:"relative px-5 py-6 text-base text-center bg-gray-100 border rounded border-border-200",children:h("text-no-address")})})]})};t.default=p},90393:function(e,t,r){r.d(t,{p:function(){return l}});var n=r(24246);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e,{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}))}},4320:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){if(e){var t,r=["street_address","state","city","zip","country"].reduce((function(t,r){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},t,o({},r,e[r]))}),{}),n=(t=r,Object.fromEntries(Object.entries(t).filter((function(e){var t=l(e,2),r=(t[0],t[1]);return Boolean(r)}))));return Object.values(n).join(", ")}}r.d(t,{T:function(){return i}})},70027:function(e,t,r){r.d(t,{E:function(){return T}});var n=r(27378),o=r(12351),l=r(19946),i=r(32984),a=r(16723),u=r(61363),c=r(84575);var s=r(23784);let d=(0,n.createContext)(null);function f(){let e=(0,n.useContext)(d);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,f),e}return e}function p(){let[e,t]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)((()=>function(e){let r=(0,n.useCallback)((e=>(t((t=>[...t,e])),()=>t((t=>{let r=t.slice(),n=r.indexOf(e);return-1!==n&&r.splice(n,1),r})))),[]),o=(0,n.useMemo)((()=>({register:r,slot:e.slot,name:e.name,props:e.props})),[r,e.slot,e.name,e.props]);return n.createElement(d.Provider,{value:o},e.children)}),[t])]}let m=(0,o.yV)((function(e,t){let{passive:r=!1,...n}=e,i=f(),u=`headlessui-label-${(0,l.M)()}`,c=(0,s.T)(t);(0,a.e)((()=>i.register(u)),[u,i.register]);let d={ref:c,...i.props,id:u};return r&&("onClick"in d&&delete d.onClick,"onClick"in n&&delete n.onClick),(0,o.sY)({ourProps:d,theirProps:n,slot:i.slot||{},defaultTag:"label",name:i.name||"Label"})}));var b=r(39516),v=r(31591),h=r(46045);function g(e={},t=null,r=[]){for(let[n,o]of Object.entries(e))x(r,y(t,n),o);return r}function y(e,t){return e?e+"["+t+"]":t}function x(e,t,r){if(Array.isArray(r))for(let[n,o]of r.entries())x(e,y(t,n.toString()),o);else r instanceof Date?e.push([t,r.toISOString()]):"boolean"==typeof r?e.push([t,r?"1":"0"]):"string"==typeof r?e.push([t,r]):"number"==typeof r?e.push([t,`${r}`]):null==r?e.push([t,""]):g(r,t,e)}var j,O=r(15466),E=((j=E||{})[j.RegisterOption=0]="RegisterOption",j[j.UnregisterOption=1]="UnregisterOption",j);let k={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,c.z2)(r,(e=>e.element.current))}},1(e,t){let r=e.options.slice(),n=e.options.findIndex((e=>e.id===t.id));return-1===n?e:(r.splice(n,1),{...e,options:r})}},w=(0,n.createContext)(null);function R(e){let t=(0,n.useContext)(w);if(null===t){let t=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return t}function A(e,t){return(0,i.E)(t.type,k,e,t)}w.displayName="RadioGroupContext";let N=(0,o.yV)((function(e,t){let{value:r,name:i,onChange:a,disabled:d=!1,...f}=e,[{options:m},y]=(0,n.useReducer)(A,{options:[]}),[x,j]=p(),[E,k]=(0,b.f)(),R=`headlessui-radiogroup-${(0,l.M)()}`,N=(0,n.useRef)(null),C=(0,s.T)(N,t),S=(0,n.useMemo)((()=>m.find((e=>!e.propsRef.current.disabled))),[m]),T=(0,n.useMemo)((()=>m.some((e=>e.propsRef.current.value===r))),[m,r]),P=(0,n.useCallback)((e=>{var t;if(d||e===r)return!1;let n=null==(t=m.find((t=>t.propsRef.current.value===e)))?void 0:t.propsRef.current;return(null==n||!n.disabled)&&(a(e),!0)}),[a,r,d,m]);(0,v.B)({container:N.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let D=(0,n.useCallback)((e=>{let t=N.current;if(!t)return;let r=(0,O.r)(t),n=m.filter((e=>!1===e.propsRef.current.disabled)).map((e=>e.element.current));switch(e.key){case u.R.Enter:!function(e){var t;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r)for(let n of r.elements)if("INPUT"===n.tagName&&"submit"===n.type||"BUTTON"===n.tagName&&"submit"===n.type||"INPUT"===n.nodeName&&"image"===n.type)return void n.click()}(e.currentTarget);break;case u.R.ArrowLeft:case u.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,c.jA)(n,c.TO.Previous|c.TO.WrapAround)===c.fE.Success){let e=m.find((e=>e.element.current===(null==r?void 0:r.activeElement)));e&&P(e.propsRef.current.value)}break;case u.R.ArrowRight:case u.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,c.jA)(n,c.TO.Next|c.TO.WrapAround)===c.fE.Success){let e=m.find((e=>e.element.current===(null==r?void 0:r.activeElement)));e&&P(e.propsRef.current.value)}break;case u.R.Space:{e.preventDefault(),e.stopPropagation();let t=m.find((e=>e.element.current===(null==r?void 0:r.activeElement)));t&&P(t.propsRef.current.value)}}}),[N,m,P]),I=(0,n.useCallback)((e=>(y({type:0,...e}),()=>y({type:1,id:e.id}))),[y]),_=(0,n.useMemo)((()=>({registerOption:I,firstOption:S,containsCheckedOption:T,change:P,disabled:d,value:r})),[I,S,T,P,d,r]),M={ref:C,id:R,role:"radiogroup","aria-labelledby":x,"aria-describedby":E,onKeyDown:D};return n.createElement(k,{name:"RadioGroup.Description"},n.createElement(j,{name:"RadioGroup.Label"},n.createElement(w.Provider,{value:_},null!=i&&null!=r&&g({[i]:r}).map((([e,t])=>n.createElement(h._,{features:h.A.Hidden,...(0,o.oA)({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})}))),(0,o.sY)({ourProps:M,theirProps:f,defaultTag:"div",name:"RadioGroup"}))))}));var C=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(C||{});let S=(0,o.yV)((function(e,t){let r=(0,n.useRef)(null),i=(0,s.T)(r,t),u=`headlessui-radiogroup-option-${(0,l.M)()}`,[c,d]=p(),[f,m]=(0,b.f)(),{addFlag:v,removeFlag:h,hasFlag:g}=function(e=0){let[t,r]=(0,n.useState)(e);return{addFlag:(0,n.useCallback)((e=>r((t=>t|e))),[r]),hasFlag:(0,n.useCallback)((e=>Boolean(t&e)),[t]),removeFlag:(0,n.useCallback)((e=>r((t=>t&~e))),[r]),toggleFlag:(0,n.useCallback)((e=>r((t=>t^e))),[r])}}(1),{value:y,disabled:x=!1,...j}=e,O=(0,n.useRef)({value:y,disabled:x});(0,a.e)((()=>{O.current.value=y}),[y,O]),(0,a.e)((()=>{O.current.disabled=x}),[x,O]);let{registerOption:E,disabled:k,change:w,firstOption:A,containsCheckedOption:N,value:C}=R("RadioGroup.Option");(0,a.e)((()=>E({id:u,element:r,propsRef:O})),[u,E,r,e]);let S=(0,n.useCallback)((()=>{var e;!w(y)||(v(2),null==(e=r.current)||e.focus())}),[v,w,y]),T=(0,n.useCallback)((()=>v(2)),[v]),P=(0,n.useCallback)((()=>h(2)),[h]),D=(null==A?void 0:A.id)===u,I=k||x,_=C===y,M={ref:i,id:u,role:"radio","aria-checked":_?"true":"false","aria-labelledby":c,"aria-describedby":f,"aria-disabled":!!I||void 0,tabIndex:I?-1:_||!N&&D?0:-1,onClick:I?void 0:S,onFocus:I?void 0:T,onBlur:I?void 0:P},F=(0,n.useMemo)((()=>({checked:_,disabled:I,active:g(2)})),[_,I,g]);return n.createElement(m,{name:"RadioGroup.Description"},n.createElement(d,{name:"RadioGroup.Label"},(0,o.sY)({ourProps:M,theirProps:j,slot:F,defaultTag:"div",name:"RadioGroup.Option"})))})),T=Object.assign(N,{Option:S,Label:m,Description:b.d})},31591:function(e,t,r){r.d(t,{B:function(){return i}});var n=r(27378),o=r(16723),l=r(15466);function i({container:e,accept:t,walk:r,enabled:i=!0}){let a=(0,n.useRef)(t),u=(0,n.useRef)(r);(0,n.useEffect)((()=>{a.current=t,u.current=r}),[t,r]),(0,o.e)((()=>{if(!e||!i)return;let t=(0,l.r)(e);if(!t)return;let r=a.current,n=u.current,o=Object.assign((e=>r(e)),{acceptNode:r}),c=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;c.nextNode();)n(c.currentNode)}),[e,i,a,u])}}}]);
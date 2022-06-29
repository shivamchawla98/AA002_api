"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8107],{88107:function(e,r,t){t.r(r),t.d(r,{ScheduleGrid:function(){return b},default:function(){return v}});var n=t(24246),l=t(70027),a=t(91131),o=t(60042),i=t.n(o),s=function(e){var r=e.checked,t=e.schedule;return(0,n.jsxs)("div",{className:i()("relative p-4 rounded border cursor-pointer group hover:border-accent",{"border-accent shadow-sm":r,"bg-gray-100 border-transparent":!r}),children:[(0,n.jsx)("span",{className:"text-sm text-heading font-semibold block mb-2",children:t.title}),(0,n.jsx)("span",{className:"text-sm text-heading block",children:t.description})]})},u=t(23047),c=t(27378),d=t(89730),p=t(22490);function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,l,a=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);o=!0);}catch(s){i=!0,l=s}finally{try{o||null==t.return||t.return()}finally{if(i)throw l}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=function(e){var r=e.label,t=e.className,o=e.count,i=(0,d.$G)("common").t,f=(0,p.rV)().settings.deliveryTime,b=m((0,a.KO)(u.Gh),2),v=b[0],g=b[1];return(0,c.useEffect)((function(){g(f[0])}),[]),(0,n.jsxs)("div",{className:t,children:[(0,n.jsx)("div",{className:"mb-5 flex items-center justify-between md:mb-8",children:(0,n.jsxs)("div",{className:"flex items-center space-x-3 rtl:space-x-reverse md:space-x-4",children:[o&&(0,n.jsx)("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-accent text-base text-light lg:text-xl",children:o}),(0,n.jsx)("p",{className:"text-lg capitalize text-heading lg:text-xl",children:r})]})}),f&&(null===f||void 0===f?void 0:f.length)?(0,n.jsxs)(l.E,{value:v,onChange:g,children:[(0,n.jsx)(l.E.Label,{className:"sr-only",children:r}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",children:null===f||void 0===f?void 0:f.map((function(e,r){return(0,n.jsx)(l.E.Option,{value:e,children:function(r){var t=r.checked;return(0,n.jsx)(s,{checked:t,schedule:e})}},r)}))})]}):(0,n.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",children:(0,n.jsx)("span",{className:"relative rounded border border-border-200 bg-gray-100 px-5 py-6 text-center text-base",children:i("text-no-delivery-time-found")})})]})},v=b},70027:function(e,r,t){t.d(r,{E:function(){return S}});var n=t(27378),l=t(12351),a=t(19946),o=t(32984),i=t(16723),s=t(61363),u=t(84575);var c=t(23784);let d=(0,n.createContext)(null);function p(){let e=(0,n.useContext)(d);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,p),e}return e}function f(){let[e,r]=(0,n.useState)([]);return[e.length>0?e.join(" "):void 0,(0,n.useMemo)((()=>function(e){let t=(0,n.useCallback)((e=>(r((r=>[...r,e])),()=>r((r=>{let t=r.slice(),n=t.indexOf(e);return-1!==n&&t.splice(n,1),t})))),[]),l=(0,n.useMemo)((()=>({register:t,slot:e.slot,name:e.name,props:e.props})),[t,e.slot,e.name,e.props]);return n.createElement(d.Provider,{value:l},e.children)}),[r])]}let m=(0,l.yV)((function(e,r){let{passive:t=!1,...n}=e,o=p(),s=`headlessui-label-${(0,a.M)()}`,u=(0,c.T)(r);(0,i.e)((()=>o.register(s)),[s,o.register]);let d={ref:u,...o.props,id:s};return t&&("onClick"in d&&delete d.onClick,"onClick"in n&&delete n.onClick),(0,l.sY)({ourProps:d,theirProps:n,slot:o.slot||{},defaultTag:"label",name:o.name||"Label"})}));var b=t(39516),v=t(31591),g=t(46045);function h(e={},r=null,t=[]){for(let[n,l]of Object.entries(e))x(t,y(r,n),l);return t}function y(e,r){return e?e+"["+r+"]":r}function x(e,r,t){if(Array.isArray(t))for(let[n,l]of t.entries())x(e,y(r,n.toString()),l);else t instanceof Date?e.push([r,t.toISOString()]):"boolean"==typeof t?e.push([r,t?"1":"0"]):"string"==typeof t?e.push([r,t]):"number"==typeof t?e.push([r,`${t}`]):null==t?e.push([r,""]):h(t,r,e)}var k,E=t(15466),R=((k=R||{})[k.RegisterOption=0]="RegisterOption",k[k.UnregisterOption=1]="UnregisterOption",k);let C={0(e,r){let t=[...e.options,{id:r.id,element:r.element,propsRef:r.propsRef}];return{...e,options:(0,u.z2)(t,(e=>e.element.current))}},1(e,r){let t=e.options.slice(),n=e.options.findIndex((e=>e.id===r.id));return-1===n?e:(t.splice(n,1),{...e,options:t})}},N=(0,n.createContext)(null);function O(e){let r=(0,n.useContext)(N);if(null===r){let r=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,O),r}return r}function T(e,r){return(0,o.E)(r.type,C,e,r)}N.displayName="RadioGroupContext";let j=(0,l.yV)((function(e,r){let{value:t,name:o,onChange:i,disabled:d=!1,...p}=e,[{options:m},y]=(0,n.useReducer)(T,{options:[]}),[x,k]=f(),[R,C]=(0,b.f)(),O=`headlessui-radiogroup-${(0,a.M)()}`,j=(0,n.useRef)(null),A=(0,c.T)(j,r),w=(0,n.useMemo)((()=>m.find((e=>!e.propsRef.current.disabled))),[m]),S=(0,n.useMemo)((()=>m.some((e=>e.propsRef.current.value===t))),[m,t]),P=(0,n.useCallback)((e=>{var r;if(d||e===t)return!1;let n=null==(r=m.find((r=>r.propsRef.current.value===e)))?void 0:r.propsRef.current;return(null==n||!n.disabled)&&(i(e),!0)}),[i,t,d,m]);(0,v.B)({container:j.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let F=(0,n.useCallback)((e=>{let r=j.current;if(!r)return;let t=(0,E.r)(r),n=m.filter((e=>!1===e.propsRef.current.disabled)).map((e=>e.element.current));switch(e.key){case s.R.Enter:!function(e){var r;let t=null!=(r=null==e?void 0:e.form)?r:e.closest("form");if(t)for(let n of t.elements)if("INPUT"===n.tagName&&"submit"===n.type||"BUTTON"===n.tagName&&"submit"===n.type||"INPUT"===n.nodeName&&"image"===n.type)return void n.click()}(e.currentTarget);break;case s.R.ArrowLeft:case s.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,u.jA)(n,u.TO.Previous|u.TO.WrapAround)===u.fE.Success){let e=m.find((e=>e.element.current===(null==t?void 0:t.activeElement)));e&&P(e.propsRef.current.value)}break;case s.R.ArrowRight:case s.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,u.jA)(n,u.TO.Next|u.TO.WrapAround)===u.fE.Success){let e=m.find((e=>e.element.current===(null==t?void 0:t.activeElement)));e&&P(e.propsRef.current.value)}break;case s.R.Space:{e.preventDefault(),e.stopPropagation();let r=m.find((e=>e.element.current===(null==t?void 0:t.activeElement)));r&&P(r.propsRef.current.value)}}}),[j,m,P]),G=(0,n.useCallback)((e=>(y({type:0,...e}),()=>y({type:1,id:e.id}))),[y]),I=(0,n.useMemo)((()=>({registerOption:G,firstOption:w,containsCheckedOption:S,change:P,disabled:d,value:t})),[G,w,S,P,d,t]),L={ref:A,id:O,role:"radiogroup","aria-labelledby":x,"aria-describedby":R,onKeyDown:F};return n.createElement(C,{name:"RadioGroup.Description"},n.createElement(k,{name:"RadioGroup.Label"},n.createElement(N.Provider,{value:I},null!=o&&null!=t&&h({[o]:t}).map((([e,r])=>n.createElement(g._,{features:g.A.Hidden,...(0,l.oA)({key:e,as:"input",type:"radio",checked:null!=r,hidden:!0,readOnly:!0,name:e,value:r})}))),(0,l.sY)({ourProps:L,theirProps:p,defaultTag:"div",name:"RadioGroup"}))))}));var A=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(A||{});let w=(0,l.yV)((function(e,r){let t=(0,n.useRef)(null),o=(0,c.T)(t,r),s=`headlessui-radiogroup-option-${(0,a.M)()}`,[u,d]=f(),[p,m]=(0,b.f)(),{addFlag:v,removeFlag:g,hasFlag:h}=function(e=0){let[r,t]=(0,n.useState)(e);return{addFlag:(0,n.useCallback)((e=>t((r=>r|e))),[t]),hasFlag:(0,n.useCallback)((e=>Boolean(r&e)),[r]),removeFlag:(0,n.useCallback)((e=>t((r=>r&~e))),[t]),toggleFlag:(0,n.useCallback)((e=>t((r=>r^e))),[t])}}(1),{value:y,disabled:x=!1,...k}=e,E=(0,n.useRef)({value:y,disabled:x});(0,i.e)((()=>{E.current.value=y}),[y,E]),(0,i.e)((()=>{E.current.disabled=x}),[x,E]);let{registerOption:R,disabled:C,change:N,firstOption:T,containsCheckedOption:j,value:A}=O("RadioGroup.Option");(0,i.e)((()=>R({id:s,element:t,propsRef:E})),[s,R,t,e]);let w=(0,n.useCallback)((()=>{var e;!N(y)||(v(2),null==(e=t.current)||e.focus())}),[v,N,y]),S=(0,n.useCallback)((()=>v(2)),[v]),P=(0,n.useCallback)((()=>g(2)),[g]),F=(null==T?void 0:T.id)===s,G=C||x,I=A===y,L={ref:o,id:s,role:"radio","aria-checked":I?"true":"false","aria-labelledby":u,"aria-describedby":p,"aria-disabled":!!G||void 0,tabIndex:G?-1:I||!j&&F?0:-1,onClick:G?void 0:w,onFocus:G?void 0:S,onBlur:G?void 0:P},M=(0,n.useMemo)((()=>({checked:I,disabled:G,active:h(2)})),[I,G,h]);return n.createElement(m,{name:"RadioGroup.Description"},n.createElement(d,{name:"RadioGroup.Label"},(0,l.sY)({ourProps:L,theirProps:k,slot:M,defaultTag:"div",name:"RadioGroup.Option"})))})),S=Object.assign(j,{Option:w,Label:m,Description:b.d})},31591:function(e,r,t){t.d(r,{B:function(){return o}});var n=t(27378),l=t(16723),a=t(15466);function o({container:e,accept:r,walk:t,enabled:o=!0}){let i=(0,n.useRef)(r),s=(0,n.useRef)(t);(0,n.useEffect)((()=>{i.current=r,s.current=t}),[r,t]),(0,l.e)((()=>{if(!e||!o)return;let r=(0,a.r)(e);if(!r)return;let t=i.current,n=s.current,l=Object.assign((e=>t(e)),{acceptNode:t}),u=r.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,l,!1);for(;u.nextNode();)n(u.currentNode)}),[e,o,i,s])}}}]);
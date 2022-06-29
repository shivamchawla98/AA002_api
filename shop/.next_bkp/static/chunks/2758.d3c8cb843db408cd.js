(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2758,5869],{55869:function(e,r,t){"use strict";t.r(r),t.d(r,{AddressForm:function(){return S},default:function(){return P}});var n=t(24246),o=t(39258),l=t(78248),a=t(29235),i=t(27378),s=t(29318),u=t.n(s);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=i.forwardRef((function(e,r){var t=e.className,o=e.label,l=e.name,a=e.id,i=e.error,s=f(e,["className","label","name","id","error"]);return(0,n.jsxs)("div",{className:t,children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("input",c({id:a,name:l,type:"radio",ref:r,className:u().radio_input},s)),(0,n.jsx)("label",{htmlFor:a,className:"text-body text-sm",children:o})]}),i&&(0,n.jsx)("p",{className:"my-2 text-xs ltr:text-right rtl:text-left text-red-500",children:i})]})}));b.displayName="Radio";var m=b,p=t(83398),y=t(89730),v=t(68301),g=t(44144),x=t(84397),h=t(26343),j=t(29370);function O(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){O(e,r,t[r])}))}return e}var N=v.Ry().shape({type:v.Z_().oneOf([h.D.Billing,h.D.Shipping]).required("error-type-required"),title:v.Z_().required("error-title-required"),address:v.Ry().shape({country:v.Z_().required("error-country-required"),city:v.Z_().required("error-city-required"),state:v.Z_().required("error-state-required"),zip:v.Z_().required("error-zip-required"),street_address:v.Z_().required("error-street-required")})}),S=function(e){var r=e.onSubmit,t=e.defaultValues,i=e.isLoading,s=(0,y.$G)("common").t;return(0,n.jsx)(x.l,{onSubmit:r,className:"grid h-full grid-cols-2 gap-5",validationSchema:N,useFormProps:{shouldUnregister:!0,defaultValues:t},resetValues:t,children:function(e){var r,u,d,c,f,b,y,v,g,x,j,O=e.register,N=e.formState.errors;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(a.Z,{children:s("text-type")}),(0,n.jsxs)("div",{className:"flex items-center space-x-4 rtl:space-x-reverse",children:[(0,n.jsx)(m,w({id:"billing"},O("type"),{type:"radio",value:h.D.Billing,label:s("text-billing")})),(0,n.jsx)(m,w({id:"shipping"},O("type"),{type:"radio",value:h.D.Shipping,label:s("text-shipping")}))]})]}),(0,n.jsx)(l.Z,w({label:s("text-title")},O("title"),{error:s(null===(r=N.title)||void 0===r?void 0:r.message),variant:"outline",className:"col-span-2"})),(0,n.jsx)(l.Z,w({label:s("text-country")},O("address.country"),{error:s(null===(u=N.address)||void 0===u||null===(d=u.country)||void 0===d?void 0:d.message),variant:"outline"})),(0,n.jsx)(l.Z,w({label:s("text-city")},O("address.city"),{error:s(null===(c=N.address)||void 0===c||null===(f=c.city)||void 0===f?void 0:f.message),variant:"outline"})),(0,n.jsx)(l.Z,w({label:s("text-state")},O("address.state"),{error:s(null===(b=N.address)||void 0===b||null===(y=b.state)||void 0===y?void 0:y.message),variant:"outline"})),(0,n.jsx)(l.Z,w({label:s("text-zip")},O("address.zip"),{error:s(null===(v=N.address)||void 0===v||null===(g=v.zip)||void 0===g?void 0:g.message),variant:"outline"})),(0,n.jsx)(p.Z,w({label:s("text-street-address")},O("address.street_address"),{error:s(null===(x=N.address)||void 0===x||null===(j=x.street_address)||void 0===j?void 0:j.message),variant:"outline",className:"col-span-2"})),(0,n.jsxs)(o.Z,{className:"col-span-2 w-full",loading:i,disabled:i,children:[Boolean(t)?s("text-update"):s("text-save")," ",s("text-address")]})]})}})};function P(){var e=(0,y.$G)("common").t,r=(0,g.X9)().data,t=r.customerId,o=r.address,l=r.type;console.log(t,o,l,"customerId, address, type");var a,i,s=(0,j.Io)().mutate;return(0,n.jsxs)("div",{className:"min-h-screen bg-light p-5 sm:p-8 md:min-h-0 md:rounded-xl",children:[(0,n.jsxs)("h1",{className:"mb-4 text-center text-lg font-semibold text-heading sm:mb-6",children:[e(o?"text-update":"text-add-new")," ",e("text-address")]}),(0,n.jsx)(S,{onSubmit:function(e){console.log(e,"values");var r={id:null===o||void 0===o?void 0:o.id,title:e.title,type:e.type,address:w({},e.address)};s({id:t,address:[r]})},defaultValues:{title:null!==(a=null===o||void 0===o?void 0:o.title)&&void 0!==a?a:"",type:null!==(i=null===o||void 0===o?void 0:o.type)&&void 0!==i?i:l,address:w({},null===o||void 0===o?void 0:o.address)}})]})}},82758:function(e,r,t){"use strict";t.r(r);var n=t(24246),o=t(44144),l=t(55869),a=t(89730),i=t(91131);function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,l=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(l.push(n.value),!r||l.length!==r);a=!0);}catch(s){i=!0,o=s}finally{try{a||null==t.return||t.return()}finally{if(i)throw o}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=function(){var e,r,t=(0,a.$G)("common").t,s=(0,o.X9)().data,u=s.atom,f=s.address,b=s.type,m=(0,o.SO)().closeModal,p=c((0,i.KO)(u),2),y=(p[0],p[1]);return(0,n.jsxs)("div",{className:"min-h-screen bg-light p-5 sm:p-8 md:min-h-0 md:rounded-xl",children:[(0,n.jsxs)("h1",{className:"mb-4 text-center text-lg font-semibold text-heading sm:mb-6",children:[t("text-add-new")," ",t("text-address")]}),(0,n.jsx)(l.AddressForm,{onSubmit:function(e){var r={title:e.title,type:e.type,address:e.address};y(r),m()},defaultValues:{title:null!==(e=null===f||void 0===f?void 0:f.title)&&void 0!==e?e:"",type:null!==(r=null===f||void 0===f?void 0:f.type)&&void 0!==r?r:b,address:d({},null===f||void 0===f?void 0:f.address)}})]})}},29235:function(e,r,t){"use strict";var n=t(24246),o=t(60042),l=t.n(o);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}r.Z=function(e){var r=e.className,t=i(e,["className"]);return(0,n.jsx)("label",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({className:l()("block text-body-dark font-semibold text-sm leading-none mb-3",r)},t))}},83398:function(e,r,t){"use strict";var n=t(24246),o=t(27378),l=t(60042),a=t.n(l);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){i(e,r,t[r])}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d={normal:"bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent",solid:"bg-gray-100 border border-border-100 focus:bg-light focus:border-accent",outline:"border border-border-base focus:border-accent"},c=o.forwardRef((function(e,r){var t=e.className,o=e.label,l=e.name,i=e.error,c=e.variant,f=void 0===c?"normal":c,b=e.shadow,m=void 0!==b&&b,p=e.inputClassName,y=u(e,["className","label","name","error","variant","shadow","inputClassName"]);return(0,n.jsxs)("div",{className:t,children:[o&&(0,n.jsx)("label",{htmlFor:l,className:"block text-body-dark font-semibold text-sm leading-none mb-3",children:o}),(0,n.jsx)("textarea",s({id:l,name:l,className:a()("px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0",m&&"focus:shadow",d[f],p),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",rows:4,ref:r},y)),i&&(0,n.jsx)("p",{className:"my-2 text-xs text-red-500",children:i})]})}));c.displayName="TextArea",r.Z=c},26343:function(e,r,t){"use strict";var n;t.d(r,{D:function(){return n}}),function(e){e.Billing="BILLING",e.Shipping="SHIPPING"}(n||(n={}))},29318:function(e){e.exports={radio_input:"radio_radio_input__8qSkI"}}}]);
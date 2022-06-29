"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1704],{91704:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(24246),a=r(86677),l=r(27378),o=r(96681),i=r(70655),s=r(25364),c=(0,l.createContext)(null),d=r(6337),u=function(e){return!e.isLayoutDirty&&e.willUpdate(!1)};function m(){var e=new Set,t=new WeakMap,r=function(){return e.forEach(u)};return{add:function(n){e.add(n),t.set(n,n.addEventListener("willUpdate",r))},remove:function(n){var a;e.delete(n),null===(a=t.get(n))||void 0===a||a(),t.delete(n),r()},dirty:r}}var f=function(e){var t,r,n=e.children,a=e.id,o=e.inheritId,u=void 0===o||o,f=(0,l.useContext)(s.p),h=(0,l.useContext)(c),x=(0,i.CR)((0,d.N)(),2),p=x[0],b=x[1],g=(0,l.useRef)(null),v=null!==(t=f.id)&&void 0!==t?t:h;null===g.current&&(u&&v&&(a=a?v+"-"+a:v),g.current={id:a,group:u&&null!==(r=null===f||void 0===f?void 0:f.group)&&void 0!==r?r:m()});var j=(0,l.useMemo)((function(){return(0,i.pi)((0,i.pi)({},g.current),{forceRender:p})}),[b]);return l.createElement(s.p.Provider,{value:j},n)},h=0,x=function(e){var t=e.children;return l.createElement(f,{id:(0,o.h)((function(){return"asl-".concat(h++)}))},t)},p=r(82128),b=r(68421),g=r(70465),v=r(29581),j=r(80495),y=r(38598),w=r(5648),N=r(46107),P=r(83669),k=r(89730),_=r(32832),C=function(e){var t,r,a=e.item,l=(0,k.$G)("common").t,o=(0,_.jD)(),i=o.isInStock,s=o.clearItemFromCart,c=o.addItemToCart,d=o.removeItemFromCart,u=(0,P.ZP)({amount:a.price}).price,m=(0,P.ZP)({amount:a.itemTotal}).price,f=!i(a.id);return(0,n.jsxs)(p.E.div,{layout:!0,initial:"from",animate:"to",exit:"from",variants:(0,N.I)(.25),className:"flex items-center py-4 px-4 sm:px-6 text-sm border-b border-solid border-border-200 border-opacity-75",children:[(0,n.jsx)("div",{className:"flex-shrink-0",children:(0,n.jsx)(w.Z,{value:a.quantity,onDecrement:function(e){e.stopPropagation(),d(a.id)},onIncrement:function(e){e.stopPropagation(),c(a,1)},variant:"pillVertical",disabled:f})}),(0,n.jsx)("div",{className:"w-10 sm:w-16 h-10 sm:h-16 flex items-center justify-center overflow-hidden bg-gray-100 mx-4 shrink-0 relative",children:(0,n.jsx)(j.E,{src:null!==(r=null===a||void 0===a?void 0:a.image)&&void 0!==r?r:null===y.U||void 0===y.U||null===(t=y.U.product)||void 0===t?void 0:t.placeholderImage,alt:a.name,layout:"fill",objectFit:"contain"})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{className:"font-bold text-heading",children:[a.name," "]}),(0,n.jsx)("p",{className:"my-2.5 font-semibold text-accent",children:u}),(0,n.jsxs)("span",{className:"text-xs text-body",children:[a.quantity," X ",a.unit]})]}),(0,n.jsx)("span",{className:"ltr:ml-auto rtl:mr-auto font-bold text-heading",children:m}),(0,n.jsxs)("button",{className:"w-7 h-7 ltr:ml-3 rtl:mr-3 ltr:-mr-2 rtl:-ml-2 flex items-center justify-center shrink-0 rounded-full text-muted transition-all duration-200 focus:outline-none hover:bg-gray-100 focus:bg-gray-100 hover:text-red-600 focus:text-red-600",onClick:function(){return s(a.id)},children:[(0,n.jsx)("span",{className:"sr-only",children:l("text-close")}),(0,n.jsx)(v.T,{className:"w-3 h-3"})]})]})},Z=r(53445),E=r(85645),O=r(91131),A=r(34178);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(s){i=!0,a=s}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(){var e=(0,k.$G)("common").t,t=(0,_.jD)(),r=t.items,l=t.totalUniqueItems,o=t.total,i=M((0,O.KO)(A.P),2),s=(i[0],i[1]),c=(0,a.useRouter)(),d=(0,P.ZP)({amount:o}).price;return(0,n.jsxs)("section",{className:"flex flex-col h-full relative",children:[(0,n.jsxs)("header",{className:"fixed max-w-md w-full top-0 z-10 bg-light py-4 px-6 flex items-center justify-between border-b border-border-200 border-opacity-75",children:[(0,n.jsxs)("div",{className:"flex text-accent font-semibold",children:[(0,n.jsx)(b.Z,{className:"shrink-0",width:24,height:22}),(0,n.jsx)("span",{className:"flex ltr:ml-2 rtl:mr-2",children:(0,E.U)(l,e("text-item"))})]}),(0,n.jsxs)("button",{onClick:function(){return s({display:!1,view:""})},className:"w-7 h-7 ltr:ml-3 rtl:mr-3 ltr:-mr-2 rtl:-ml-2 flex items-center justify-center rounded-full text-muted bg-gray-100 transition-all duration-200 focus:outline-none hover:bg-accent focus:bg-accent hover:text-light focus:text-light",children:[(0,n.jsx)("span",{className:"sr-only",children:e("text-close")}),(0,n.jsx)(v.T,{className:"w-3 h-3"})]})]}),(0,n.jsx)(x,{children:(0,n.jsx)(p.E.div,{layout:!0,className:"flex-grow pt-16 pb-20",children:r.length>0?null===r||void 0===r?void 0:r.map((function(e){return(0,n.jsx)(C,{item:e},e.id)})):(0,n.jsxs)(p.E.div,{layout:!0,initial:"from",animate:"to",exit:"from",variants:(0,N.I)(.25),className:"h-full flex flex-col items-center justify-center",children:[(0,n.jsx)(g.Z,{width:140,height:176}),(0,n.jsx)("h4",{className:"mt-6 text-base font-semibold",children:e("text-no-products")})]})})}),(0,n.jsx)("footer",{className:"fixed bottom-0 w-full max-w-md py-5 px-6 z-10 bg-light",children:(0,n.jsxs)("button",{className:"flex justify-between w-full h-12 md:h-14 p-1 text-sm font-bold bg-accent rounded-full shadow-700 transition-colors focus:outline-none hover:bg-accent-hover focus:bg-accent-hover",onClick:function(){r.find((function(e){return!Boolean(e.is_digital)}))?c.push(Z.Z.CHECKOUT):c.push(Z.Z.CHECKOUT_DIGITAL),s({display:!1,view:""})},children:[(0,n.jsx)("span",{className:"flex flex-1 items-center h-full px-5 text-light",children:e("text-checkout")}),(0,n.jsx)("span",{className:"flex items-center shrink-0 h-full bg-light text-accent rounded-full px-5",children:d})]})})]})}},70465:function(e,t,r){var n=r(24246);r(27378);t.Z=function(e){var t=e.width,r=void 0===t?231.91:t,a=e.height,l=void 0===a?292:a,o=e.className;return(0,n.jsxs)("svg",{width:r,height:l,className:o,viewBox:"0 0 231.91 292",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"linear-gradient",x1:"1",y1:"0.439",x2:"0.369",y2:"1",gradientUnits:"objectBoundingBox",children:[(0,n.jsx)("stop",{offset:"0",stopColor:"#029477"}),(0,n.jsx)("stop",{offset:"1",stopColor:"#009e7f"})]})}),(0,n.jsxs)("g",{id:"no_cart_in_bag_2","data-name":"no cart in bag 2",transform:"translate(-1388 -351)",children:[(0,n.jsx)("ellipse",{id:"Ellipse_2873","data-name":"Ellipse 2873",cx:"115.955",cy:"27.366",rx:"115.955",ry:"27.366",transform:"translate(1388 588.268)",fill:"#ddd",opacity:"0.25"}),(0,n.jsx)("path",{id:"Path_18691","data-name":"Path 18691",d:"M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z",transform:"translate(1403 381)",fill:"#009e7f"}),(0,n.jsx)("path",{id:"Rectangle_1852","data-name":"Rectangle 1852",d:"M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z",transform:"translate(1403 381)",fill:"#006854"}),(0,n.jsx)("path",{id:"Rectangle_1853","data-name":"Rectangle 1853",d:"M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z",transform:"translate(1403 381)",fill:"#006854"}),(0,n.jsx)("path",{id:"Path_18685","data-name":"Path 18685",d:"M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z",transform:"translate(1056.69 164.944)",fill:"#006854"}),(0,n.jsx)("path",{id:"Path_18686","data-name":"Path 18686",d:"M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z",transform:"translate(1057.793 95.684)",fill:"#009e7f"}),(0,n.jsx)("circle",{id:"Ellipse_2874","data-name":"Ellipse 2874",cx:"28.689",cy:"28.689",r:"28.689",transform:"translate(1473.823 511.046)",fill:"#006854"}),(0,n.jsx)("circle",{id:"Ellipse_2875","data-name":"Ellipse 2875",cx:"15.046",cy:"15.046",r:"15.046",transform:"translate(1481.401 547.854) rotate(-45)",fill:"#009e7f"}),(0,n.jsx)("path",{id:"Path_18687","data-name":"Path 18687",d:"M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",transform:"translate(1060.579 -35.703)",fill:"#006854"}),(0,n.jsx)("path",{id:"Path_18688","data-name":"Path 18688",d:"M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",transform:"translate(1060.566 -35.704)",fill:"#006854"}),(0,n.jsx)("path",{id:"Path_18689","data-name":"Path 18689",d:"M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",transform:"translate(970.304 -35.704)",fill:"#006854"}),(0,n.jsx)("path",{id:"Path_18690","data-name":"Path 18690",d:"M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",transform:"translate(970.318 -35.703)",fill:"#006854"}),(0,n.jsx)("path",{id:"Path_18692","data-name":"Path 18692",d:"M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z",transform:"translate(1292.301 101.536)",fill:"url(#linear-gradient)"}),(0,n.jsx)("path",{id:"Path_18693","data-name":"Path 18693",d:"M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z",transform:"translate(1118.301 101.536)",fill:"url(#linear-gradient)"})]})]})}},66859:function(e,t,r){r.d(t,{V:function(){return l}});var n=r(24246);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e,{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 12H4"})}))}},90393:function(e,t,r){r.d(t,{p:function(){return l}});var n=r(24246);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return(0,n.jsx)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e,{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}))}},5648:function(e,t,r){var n=r(24246),a=r(60042),l=r.n(a),o=r(90393),i=r(66859),s=r(89730),c={helium:"w-7 h-18 sm:w-20 sm:h-7 md:h-9 md:w-24 bg-accent flex-col-reverse sm:flex-row absolute sm:static bottom-3 ltr:right-3 rtl:left-3 sm:bottom-0 ltr:sm:right-0 ltr:sm:left-0 text-light rounded",neon:"w-full h-7 md:h-9 bg-accent text-light rounded",argon:"w-7 h-18 sm:w-20 sm:h-7 md:h-9 md:w-24 bg-accent flex-col-reverse sm:flex-row text-light rounded",oganesson:"w-20 h-8 md:w-24 md:h-10 bg-accent text-light rounded-full shadow-500",single:"order-5 sm:order-4 w-9 sm:w-24 h-24 sm:h-10 bg-accent text-light rounded-full flex-col-reverse sm:flex-row absolute sm:relative bottom-0 sm:bottom-auto ltr:right-0 rtl:left-0 ltr:sm:right-auto ltr:sm:left-auto",details:"order-5 sm:order-4 w-full sm:w-24 h-10 bg-accent text-light rounded-full",pillVertical:"flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full",big:"w-full h-14 rounded text-light bg-accent inline-flex justify-between",bordered:"h-14 rounded text-heading bg-transparent inline-flex justify-between shrink-0"};t.Z=function(e){var t=e.value,r=e.variant,a=void 0===r?"helium":r,d=e.onDecrement,u=e.onIncrement,m=e.className,f=e.disabled,h=(0,s.$G)("common").t;return(0,n.jsxs)("div",{className:l()("flex overflow-hidden",c[a],m),children:[(0,n.jsxs)("button",{onClick:d,className:l()("cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-none",{"px-3 py-3 sm:px-2":"single"===a,"px-5":"big"===a,"border border-gray-300 px-5 hover:border-accent hover:!bg-transparent ltr:rounded-l rtl:rounded-r":"bordered"===a,"hover:!bg-gray-100":"pillVertical"===a}),children:[(0,n.jsx)("span",{className:"sr-only",children:h("text-minus")}),(0,n.jsx)(i.V,{className:"h-3 w-3 stroke-2.5"})]}),(0,n.jsx)("div",{className:l()("flex flex-1 items-center justify-center px-3 text-sm font-semibold","pillVertical"===a&&"!px-0 text-heading","bordered"===a&&"border-t border-b border-gray-300 !px-8 text-heading"),children:t}),(0,n.jsxs)("button",{onClick:u,disabled:f,className:l()("cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-none",{"px-3 py-3 sm:px-2":"single"===a,"px-5":"big"===a,"border border-gray-300 px-5 hover:border-accent hover:!bg-transparent hover:!text-accent ltr:rounded-r rtl:rounded-l":"bordered"===a,"hover:!bg-gray-100":"pillVertical"===a}),title:f?h("text-out-stock"):"",children:[(0,n.jsx)("span",{className:"sr-only",children:h("text-plus")}),(0,n.jsx)(o.p,{className:"md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"})]})]})}}}]);
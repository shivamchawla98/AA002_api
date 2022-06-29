"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3089],{83089:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(24246),s=t(86677),l=t(74641),a=t(78248),i=t(76741),o=t(39258),c=t(89730),m=t(44144),u=t(84397),d=t(68301),x=t(29370);function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){f(e,r,t[r])}))}return e}var p=d.Ry().shape({name:d.Z_().required("error-name-required"),email:d.Z_().email("error-email-format").required("error-email-required"),password:d.Z_().required("error-password-required")});function b(){var e=(0,c.$G)("common").t,r=(0,m.SO)().openModal,t=(0,x.mr)(),s=t.mutate,l=t.isLoading,d=t.formError;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.l,{onSubmit:function(e){var r=e.name,t=e.email,n=e.password;s({name:r,email:t,password:n})},validationSchema:p,serverError:d,children:function(r){var t,s,c,m=r.register,u=r.formState.errors;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,h({label:e("text-name")},m("name"),{variant:"outline",className:"mb-5",error:e(null===(t=u.name)||void 0===t?void 0:t.message)})),(0,n.jsx)(a.Z,h({label:e("text-email")},m("email"),{type:"email",variant:"outline",className:"mb-5",error:e(null===(s=u.email)||void 0===s?void 0:s.message)})),(0,n.jsx)(i.Z,h({label:e("text-password")},m("password"),{error:e(null===(c=u.password)||void 0===c?void 0:c.message),variant:"outline",className:"mb-5"})),(0,n.jsx)("div",{className:"mt-8",children:(0,n.jsx)(o.Z,{className:"h-12 w-full",loading:l,disabled:l,children:e("text-register")})})]})}}),(0,n.jsxs)("div",{className:"relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8",children:[(0,n.jsx)("hr",{className:"w-full"}),(0,n.jsx)("span",{className:"absolute -top-2.5 bg-light px-2 ltr:left-2/4 ltr:-ml-4 rtl:right-2/4 rtl:-mr-4",children:e("text-or")})]}),(0,n.jsxs)("div",{className:"text-center text-sm text-body sm:text-base",children:[e("text-already-account")," ",(0,n.jsx)("button",{onClick:function(){return r("LOGIN_VIEW")},className:"font-semibold text-accent underline transition-colors duration-200 hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none ltr:ml-1 rtl:mr-1",children:e("text-login")})]})]})}function v(){var e=function(e){t.push("/".concat(e)),a()},r=(0,c.$G)("common").t,t=(0,s.useRouter)(),a=(0,m.SO)().closeModal;return(0,n.jsxs)("div",{className:"flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl",children:[(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(l.Z,{})}),(0,n.jsxs)("p",{className:"mt-4 mb-7 px-2 text-center text-sm leading-relaxed text-body sm:mt-5 sm:mb-10 sm:px-0 md:text-base",children:[r("registration-helper"),(0,n.jsx)("span",{onClick:function(){return e("terms")},className:"mx-1 cursor-pointer text-accent underline hover:no-underline",children:r("text-terms")}),"&",(0,n.jsx)("span",{onClick:function(){return e("privacy")},className:"cursor-pointer text-accent underline hover:no-underline ltr:ml-1 rtl:mr-1",children:r("text-policy")})]}),(0,n.jsx)(b,{})]})}}}]);
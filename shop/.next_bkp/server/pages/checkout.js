"use strict";
(() => {
var exports = {};
exports.id = 2222;
exports.ids = [2222];
exports.modules = {

/***/ 6343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ AddressType)
/* harmony export */ });
var AddressType;
(function(AddressType) {
    AddressType["Billing"] = 'BILLING';
    AddressType["Shipping"] = 'SHIPPING';
})(AddressType || (AddressType = {}));


/***/ }),

/***/ 2253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_general_ssr__WEBPACK_IMPORTED_MODULE_8__.b),
/* harmony export */   "default": () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3117);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5218);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1179);
/* harmony import */ var _framework_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6343);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3176);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5815);
/* harmony import */ var _framework_general_ssr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1476);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_4__, _store_checkout__WEBPACK_IMPORTED_MODULE_2__, _framework_user__WEBPACK_IMPORTED_MODULE_7__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_8__]);
([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_4__, _store_checkout__WEBPACK_IMPORTED_MODULE_2__, _framework_user__WEBPACK_IMPORTED_MODULE_7__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const ScheduleGrid = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(()=>__webpack_require__.e(/* import() */ 9039).then(__webpack_require__.bind(__webpack_require__, 9039))
, {
    loadableGenerated: {
        modules: [
            "checkout/index.tsx -> " + "@/components/checkout/schedule/schedule-grid"
        ]
    }
});
const AddressGrid = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "checkout/index.tsx -> " + "@/components/checkout/address-grid"
        ]
    },
    ssr: false
});
const ContactGrid = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(()=>__webpack_require__.e(/* import() */ 9586).then(__webpack_require__.bind(__webpack_require__, 9586))
, {
    loadableGenerated: {
        modules: [
            "checkout/index.tsx -> " + "@/components/checkout/contact/contact-grid"
        ]
    }
});
const RightSideView = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "checkout/index.tsx -> " + "@/components/checkout/right-side-view"
        ]
    },
    ssr: false
});
function CheckoutPage() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const { me  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_7__/* .useUser */ .aF)();
    const { id , address , profile  } = me ?? {};
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                noindex: true,
                nofollow: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-4 py-8 bg-gray-100 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center w-full max-w-5xl m-auto rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full space-y-6 lg:max-w-2xl",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContactGrid, {
                                    className: "p-5 bg-light shadow-700 md:p-8",
                                    contact: profile?.contact,
                                    label: t('text-contact-number'),
                                    count: 1
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddressGrid, {
                                    userId: id,
                                    className: "p-5 bg-light shadow-700 md:p-8",
                                    label: t('text-billing-address'),
                                    count: 2,
                                    //@ts-ignore
                                    addresses: address?.filter((item)=>item?.type === _framework_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .AddressType.Billing */ .D.Billing
                                    ),
                                    atom: _store_checkout__WEBPACK_IMPORTED_MODULE_2__/* .billingAddressAtom */ .Km,
                                    type: _framework_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .AddressType.Billing */ .D.Billing
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddressGrid, {
                                    userId: me?.id,
                                    className: "p-5 bg-light shadow-700 md:p-8",
                                    label: t('text-shipping-address'),
                                    count: 3,
                                    //@ts-ignore
                                    addresses: address?.filter((item)=>item?.type === _framework_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .AddressType.Shipping */ .D.Shipping
                                    ),
                                    atom: _store_checkout__WEBPACK_IMPORTED_MODULE_2__/* .shippingAddressAtom */ .du,
                                    type: _framework_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .AddressType.Shipping */ .D.Shipping
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full mt-10 mb-10 sm:mb-12 lg:mb-0 lg:w-96",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RightSideView, {})
                        })
                    ]
                })
            })
        ]
    }));
};
CheckoutPage.authenticationRequired = true;
CheckoutPage.getLayout = _components_layouts_layout__WEBPACK_IMPORTED_MODULE_4__/* .getLayout */ .G;

});

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 7812:
/***/ ((module) => {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ 4394:
/***/ ((module) => {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 6024:
/***/ ((module) => {

module.exports = require("little-state-machine");

/***/ }),

/***/ 9699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 153:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8782:
/***/ ((module) => {

module.exports = require("react-content-loader");

/***/ }),

/***/ 3599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 5452:
/***/ ((module) => {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 7139:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 3706:
/***/ ((module) => {

module.exports = import("apollo-upload-client");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,8598,9258,8649,7698,5584,6331,5511,8218,1179,4458,7129], () => (__webpack_exec__(2253)));
module.exports = __webpack_exports__;

})();
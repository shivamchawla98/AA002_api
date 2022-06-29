"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 4357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qW": () => (/* binding */ CART_KEY),
/* harmony export */   "nd": () => (/* binding */ AUTH_TOKEN_KEY),
/* harmony export */   "iK": () => (/* binding */ CHECKOUT),
/* harmony export */   "jH": () => (/* binding */ RTL_LANGUAGES)
/* harmony export */ });
/* unused harmony exports TOKEN, AUTH_PERMISSIONS, LIMIT, SUPER_ADMIN, CUSTOMER, SHOPS_LIMIT, PRODUCT_INITIAL_FETCH_LIMIT */
const CART_KEY = 'pick-cart';
const TOKEN = 'token';
const AUTH_TOKEN_KEY = 'auth_token';
const AUTH_PERMISSIONS = 'auth_permissions';
const LIMIT = 10;
const SUPER_ADMIN = 'super_admin';
const CUSTOMER = 'customer';
const CHECKOUT = 'pickbazar-checkout';
const SHOPS_LIMIT = 20;
const RTL_LANGUAGES = [
    'ar',
    'he'
];
const PRODUCT_INITIAL_FETCH_LIMIT = 30;


/***/ }),

/***/ 1120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4357);



function getDirection(language) {
    if (!language) return 'ltr';
    return _lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .RTL_LANGUAGES.includes */ .jH.includes(language) ? 'rtl' : 'ltr';
}
class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static async getInitialProps(ctx) {
        return next_document__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(ctx);
    }
    render() {
        const { locale  } = this.props.__NEXT_DATA__;
        const dir = getDirection(locale);
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=optional",
                        rel: "stylesheet"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    dir: dir,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        }));
    }
}



/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2652,3590], () => (__webpack_exec__(1120)));
module.exports = __webpack_exports__;

})();
"use strict";
exports.id = 1325;
exports.ids = [1325];
exports.modules = {

/***/ 6080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GeneralLayout)
/* harmony export */ });
/* unused harmony export getGeneralLayout */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5883);
/* harmony import */ var _mobile_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8036);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__, _header__WEBPACK_IMPORTED_MODULE_1__]);
([_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__, _header__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



function GeneralLayout({ children , layout  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-screen flex-col bg-gray-100 transition-colors duration-150",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                layout: layout
            }),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    }));
};
const getGeneralLayout = (page)=>/*#__PURE__*/ _jsxs(GeneralLayout, {
        layout: page.props.layout,
        children: [
            page,
            /*#__PURE__*/ _jsx(MobileNavigation, {})
        ]
    })
;

});

/***/ }),

/***/ 4383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a9": () => (/* binding */ PRODUCTS_PER_PAGE),
/* harmony export */   "Fi": () => (/* binding */ TYPES_PER_PAGE),
/* harmony export */   "kL": () => (/* binding */ CATEGORIES_PER_PAGE),
/* harmony export */   "LX": () => (/* binding */ AUTHORS_PER_PAGE),
/* harmony export */   "Vc": () => (/* binding */ MANUFACTURERS_PER_PAGE)
/* harmony export */ });
/* unused harmony export SHOPS_PER_PAGE */
const PRODUCTS_PER_PAGE = 30;
const TYPES_PER_PAGE = 15;
const CATEGORIES_PER_PAGE = 1000;
const SHOPS_PER_PAGE = 30;
const AUTHORS_PER_PAGE = 30;
const MANUFACTURERS_PER_PAGE = 30;


/***/ })

};
;
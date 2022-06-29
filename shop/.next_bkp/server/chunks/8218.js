"use strict";
exports.id = 8218;
exports.ids = [8218];
exports.modules = {

/***/ 905:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var _store_display_header_search_atom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(972);
/* harmony import */ var _store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6942);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5218);
/* harmony import */ var _store_authorization_atom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(269);
/* harmony import */ var _lib_use_is_homepage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8113);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_authorization_atom__WEBPACK_IMPORTED_MODULE_8__, jotai__WEBPACK_IMPORTED_MODULE_3__, _store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_5__, _store_display_header_search_atom__WEBPACK_IMPORTED_MODULE_4__]);
([_store_authorization_atom__WEBPACK_IMPORTED_MODULE_8__, jotai__WEBPACK_IMPORTED_MODULE_3__, _store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_5__, _store_display_header_search_atom__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











const CartCounterIconButton = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_7__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/layouts/header-minimal.tsx -> " + "@/components/cart/cart-counter-icon-button"
        ]
    },
    ssr: false
});
const AuthorizedMenu = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_7__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/layouts/header-minimal.tsx -> " + "./menu/authorized-menu"
        ]
    },
    ssr: false
});
const JoinButton = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_7__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/layouts/header-minimal.tsx -> " + "./menu/join-button"
        ]
    },
    ssr: false
});
const HeaderMinimal = ({ layout  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    const [_, setDisplayHeaderSearch] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_store_display_header_search_atom__WEBPACK_IMPORTED_MODULE_4__/* .displayHeaderSearchAtom */ .y);
    const [displayMobileHeaderSearch] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_5__/* .displayMobileHeaderSearchAtom */ .a);
    const [isAuthorize] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_8__/* .authorizationAtom */ .O);
    const isHomePage = (0,_lib_use_is_homepage__WEBPACK_IMPORTED_MODULE_9__/* .useIsHomePage */ .M)();
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (!isHomePage) {
            setDisplayHeaderSearch(false);
        }
    }, [
        isHomePage,
        setDisplayHeaderSearch
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('site-header-with-search h-14 md:h-16 lg:h-22')
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderMinimal);

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
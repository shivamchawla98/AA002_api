"use strict";
exports.id = 5519;
exports.ids = [5519];
exports.modules = {

/***/ 495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ next_image__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8579);



/***/ }),

/***/ 1434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9894);



const Link = ({ href , children , variant , title , target , className , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                "inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none px-3 py-0 h-9 text-sm bg-accent text-light border border-transparent hover:bg-accent-hover transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700'": variant === 'button'
            }, className),
            title: title,
            ...props,
            children: children
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 3445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = {
    HOME: '/grocery',
    CHECKOUT: '/checkout',
    CHECKOUT_DIGITAL: '/checkout/digital',
    GUEST_CHECKOUT: '/checkout/guest',
    PROFILE: '/profile',
    CHANGE_PASSWORD: '/change-password',
    ORDERS: '/orders',
    REFUNDS: '/refunds',
    HELP: '/help',
    LOGOUT: '/logout',
    OFFERS: '/offers',
    ORDER_RECEIVED: '/order-received',
    PRODUCT: '/products',
    ORDER: '/order',
    PRIVACY: '/privacy',
    TERMS: '/terms',
    CONTACT: '/contact',
    SHOPS: '/shops/SHOP',
    DOWNLOADS: '/downloads',
    AUTHORS: '/authors',
    MANUFACTURERS: '/manufacturers',
    SEARCH: '/search'
};


/***/ })

};
;
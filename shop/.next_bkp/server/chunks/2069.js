"use strict";
exports.id = 2069;
exports.ids = [2069];
exports.modules = {

/***/ 2069:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_cart_check_bag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8421);
/* harmony import */ var _lib_format_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5645);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3669);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4178);
/* harmony import */ var _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2730);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2451);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_2__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_5__, _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_use_price__WEBPACK_IMPORTED_MODULE_2__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_5__, _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const CartCounterButton = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
    const { totalUniqueItems , total  } = (0,_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_4__/* .useCart */ .jD)();
    const [_, setDisplayCart] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_3__/* .drawerAtom */ .P);
    const { price: totalPrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        amount: total
    });
    function handleCartSidebar() {
        setDisplayCart({
            display: true,
            view: 'cart'
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "hidden product-cart lg:flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 ltr:right-0 rtl:left-0 z-40 shadow-900 rounded ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none bg-accent text-light text-sm font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover",
        onClick: handleCartSidebar,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "flex pb-0.5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_cart_check_bag__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        className: "shrink-0",
                        width: 14,
                        height: 16
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "flex ltr:ml-2 rtl:mr-2",
                        children: (0,_lib_format_string__WEBPACK_IMPORTED_MODULE_7__/* .formatString */ .U)(totalUniqueItems, t('common:text-item'))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "bg-light rounded w-full py-2 px-2 text-accent mt-3",
                children: totalPrice
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartCounterButton);

});

/***/ }),

/***/ 8421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CartCheckBag = ({ width , height , className  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: width,
        height: height,
        className: className,
        viewBox: "0 0 12.686 16",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            transform: "translate(-27.023 -2)",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "translate(27.023 5.156)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z",
                            transform: "translate(-53.023 -101.005)",
                            fill: "currentColor"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                    transform: "translate(30.274 2)",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z",
                            transform: "translate(-157.039)",
                            fill: "currentColor"
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartCheckBag);


/***/ }),

/***/ 5645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ formatString)
/* harmony export */ });
function formatString(count, string) {
    if (!count) return `${count} ${string}`;
    return count > 1 ? `${count} ${string}s` : `${count} ${string}`;
}


/***/ })

};
;
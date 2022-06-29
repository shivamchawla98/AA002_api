"use strict";
exports.id = 7697;
exports.ids = [7697];
exports.modules = {

/***/ 7697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1434);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(495);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3445);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2478);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3669);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_7__]);
_lib_use_price__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const Radon = ({ product , className  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
    const { name , slug , image , author , min_price , max_price , product_type  } = product ?? {};
    const { price , basePrice , discount  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)({
        amount: product.sale_price ? product.sale_price : product.price,
        baseAmount: product.price
    });
    const { price: minPrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)({
        amount: min_price
    });
    const { price: maxPrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)({
        amount: max_price
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('product-card cart-type-radon h-full flex flex-col overflow-hidden duration-200', className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_5__/* .ROUTES.PRODUCT */ .Z.PRODUCT}/${slug}`,
                className: "cursor-pointer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                    src: image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__/* .productPlaceholder */ .Hb,
                    alt: name,
                    layout: "responsive",
                    width: 600,
                    height: 888,
                    className: "product-image rounded-lg"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "pt-4 flex flex-col shrink-0 space-y-2",
                children: [
                    name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_5__/* .ROUTES.PRODUCT */ .Z.PRODUCT}/${slug}`,
                        className: "text-sm md:text-base text-heading font-semibold transition-colors hover:text-orange-500",
                        title: name,
                        children: name
                    }),
                    author && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-xs md:text-sm text-gray-400",
                        children: [
                            t('text-by'),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_5__/* .ROUTES.AUTHORS */ .Z.AUTHORS}/${author?.slug}`,
                                className: "text-body transition-colors hover:text-orange-500 ltr:ml-1 rtl:mr-1",
                                children: author?.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center shrink-0",
                        children: product_type.toLowerCase() === 'variable' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-sm md:text-base text-orange-500 font-semibold",
                            children: [
                                minPrice,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-heading",
                                    children: " - "
                                }),
                                maxPrice
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center space-x-2.5 rtl:space-x-reverse",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-base text-orange-500 font-semibold",
                                    children: price
                                }),
                                basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                    className: "text-xs text-gray-400 font-semibold ltr:mr-2 rtl:ml-2",
                                    children: basePrice
                                }),
                                discount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-xs text-accent",
                                    children: [
                                        "(",
                                        t('text-save'),
                                        " ",
                                        discount,
                                        ")"
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Radon);

});

/***/ })

};
;
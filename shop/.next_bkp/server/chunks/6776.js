"use strict";
exports.id = 6776;
exports.ids = [6776];
exports.modules = {

/***/ 6776:
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
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3669);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3445);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2478);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_4__]);
_lib_use_price__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const Krypton = ({ product , className  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
    // const { name, slug, image } = product ?? {};
    // const { price, basePrice, discount } = usePrice({
    //   amount: product.sale_price ? product.sale_price : product.price!,
    //   baseAmount: product.price,
    // });
    const { name , image , slug , min_price , max_price , product_type  } = product ?? {};
    const { price , basePrice , discount  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: product.sale_price ? product.sale_price : product.price,
        baseAmount: product.price
    });
    const { price: minPrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: min_price
    });
    const { price: maxPrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: max_price
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_6__/* .ROUTES.PRODUCT */ .Z.PRODUCT}/${slug}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('product-card cart-type-krypton h-full rounded border border-border-200 bg-light overflow-hidden cursor-pointer transition-shadow duration-200 hover:shadow-sm', className),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex items-center justify-center w-auto h-48 sm:h-64",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('text-product-image')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                            src: image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_7__/* .productPlaceholder */ .Hb,
                            alt: name,
                            layout: "fill",
                            objectFit: "contain",
                            className: "product-image"
                        }),
                        discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute top-3 ltr:right-3 rtl:left-3 md:top-4 ltr:md:right-4 rtl:md:left-4 rounded-full text-xs leading-6 font-semibold px-2 md:px-2.5 bg-yellow-500 text-light",
                            children: discount
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "p-3 md:p-6 text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-sm text-heading font-semibold truncate mb-2",
                            children: name
                        }),
                        product_type.toLowerCase() === 'variable' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm text-sub-heading",
                                    children: minPrice
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: " - "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm text-sub-heading",
                                    children: maxPrice
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm text-sub-heading",
                                    children: price
                                }),
                                basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                    className: "text-sm text-muted ltr:ml-2 rtl:mr-2",
                                    children: basePrice
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Krypton);

});

/***/ })

};
;
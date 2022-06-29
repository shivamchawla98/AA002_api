"use strict";
exports.id = 3717;
exports.ids = [3717];
exports.modules = {

/***/ 3717:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(495);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3669);
/* harmony import */ var _components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8111);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4144);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2478);
/* harmony import */ var _components_icons_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1917);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_4__, _lib_use_price__WEBPACK_IMPORTED_MODULE_3__]);
([_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_4__, _lib_use_price__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const Helium = ({ product , className  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
    // const { name, image, unit, quantity } = product ?? {};
    // const { price, basePrice, discount } = usePrice({
    //   amount: product.sale_price ? product.sale_price : product.price!,
    //   baseAmount: product.price,
    // });
    const { name , image , unit , quantity , min_price , max_price , product_type  } = product ?? {};
    const { price , basePrice , discount  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)({
        amount: product.sale_price ? product.sale_price : product.price,
        baseAmount: product.price
    });
    const { price: minPrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)({
        amount: min_price
    });
    const { price: maxPrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)({
        amount: max_price
    });
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__/* .useModalAction */ .SO)();
    function handleProductQuickView() {
        return openModal('PRODUCT_DETAILS', product.slug);
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('product-card cart-type-helium rounded border border-border-200 h-full bg-light overflow-hidden transition-shadow duration-200 hover:shadow-sm', className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onClick: handleProductQuickView,
                className: "relative flex items-center justify-center w-auto h-48 sm:h-64",
                role: "button",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t('text-product-image')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                        src: image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_7__/* .productPlaceholder */ .Hb,
                        alt: name,
                        layout: "fill",
                        objectFit: "contain",
                        className: "product-image"
                    }),
                    discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-3 ltr:right-3 rtl:left-3 md:top-4 ltr:md:right-4 rtl:md:left-4 rounded-full text-xs leading-6 font-semibold px-1.5 sm:px-2 md:px-2.5 bg-yellow-500 text-light",
                        children: discount
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "p-3 md:py-6 md:p-5 relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        onClick: handleProductQuickView,
                        role: "button",
                        className: "text-heading text-sm font-semibold truncate mb-2",
                        children: name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-muted text-xs",
                        children: unit
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between min-h-6 mt-7 md:mt-8 relative",
                        children: [
                            product_type.toLowerCase() === 'variable' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-accent text-sm md:text-[15px] font-semibold",
                                                children: minPrice
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: " - "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-accent text-sm md:text-[15px] font-semibold",
                                                children: maxPrice
                                            })
                                        ]
                                    }),
                                    Number(quantity) > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: handleProductQuickView,
                                        className: "order-5 sm:order-4 py-2 px-3 sm:px-4 border-2 border-border-100 flex items-center justify-center sm:justify-start text-sm font-semibold rounded-full text-accent hover:text-light bg-light hover:bg-accent hover:border-accent transition-colors duration-300 focus:outline-none focus:bg-accent focus:border-accent focus:text-light",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_cart__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                className: "w-4 h-4 ltr:mr-2 rtl:ml-2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: t('text-cart')
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                                className: "text-xs text-muted text-opacity-75 absolute -top-4 md:-top-5 italic",
                                                children: basePrice
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-accent text-sm md:text-base font-semibold",
                                                children: price
                                            })
                                        ]
                                    }),
                                    Number(quantity) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_4__/* .AddToCart */ .o, {
                                        data: product,
                                        variant: "single"
                                    })
                                ]
                            }),
                            Number(quantity) <= 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-red-500 rounded text-xs text-light px-2 py-1",
                                children: t('text-out-stock')
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Helium);

});

/***/ })

};
;
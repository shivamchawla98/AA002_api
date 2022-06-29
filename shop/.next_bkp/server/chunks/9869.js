"use strict";
exports.id = 9869;
exports.ids = [9869];
exports.modules = {

/***/ 9869:
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
/* harmony import */ var _components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8111);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3669);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4144);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2478);
/* harmony import */ var _components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(393);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_3__, _lib_use_price__WEBPACK_IMPORTED_MODULE_4__]);
([_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_3__, _lib_use_price__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const Argon = ({ product , className  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
    // const { name, image, quantity } = product ?? {};
    // const { price, basePrice, discount } = usePrice({
    //   amount: product.sale_price ? product.sale_price : product.price!,
    //   baseAmount: product.price,
    // });
    const { name , image , quantity , min_price , max_price , product_type  } = product ?? {};
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
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__/* .useModalAction */ .SO)();
    function handleProductQuickView() {
        return openModal('PRODUCT_DETAILS', product.slug);
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('product-card cart-type-argon rounded bg-light overflow-hidden shadow-downfall-sm transition-all duration-200 hover:shadow-downfall-lg transform hover:-translate-y-0.5 h-full', className),
        onClick: handleProductQuickView,
        role: "button",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex items-center justify-center w-auto h-48 sm:h-52",
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
                        className: "absolute top-3 ltr:left-3 rtl:right-3 md:top-[22px] ltr:md:left-4 rtl:md:right-4 rounded text-xs leading-6 font-semibold px-1.5 sm:px-2 md:px-2.5 bg-accent text-light",
                        children: discount
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute top-3 ltr:right-3 rtl:left-3 md:top-4 ltr:md:right-4 rtl:md:left-4",
                        children: [
                            product_type.toLowerCase() === 'variable' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: Number(quantity) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: handleProductQuickView,
                                    className: "flex items-center justify-center text-sm transition-colors border rounded w-7 h-7 md:w-9 md:h-9 text-heading bg-light border-border-200 hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_8__/* .PlusIcon */ .p, {
                                        className: "w-5 h-5 stroke-2"
                                    })
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: Number(quantity) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_3__/* .AddToCart */ .o, {
                                    variant: "argon",
                                    data: product
                                })
                            }),
                            Number(quantity) <= 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-2 py-1 text-xs bg-red-500 rounded text-light",
                                children: t('text-out-stock')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "p-3 md:p-6",
                children: [
                    product_type.toLowerCase() === 'variable' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm font-semibold md:text-base text-heading",
                                children: minPrice
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: " - "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm font-semibold md:text-base text-heading",
                                children: maxPrice
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm font-semibold md:text-base text-heading",
                                children: price
                            }),
                            basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                className: "text-xs md:text-sm text-body ltr:ml-2 rtl:mr-2",
                                children: basePrice
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-xs md:text-sm text-body",
                        children: name
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Argon);

});

/***/ })

};
;
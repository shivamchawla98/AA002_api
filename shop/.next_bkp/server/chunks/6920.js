"use strict";
exports.id = 6920;
exports.ids = [6920];
exports.modules = {

/***/ 4679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PopularProductsGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_loaders_product_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(640);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3372);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8654);
/* harmony import */ var _components_products_cards_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5094);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(110);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6403);
/* harmony import */ var _components_ui_section_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3685);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);










function PopularProductsGrid({ className , limit =10 , variables  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('common');
    const { products , isLoading , error  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_5__/* .usePopularProducts */ .os)(variables);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_4__["default"], {
        message: error.message
    }));
    if (!isLoading && !products.length) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_block__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            title: t('text-popular-products'),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                text: "text-not-found",
                className: "mx-auto w-7/12"
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_block__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        title: t('text-popular-products'),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, 'w-full'),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]",
                children: isLoading && !products.length ? (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(limit, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_product_loader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        uniqueKey: `product-${i}`
                    }, i)
                ) : products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_cards_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        product: product
                    }, product?.id)
                )
            })
        })
    }));
};


/***/ }),

/***/ 7927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W_": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation),
/* harmony export */   "o3": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs),
/* harmony export */   "tl": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination),
/* harmony export */   "pt": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay),
/* harmony export */   "tq": () => (/* reexport safe */ swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper),
/* harmony export */   "o5": () => (/* reexport safe */ swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_0__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







});

/***/ })

};
;
"use strict";
exports.id = 5576;
exports.ids = [5576];
exports.modules = {

/***/ 5576:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7927);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(495);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2478);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const BannerWithPagination = ({ banners , slug  })=>{
    // console.log("@@@@@@@@@@@@@@@@@@@@@@@@BANNERS")
    // console.log(banners);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative compact",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "overflow-hidden -z-1 rounded-xl",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .Swiper */ .tq, {
                    id: "banner",
                    spaceBetween: 30,
                    centeredSlides: true,
                    loop: true,
                    resizeObserver: true,
                    allowTouchMove: true,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false
                    },
                    // pagination={true}
                    modules: [
                        _components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .Autoplay */ .pt,
                        _components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .tl,
                        _components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .W_
                    ],
                    pagination: {
                        bulletClass: 'swiper-pagination-bullet !w-2.5 !h-2.5 !p-1 !rounded-full bg-gray-400 !border-0 !opacity-70',
                        bulletActiveClass: '!w-3 !h-3 !bg-accent',
                        clickableClass: 'cursor-pointer',
                        clickable: true
                    },
                    children: banners?.map((banner, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_1__/* .SwiperSlide */ .o5, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative w-full h-full max-h-[240px] md:max-h-[610px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                                    className: "w-full h-full",
                                    src: banner.image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_3__/* .productPlaceholder */ .Hb,
                                    alt: banner.title ?? '',
                                    layout: "responsive",
                                    width: 1800,
                                    height: 610
                                })
                            })
                        }, idx)
                    )
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerWithPagination);

});

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
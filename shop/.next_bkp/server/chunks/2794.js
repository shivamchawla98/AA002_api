"use strict";
exports.id = 2794;
exports.ids = [2794];
exports.modules = {

/***/ 2794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(770);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7927);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(495);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2478);
/* harmony import */ var _components_ui_search_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5589);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2451);
/* harmony import */ var _store_display_header_search_atom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(972);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_3__, _store_display_header_search_atom__WEBPACK_IMPORTED_MODULE_8__, jotai__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_slider__WEBPACK_IMPORTED_MODULE_3__, _store_display_header_search_atom__WEBPACK_IMPORTED_MODULE_8__, jotai__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const BannerWithSearch = ({ banners , layout  })=>{
    const [_, setDisplayHeaderSearch] = (0,jotai__WEBPACK_IMPORTED_MODULE_7__.useAtom)(_store_display_header_search_atom__WEBPACK_IMPORTED_MODULE_8__/* .displayHeaderSearchAtom */ .y);
    const onWaypointPositionChange = ({ currentPosition  })=>{
        if (!currentPosition || currentPosition === 'above') {
            setDisplayHeaderSearch(true);
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('hidden lg:block relative', {
            '!block': layout === 'minimal'
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "overflow-hidden -z-1",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_3__/* .Swiper */ .tq, {
                    id: "banner",
                    loop: true,
                    modules: [
                        _components_ui_slider__WEBPACK_IMPORTED_MODULE_3__/* .Navigation */ .W_
                    ],
                    resizeObserver: true,
                    allowTouchMove: false,
                    slidesPerView: 1,
                    children: banners?.map((banner, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_3__/* .SwiperSlide */ .o5, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative w-full h-screen', {
                                    'max-h-140': layout === 'standard',
                                    'max-h-[320px] md:max-h-[680px]': layout === 'minimal'
                                }),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .E, {
                                        className: "w-full h-full min-h-140",
                                        src: banner.image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__/* .productPlaceholder */ .Hb,
                                        alt: banner.title ?? '',
                                        layout: "fill",
                                        objectFit: "cover"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('p-5 md:px-20 mt-8 absolute inset-0 w-full flex flex-col items-center justify-center text-center lg:space-y-10', {
                                            'space-y-5 md:!space-y-8': layout === 'minimal'
                                        }),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('text-2xl lg:text-4xl xl:text-5xl tracking-tight text-heading font-bold', {
                                                    '!text-accent': layout === 'minimal'
                                                }),
                                                children: banner?.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm lg:text-base xl:text-lg text-heading",
                                                children: banner?.description
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "max-w-3xl w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_search_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                    label: "search"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_2__.Waypoint, {
                                                onLeave: ()=>setDisplayHeaderSearch(true)
                                                ,
                                                onEnter: ()=>setDisplayHeaderSearch(false)
                                                ,
                                                onPositionChange: onWaypointPositionChange
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, idx)
                    )
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerWithSearch);

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
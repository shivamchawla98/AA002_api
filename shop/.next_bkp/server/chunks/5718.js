"use strict";
exports.id = 5718;
exports.ids = [5718];
exports.modules = {

/***/ 5718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_loaders_bakery_categories_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6139);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3372);
/* harmony import */ var _components_ui_solid_boxed_categoty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_solid_boxed_categoty__WEBPACK_IMPORTED_MODULE_3__]);
_components_ui_solid_boxed_categoty__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const SlidingVerticalRectangleCategories = ({ notFound , categories , loading  })=>{
    if (loading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "hidden xl:block",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-52 flex justify-center mt-8 px-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_bakery_categories_loader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full bg-gray-100",
        children: !notFound ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "pt-5 px-4 lg:p-8 lg:pb-0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_solid_boxed_categoty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                items: categories,
                className: "py-8"
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-h-full pt-6 pb-8 px-9 lg:p-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                text: "text-no-category",
                className: "h-96"
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlidingVerticalRectangleCategories);

});

/***/ }),

/***/ 2960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6078);
/* harmony import */ var _components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9198);
/* harmony import */ var _components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9195);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7927);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2478);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(495);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_8__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











const CategoryItem = ({ item  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { pathname , query  } = router;
    const selectedQueries = query.category;
    const onCategoryClick = (slug)=>{
        if (selectedQueries === slug) {
            const { category , ...rest } = query;
            router.push({
                pathname,
                query: {
                    ...rest
                }
            }, undefined, {
                scroll: false
            });
            return;
        }
        router.push({
            pathname,
            query: {
                ...query,
                category: slug
            }
        }, undefined, {
            scroll: false
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('text-center rounded bg-light relative overflow-hidden cursor-pointer border-2', selectedQueries === item.slug ? 'border-accent' : 'border-light'),
        role: "button",
        onClick: ()=>onCategoryClick(item?.slug)
        ,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center h-32 w-auto relative overflow-hidden mb-3 my-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_10__/* .Image */ .E, {
                    src: item?.image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_9__/* .productPlaceholder */ .Hb,
                    alt: item?.name,
                    layout: "fill",
                    objectFit: "contain"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-sm font-semibold text-heading text-center px-4 pb-4 block",
                children: item.name
            })
        ]
    }));
};
function SolidBoxedCategoryMenu({ items  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
    const { isRTL  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_5__/* .useIsRTL */ .S)();
    const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const nextRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const breakpoints = {
        320: {
            slidesPerView: 2
        },
        440: {
            slidesPerView: 3
        },
        620: {
            slidesPerView: 4
        },
        820: {
            slidesPerView: 5
        },
        1100: {
            slidesPerView: 6
        },
        1280: {
            slidesPerView: 7
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_8__/* .Swiper */ .tq, {
                id: "category-card-menu",
                modules: [
                    _components_ui_slider__WEBPACK_IMPORTED_MODULE_8__/* .Navigation */ .W_
                ],
                navigation: {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                    disabledClass: 'swiper-button-disabled',
                    hiddenClass: 'swiper-button-hidden'
                },
                breakpoints: breakpoints,
                slidesPerView: 7,
                spaceBetween: 10,
                children: items?.map((category, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_8__/* .SwiperSlide */ .o5, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryItem, {
                            item: category
                        })
                    }, idx)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: prevRef,
                className: "category-slider-prev w-8 h-8 flex items-center justify-center text-heading bg-light shadow-300 outline-none rounded-full absolute top-1/2 -mt-4 z-10 cursor-pointer ltr:-left-3 rtl:-right-3 ltr:lg:-left-4 focus:outline-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t('text-previous')
                    }),
                    isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_7__/* .ArrowNextIcon */ .z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_6__/* .ArrowPrevIcon */ .W, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: nextRef,
                className: "category-slider-next w-8 h-8 flex items-center justify-center text-heading bg-light shadow-300 outline-none rounded-full absolute top-1/2 -mt-4 z-10 cursor-pointer ltr:-right-3 rtl:-left-3 ltr:lg:-right-4 rtl:lg:-left-4 focus:outline-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t('text-next')
                    }),
                    isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_6__/* .ArrowPrevIcon */ .W, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_7__/* .ArrowNextIcon */ .z, {})
                ]
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SolidBoxedCategoryMenu);

});

/***/ })

};
;
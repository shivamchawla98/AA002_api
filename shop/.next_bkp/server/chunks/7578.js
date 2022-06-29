"use strict";
exports.id = 7578;
exports.ids = [7578];
exports.modules = {

/***/ 8455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ArrowNarrowLeft = ({ width , height , strokeWidth =2 , className ,  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: width,
        height: height,
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: strokeWidth,
            d: "M7 16l-4-4m0 0l4-4m-4 4h18"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowNarrowLeft);


/***/ }),

/***/ 8628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const CategoryBadges = ({ onClose , categories , basePath  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const handleClick = (path)=>{
        next_router__WEBPACK_IMPORTED_MODULE_1___default().push(path);
        if (onClose) {
            onClose();
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full mt-4 md:mt-6 pt-4 md:pt-6 flex flex-row items-start border-t border-border-200 border-opacity-60",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-sm font-semibold text-heading capitalize ltr:mr-6 rtl:ml-6 py-1",
                children: t('text-categories')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row flex-wrap",
                children: categories?.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>handleClick(`${basePath}?category=${category.slug}`)
                        ,
                        className: "lowercase text-sm text-heading tracking-wider whitespace-nowrap py-1 px-2.5 bg-transparent border border-border-200 rounded ltr:mr-2 rtl:ml-2 mb-2 transition-colors hover:border-accent hover:text-accent focus:outline-none focus:bg-opacity-100",
                        children: category.name
                    }, category.id)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryBadges);


/***/ }),

/***/ 7578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_back_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5823);
/* harmony import */ var _components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8111);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3669);
/* harmony import */ var _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5382);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_get_variations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9370);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_ui_truncate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9883);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _category_badges__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8628);
/* harmony import */ var _variation_price__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2446);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3445);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2451);
/* harmony import */ var _variation_groups__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6615);
/* harmony import */ var _lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4045);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4144);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(770);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1474);
/* harmony import */ var _attributes_context__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3125);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _lib_display_product_preview_images__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6917);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_2__, _variation_price__WEBPACK_IMPORTED_MODULE_12__, _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__, _lib_use_price__WEBPACK_IMPORTED_MODULE_3__, _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_20__, jotai__WEBPACK_IMPORTED_MODULE_15__]);
([_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_2__, _variation_price__WEBPACK_IMPORTED_MODULE_12__, _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__, _lib_use_price__WEBPACK_IMPORTED_MODULE_3__, _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_20__, jotai__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
























const Details = ({ product , backBtn =true , isModal =false ,  })=>{
    const { name , image , description , unit , categories , gallery , type , quantity , shop , slug ,  } = product ?? {};
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
    const [_, setShowStickyShortDetails] = (0,jotai__WEBPACK_IMPORTED_MODULE_15__.useAtom)(_store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_20__/* .stickyShortDetailsAtom */ .f);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_18__/* .useModalAction */ .SO)();
    const { attributes  } = (0,_attributes_context__WEBPACK_IMPORTED_MODULE_21__/* .useAttributes */ .Ch)();
    const { price , basePrice , discount  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)({
        amount: product?.sale_price ? product?.sale_price : product?.price,
        baseAmount: product?.price
    });
    const navigate = (path)=>{
        router.push(path);
        closeModal();
    };
    const variations = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>(0,_lib_get_variations__WEBPACK_IMPORTED_MODULE_6__/* .getVariations */ .y)(product?.variations)
    , [
        product?.variations
    ]);
    const isSelected = (0,_lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_17__/* .isVariationSelected */ .V)(variations, attributes);
    let selectedVariation = {};
    // if (isSelected) {
    //   selectedVariation = product?.variation_options?.find((o: any) =>
    //     isEqual(
    //       o.options.map((v: any) => v.value).sort(),
    //       Object.values(attributes).sort()
    //     )
    //   );
    // }
    const scrollDetails = ()=>{
        react_scroll__WEBPACK_IMPORTED_MODULE_10__.scroller.scrollTo('details', {
            smooth: true,
            offset: -80
        });
    };
    const onWaypointPositionChange = ({ currentPosition  })=>{
        if (!currentPosition || currentPosition === 'above') {
            setShowStickyShortDetails(true);
        }
    };
    const hasVariations = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(variations);
    const previewImages = (0,_lib_display_product_preview_images__WEBPACK_IMPORTED_MODULE_23__/* .displayImage */ ._)(selectedVariation?.image, gallery, image);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "rounded-lg bg-light",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col border-b md:flex-row border-border-200 border-opacity-70",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between mb-8 lg:mb-10",
                                children: [
                                    backBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_back_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                                    discount && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-3 text-xs font-semibold leading-6 bg-yellow-500 rounded-full text-light ltr:ml-auto rtl:mr-auto",
                                        children: discount
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-full product-gallery",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__/* .ThumbsCarousel */ .X, {
                                    gallery: previewImages,
                                    hideThumbs: previewImages.length <= 1
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_19__.Waypoint, {
                                onLeave: ()=>setShowStickyShortDetails(true)
                                ,
                                onEnter: ()=>setShowStickyShortDetails(false)
                                ,
                                onPositionChange: onWaypointPositionChange,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_22___default()(`font-semibold text-lg md:text-xl xl:text-2xl tracking-tight text-heading`, {
                                                'cursor-pointer transition-colors hover:text-accent': isModal
                                            }),
                                            ...isModal && {
                                                onClick: ()=>navigate(`${_lib_routes__WEBPACK_IMPORTED_MODULE_14__/* .ROUTES.PRODUCT */ .Z.PRODUCT}/${slug}`)
                                            },
                                            children: name
                                        }),
                                        unit && !hasVariations && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "block mt-2 text-sm font-normal text-body md:mt-3",
                                            children: unit
                                        }),
                                        description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-3 text-sm leading-7 md:mt-4 text-body",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_truncate__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                character: 150,
                                                ...!isModal && {
                                                    onClick: ()=>scrollDetails()
                                                    ,
                                                    compressText: 'common:text-see-more'
                                                },
                                                children: description
                                            })
                                        }),
                                        hasVariations ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex items-center my-5 md:my-10",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variation_price__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                        selectedVariation: selectedVariation,
                                                        minPrice: product.min_price,
                                                        maxPrice: product.max_price
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variation_groups__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                        variations: variations
                                                    })
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "flex items-center my-5 md:my-10",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                                                    className: "text-2xl font-semibold no-underline md:text-3xl text-accent",
                                                    children: price
                                                }),
                                                basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                                    className: "text-sm font-normal md:text-base text-muted ltr:ml-2 rtl:mr-2",
                                                    children: basePrice
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-col items-center mt-4 md:mt-6 lg:flex-row",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mb-3 lg:mb-0 w-full lg:max-w-[400px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_2__/* .AddToCart */ .o, {
                                                        data: product,
                                                        variant: "big",
                                                        variation: selectedVariation,
                                                        disabled: selectedVariation?.is_disable || !isSelected
                                                    })
                                                }),
                                                !hasVariations && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: Number(quantity) > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-base text-body whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7",
                                                        children: [
                                                            quantity,
                                                            " ",
                                                            t('text-pieces-available')
                                                        ]
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7",
                                                        children: t('text-out-stock')
                                                    })
                                                }),
                                                !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(selectedVariation) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-base text-body whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7",
                                                    children: selectedVariation?.is_disable || selectedVariation.quantity === 0 ? t('text-out-stock') : `${selectedVariation.quantity} ${t('text-pieces-available')}`
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            !!categories?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_category_badges__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                categories: categories,
                                basePath: `/${type?.slug}`,
                                onClose: closeModal
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_10__.Element, {
                name: "details",
                className: "px-5 py-4 border-b lg:px-16 lg:py-14 border-border-200 border-opacity-70",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mb-4 text-lg font-semibold tracking-tight text-heading md:mb-6",
                        children: t('text-details')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm text-body",
                        children: description
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);

});

/***/ }),

/***/ 5823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_arrow_narrow_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8455);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





const BackButton = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "inline-flex items-center justify-center text-accent font-semibold transition-colors hover:text-accent-hover focus:text-accent-hover focus:outline-none",
        onClick: router.back,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_narrow_left__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('w-5 h-5 ltr:mr-2 rtl:ml-2', {
                    'transform rotate-180': router.locale === 'ar' || router.locale === 'he'
                }),
                strokeWidth: 1.7
            }),
            t('text-back')
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButton);


/***/ })

};
;
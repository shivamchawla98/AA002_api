"use strict";
exports.id = 7701;
exports.ids = [7701];
exports.modules = {

/***/ 6064:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ AddToCartAlt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var _lib_cart_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(895);
/* harmony import */ var _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2730);
/* harmony import */ var _store_quick_cart_generate_cart_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4903);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9258);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__]);
_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const AddToCartAlt = ({ data , variant ='helium' , counterVariant , counterClass , variation , disabled  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
    const { addItemToCart , removeItemFromCart , isInStock , getItemFromCart , isInCart ,  } = (0,_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__/* .useCart */ .jD)();
    const item = (0,_store_quick_cart_generate_cart_item__WEBPACK_IMPORTED_MODULE_3__/* .generateCartItem */ .z)(data, variation);
    // const [quantity, setQuantity] = useState<number>(() =>
    //   isInCart(item?.id) ? getItemFromCart(item.id).quantity : 1
    // );
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1);
    const increment = (e)=>{
        e.stopPropagation();
        setQuantity((prev)=>prev + 1
        );
    // addItemToCart(item, 1);
    // if (!isInCart(item.id)) {
    //   cartAnimation(e);
    // }
    };
    const handleAddClick = (e)=>{
        e.stopPropagation();
        addItemToCart(item, quantity);
        setQuantity(1);
        if (!isInCart(item.id)) {
            (0,_lib_cart_animation__WEBPACK_IMPORTED_MODULE_7__/* .cartAnimation */ .L)(e);
        }
    };
    const decrement = (e)=>{
        e.stopPropagation();
        setQuantity((prev)=>{
            if (prev > 1) {
                return prev - 1;
            }
            return prev;
        });
    // removeItemFromCart(item.id);
    };
    const outOfStock = isInCart(item?.id) && !isInStock(item.id);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " flex items-center space-x-3 rtl:space-x-reverse",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_counter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                value: quantity,
                onDecrement: decrement,
                onIncrement: increment,
                variant: counterVariant || variant,
                className: counterClass,
                disabled: outOfStock
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "h-14 w-full flex-shrink max-w-sm",
                onClick: handleAddClick,
                disabled: disabled || outOfStock,
                children: t('text-add-to-cart')
            })
        ]
    }));
};

});

/***/ }),

/***/ 6885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BadgeGroups = ({ title , children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-start w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "pb-3 text-sm font-semibold capitalize text-heading",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-row flex-wrap",
                children: children
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BadgeGroups);


/***/ }),

/***/ 7701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3669);
/* harmony import */ var _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5382);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_get_variations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9370);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_truncate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9883);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _variation_price__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2446);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3445);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2451);
/* harmony import */ var _variation_groups__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6615);
/* harmony import */ var _lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4045);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(770);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1474);
/* harmony import */ var _attributes_context__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3125);
/* harmony import */ var _components_products_add_to_cart_add_to_cart_alt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6064);
/* harmony import */ var _badge_groups__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6885);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1434);
/* harmony import */ var _lib_display_product_preview_images__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6917);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products_add_to_cart_add_to_cart_alt__WEBPACK_IMPORTED_MODULE_18__, _variation_price__WEBPACK_IMPORTED_MODULE_10__, _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_2__, _lib_use_price__WEBPACK_IMPORTED_MODULE_1__, _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_16__, jotai__WEBPACK_IMPORTED_MODULE_12__]);
([_components_products_add_to_cart_add_to_cart_alt__WEBPACK_IMPORTED_MODULE_18__, _variation_price__WEBPACK_IMPORTED_MODULE_10__, _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_2__, _lib_use_price__WEBPACK_IMPORTED_MODULE_1__, _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_16__, jotai__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






















const BookDetails = ({ product , isModal =false  })=>{
    const { name , image , description , categories , gallery , type , sku , author , manufacturer , tags , is_digital ,  } = product ?? {};
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const [_, setShowStickyShortDetails] = (0,jotai__WEBPACK_IMPORTED_MODULE_12__.useAtom)(_store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_16__/* .stickyShortDetailsAtom */ .f);
    const { attributes  } = (0,_attributes_context__WEBPACK_IMPORTED_MODULE_17__/* .useAttributes */ .Ch)();
    const { price , basePrice , discount  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
        amount: product?.sale_price ? product?.sale_price : product?.price,
        baseAmount: product?.price ?? 0
    });
    const variations = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>(0,_lib_get_variations__WEBPACK_IMPORTED_MODULE_4__/* .getVariations */ .y)(product?.variations)
    , [
        product?.variations
    ]);
    const isSelected = (0,_lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_14__/* .isVariationSelected */ .V)(variations, attributes);
    let selectedVariation = {};
    if (isSelected) {
        selectedVariation = product?.variation_options?.find((o)=>lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default()(o.options.map((v)=>v.value
            ).sort(), Object.values(attributes).sort())
        );
    }
    const scrollDetails = ()=>{
        react_scroll__WEBPACK_IMPORTED_MODULE_9__.scroller.scrollTo('details', {
            smooth: true,
            offset: -80
        });
    };
    const onWaypointPositionChange = ({ currentPosition  })=>{
        if (!currentPosition || currentPosition === 'above') {
            setShowStickyShortDetails(true);
        }
    };
    const hasVariations = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(variations);
    const previewImages = (0,_lib_display_product_preview_images__WEBPACK_IMPORTED_MODULE_21__/* .displayImage */ ._)(selectedVariation?.image, gallery, image);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "max-w-screen-xl px-5 py-16 mx-auto rounded-lg bg-light xl:px-0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col border-b lg:flex-row lg:space-x-10 xl:space-x-16 rtl:lg:space-x-reverse pb-14 border-border-200 border-opacity-70",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:w-1/2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-full py-5 bg-gray-100 product-gallery md:py-16",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_2__/* .ThumbsCarousel */ .X, {
                                gallery: previewImages,
                                hideThumbs: previewImages.length <= 1,
                                aspectRatio: "auto"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-start mt-8 lg:w-1/2 lg:px-0 lg:mt-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_15__.Waypoint, {
                                onLeave: ()=>setShowStickyShortDetails(true)
                                ,
                                onEnter: ()=>setShowStickyShortDetails(false)
                                ,
                                onPositionChange: onWaypointPositionChange,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                                name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-xl font-bold tracking-tight lg:text-2xl xl:text-3xl text-heading",
                                                    children: name
                                                }),
                                                Boolean(is_digital) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "ltr:ml-5 rtl:mr-5 px-3 py-1.5 bg-accent-400 rounded text-xs font-normal text-white",
                                                    children: t('text-downloadable')
                                                })
                                            ]
                                        }),
                                        author?.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center mt-4 space-x-5 rtl:space-x-reverse md:mt-5",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "flex items-center text-sm font-normal text-body",
                                                children: [
                                                    t('text-by-author'),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                        href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_11__/* .ROUTES.AUTHORS */ .Z.AUTHORS}/${author?.slug}`,
                                                        className: "text-sm font-bold transition-colors text-heading ltr:ml-2 rtl:mr-2 hover:text-accent",
                                                        children: author?.name
                                                    })
                                                ]
                                            })
                                        }),
                                        hasVariations ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center mt-5 mb-7",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variation_price__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                            selectedVariation: selectedVariation,
                                                            minPrice: product.min_price,
                                                            maxPrice: product.max_price
                                                        }),
                                                        isSelected && discount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "px-2 py-1 text-xs font-semibold leading-6 uppercase rounded-md ltr:ml-4 rtl:mr-4 bg-accent-200 text-accent",
                                                            children: [
                                                                discount,
                                                                " ",
                                                                t('text-off')
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_variation_groups__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                        variations: variations,
                                                        variant: "outline"
                                                    })
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "flex items-center mt-5 mb-7 space-x-4 rtl:space-x-reverse",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                                                    className: "text-2xl font-bold no-underline md:text-3xl text-heading",
                                                    children: price
                                                }),
                                                basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                                                    className: "text-base font-normal md:text-base text-muted",
                                                    children: basePrice
                                                }),
                                                discount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "px-2 py-1 text-xs font-semibold leading-6 uppercase rounded-md bg-accent-200 text-accent",
                                                    children: [
                                                        discount,
                                                        " ",
                                                        t('text-off')
                                                    ]
                                                })
                                            ]
                                        }),
                                        description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-sm leading-7 text-body mt-7",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_truncate__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                character: 150,
                                                ...!isModal && {
                                                    onClick: ()=>scrollDetails()
                                                    ,
                                                    compressText: 'common:text-see-more'
                                                },
                                                children: description
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-col items-center pb-5 mt-4 border-b md:mt-6 md:pb-8 lg:flex-row border-border-200 border-opacity-70",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-full mb-3 lg:mb-0",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_add_to_cart_add_to_cart_alt__WEBPACK_IMPORTED_MODULE_18__/* .AddToCartAlt */ .j, {
                                                    data: product,
                                                    variant: "bordered",
                                                    variation: selectedVariation,
                                                    disabled: selectedVariation?.is_disable || !isSelected
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid w-full grid-cols-1 gap-5 mt-8 md:grid-cols-3",
                                children: [
                                    !!categories?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_badge_groups__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                        title: t('text-categories'),
                                        children: categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                href: `/${type?.slug}/search/?category=${category.slug}`,
                                                className: "text-sm text-body ltr:pr-0.5 rtl:pl-0.5 bg-transparent transition-colors hover:text-accent focus:outline-none focus:bg-opacity-100 ltr:last:pr-0 rtl:last:pl-0 after:content-[','] last:after:content-['']",
                                                children: category.name
                                            }, category.id)
                                        )
                                    }),
                                    !!tags?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_badge_groups__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                        title: t('text-tags'),
                                        children: tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                href: `/${type?.slug}/search/?tags=${tag.slug}`,
                                                className: "text-sm text-body ltr:pr-0.5 rtl:pl-0.5 bg-transparent transition-colors hover:text-accent focus:outline-none focus:bg-opacity-100 ltr:last:pr-0 rtl:last:pl-0 after:content-[','] last:after:content-['']",
                                                children: tag.name
                                            }, tag.id)
                                        )
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col items-start w-full overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "pb-3 text-sm font-semibold capitalize text-heading",
                                                children: t('text-sku')
                                            }),
                                            hasVariations ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-full text-sm truncate text-body",
                                                title: selectedVariation.sku ?? 'sku',
                                                children: selectedVariation.sku
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-full text-sm truncate text-body",
                                                title: sku ?? 'sku',
                                                children: sku
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_9__.Element, {
                name: "details",
                className: "pt-5 lg:pt-14",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mb-4 text-xl font-bold tracking-tight lg:text-3xl text-heading md:mb-6",
                        children: t('text-details')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm leading-relaxed text-body",
                        children: description
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col space-y-3 mt-7",
                        children: [
                            name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-sm text-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "font-semibold text-heading ltr:pr-1 rtl:pl-1",
                                        children: [
                                            t('text-title'),
                                            " :"
                                        ]
                                    }),
                                    name
                                ]
                            }),
                            author?.name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "flex items-center text-sm text-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "order-1 font-semibold text-heading ltr:pr-1 rtl:pl-1",
                                        children: [
                                            t('text-author'),
                                            " :"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_11__/* .ROUTES.AUTHORS */ .Z.AUTHORS}/${author?.slug}`,
                                        className: "order-2 hover:text-accent",
                                        children: author?.name
                                    })
                                ]
                            }),
                            manufacturer?.name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "flex items-center text-sm text-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "order-1 font-semibold text-heading ltr:pr-1 rtl:pl-1",
                                        children: [
                                            t('text-publisher'),
                                            " :"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                        href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_11__/* .ROUTES.MANUFACTURERS */ .Z.MANUFACTURERS}/${manufacturer?.slug}`,
                                        className: "order-2 hover:text-accent",
                                        children: manufacturer?.name
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookDetails);

});

/***/ })

};
;
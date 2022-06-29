"use strict";
exports.id = 1412;
exports.ids = [1412];
exports.modules = {

/***/ 2585:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3372);
/* harmony import */ var _components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1276);
/* harmony import */ var _components_ui_section_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3685);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3445);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(110);
/* harmony import */ var _framework_author__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6013);
/* harmony import */ var _components_ui_author_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4435);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8654);
/* harmony import */ var _components_ui_loaders_author_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const TopAuthorsGrid = ()=>{
    const { authors , isLoading , error  } = (0,_framework_author__WEBPACK_IMPORTED_MODULE_6__/* .useTopAuthors */ .V)({
        limit: 10
    });
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_5__["default"], {
        message: error.message
    }));
    if (isLoading && !authors.length) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_block__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            title: "text-top-authors",
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_4__/* .ROUTES.AUTHORS */ .Z.AUTHORS,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hidden xl:block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4",
                    children: (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(7, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_author_loader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            uniqueKey: `author-${i}`
                        }, i)
                    )
                })
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_block__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: "text-top-authors",
        href: _lib_routes__WEBPACK_IMPORTED_MODULE_4__/* .ROUTES.AUTHORS */ .Z.AUTHORS,
        children: !isLoading && !authors.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-h-full pt-6 pb-8 px-9 lg:p-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                text: "text-no-category",
                className: "h-96"
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                items: authors,
                className: "pt-8 -mt-8",
                children: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_author_card__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        item: item
                    })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopAuthorsGrid);

});

/***/ }),

/***/ 6047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ call_to_action)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(495);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(1434);
// EXTERNAL MODULE: ./src/components/ui/section-block.tsx
var section_block = __webpack_require__(3685);
// EXTERNAL MODULE: ./src/settings/site.ts
var site = __webpack_require__(8598);
;// CONCATENATED MODULE: ./src/assets/app-store-btn.png
/* harmony default export */ const app_store_btn = ({"src":"/_next/static/media/app-store-btn.88c719fc.png","height":100,"width":338,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAHlBMVEUhISENDQ06OjovLy9GRkYuLi4pKSlycnJTU1OFhYVM4A/MAAAABHRSTlP9/vr9VZpxrAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUCJljYGZnZGVlY2NkYOJk4GBhYWEAAAJ6AEIZwM9qAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/play-store-btn.png
/* harmony default export */ const play_store_btn = ({"src":"/_next/static/media/play-store-btn.35cb9c66.png","height":100,"width":334,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEUpJSMyMywYGBgWUlkHBwchISEgSixJSUk9Pj5DNtcDAAAAB3RSTlP9/v382tz9bd5AjwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUCJljYGZjYGRgYmJhYGZk4GDnYGcFAAGXADoL/6IuAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/assets/pattern.png
/* harmony default export */ const pattern = ({"src":"/_next/static/media/pattern.65db14c3.png","height":960,"width":3600,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEVMaXFVVVUs5kEsAAAAAnRSTlMAAQGU/a4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMSURBVAiZY2BkQAMAACMAAspiUfQAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/cta/call-to-action.tsx









const CallToAction = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    return(/*#__PURE__*/ jsx_runtime_.jsx(section_block/* default */.Z, {
        className: "last:pb-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex w-full relative px-6 md:px-10 py-12 xl:px-32 xl:py-32 bg-gray-100 overflow-hidden rounded-xl",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                    src: pattern,
                    layout: "fill",
                    alt: "background pattern"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-center lg:justify-between w-full z-0",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center lg:items-start max-w-[500px]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-lg sm:text-xl font-semibold lg:font-bold uppercase mb-4",
                                    children: t('text-cta-header')
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-2xl sm:text-4xl sm:!leading-[3rem] text-center lg:text-left rtl:lg:text-right",
                                    dangerouslySetInnerHTML: {
                                        __html: t('text-cta-description')
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center mt-8 lg:mt-14 space-x-6 rtl:space-x-reverse",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(ui_link/* default */.Z, {
                                            href: site/* siteSettings.cta.app_store_link */.U.cta.app_store_link,
                                            className: "w-32 md:w-48",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                                                src: app_store_btn,
                                                width: 338,
                                                height: 100,
                                                layout: "responsive",
                                                alt: "app store button"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ui_link/* default */.Z, {
                                            href: site/* siteSettings.cta.app_store_link */.U.cta.app_store_link,
                                            className: "w-32 md:w-48",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                                                src: play_store_btn,
                                                width: 334,
                                                height: 100,
                                                layout: "responsive",
                                                alt: "play store button"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden lg:block absolute bottom-0 right-10 rtl:left-10 xl:right-28 rtl:xl:left-28 2xl:right-64 rtl:2xl:left-64 lg:w-[360px] xl:w-[400px] 3xl:w-[480px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                                src: site/* siteSettings.cta.mockup_img_src */.U.cta.mockup_img_src,
                                width: 400,
                                height: 386,
                                layout: "responsive",
                                alt: "mockup"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const call_to_action = (CallToAction);


/***/ }),

/***/ 1412:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CompactLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_section_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3685);
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7463);
/* harmony import */ var _components_categories_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9900);
/* harmony import */ var _components_cta_call_to_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6047);
/* harmony import */ var _components_products_group_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6233);
/* harmony import */ var _components_products_popular_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4679);
/* harmony import */ var _components_author_top_authors_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2585);
/* harmony import */ var _components_banners_banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1437);
/* harmony import */ var _components_manufacturer_top_manufacturers_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2733);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _products_grids_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1350);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_manufacturer_top_manufacturers_grid__WEBPACK_IMPORTED_MODULE_9__, _components_author_top_authors_grid__WEBPACK_IMPORTED_MODULE_7__, _filter_bar__WEBPACK_IMPORTED_MODULE_2__]);
([_components_manufacturer_top_manufacturers_grid__WEBPACK_IMPORTED_MODULE_9__, _components_author_top_authors_grid__WEBPACK_IMPORTED_MODULE_7__, _filter_bar__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












function CompactLayout({ variables  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-1 flex-col bg-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_filter_bar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                className: "lg:hidden",
                variables: variables.categories
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "mt-6 block w-full xl:overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_block__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_banners_banner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            layout: "compact",
                            variables: variables.types
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_popular_products__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        variables: variables.popularProducts
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_categories_categories__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        layout: "compact",
                        variables: variables.categories
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_group_products__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_block__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        title: t('text-new-arrival'),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_products_grids_home__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            column: "five",
                            variables: {
                                ...variables.products,
                                sortedBy: 'DESC',
                                orderBy: 'created_at'
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_author_top_authors_grid__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_manufacturer_top_manufacturers_grid__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cta_call_to_action__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 2733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3372);
/* harmony import */ var _components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1276);
/* harmony import */ var _components_manufacturer_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2862);
/* harmony import */ var _components_ui_section_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3685);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3445);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(110);
/* harmony import */ var _framework_manufacturer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2438);
/* harmony import */ var _components_ui_loaders_manufacturer_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2840);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const breakpoints = {
    320: {
        slidesPerView: 1
    },
    600: {
        slidesPerView: 2
    },
    960: {
        slidesPerView: 3
    },
    1280: {
        slidesPerView: 4
    },
    1600: {
        slidesPerView: 5
    },
    2600: {
        slidesPerView: 7
    }
};
const TopManufacturersGrid = ()=>{
    const { manufacturers , isLoading , error  } = (0,_framework_manufacturer__WEBPACK_IMPORTED_MODULE_7__/* .useTopManufacturers */ .a)({
        limit: 10
    });
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_6__["default"], {
        message: error.message
    }));
    if (isLoading && manufacturers.length) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_block__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            title: "text-top-manufacturer",
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_5__/* .ROUTES.MANUFACTURERS */ .Z.MANUFACTURERS,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid w-full grid-flow-col gap-6",
                    children: (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(4, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_manufacturer_loader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            uniqueKey: `manufacturer-${i}`
                        }, i)
                    )
                })
            })
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_block__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: "text-top-manufacturer",
        href: _lib_routes__WEBPACK_IMPORTED_MODULE_5__/* .ROUTES.MANUFACTURERS */ .Z.MANUFACTURERS,
        children: !isLoading && !manufacturers.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-h-full pt-6 pb-8 px-9 lg:p-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                text: "text-no-category",
                className: "h-96"
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                items: manufacturers,
                breakpoints: breakpoints,
                spaceBetween: 30,
                children: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_manufacturer_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        item: item
                    })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopManufacturersGrid);

});

/***/ }),

/***/ 6233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ GroupProducts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(495);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(1434);
// EXTERNAL MODULE: ./src/framework/graphql/product.ts
var product = __webpack_require__(6403);
;// CONCATENATED MODULE: ./src/lib/is-even.ts
function isEven(number) {
    return number % 2 === 0;
}

// EXTERNAL MODULE: ./src/lib/placeholders.tsx + 4 modules
var placeholders = __webpack_require__(2478);
// EXTERNAL MODULE: ./src/components/ui/error-message.tsx
var error_message = __webpack_require__(110);
// EXTERNAL MODULE: ./src/components/ui/section-block.tsx
var section_block = __webpack_require__(3685);
// EXTERNAL MODULE: ./src/lib/routes.ts
var routes = __webpack_require__(3445);
;// CONCATENATED MODULE: ./src/components/products/group-products.tsx









function GroupProducts() {
    const { products , error  } = (0,product/* useProducts */.rn)({
        tags: 'combo',
        limit: 3
    });
    if (error) return(/*#__PURE__*/ jsx_runtime_.jsx(error_message["default"], {
        message: error.message
    }));
    return(/*#__PURE__*/ jsx_runtime_.jsx(section_block/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid w-full gap-5 sm:grid-cols-3 lg:grid-cols-4",
            children: products.slice(0, 3).map((product, idx)=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx(ui_link/* default */.Z, {
                    href: `${routes/* ROUTES.PRODUCT */.Z.PRODUCT}/${product.slug}`,
                    className: "relative grid w-full bg-gray-100 lg:even:col-span-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                        src: product.image?.original ?? placeholders/* productPlaceholder */.Hb,
                        alt: "Advertisement image",
                        width: isEven(idx) ? 960 : 1560,
                        height: 960,
                        layout: "responsive",
                        className: "rounded-lg lg:rounded-2xl"
                    })
                }, product.id));
            })
        })
    }));
};


/***/ }),

/***/ 1276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6078);
/* harmony import */ var _components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9198);
/* harmony import */ var _components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9195);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7927);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








/**
 * Common carousel
 * @param items any[]
 * @param children (item: { [key: string]: any }) => React.ReactNode
 * @param className string
 * @param rest SwiperOptions
 * @returns
 */ const Carousel = ({ items , children , className , ...rest })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const { isRTL  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_3__/* .useIsRTL */ .S)();
    const { 0: prevEl , 1: setPrevEl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: nextEl , 1: setNextEl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 3
        },
        900: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 5
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 24
        },
        1400: {
            slidesPerView: 7,
            spaceBetween: 30
        },
        1700: {
            slidesPerView: 8,
            spaceBetween: 30
        },
        2600: {
            slidesPerView: 10,
            spaceBetween: 40
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('relative', className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .Swiper */ .tq, {
                id: "author-card-menu",
                className: "!px-3",
                modules: [
                    _components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W_
                ],
                navigation: {
                    prevEl,
                    nextEl,
                    // prevEl: prevRef.current!, // Assert non-null
                    // nextEl: nextRef.current!, // Assert non-null
                    disabledClass: 'swiper-button-disabled',
                    hiddenClass: 'swiper-button-hidden'
                },
                // navigation={true}
                breakpoints: breakpoints,
                ...rest,
                children: items?.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_6__/* .SwiperSlide */ .o5, {
                        className: "carousel-slide py-2",
                        children: children(item)
                    }, idx)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: (node)=>setPrevEl(node)
                ,
                // ref={prevRef}
                className: "author-slider-prev w-8 h-8 flex items-center justify-center text-heading bg-light shadow-300 outline-none rounded-full absolute top-1/2 -mt-4 z-[5] cursor-pointer ltr:-left-3 rtl:-right-3 ltr:lg:-left-4 rtl:lg:-right-4 focus:outline-none transition-colors hover:text-orange-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t('text-previous')
                    }),
                    isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_5__/* .ArrowNextIcon */ .z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_4__/* .ArrowPrevIcon */ .W, {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: (node)=>setNextEl(node)
                ,
                // ref={nextRef}
                className: "author-slider-next w-8 h-8 flex items-center justify-center text-heading bg-light shadow-300 outline-none rounded-full absolute top-1/2 -mt-4 z-[5] cursor-pointer ltr:-right-3 rtl:-left-3 ltr:lg:-right-4 rtl:lg:-left-4 focus:outline-none transition-colors hover:text-orange-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: t('text-next')
                    }),
                    isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_4__/* .ArrowPrevIcon */ .W, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_5__/* .ArrowNextIcon */ .z, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);

});

/***/ })

};
;
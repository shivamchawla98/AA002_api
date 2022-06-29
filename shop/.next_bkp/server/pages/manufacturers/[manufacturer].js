"use strict";
(() => {
var exports = {};
exports.id = 5935;
exports.ids = [5935];
exports.modules = {

/***/ 4794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(495);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_get_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1379);
/* harmony import */ var _components_icons_social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4131);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2478);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1434);







const Details = ({ manufacturer  })=>{
    const { name , slug , website , image , cover_image , socials  } = manufacturer ?? {};
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col md:flex-row mb-12 xl:mb-20 border border-gray-200",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full md:w-1/3 flex flex-col items-center p-5 lg:p-8 2xl:p-10 overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-32 h-32 2xl:w-40 2xl:h-40 border-2 border-gray-300 rounded-full overflow-hidden flex shrink-0 justify-center items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                            src: image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__/* .avatarPlaceholder */ .Pb,
                            alt: name,
                            width: 160,
                            height: 160
                        })
                    }),
                    name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "w-full text-xl 2xl:text-2xl truncate font-bold text-heading mt-5 text-center",
                        title: name,
                        children: name
                    }),
                    website && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        href: website,
                        className: "text-sm text-body mt-2 transition-colors hover:text-accent",
                        children: website
                    }),
                    socials && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center mt-5 space-x-5 rtl:space-x-reverse",
                        children: socials?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: item.url,
                                target: "_blank",
                                className: `text-body focus:outline-none transition-colors duration-300 hover:text-accent cursor-pointer`,
                                rel: "noreferrer",
                                children: (0,_lib_get_icon__WEBPACK_IMPORTED_MODULE_3__/* .getIcon */ .q)({
                                    iconList: _components_icons_social__WEBPACK_IMPORTED_MODULE_4__,
                                    iconName: item.icon,
                                    className: 'w-4 h-4'
                                })
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full md:w-2/3 bg-gray-50 relative overflow-hidden hidden md:flex justify-center items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                    src: cover_image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__/* .productPlaceholder */ .Hb,
                    alt: "cover image",
                    width: 1100,
                    height: 370
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);


/***/ }),

/***/ 8453:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getStaticPaths),
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8780);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8649);
/* harmony import */ var _client_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4383);
/* harmony import */ var _gql_manufacturers_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4701);
/* harmony import */ var _gql_products_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2709);
/* harmony import */ var _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(375);
/* harmony import */ var _utils_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5286);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_2__]);
_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const apolloClient = (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .initializeApollo */ ["in"])();
const getStaticPaths = async ({ locales ,  })=>{
    tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default()(locales, 'locales is not defined');
    const { data: { manufacturers  } ,  } = await apolloClient.query({
        query: _gql_manufacturers_graphql__WEBPACK_IMPORTED_MODULE_3__/* .ManufacturersDocument */ .Y4,
        variables: {
            first: 100
        }
    });
    tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default()(manufacturers, 'manufacturers is not defined');
    const paths = manufacturers.data.flatMap((manufacturer)=>locales.map((locale)=>({
                params: {
                    manufacturer: manufacturer.slug
                },
                locale
            })
        )
    );
    return {
        paths,
        fallback: 'blocking'
    };
};
const getStaticProps = async ({ params , locale  })=>{
    const { manufacturer  } = params;
    await apolloClient.query({
        query: _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_5__/* .SettingsDocument */ .m9
    });
    const { data  } = await apolloClient.query({
        query: _gql_manufacturers_graphql__WEBPACK_IMPORTED_MODULE_3__/* .ManufacturerDocument */ .xb,
        variables: {
            slug: manufacturer
        }
    });
    await apolloClient.query({
        query: _gql_products_graphql__WEBPACK_IMPORTED_MODULE_4__/* .ProductsDocument */ .Sz,
        variables: (0,_utils_products__WEBPACK_IMPORTED_MODULE_6__/* .getProducts */ .X)({
            limit: _client_variables__WEBPACK_IMPORTED_MODULE_7__/* .PRODUCTS_PER_PAGE */ .a9,
            manufacturer: manufacturer.toString()
        })
    });
    if (!data?.manufacturer) {
        return {
            notFound: true
        };
    }
    return (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .addApolloState */ ._p)(apolloClient, {
        props: {
            manufacturer: data.manufacturer,
            variables: {
                limit: _client_variables__WEBPACK_IMPORTED_MODULE_7__/* .PRODUCTS_PER_PAGE */ .a9,
                manufacturer: manufacturer.toString()
            },
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, [
                'common'
            ])
        },
        revalidate: 120
    });
};

});

/***/ }),

/***/ 2949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ (useWindowSize_default()))
});

;// CONCATENATED MODULE: external "react-use/lib/useWindowSize"
const useWindowSize_namespaceObject = require("react-use/lib/useWindowSize");
var useWindowSize_default = /*#__PURE__*/__webpack_require__.n(useWindowSize_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/use-window-size.ts



/***/ }),

/***/ 6820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _framework_manufacturer_ssr__WEBPACK_IMPORTED_MODULE_16__.F),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_manufacturer_ssr__WEBPACK_IMPORTED_MODULE_16__.b),
/* harmony export */   "default": () => (/* binding */ Manufacturer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_filter_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8036);
/* harmony import */ var _components_layouts_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6080);
/* harmony import */ var _components_manufacturer_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4794);
/* harmony import */ var _components_products_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1949);
/* harmony import */ var _components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2819);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6403);
/* harmony import */ var _lib_use_window_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2949);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4178);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6197);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2451);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5218);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(689);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_sticky_box__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _framework_manufacturer_ssr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8453);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_10__, _components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__, _components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__, _components_layouts_general__WEBPACK_IMPORTED_MODULE_3__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__, jotai__WEBPACK_IMPORTED_MODULE_11__, _framework_manufacturer_ssr__WEBPACK_IMPORTED_MODULE_16__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_10__, _components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__, _components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__, _components_layouts_general__WEBPACK_IMPORTED_MODULE_3__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__, jotai__WEBPACK_IMPORTED_MODULE_11__, _framework_manufacturer_ssr__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

















const CartCounterButton = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_12__["default"])(null, {
    loadableGenerated: {
        modules: [
            "manufacturers/[manufacturer].tsx -> " + "@/components/cart/cart-counter-button"
        ]
    },
    ssr: false
});
function Manufacturer({ manufacturer , variables  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)('common');
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_13__.useRouter)();
    const { products , loadMore , isLoadingMore , isLoading , hasMore , error  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_7__/* .useProducts */ .rn)({
        ...variables,
        ...query
    });
    const { width  } = (0,_lib_use_window_size__WEBPACK_IMPORTED_MODULE_8__/* .useWindowSize */ .i)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_manufacturer_details__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        manufacturer: manufacturer
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mb-8 text-3xl font-semibold tracking-tight text-heading",
                        children: t('text-books')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .r, {
                        products: products,
                        loadMore: loadMore,
                        isLoading: isLoading,
                        isLoadingMore: isLoadingMore,
                        hasMore: hasMore,
                        error: error,
                        column: "five"
                    })
                ]
            }),
            width > 1023 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartCounterButton, {})
        ]
    }));
};
const GetLayout = (page)=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_14__.useTranslation)('common');
    const [_, setDrawerView] = (0,jotai__WEBPACK_IMPORTED_MODULE_11__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__/* .drawerAtom */ .P);
    const type = page.props.manufacturer?.type?.slug;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_general__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full bg-light",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto flex min-h-screen w-full max-w-1920 px-5 py-10 rtl:space-x-reverse lg:space-x-10 xl:py-14 xl:px-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden w-80 shrink-0 lg:block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_sticky_box__WEBPACK_IMPORTED_MODULE_15___default()), {
                                    offsetTop: 140,
                                    offsetBottom: 30,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        type: type,
                                        showManufacturers: false
                                    })
                                })
                            }),
                            page
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.button, {
                        whileTap: {
                            scale: 0.88
                        },
                        onClick: ()=>setDrawerView({
                                display: true,
                                view: 'SEARCH_FILTER',
                                data: {
                                    type,
                                    showManufacturers: false
                                }
                            })
                        ,
                        className: "flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: t('text-filter')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_filter_icon__WEBPACK_IMPORTED_MODULE_1__/* .FilterIcon */ .k, {
                                width: "17.05",
                                height: "18"
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
Manufacturer.getLayout = GetLayout;

});

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 7812:
/***/ ((module) => {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ 4394:
/***/ ((module) => {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 9699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 153:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 1817:
/***/ ((module) => {

module.exports = require("rc-slider");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8782:
/***/ ((module) => {

module.exports = require("react-content-loader");

/***/ }),

/***/ 3599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react-sticky-box");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 7139:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8780:
/***/ ((module) => {

module.exports = require("tiny-invariant");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 3706:
/***/ ((module) => {

module.exports = import("apollo-upload-client");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,9258,3372,8649,5094,2090,1949,5589,476,2957,5385,2819,4701,1325], () => (__webpack_exec__(6820)));
module.exports = __webpack_exports__;

})();
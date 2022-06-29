"use strict";
(() => {
var exports = {};
exports.id = 6170;
exports.ids = [6170];
exports.modules = {

/***/ 5013:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HomeLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5883);
/* harmony import */ var _header_minimal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(905);
/* harmony import */ var _mobile_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8036);
/* harmony import */ var _components_icons_search_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4066);
/* harmony import */ var _store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6942);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _mobile_navigation__WEBPACK_IMPORTED_MODULE_6__, _header__WEBPACK_IMPORTED_MODULE_4__, _header_minimal__WEBPACK_IMPORTED_MODULE_5__, _store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_8__, jotai__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _mobile_navigation__WEBPACK_IMPORTED_MODULE_6__, _header__WEBPACK_IMPORTED_MODULE_4__, _header_minimal__WEBPACK_IMPORTED_MODULE_5__, _store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_8__, jotai__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









function HomeLayout({ children , layout  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const [, setDisplayMobileHeaderSearch] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_store_display_mobile_header_search_atom__WEBPACK_IMPORTED_MODULE_8__/* .displayMobileHeaderSearchAtom */ .a);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col min-h-screen transition-colors duration-150 bg-gray-100",
        children: [
            [
                'minimal',
                'compact'
            ].includes(layout) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_minimal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                layout: layout
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                layout: layout
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "min-h-screen",
                children: children
            }),
            [
                'compact',
                'classic'
            ].includes(layout),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobile_navigation__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.button, {
                    whileTap: {
                        scale: 0.88
                    },
                    onClick: ()=>setDisplayMobileHeaderSearch((prev)=>!prev
                        )
                    ,
                    className: "flex items-center justify-center h-full p-2 focus:outline-none focus:text-accent",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "sr-only",
                            children: t('text-search')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_search_icon__WEBPACK_IMPORTED_MODULE_7__/* .SearchIcon */ .W, {
                            width: "17.05",
                            height: "18"
                        })
                    ]
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 3002:
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
/* harmony import */ var _client_variables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4383);
/* harmony import */ var _gql_categories_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5659);
/* harmony import */ var _gql_groups_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7698);
/* harmony import */ var _gql_products_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2709);
/* harmony import */ var _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(375);
/* harmony import */ var _utils_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2535);
/* harmony import */ var _utils_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5286);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_2__]);
_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










// This function gets called at build time
const apolloClient = (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .initializeApollo */ ["in"])();
const getStaticPaths = async ({ locales ,  })=>{
    tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default()(locales, 'locales is not defined');
    // array of type
    const { data: { types  } ,  } = await apolloClient.query({
        query: _gql_groups_graphql__WEBPACK_IMPORTED_MODULE_4__/* .GroupsDocument */ .pt
    });
    // Get the paths we want to pre-render based on types
    const paths = types?.flatMap((type)=>locales.map((locale)=>({
                params: {
                    pages: [
                        type.slug
                    ]
                },
                locale
            })
        )
    );
    // We'll pre-render only these paths at build time also with the slash route.
    return {
        paths: paths.concat(locales.map((locale)=>({
                params: {
                    pages: []
                },
                locale
            })
        )),
        fallback: 'blocking'
    };
};
const getStaticProps = async ({ locale , params  })=>{
    await apolloClient.query({
        query: _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_6__/* .SettingsDocument */ .m9
    });
    const { data: { types  } ,  } = await apolloClient.query({
        query: _gql_groups_graphql__WEBPACK_IMPORTED_MODULE_4__/* .GroupsDocument */ .pt
    });
    const { pages  } = params;
    let pageType;
    if (!pages) {
        pageType = types.find((type)=>type?.settings?.isHome
        )?.slug ?? types[0].slug;
    } else {
        pageType = pages[0];
    }
    await apolloClient.query({
        query: _gql_groups_graphql__WEBPACK_IMPORTED_MODULE_4__/* .GroupDocument */ .fH,
        variables: {
            slug: pageType
        }
    });
    const popularProductVariables = {
        type_slug: pageType,
        limit: 10
    };
    await apolloClient.query({
        query: _gql_products_graphql__WEBPACK_IMPORTED_MODULE_5__/* .PopularProductsDocument */ .RU,
        variables: popularProductVariables
    });
    const productVariables = {
        type: pageType,
        limit: _client_variables__WEBPACK_IMPORTED_MODULE_9__/* .PRODUCTS_PER_PAGE */ .a9
    };
    await apolloClient.query({
        query: _gql_products_graphql__WEBPACK_IMPORTED_MODULE_5__/* .ProductsDocument */ .Sz,
        variables: (0,_utils_products__WEBPACK_IMPORTED_MODULE_8__/* .getProducts */ .X)(productVariables)
    });
    const categoryVariables = {
        type: pageType,
        limit: _client_variables__WEBPACK_IMPORTED_MODULE_9__/* .CATEGORIES_PER_PAGE */ .kL,
        ...types?.find((t)=>t.slug === pageType
        )?.settings?.layoutType === 'minimal' ? {} : {
            parent: null
        }
    };
    await apolloClient.query({
        query: _gql_categories_graphql__WEBPACK_IMPORTED_MODULE_3__/* .CategoriesDocument */ .bb,
        variables: (0,_utils_categories__WEBPACK_IMPORTED_MODULE_7__/* .getCategories */ .C)(categoryVariables)
    });
    return (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .addApolloState */ ._p)(apolloClient, {
        props: {
            variables: {
                products: productVariables,
                popularProducts: popularProductVariables,
                categories: categoryVariables,
                types: {
                    type: pageType
                }
            },
            layout: types.find((t)=>t.slug === pageType
            )?.settings?.layoutType ?? 'default',
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, [
                'common',
                'banner'
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

/***/ 9515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _framework_home_pages_ssr__WEBPACK_IMPORTED_MODULE_7__.F),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_home_pages_ssr__WEBPACK_IMPORTED_MODULE_7__.b),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5013);
/* harmony import */ var _lib_use_window_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2949);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5218);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _framework_home_pages_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3002);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_home__WEBPACK_IMPORTED_MODULE_1__, _framework_home_pages_ssr__WEBPACK_IMPORTED_MODULE_7__]);
([_components_layouts_home__WEBPACK_IMPORTED_MODULE_1__, _framework_home_pages_ssr__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const CartCounterButton = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(null, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/cart/cart-counter-button"
        ]
    },
    ssr: false
});
const Classic = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3372), __webpack_require__.e(6331), __webpack_require__.e(5094), __webpack_require__.e(2090), __webpack_require__.e(2957), __webpack_require__.e(1437), __webpack_require__.e(3685), __webpack_require__.e(7463), __webpack_require__.e(6920), __webpack_require__.e(6646)]).then(__webpack_require__.bind(__webpack_require__, 5506))
, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/layouts/classic"
        ]
    }
});
const Standard = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(9258), __webpack_require__.e(3372), __webpack_require__.e(5094), __webpack_require__.e(2090), __webpack_require__.e(1949), __webpack_require__.e(2957), __webpack_require__.e(1437), __webpack_require__.e(7463), __webpack_require__.e(1350), __webpack_require__.e(9558)]).then(__webpack_require__.bind(__webpack_require__, 2127))
, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/layouts/standard"
        ]
    }
});
const Modern = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(9258), __webpack_require__.e(3372), __webpack_require__.e(5094), __webpack_require__.e(2090), __webpack_require__.e(1949), __webpack_require__.e(2957), __webpack_require__.e(1437), __webpack_require__.e(7463), __webpack_require__.e(1350), __webpack_require__.e(9652)]).then(__webpack_require__.bind(__webpack_require__, 6234))
, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/layouts/modern"
        ]
    }
});
const Minimal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(1437), __webpack_require__.e(6113)]).then(__webpack_require__.bind(__webpack_require__, 6113))
, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/layouts/minimal"
        ]
    }
});
const Compact = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(8598), __webpack_require__.e(9258), __webpack_require__.e(3372), __webpack_require__.e(6331), __webpack_require__.e(5094), __webpack_require__.e(2090), __webpack_require__.e(1949), __webpack_require__.e(2957), __webpack_require__.e(5385), __webpack_require__.e(1437), __webpack_require__.e(3685), __webpack_require__.e(7463), __webpack_require__.e(1350), __webpack_require__.e(4701), __webpack_require__.e(8095), __webpack_require__.e(7917), __webpack_require__.e(3309), __webpack_require__.e(6920), __webpack_require__.e(1412)]).then(__webpack_require__.bind(__webpack_require__, 1412))
, {
    loadableGenerated: {
        modules: [
            "[[...pages]].tsx -> " + "@/components/layouts/compact"
        ]
    }
});
const MAP_LAYOUT_TO_GROUP = {
    classic: Classic,
    modern: Modern,
    standard: Standard,
    minimal: Minimal,
    compact: Compact,
    default: Classic
};
const Home = ({ variables , layout  })=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { width  } = (0,_lib_use_window_size__WEBPACK_IMPORTED_MODULE_2__/* .useWindowSize */ .i)();
    // const { layout, page } = useLayout();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (query.text || query.category) {
            react_scroll__WEBPACK_IMPORTED_MODULE_6__.scroller.scrollTo('grid', {
                smooth: true,
                offset: -110
            });
        }
    }, [
        query.text,
        query.category
    ]);
    const Component = MAP_LAYOUT_TO_GROUP[layout];
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                variables: variables
            }),
            ![
                'compact',
                'minimal'
            ].includes(layout) && width > 1023 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartCounterButton, {})
        ]
    }));
};
Home.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_home__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        layout: page.props.layout,
        children: page
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

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

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 7139:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 770:
/***/ ((module) => {

module.exports = require("react-waypoint");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,8649,7698,8218], () => (__webpack_exec__(9515)));
module.exports = __webpack_exports__;

})();
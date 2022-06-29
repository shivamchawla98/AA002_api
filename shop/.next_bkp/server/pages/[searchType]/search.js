"use strict";
(() => {
var exports = {};
exports.id = 8983;
exports.ids = [8983];
exports.modules = {

/***/ 6413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);


const SearchCount = ({ from , to , total  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "text-sm font-semibold text-heading",
        children: `${t('text-showing')} ${from} - ${to} ${t('text-of')} ${total} ${t('text-products')}`
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchCount);


/***/ }),

/***/ 2435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8780);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tiny_invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8649);
/* harmony import */ var _gql_categories_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5659);
/* harmony import */ var _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(375);
/* harmony import */ var _framework_utils_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2535);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_2__]);
_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const getServerSideProps = async ({ locale , params ,  })=>{
    tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default()(params, 'params is required');
    const { searchType  } = params;
    const apolloClient = (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .initializeApollo */ ["in"])();
    await apolloClient.query({
        query: _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_4__/* .SettingsDocument */ .m9
    });
    await apolloClient.query({
        query: _gql_categories_graphql__WEBPACK_IMPORTED_MODULE_3__/* .CategoriesDocument */ .bb,
        variables: (0,_framework_utils_categories__WEBPACK_IMPORTED_MODULE_5__/* .getCategories */ .C)({
            type: searchType,
            limit: 1000
        })
    });
    return (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .addApolloState */ ._p)(apolloClient, {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, [
                'common'
            ])
        }
    });
};

});

/***/ }),

/***/ 8873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _framework_search_ssr__WEBPACK_IMPORTED_MODULE_16__.N),
/* harmony export */   "default": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_filter_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4287);
/* harmony import */ var _components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8036);
/* harmony import */ var _components_layouts_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6080);
/* harmony import */ var _components_products_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1949);
/* harmony import */ var _components_search_view_search_count__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6413);
/* harmony import */ var _components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2819);
/* harmony import */ var _components_search_view_sorting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9089);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(110);
/* harmony import */ var _framework_client_variables__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4383);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6403);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4178);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6197);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2451);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(689);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_sticky_box__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _framework_search_ssr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2435);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_11__, _components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__, _components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__, _components_layouts_general__WEBPACK_IMPORTED_MODULE_3__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_10__, jotai__WEBPACK_IMPORTED_MODULE_12__, _components_search_view_sorting__WEBPACK_IMPORTED_MODULE_7__, _framework_search_ssr__WEBPACK_IMPORTED_MODULE_16__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_11__, _components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__, _components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__, _components_layouts_general__WEBPACK_IMPORTED_MODULE_3__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_10__, jotai__WEBPACK_IMPORTED_MODULE_12__, _components_search_view_sorting__WEBPACK_IMPORTED_MODULE_7__, _framework_search_ssr__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


















// import Footer from '@components/layouts/footer';
function SearchPage() {
    console.log("heeeeee");
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    console.log("search query: ");
    console.log(query);
    const { searchType , ...restQuery } = query;
    const { products , isLoading , paginatorInfo , error , loadMore , isLoadingMore , hasMore ,  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_9__/* .useProducts */ .rn)({
        limit: _framework_client_variables__WEBPACK_IMPORTED_MODULE_17__/* .PRODUCTS_PER_PAGE */ .a9,
        orderBy: 'created_at',
        sortedBy: 'DESC',
        // ...(searchType && { type: searchType }),
        ...restQuery
    });
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_8__["default"], {
        message: error.message
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-7 flex flex-col items-center justify-between md:flex-row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_view_search_count__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        from: (paginatorInfo?.firstItem + 1) ?? 0,
                        to: (paginatorInfo?.lastItem + 1) ?? 0,
                        total: paginatorInfo?.total ?? 0
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-4 max-w-xs md:mt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_view_sorting__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            variant: "dropdown"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_grid__WEBPACK_IMPORTED_MODULE_4__/* .Grid */ .r, {
                products: products,
                loadMore: loadMore,
                isLoading: isLoading,
                isLoadingMore: isLoadingMore,
                hasMore: hasMore,
                error: error,
                column: "five"
            })
        ]
    }));
};
const GetLayout = (page)=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)('common');
    const [_, setDrawerView] = (0,jotai__WEBPACK_IMPORTED_MODULE_12__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_10__/* .drawerAtom */ .P);
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
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_view_sidebar_filter__WEBPACK_IMPORTED_MODULE_6__["default"], {})
                                })
                            }),
                            page
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.button, {
                        whileTap: {
                            scale: 0.88
                        },
                        onClick: ()=>setDrawerView({
                                display: true,
                                view: 'SEARCH_FILTER'
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
SearchPage.getLayout = GetLayout;

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
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,9258,3372,8649,5094,2090,1949,5589,476,2957,2819,1325], () => (__webpack_exec__(8873)));
module.exports = __webpack_exports__;

})();
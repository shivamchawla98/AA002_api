"use strict";
(() => {
var exports = {};
exports.id = 2415;
exports.ids = [2415];
exports.modules = {

/***/ 1323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9258);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3372);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8654);
/* harmony import */ var _components_ui_loaders_author_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _framework_author__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6013);
/* harmony import */ var _components_ui_author_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4435);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(110);
/* harmony import */ var _framework_client_variables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4383);










const AuthorsGrid = ({ limit =_framework_client_variables__WEBPACK_IMPORTED_MODULE_8__/* .AUTHORS_PER_PAGE */ .LX ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { authors , loadMore , isLoadingMore , isLoading , hasMore , error  } = (0,_framework_author__WEBPACK_IMPORTED_MODULE_5__/* .useAuthors */ .g)({
        limit
    });
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_7__["default"], {
        message: error.message
    }));
    if (!isLoading && !authors.length) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-h-full bg-white px-4 pt-6 pb-8 lg:p-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                text: "text-no-authors"
            })
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-auto w-full py-8 lg:py-14 xl:py-20",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 lg:gap-7",
                children: isLoading && !authors.length ? (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(limit, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_author_loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        uniqueKey: `author-${i}`
                    }, i)
                ) : authors.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_author_card__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        item: item
                    }, item.id)
                )
            }),
            hasMore && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-12 flex items-center justify-center lg:mt-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    onClick: loadMore,
                    size: "big",
                    loading: isLoadingMore,
                    children: t('text-explore-more')
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorsGrid);


/***/ }),

/***/ 1272:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8649);
/* harmony import */ var _client_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4383);
/* harmony import */ var _gql_authors_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8095);
/* harmony import */ var _gql_groups_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7698);
/* harmony import */ var _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const getStaticProps = async ({ locale  })=>{
    const apolloClient = (0,_client__WEBPACK_IMPORTED_MODULE_1__/* .initializeApollo */ ["in"])();
    await apolloClient.query({
        query: _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_4__/* .SettingsDocument */ .m9
    });
    await apolloClient.query({
        query: _gql_groups_graphql__WEBPACK_IMPORTED_MODULE_3__/* .GroupsDocument */ .pt
    });
    await apolloClient.query({
        query: _gql_authors_graphql__WEBPACK_IMPORTED_MODULE_2__/* .AuthorsDocument */ .Gg,
        variables: {
            first: _client_variables__WEBPACK_IMPORTED_MODULE_5__/* .AUTHORS_PER_PAGE */ .LX
        }
    });
    return (0,_client__WEBPACK_IMPORTED_MODULE_1__/* .addApolloState */ ._p)(apolloClient, {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, [
                'common'
            ])
        }
    });
};

});

/***/ }),

/***/ 8654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rangeMap)
/* harmony export */ });
function rangeMap(n, fn) {
    const arr = [];
    while(n > arr.length){
        arr.push(fn(arr.length));
    }
    return arr;
};


/***/ }),

/***/ 675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_authors_page_ssr__WEBPACK_IMPORTED_MODULE_5__.b),
/* harmony export */   "default": () => (/* binding */ AuthorsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1179);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_search_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5589);
/* harmony import */ var _components_author_authors_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1323);
/* harmony import */ var _framework_authors_page_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1272);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _framework_authors_page_ssr__WEBPACK_IMPORTED_MODULE_5__]);
([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _framework_authors_page_ssr__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






function AuthorsPage() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl text-accent",
                        children: t('text-search-authors-title')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-base text-heading",
                        children: t('text-search-authors-subtitle')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full max-w-screen-md mt-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_search_search__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            variant: "minimal",
                            label: "search",
                            placeholder: t('text-search-author')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_author_authors_grid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    }));
};
const getLayout = (page)=>(0,_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__/* .getLayout */ .G)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full bg-light",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-h-screen px-5 py-10 mx-auto max-w-1920 xl:py-14 xl:px-16",
            children: page
        })
    }))
;
AuthorsPage.getLayout = getLayout;

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

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

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

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

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
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,8598,9258,3372,8649,7698,5584,5511,8218,1179,5589,476,8095,3309], () => (__webpack_exec__(675)));
module.exports = __webpack_exports__;

})();
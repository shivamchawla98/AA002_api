"use strict";
(() => {
var exports = {};
exports.id = 1411;
exports.ids = [1411];
exports.modules = {

/***/ 8321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(495);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_truncate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9883);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2478);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6078);








const AuthorDetails = ({ author  })=>{
    const { isRTL  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_7__/* .useIsRTL */ .S)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const { name , image , quote , bio , slug , born , death , languages ,  } = author ?? {};
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const navigate = (path)=>{
        router.push(path);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-14 rtl:space-x-reverse pb-8 lg:pb-20",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "md:w-1/2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "product-gallery h-full rounded bg-gray-100 p-6 md:p-10 xl:p-14",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full flex items-center justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                            src: image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__/* .avatarPlaceholder */ .Pb,
                            // src={author?.image?.original ?? image?.original}
                            alt: name,
                            width: 450,
                            height: 450
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col items-start md:w-1/2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full",
                    children: [
                        name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-2xl lg:text-4xl font-bold text-heading mb-5 uppercase",
                            children: name
                        }),
                        quote && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
                            className: "text-sm text-body italic",
                            children: quote
                        }),
                        bio && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sm text-body mt-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_truncate__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                character: 260,
                                btnClassName: "!mt-4 !text-heading transition-colors hover:!text-accent",
                                children: bio
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "mt-8 space-y-4",
                            children: [
                                born && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "text-sm text-body flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "font-bold text-sm lg:text-base text-heading ltr:pr-2 rtl:pl-2 order-1",
                                            children: [
                                                t('text-born'),
                                                ":"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "order-2",
                                            children: dayjs__WEBPACK_IMPORTED_MODULE_6___default()(born).format('MMMM D, YYYY')
                                        })
                                    ]
                                }),
                                death && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "text-sm text-body flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "font-bold text-sm lg:text-base text-heading ltr:pr-2 rtl:pl-2 order-1",
                                            children: [
                                                t('text-died'),
                                                ":"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "order-2",
                                            children: dayjs__WEBPACK_IMPORTED_MODULE_6___default()(death).format('MMMM D, YYYY')
                                        })
                                    ]
                                }),
                                languages && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "text-sm text-body flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "font-bold text-sm lg:text-base text-heading ltr:pr-2 rtl:pl-2 order-1",
                                            children: [
                                                t('text-languages'),
                                                ":"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "order-2",
                                            children: languages
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorDetails);


/***/ }),

/***/ 1834:
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
/* harmony import */ var _gql_authors_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8095);
/* harmony import */ var _gql_products_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2709);
/* harmony import */ var _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(375);
/* harmony import */ var _utils_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5286);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_2__]);
_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const getStaticPaths = async ({ locales ,  })=>{
    tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default()(locales, 'locales is not defined');
    const apolloClient = (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .initializeApollo */ ["in"])();
    const { data: { authors  } ,  } = await apolloClient.query({
        query: _gql_authors_graphql__WEBPACK_IMPORTED_MODULE_3__/* .AuthorsDocument */ .Gg,
        variables: {
            first: 100
        }
    });
    tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default()(authors, 'authors is not defined');
    const paths = authors.data.flatMap((shop)=>locales.map((locale)=>({
                params: {
                    author: shop.slug
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
    const apolloClient = (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .initializeApollo */ ["in"])();
    const { author  } = params;
    await apolloClient.query({
        query: _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_5__/* .SettingsDocument */ .m9
    });
    const { data  } = await apolloClient.query({
        query: _gql_authors_graphql__WEBPACK_IMPORTED_MODULE_3__/* .AuthorDocument */ .Mf,
        variables: {
            slug: author
        }
    });
    await apolloClient.query({
        query: _gql_products_graphql__WEBPACK_IMPORTED_MODULE_4__/* .ProductsDocument */ .Sz,
        variables: (0,_utils_products__WEBPACK_IMPORTED_MODULE_6__/* .getProducts */ .X)({
            limit: _client_variables__WEBPACK_IMPORTED_MODULE_7__/* .PRODUCTS_PER_PAGE */ .a9,
            author
        })
    });
    if (!data?.author) {
        return {
            notFound: true
        };
    }
    return (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .addApolloState */ ._p)(apolloClient, {
        props: {
            author: data.author,
            variables: {
                limit: _client_variables__WEBPACK_IMPORTED_MODULE_7__/* .PRODUCTS_PER_PAGE */ .a9,
                author
            },
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, [
                'common'
            ])
        },
        revalidate: 60
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

/***/ 7071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _framework_author_ssr__WEBPACK_IMPORTED_MODULE_7__.F),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_author_ssr__WEBPACK_IMPORTED_MODULE_7__.b),
/* harmony export */   "default": () => (/* binding */ Author)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1179);
/* harmony import */ var _components_author_details_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8321);
/* harmony import */ var _lib_use_window_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2949);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5218);
/* harmony import */ var _components_products_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1949);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _framework_author_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _framework_author_ssr__WEBPACK_IMPORTED_MODULE_7__]);
([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _framework_author_ssr__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const CartCounterButton = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(null, {
    loadableGenerated: {
        modules: [
            "authors/[author].tsx -> " + "@/components/cart/cart-counter-button"
        ]
    },
    ssr: false
});
function Author({ author , variables  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    const { width  } = (0,_lib_use_window_size__WEBPACK_IMPORTED_MODULE_3__/* .useWindowSize */ .i)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto min-h-screen max-w-screen-xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_author_details_details__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        author: author
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mb-8 text-2xl font-semibold tracking-tight text-heading lg:text-3xl",
                        children: t('text-author-books')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        gridClassName: "grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 md:gap-8",
                        variables: variables
                    })
                ]
            }),
            width > 1023 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartCounterButton, {})
        ]
    }));
};
const getLayout = (page)=>(0,_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__/* .getLayout */ .G)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full bg-light",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto min-h-screen w-full max-w-1920 px-5 py-10 xl:py-14 xl:px-16",
            children: page
        })
    }))
;
Author.getLayout = getLayout;

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

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

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

/***/ 8780:
/***/ ((module) => {

module.exports = require("tiny-invariant");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,8598,9258,3372,8649,7698,5584,5511,8218,1179,5094,2090,1949,9883,8095], () => (__webpack_exec__(7071)));
module.exports = __webpack_exports__;

})();
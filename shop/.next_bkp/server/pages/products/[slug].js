"use strict";
(() => {
var exports = {};
exports.id = 7905;
exports.ids = [7905];
exports.modules = {

/***/ 3125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iv": () => (/* binding */ AttributesProvider),
/* harmony export */   "Ch": () => (/* binding */ useAttributes)
/* harmony export */ });
/* unused harmony export AttributesContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {};
const AttributesContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(initialState);
AttributesContext.displayName = 'AttributesContext';
const AttributesProvider = (props)=>{
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(initialState);
    const value = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>({
            attributes: state,
            setAttributes: dispatch
        })
    , [
        state
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AttributesContext.Provider, {
        value: value,
        ...props
    }));
};
const useAttributes = ()=>{
    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(AttributesContext);
    if (context === undefined) {
        throw new Error(`useAttributes must be used within a SettingsProvider`);
    }
    return context;
};


/***/ }),

/***/ 3176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);


const Seo = ({ title , description , images , url , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
        title: title,
        openGraph: {
            ...Boolean(url) && {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/${url}`
            },
            title,
            description,
            ...Boolean(images) && {
                images: images?.map((item)=>({
                        url: item?.image?.original,
                        alt: item?.title
                    })
                )
            }
        },
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


/***/ }),

/***/ 7033:
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
/* harmony import */ var _gql_products_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2709);
/* harmony import */ var _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_2__]);
_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const getStaticPaths = async ({ locales ,  })=>{
    console.log("getStaticPaths");
    tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default()(locales, 'locales is not defined');
    const apolloClient = (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .initializeApollo */ ["in"])();
    // console.log("getStaticPaths1");
    // console.log(ProductsDocument);
    // console.log(locales);
    // console.log("get2");
    console.log("");
    const { data: { products  } ,  } = await apolloClient.query({
        query: _gql_products_graphql__WEBPACK_IMPORTED_MODULE_3__/* .ProductsDocument */ .Sz,
        variables: {
            first: 100,
            text: "led"
        }
    });
    console.log("getStaticPaths2");
    tiny_invariant__WEBPACK_IMPORTED_MODULE_1___default()(products, 'products is not defined');
    console.log("getStaticPaths3");
    const paths = products.data.flatMap((product)=>locales.map((locale)=>({
                params: {
                    slug: product.slug
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
    console.log("getStaticProps");
    const apolloClient = (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .initializeApollo */ ["in"])();
    const { slug  } = params;
    await apolloClient.query({
        query: _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_4__/* .SettingsDocument */ .m9
    });
    const { data: { product  } ,  } = await apolloClient.query({
        query: _gql_products_graphql__WEBPACK_IMPORTED_MODULE_3__/* .ProductDocument */ .MP,
        variables: {
            slug
        }
    });
    if (!product) {
        return {
            notFound: true
        };
    }
    return (0,_client__WEBPACK_IMPORTED_MODULE_2__/* .addApolloState */ ._p)(apolloClient, {
        props: {
            product,
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

/***/ 2845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _framework_product_ssr__WEBPACK_IMPORTED_MODULE_7__.F),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_product_ssr__WEBPACK_IMPORTED_MODULE_7__.b),
/* harmony export */   "default": () => (/* binding */ ProductPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1179);
/* harmony import */ var _components_products_details_attributes_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3125);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3176);
/* harmony import */ var _lib_use_window_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2949);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5218);
/* harmony import */ var _framework_product_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7033);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _framework_product_ssr__WEBPACK_IMPORTED_MODULE_7__]);
([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _framework_product_ssr__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








console.log("line 9");
//FIXME: typescript and layout
const Details = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_6__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3669), __webpack_require__.e(5648), __webpack_require__.e(8208), __webpack_require__.e(8111), __webpack_require__.e(9883), __webpack_require__.e(8579), __webpack_require__.e(7578)]).then(__webpack_require__.bind(__webpack_require__, 7578))
, {
    loadableGenerated: {
        modules: [
            "products/[slug].tsx -> " + "@/components/products/details/details"
        ]
    }
});
console.log("line 11");
const BookDetails = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_6__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(9258), __webpack_require__.e(3669), __webpack_require__.e(5648), __webpack_require__.e(8208), __webpack_require__.e(9883), __webpack_require__.e(8579), __webpack_require__.e(7701)]).then(__webpack_require__.bind(__webpack_require__, 7701))
, {
    loadableGenerated: {
        modules: [
            "products/[slug].tsx -> " + "@/components/products/details/book-details"
        ]
    }
});
console.log("line 12");
const RelatedProducts = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_6__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(5094), __webpack_require__.e(3623)]).then(__webpack_require__.bind(__webpack_require__, 3623))
, {
    loadableGenerated: {
        modules: [
            "products/[slug].tsx -> " + "@/components/products/details/related-products"
        ]
    }
});
console.log("line 13");
const CartCounterButton = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_6__["default"])(null, {
    loadableGenerated: {
        modules: [
            "products/[slug].tsx -> " + "@/components/cart/cart-counter-button"
        ]
    },
    ssr: false
});
console.log("line 14");
function ProductPage({ product  }) {
    console.log(product);
    const { width  } = (0,_lib_use_window_size__WEBPACK_IMPORTED_MODULE_4__/* .useWindowSize */ .i)();
    console.log("line 15");
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: product?.name,
                url: product?.slug,
                images: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(product?.image) ? [
                    product.image
                ] : []
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_products_details_attributes_context__WEBPACK_IMPORTED_MODULE_2__/* .AttributesProvider */ .iv, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "min-h-screen bg-light",
                        children: product?.type?.slug === 'books' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BookDetails, {
                            product: product
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Details, {
                                    product: product
                                }),
                                product?.related_products?.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-5 lg:p-14 xl:p-16",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RelatedProducts, {
                                        products: product?.related_products,
                                        currentProductId: product?.id,
                                        gridClassName: "lg:grid-cols-4 2xl:grid-cols-5 !gap-3"
                                    })
                                })
                            ]
                        })
                    }),
                    width > 1023 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartCounterButton, {})
                ]
            })
        ]
    }));
};
ProductPage.getLayout = _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__/* .getLayout */ .G;

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

/***/ 8492:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

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

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

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
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,8598,8649,7698,5584,5511,8218,1179], () => (__webpack_exec__(2845)));
module.exports = __webpack_exports__;

})();
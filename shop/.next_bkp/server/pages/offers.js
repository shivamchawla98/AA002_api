"use strict";
(() => {
var exports = {};
exports.id = 2513;
exports.ids = [2513];
exports.modules = {

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

/***/ 797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ coupon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(495);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: external "react-copy-to-clipboard"
const external_react_copy_to_clipboard_namespaceObject = require("react-copy-to-clipboard");
var external_react_copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_react_copy_to_clipboard_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./src/lib/placeholders.tsx + 4 modules
var placeholders = __webpack_require__(2478);
;// CONCATENATED MODULE: ./src/components/ui/cards/coupon.tsx







const CouponCard = ({ coupon , className  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    const { code , image , is_valid  } = coupon;
    const { 0: copyText , 1: setCopyText  } = (0,external_react_.useState)({
        value: code,
        copied: false
    });
    (0,external_react_.useEffect)(()=>{
        let timeout;
        if (copyText.copied) {
            timeout = setTimeout(()=>{
                setCopyText((prev)=>({
                        ...prev,
                        copied: false
                    })
                );
            }, 3500);
        }
        return ()=>clearTimeout(timeout)
        ;
    }, [
        copyText.copied
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()('coupon-card', className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex rounded overflow-hidden bg-gray-200 relative",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                    src: image?.thumbnail ?? placeholders/* couponPlaceholder */.Qg,
                    alt: code,
                    width: "572",
                    height: "429"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-11/12 grid grid-flow-col auto-cols-fr items-center py-4 px-5 mx-auto rounded-bl rounded-be shadow-sm bg-light",
                children: is_valid ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-heading font-semibold uppercase focus:outline-none",
                            children: copyText.value
                        }),
                        !copyText.copied && /*#__PURE__*/ jsx_runtime_.jsx((external_react_copy_to_clipboard_default()), {
                            text: copyText.value,
                            onCopy: ()=>setCopyText((prev)=>({
                                        ...prev,
                                        copied: true
                                    })
                                )
                            ,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "ltr:text-right rtl:text-left text-accent text-sm font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: t('text-copy')
                                })
                            })
                        }),
                        copyText.copied && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "ltr:text-right rtl:text-left text-accent text-sm font-semibold",
                            children: t('text-copied')
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-sm text-center block text-red-500",
                    children: t('text-expired')
                })
            })
        ]
    }));
};
/* harmony default export */ const coupon = (CouponCard);


/***/ }),

/***/ 9569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);


const CouponLoader = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), {
        speed: 2,
        width: '100%',
        height: '100%',
        viewBox: "0 0 480 450",
        backgroundColor: "#e0e0e0",
        foregroundColor: "#cecece",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "0",
                y: "0",
                rx: "6",
                ry: "6",
                width: "100%",
                height: "340"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "10%",
                y: "350",
                rx: "6",
                ry: "6",
                width: "80%",
                height: "70"
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CouponLoader);


/***/ }),

/***/ 1064:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8649);
/* harmony import */ var _gql_groups_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7698);
/* harmony import */ var _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const getStaticProps = async ({ locale  })=>{
    const apolloClient = (0,_client__WEBPACK_IMPORTED_MODULE_1__/* .initializeApollo */ ["in"])();
    await apolloClient.query({
        query: _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_3__/* .SettingsDocument */ .m9
    });
    await apolloClient.query({
        query: _gql_groups_graphql__WEBPACK_IMPORTED_MODULE_2__/* .GroupsDocument */ .pt
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

/***/ 5018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useCoupons)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gql_coupons_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5199);


function useCoupons(options) {
    const { data , loading: isLoading , error , fetchMore , networkStatus ,  } = (0,_gql_coupons_graphql__WEBPACK_IMPORTED_MODULE_1__/* .useCouponsQuery */ .ID)({
        variables: {
            first: 16
        },
        notifyOnNetworkStatusChange: true
    });
    function handleLoadMore() {
        if (data?.coupons?.paginatorInfo.hasMorePages) {
            fetchMore({
                variables: {
                    page: data?.coupons?.paginatorInfo?.currentPage + 1
                }
            });
        }
    }
    return {
        coupons: data?.coupons?.data ?? [],
        paginatorInfo: data?.coupons?.paginatorInfo,
        isLoading,
        error,
        isLoadingMore: networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_0__.NetworkStatus.fetchMore,
        loadMore: handleLoadMore,
        hasMore: Boolean(data?.coupons?.paginatorInfo?.hasMorePages)
    };
}


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

/***/ 9273:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_coupon_ssr__WEBPACK_IMPORTED_MODULE_11__.b),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1179);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3176);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9258);
/* harmony import */ var _components_cart_cart_counter_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2069);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3372);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8654);
/* harmony import */ var _components_ui_loaders_coupon_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9569);
/* harmony import */ var _framework_coupon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5018);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(110);
/* harmony import */ var _components_ui_cards_coupon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(797);
/* harmony import */ var _framework_coupon_ssr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1064);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _components_cart_cart_counter_button__WEBPACK_IMPORTED_MODULE_4__, _framework_coupon_ssr__WEBPACK_IMPORTED_MODULE_11__]);
([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _components_cart_cart_counter_button__WEBPACK_IMPORTED_MODULE_4__, _framework_coupon_ssr__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













const OffersPage = ()=>{
    const limit = 20;
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    const { isLoading , isLoadingMore , hasMore , coupons , error , loadMore  } = (0,_framework_coupon__WEBPACK_IMPORTED_MODULE_8__/* .useCoupons */ .b)();
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_9__["default"], {
        message: error.message
    }));
    if (!isLoading && !coupons.length) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-h-full px-4 pt-6 pb-8 bg-gray-100 lg:p-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                text: "text-no-coupon"
            })
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "Offers",
                url: "offers"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full px-4 py-8 mx-auto bg-gray-100 max-w-1920 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 xl:gap-8",
                        children: isLoading && !coupons.length ? (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(limit, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_coupon_loader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                uniqueKey: `coupon-${i}`
                            }, i)
                        ) : coupons.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_cards_coupon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                coupon: item
                            }, item.id)
                        )
                    }),
                    hasMore && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-center mt-8 lg:mt-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            onClick: loadMore,
                            loading: isLoadingMore,
                            children: t('text-load-more')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_counter_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    }));
};
OffersPage.getLayout = _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__/* .getLayout */ .G;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OffersPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,8598,9258,3372,8649,7698,5584,5511,8218,1179,3669,2069], () => (__webpack_exec__(9273)));
module.exports = __webpack_exports__;

})();
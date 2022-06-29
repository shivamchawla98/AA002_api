"use strict";
exports.id = 7129;
exports.ids = [7129];
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

/***/ 1476:
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

/***/ })

};
;
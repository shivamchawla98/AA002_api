"use strict";
exports.id = 1179;
exports.ids = [1179];
exports.modules = {

/***/ 1179:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getLayout)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_use_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5883);
/* harmony import */ var _header_minimal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(905);
/* harmony import */ var _mobile_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8036);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5511);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mobile_navigation__WEBPACK_IMPORTED_MODULE_4__, _footer__WEBPACK_IMPORTED_MODULE_5__, _header__WEBPACK_IMPORTED_MODULE_2__, _header_minimal__WEBPACK_IMPORTED_MODULE_3__]);
([_mobile_navigation__WEBPACK_IMPORTED_MODULE_4__, _footer__WEBPACK_IMPORTED_MODULE_5__, _header__WEBPACK_IMPORTED_MODULE_2__, _header_minimal__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






function SiteLayout({ children  }) {
    const { layout  } = (0,_lib_hooks_use_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-screen flex-col bg-gray-100 transition-colors duration-150",
        children: [
            [
                'minimal',
                'compact'
            ].includes(layout) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_minimal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                layout: layout
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                layout: layout
            }),
            children,
            [
                'compact'
            ].includes(layout) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobile_navigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    }));
};
const getLayout = (page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SiteLayout, {
        children: page
    })
;

});

/***/ }),

/***/ 2216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useTypes),
/* harmony export */   "o": () => (/* binding */ useType)
/* harmony export */ });
/* harmony import */ var _gql_groups_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7698);

function useTypes(options) {
    const { data , loading: isLoading , error  } = (0,_gql_groups_graphql__WEBPACK_IMPORTED_MODULE_0__/* .useGroupsQuery */ .RW)();
    return {
        types: data?.types ?? [],
        isLoading,
        error
    };
}
function useType(slug) {
    const { data , loading: isLoading , error ,  } = (0,_gql_groups_graphql__WEBPACK_IMPORTED_MODULE_0__/* .useGroupQuery */ .xR)({
        variables: {
            slug
        }
    });
    return {
        type: data?.type,
        isLoading,
        error
    };
}


/***/ }),

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_client_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4383);
/* harmony import */ var _framework_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2216);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



const useLayout = ()=>{
    const data = (0,_framework_type__WEBPACK_IMPORTED_MODULE_0__/* .useTypes */ .c)({
        limit: _framework_client_variables__WEBPACK_IMPORTED_MODULE_2__/* .TYPES_PER_PAGE */ .Fi
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const regex = /^\/$|^\/\?(.*)/;
    if (regex.test(router?.asPath)) {
        const homePage = data?.types?.find((type)=>type?.settings?.isHome
        ) ?? data?.types?.[0];
        return {
            layout: homePage?.settings?.layoutType ?? 'default',
            page: homePage
        };
    }
    const page = data?.types?.find((type)=>router.asPath.includes(type.slug)
    );
    return {
        layout: page?.settings?.layoutType ?? 'default',
        page
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLayout);


/***/ })

};
;
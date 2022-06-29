"use strict";
exports.id = 1437;
exports.ids = [1437];
exports.modules = {

/***/ 1437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2216);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5218);



const ErrorMessage = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 110))
, {
    loadableGenerated: {
        modules: [
            "../components/banners/banner.tsx -> " + "@/components/ui/error-message"
        ]
    }
});
const BannerWithSearch = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(5589), __webpack_require__.e(476), __webpack_require__.e(2794)]).then(__webpack_require__.bind(__webpack_require__, 2794))
, {
    loadableGenerated: {
        modules: [
            "../components/banners/banner.tsx -> " + "@/components/banners/banner-with-search"
        ]
    }
});
const BannerShort = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(6331), __webpack_require__.e(213)]).then(__webpack_require__.bind(__webpack_require__, 213))
, {
    loadableGenerated: {
        modules: [
            "../components/banners/banner.tsx -> " + "@/components/banners/banner-short"
        ]
    }
});
const BannerWithoutSlider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 2140).then(__webpack_require__.bind(__webpack_require__, 2140))
, {
    loadableGenerated: {
        modules: [
            "../components/banners/banner.tsx -> " + "@/components/banners/banner-without-slider"
        ]
    }
});
const BannerWithPagination = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__.e(/* import() */ 5576).then(__webpack_require__.bind(__webpack_require__, 5576))
, {
    loadableGenerated: {
        modules: [
            "../components/banners/banner.tsx -> " + "@/components/banners/banner-with-pagination"
        ]
    }
});
const MAP_BANNER_TO_GROUP = {
    classic: BannerWithSearch,
    modern: BannerShort,
    minimal: BannerWithoutSlider,
    standard: BannerWithSearch,
    compact: BannerWithPagination,
    default: BannerWithSearch
};
const Banner = ({ layout , variables ,  })=>{
    const { type , error  } = (0,_framework_type__WEBPACK_IMPORTED_MODULE_1__/* .useType */ .o)(variables.type);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorMessage, {
        message: error.message
    }));
    const Component = MAP_BANNER_TO_GROUP[layout];
    // console.log("%%%%%%%%%%%%%%%%%");
    // console.log(type?.banners)
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        banners: type?.banners,
        layout: layout,
        slug: type?.slug
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


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


/***/ })

};
;
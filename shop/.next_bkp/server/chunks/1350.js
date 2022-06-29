"use strict";
exports.id = 1350;
exports.ids = [1350];
exports.modules = {

/***/ 1350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductGridHome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6403);
/* harmony import */ var _framework_client_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4383);
/* harmony import */ var _components_products_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1949);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





function ProductGridHome({ className , variables , column , gridClassName  }) {
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { products , loadMore , isLoadingMore , isLoading , hasMore , error  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_1__/* .useProducts */ .rn)({
        ...variables,
        ...query.category && {
            categories: query.category
        },
        ...query.text && {
            text: query.text
        }
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_grid__WEBPACK_IMPORTED_MODULE_2__/* .Grid */ .r, {
        products: products,
        loadMore: loadMore,
        isLoading: isLoading,
        isLoadingMore: isLoadingMore,
        hasMore: hasMore,
        error: error,
        limit: _framework_client_variables__WEBPACK_IMPORTED_MODULE_4__/* .PRODUCTS_PER_PAGE */ .a9,
        className: className,
        gridClassName: gridClassName,
        column: column
    }));
};


/***/ })

};
;
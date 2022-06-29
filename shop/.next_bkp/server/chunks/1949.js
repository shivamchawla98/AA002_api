"use strict";
exports.id = 1949;
exports.ids = [1949];
exports.modules = {

/***/ 1949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ Grid),
/* harmony export */   "Z": () => (/* binding */ ProductsGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9258);
/* harmony import */ var _components_ui_loaders_product_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(640);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3372);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8654);
/* harmony import */ var _components_products_cards_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5094);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(110);
/* harmony import */ var _framework_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6403);
/* harmony import */ var _framework_client_variables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4383);











function Grid({ className , gridClassName , products , isLoading , error , loadMore , isLoadingMore , hasMore , limit =_framework_client_variables__WEBPACK_IMPORTED_MODULE_9__/* .PRODUCTS_PER_PAGE */ .a9 , column ='auto'  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_7__["default"], {
        message: error.message
    }));
    if (!isLoading && !products?.length) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-h-full w-full px-4 pt-6 pb-8 lg:p-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                text: "text-not-found",
                className: "mx-auto w-7/12"
            })
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('w-full', className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
                    'grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3': column === 'auto',
                    'grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-11 2xl:grid-cols-5 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]': column === 'five'
                }, gridClassName),
                children: isLoading && !products?.length ? (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(limit, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_product_loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        uniqueKey: `product-${i}`
                    }, i)
                ) : products?.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_cards_card__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        product: product
                    }, product.id)
                )
            }),
            hasMore && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 flex justify-center lg:mt-12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    loading: isLoadingMore,
                    onClick: loadMore,
                    className: "h-11 text-sm font-semibold md:text-base",
                    children: t('text-load-more')
                })
            })
        ]
    }));
}
function ProductsGrid({ className , gridClassName , variables , column ='auto'  }) {
    const { products , loadMore , isLoadingMore , isLoading , hasMore , error  } = (0,_framework_product__WEBPACK_IMPORTED_MODULE_8__/* .useProducts */ .rn)(variables);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Grid, {
        products: products,
        loadMore: loadMore,
        isLoading: isLoading,
        isLoadingMore: isLoadingMore,
        hasMore: hasMore,
        error: error,
        className: className,
        gridClassName: gridClassName,
        column: column
    }));
};


/***/ })

};
;
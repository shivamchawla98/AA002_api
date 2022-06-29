"use strict";
exports.id = 9652;
exports.ids = [9652];
exports.modules = {

/***/ 6234:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modern)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_banners_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1437);
/* harmony import */ var _components_categories_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9900);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_products_grids_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1350);
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_filter_bar__WEBPACK_IMPORTED_MODULE_5__]);
_filter_bar__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






function Modern({ variables  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-1 bg-gray-100",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sticky top-22 hidden h-full bg-gray-100 lg:w-[380px] xl:block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_categories_categories__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    layout: "modern",
                    variables: variables.categories
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "block w-full lg:mt-6 xl:overflow-hidden ltr:xl:pl-0 ltr:xl:pr-5 rtl:xl:pr-0 rtl:xl:pl-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "border border-border-200",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_banners_banner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            layout: "modern",
                            variables: variables.types
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_filter_bar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        variables: variables.categories
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Element, {
                        name: "grid",
                        className: "px-4 xl:px-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_products_grids_home__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: "py-6",
                            variables: variables.products
                        })
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 1379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ getIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const getIcon = ({ iconList , iconName , ...rest })=>{
    const TagName = iconList[iconName];
    return !!TagName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TagName, {
        ...rest
    }) : null;
};


/***/ })

};
;
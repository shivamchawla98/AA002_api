"use strict";
exports.id = 2046;
exports.ids = [2046];
exports.modules = {

/***/ 2046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_loaders_bakery_categories_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6139);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3372);
/* harmony import */ var _components_ui_section_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3685);
/* harmony import */ var _components_ui_solid_card_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5902);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_solid_card_category__WEBPACK_IMPORTED_MODULE_4__]);
_components_ui_solid_card_category__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const SlidingCardCategories = ({ notFound , categories , loading ,  })=>{
    if (loading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "hidden xl:block",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-52 flex justify-center mt-8 px-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_bakery_categories_loader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            })
        }));
    }
    // console.log("6666666666666666");
    // console.log(categories);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_section_block__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: "Electronics",
        children: !notFound ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_solid_card_category__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            items: categories[0].children,
            className: "py-8"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                text: "text-no-category",
                className: "h-96"
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlidingCardCategories);

});

/***/ })

};
;
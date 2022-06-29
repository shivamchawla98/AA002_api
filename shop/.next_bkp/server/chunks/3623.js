"use strict";
exports.id = 3623;
exports.ids = [3623];
exports.modules = {

/***/ 3623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cards_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5094);




const RelatedProducts = ({ products , currentProductId , gridClassName  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-lg text-heading tracking-tight font-semibold mb-6",
                children: t('text-related-products')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4', gridClassName),
                children: products?.map((item, idx)=>{
                    if (currentProductId === item.id) {
                        return null;
                    }
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cards_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        product: item,
                        cardType: item?.type?.slug
                    }, idx));
                })
            })
        ]
    }));
};
// <motion.div key={idx}>
{
/* {renderProductCard(
    item,
    "!shadow-none border border-border-200 hover:!border-border-200 border-opacity-70"
  )} */ }// </motion.div>
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedProducts);


/***/ })

};
;
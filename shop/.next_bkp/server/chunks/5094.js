"use strict";
exports.id = 5094;
exports.ids = [5094];
exports.modules = {

/***/ 5094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5218);


const Helium = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3669), __webpack_require__.e(5648), __webpack_require__.e(8208), __webpack_require__.e(8111), __webpack_require__.e(3717)]).then(__webpack_require__.bind(__webpack_require__, 3717))
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/helium"
        ]
    }
});
const Neon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3669), __webpack_require__.e(5648), __webpack_require__.e(8208), __webpack_require__.e(8111), __webpack_require__.e(9278)]).then(__webpack_require__.bind(__webpack_require__, 9278))
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/neon"
        ]
    }
}); // grocery-two
const Argon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3669), __webpack_require__.e(5648), __webpack_require__.e(8208), __webpack_require__.e(8111), __webpack_require__.e(9869)]).then(__webpack_require__.bind(__webpack_require__, 9869))
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/argon"
        ]
    }
}); // bakery
const Krypton = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3669), __webpack_require__.e(6776)]).then(__webpack_require__.bind(__webpack_require__, 6776)) // furniture extra price
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/krypton"
        ]
    }
});
const Xenon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3669), __webpack_require__.e(5648), __webpack_require__.e(8208), __webpack_require__.e(8111), __webpack_require__.e(6848)]).then(__webpack_require__.bind(__webpack_require__, 6848))
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/xenon"
        ]
    }
}); // furniture-two
const Radon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3669), __webpack_require__.e(7697)]).then(__webpack_require__.bind(__webpack_require__, 7697))
, {
    loadableGenerated: {
        modules: [
            "../components/products/cards/card.tsx -> " + "@/components/products/cards/radon"
        ]
    }
}); // Book
const MAP_PRODUCT_TO_CARD = {
    neon: Neon,
    helium: Helium,
    argon: Argon,
    krypton: Krypton,
    xenon: Xenon,
    radon: Radon
};
const ProductCard = ({ product , className , ...props })=>{
    const Component = product?.type?.settings?.productCard ? MAP_PRODUCT_TO_CARD[product?.type?.settings?.productCard] : Helium;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        product: product,
        ...props,
        className: className
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);


/***/ })

};
;
"use strict";
exports.id = 3669;
exports.ids = [3669];
exports.modules = {

/***/ 3669:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ usePrice)
/* harmony export */ });
/* unused harmony exports formatPrice, formatVariantPrice */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _framework_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_settings__WEBPACK_IMPORTED_MODULE_2__]);
_framework_settings__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function formatPrice({ amount , currencyCode , locale  }) {
    const formatCurrency = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode
    });
    return formatCurrency.format(amount);
}
function formatVariantPrice({ amount , baseAmount , currencyCode , locale  }) {
    const hasDiscount = baseAmount > amount;
    const formatDiscount = new Intl.NumberFormat(locale, {
        style: 'percent'
    });
    const discount = hasDiscount ? formatDiscount.format((baseAmount - amount) / baseAmount) : null;
    const price = formatPrice({
        amount,
        currencyCode,
        locale
    });
    const basePrice = hasDiscount ? formatPrice({
        amount: baseAmount,
        currencyCode,
        locale
    }) : null;
    return {
        price,
        basePrice,
        discount
    };
}
function usePrice(data) {
    const { settings: { currency  } ,  } = (0,_framework_settings__WEBPACK_IMPORTED_MODULE_2__/* .useSettings */ .rV)();
    const { amount , baseAmount , currencyCode =currency ?? 'USD'  } = data ?? {};
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (typeof amount !== 'number' || !currencyCode) return '';
        const currentLocale = locale ? locale : 'en';
        return baseAmount ? formatVariantPrice({
            amount,
            baseAmount,
            currencyCode,
            locale: currentLocale
        }) : formatPrice({
            amount,
            currencyCode,
            locale: currentLocale
        });
    }, [
        amount,
        baseAmount,
        currencyCode,
        locale
    ]);
    return typeof value === 'string' ? {
        price: value,
        basePrice: null,
        discount: null
    } : value;
};

});

/***/ })

};
;
"use strict";
exports.id = 5589;
exports.ids = [5589];
exports.modules = {

/***/ 5589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_search_search_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8522);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _search_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(476);





const Search = ({ label , variant , ...props })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { searchTerm , updateSearchTerm  } = (0,_search_context__WEBPACK_IMPORTED_MODULE_4__/* .useSearch */ .Rx)();
    const handleOnChange = (e)=>{
        const { value  } = e.target;
        updateSearchTerm(value);
    };
    const onSearch = (e)=>{
        e.preventDefault();
        if (!searchTerm) return;
        const { pathname , query  } = router;
        router.push({
            pathname,
            query: {
                ...query,
                text: searchTerm
            }
        }, undefined, {
            scroll: false
        });
    };
    function clearSearch() {
        updateSearchTerm('');
        const { pathname , query  } = router;
        const { text , ...rest } = query;
        if (text) {
            router.push({
                pathname,
                query: {
                    ...rest
                }
            }, undefined, {
                scroll: false
            });
        }
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_search_search_box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        label: label,
        onSubmit: onSearch,
        onClearSearch: clearSearch,
        onChange: handleOnChange,
        value: searchTerm,
        name: "search",
        placeholder: t('common:text-search-placeholder'),
        variant: variant,
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ })

};
;
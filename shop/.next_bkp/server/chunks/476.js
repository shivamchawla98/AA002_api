"use strict";
exports.id = 476;
exports.ids = [476];
exports.modules = {

/***/ 476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X$": () => (/* binding */ SearchProvider),
/* harmony export */   "Rx": () => (/* binding */ useSearch)
/* harmony export */ });
/* unused harmony export SearchContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
    searchTerm: ''
};
const SearchContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createContext(initialState);
SearchContext.displayName = 'SearchContext';
const SearchProvider = (props)=>{
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: searchTerm , 1: updateSearchTerm  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (query?.text) {
            updateSearchTerm(query?.text);
        } else {
            updateSearchTerm('');
        }
    }, [
        query
    ]);
    const value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            searchTerm,
            updateSearchTerm
        })
    , [
        searchTerm
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchContext.Provider, {
        value: value,
        ...props
    }));
};
const useSearch = ()=>{
    const context = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(SearchContext);
    if (context === undefined) {
        throw new Error(`useSearch must be used within a SearchProvider`);
    }
    return context;
};


/***/ })

};
;
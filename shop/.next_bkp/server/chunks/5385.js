"use strict";
exports.id = 5385;
exports.ids = [5385];
exports.modules = {

/***/ 4131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FacebookIcon": () => (/* reexport */ FacebookIcon),
  "InstagramIcon": () => (/* reexport */ InstagramIcon),
  "TwitterIcon": () => (/* reexport */ TwitterIcon),
  "YouTubeIcon": () => (/* reexport */ YouTubeIcon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/icons/social/facebook.tsx

const FacebookIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 12",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            "data-name": "_ionicons_svg_logo-facebook (6)",
            d: "M11.338 0H.662A.663.663 0 000 .663v10.674a.663.663 0 00.662.662H6V7.25H4.566V5.5H6V4.206a2.28 2.28 0 012.459-2.394c.662 0 1.375.05 1.541.072V3.5H8.9c-.753 0-.9.356-.9.881V5.5h1.794L9.56 7.25H8V12h3.338a.663.663 0 00.662-.663V.662A.663.663 0 0011.338 0z",
            fill: "currentColor"
        })
    })
;

;// CONCATENATED MODULE: ./src/components/icons/social/instagram.tsx

const InstagramIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "data-name": "Group 96",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 12",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "Path 1",
                d: "M8.5 1A2.507 2.507 0 0111 3.5v5A2.507 2.507 0 018.5 11h-5A2.507 2.507 0 011 8.5v-5A2.507 2.507 0 013.5 1h5m0-1h-5A3.51 3.51 0 000 3.5v5A3.51 3.51 0 003.5 12h5A3.51 3.51 0 0012 8.5v-5A3.51 3.51 0 008.5 0z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "data-name": "Path 2",
                d: "M9.25 3.5a.75.75 0 11.75-.75.748.748 0 01-.75.75zM6 4a2 2 0 11-2 2 2 2 0 012-2m0-1a3 3 0 103 3 3 3 0 00-3-3z",
                fill: "currentColor"
            })
        ]
    })
;

;// CONCATENATED MODULE: ./src/components/icons/social/twitter.tsx

const TwitterIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 14.747 12",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            "data-name": "_ionicons_svg_logo-twitter (5)",
            d: "M14.747 1.422a6.117 6.117 0 01-1.737.478A3.036 3.036 0 0014.341.225a6.012 6.012 0 01-1.922.734 3.025 3.025 0 00-5.234 2.069 2.962 2.962 0 00.078.691A8.574 8.574 0 011.026.553a3.032 3.032 0 00.941 4.044 2.955 2.955 0 01-1.375-.378v.037A3.028 3.028 0 003.02 7.225a3.046 3.046 0 01-.8.106 2.854 2.854 0 01-.569-.056 3.03 3.03 0 002.828 2.1 6.066 6.066 0 01-3.759 1.3 6.135 6.135 0 01-.722-.044A8.457 8.457 0 004.631 12a8.557 8.557 0 008.616-8.619c0-.131 0-.262-.009-.391a6.159 6.159 0 001.509-1.568z",
            fill: "currentColor"
        })
    })
;

;// CONCATENATED MODULE: ./src/components/icons/social/youtube.tsx

const YouTubeIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 15.997 12",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M15.893 2.65A2.429 2.429 0 0013.581.113c-1.731-.081-3.5-.112-5.3-.112h-.563c-1.8 0-3.569.031-5.3.112A2.434 2.434 0 00.106 2.656C.028 3.768-.006 4.881-.003 5.993s.031 2.225.106 3.34a2.437 2.437 0 002.309 2.547c1.822.085 3.688.12 5.584.12s3.759-.031 5.581-.119a2.438 2.438 0 002.312-2.547c.075-1.116.109-2.228.106-3.344s-.027-2.225-.102-3.34zM6.468 9.059v-6.14l4.531 3.069z",
            fill: "currentColor"
        })
    })
;

;// CONCATENATED MODULE: ./src/components/icons/social/index.tsx






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
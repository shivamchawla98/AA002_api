"use strict";
exports.id = 7904;
exports.ids = [7904];
exports.modules = {

/***/ 1007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ address_card)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/icons/close-icon.tsx
var close_icon = __webpack_require__(9581);
;// CONCATENATED MODULE: ./src/components/icons/pencil-icon.tsx

const PencilIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
        })
    })
;

// EXTERNAL MODULE: ./src/lib/format-address.ts
var format_address = __webpack_require__(4320);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/address/address-card.tsx






const AddressCard = ({ checked , address , onEdit , onDelete ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()('relative p-4 rounded border cursor-pointer group hover:border-accent', {
            'border-accent shadow-sm': checked,
            'bg-gray-100 border-transparent': !checked
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm text-heading font-semibold mb-3 capitalize",
                children: address?.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-sm text-sub-heading",
                children: (0,format_address/* formatAddress */.T)(address?.address)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute top-4 ltr:right-4 rtl:left-4 flex space-x-2 rtl:space-x-reverse opacity-0 group-hover:opacity-100",
                children: [
                    onEdit && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "flex items-center justify-center w-5 h-5 rounded-full bg-accent text-light",
                        onClick: onEdit,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: t('text-edit')
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(PencilIcon, {
                                className: "w-3 h-3"
                            })
                        ]
                    }),
                    onDelete && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-light",
                        onClick: onDelete,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: t('text-delete')
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(close_icon/* CloseIcon */.T, {
                                className: "w-3 h-3"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const address_card = (AddressCard);


/***/ }),

/***/ 5076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ AddressHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(393);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const AddressHeader = ({ onAdd , count , label ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center justify-between mb-5 md:mb-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center space-x-3 md:space-x-4 rtl:space-x-reverse",
                children: [
                    count && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "rounded-full w-8 h-8 bg-accent flex items-center justify-center text-base lg:text-xl text-light",
                        children: count
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg lg:text-xl text-heading capitalize",
                        children: label
                    })
                ]
            }),
            onAdd && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "flex items-center text-sm font-semibold text-accent transition-colors duration-200 focus:outline-none focus:text-accent-hover hover:text-accent-hover",
                onClick: onAdd,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_1__/* .PlusIcon */ .p, {
                        className: "w-4 h-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5"
                    }),
                    t('text-add')
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ PlusIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PlusIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
        })
    })
;


/***/ }),

/***/ 4320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ formatAddress)
/* harmony export */ });
function removeFalsy(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v])=>Boolean(v)
    ));
}
function formatAddress(address) {
    if (!address) return;
    const temp = [
        'street_address',
        'state',
        'city',
        'zip',
        'country'
    ].reduce((acc, k)=>({
            ...acc,
            [k]: address[k]
        })
    , {});
    const formattedAddress = removeFalsy(temp);
    return Object.values(formattedAddress).join(', ');
}


/***/ })

};
;
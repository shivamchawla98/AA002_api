"use strict";
exports.id = 9586;
exports.ids = [9586];
exports.modules = {

/***/ 9586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3117);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4144);
/* harmony import */ var _components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(393);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7798);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_checkout__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_2__]);
([_store_checkout__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const ContactGrid = ({ contact , label , count , className , gridClassName  })=>{
    const [contactNumber, setContactNumber] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_store_checkout__WEBPACK_IMPORTED_MODULE_3__/* .customerContactAtom */ .lu);
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_4__/* .useModalAction */ .SO)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (contact) {
            setContactNumber(contact);
            return;
        }
        setContactNumber('');
    }, [
        contact,
        setContactNumber
    ]);
    function onAddOrChange() {
        openModal('ADD_OR_UPDATE_CHECKOUT_CONTACT');
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('mb-5 flex items-center justify-between', {
                    'md:mb-8': count
                }),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center space-x-3 rtl:space-x-reverse md:space-x-4",
                        children: [
                            count && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex items-center justify-center w-8 h-8 text-base rounded-full bg-accent text-light lg:text-xl",
                                children: count
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg capitalize text-heading lg:text-xl",
                                children: label
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "flex items-center text-sm font-semibold transition-colors duration-200 text-accent hover:text-accent-hover focus:text-accent-hover focus:outline-none",
                        onClick: onAddOrChange,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_5__/* .PlusIcon */ .p, {
                                className: "h-4 w-4 stroke-2 ltr:mr-0.5 rtl:ml-0.5"
                            }),
                            contactNumber ? t('text-update') : t('text-add')
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('w-full', gridClassName),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    country: "us",
                    value: contactNumber,
                    disabled: true,
                    inputClass: "!p-0 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-border-base !rounded focus:!border-accent !h-12",
                    dropdownClass: "focus:!ring-0 !border !border-border-base !shadow-350"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactGrid);

});

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

/***/ 7798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport default from dynamic */ react_phone_input_2__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5452);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_0__);




/***/ })

};
;
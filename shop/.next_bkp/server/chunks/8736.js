"use strict";
exports.id = 8736;
exports.ids = [8736];
exports.modules = {

/***/ 8736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestAddressGrid": () => (/* binding */ GuestAddressGrid),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4144);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var _components_address_address_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1007);
/* harmony import */ var _components_address_address_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5076);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, jotai__WEBPACK_IMPORTED_MODULE_3__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, jotai__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const GuestAddressGrid = ({ addresses , label , atom , className , count , type ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    const [selectedAddress, setAddress] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(atom);
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_1__/* .useModalAction */ .SO)();
    function onAdd() {
        openModal('ADD_OR_UPDATE_GUEST_ADDRESS', {
            type,
            atom
        });
    }
    function onEdit(address) {
        openModal('ADD_OR_UPDATE_GUEST_ADDRESS', {
            type,
            atom,
            address
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_address_address_header__WEBPACK_IMPORTED_MODULE_5__/* .AddressHeader */ .V, {
                onAdd: onAdd,
                count: count,
                label: label
            }),
            addresses && addresses?.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup, {
                as: "span",
                value: selectedAddress,
                onChange: setAddress,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup.Label, {
                        className: "sr-only",
                        children: label
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",
                        children: addresses?.map((address)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.RadioGroup.Option, {
                                value: address,
                                children: ({ checked  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_address_address_card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        checked: checked,
                                        address: address,
                                        onEdit: ()=>onEdit(address)
                                    })
                            }, address?.id)
                        )
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "relative rounded border border-border-200 bg-gray-100 px-5 py-6 text-center text-base",
                    children: t('text-no-address')
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GuestAddressGrid);

});

/***/ })

};
;
"use strict";
exports.id = 7162;
exports.ids = [7162];
exports.modules = {

/***/ 6263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddOrUpdateContact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4144);
/* harmony import */ var _components_otp_otp_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3043);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3117);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _framework_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3642);
/* harmony import */ var _components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_7__, _components_otp_otp_form__WEBPACK_IMPORTED_MODULE_2__, _store_checkout__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_4__, _framework_settings__WEBPACK_IMPORTED_MODULE_6__]);
([_components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_7__, _components_otp_otp_form__WEBPACK_IMPORTED_MODULE_2__, _store_checkout__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_4__, _framework_settings__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








function AddOrUpdateContact() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
    const { settings: { useOtp  } ,  } = (0,_framework_settings__WEBPACK_IMPORTED_MODULE_6__/* .useSettings */ .rV)();
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_1__/* .useModalAction */ .SO)();
    const [contactNumber, setContactNumber] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_checkout__WEBPACK_IMPORTED_MODULE_3__/* .customerContactAtom */ .lu);
    function onSubmit({ phone_number  }) {
        setContactNumber(phone_number);
        closeModal();
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-center min-h-screen p-5 bg-light sm:p-8 md:min-h-0 md:rounded-xl",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: "mb-5 text-sm font-semibold text-center text-heading sm:mb-6",
                children: [
                    contactNumber ? t('text-update') : t('text-add-new'),
                    ' ',
                    t('text-contact-number')
                ]
            }),
            useOtp ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_otp_otp_form__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                phoneNumber: contactNumber,
                onVerifySuccess: onSubmit
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                onSubmit: onSubmit,
                phoneNumber: contactNumber
            })
        ]
    }));
};

});

/***/ })

};
;
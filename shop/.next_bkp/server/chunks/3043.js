"use strict";
exports.id = 3043;
exports.ids = [3043];
exports.modules = {

/***/ 3043:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OtpForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8788);
/* harmony import */ var _components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7763);
/* harmony import */ var _components_otp_atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4602);
/* harmony import */ var _components_otp_code_verify_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2787);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_otp_code_verify_form__WEBPACK_IMPORTED_MODULE_6__, _components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_4__, _framework_user__WEBPACK_IMPORTED_MODULE_7__, _components_otp_atom__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_2__]);
([_components_otp_code_verify_form__WEBPACK_IMPORTED_MODULE_6__, _components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_4__, _framework_user__WEBPACK_IMPORTED_MODULE_7__, _components_otp_atom__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








function OtpForm({ phoneNumber , onVerifySuccess  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const [otpState] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_components_otp_atom__WEBPACK_IMPORTED_MODULE_5__/* .optAtom */ .R);
    const { mutate: verifyOtpCode , isLoading: otpVerifyLoading  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_7__/* .useVerifyOtpCode */ ._7)({
        onVerifySuccess
    });
    const { mutate: sendOtpCode , isLoading , serverError , setServerError ,  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_7__/* .useSendOtpCode */ .Tk)();
    function onSendCodeSubmission({ phone_number  }) {
        sendOtpCode({
            phone_number: `+${phone_number}`
        });
    }
    function onVerifyCodeSubmission({ code  }) {
        verifyOtpCode({
            code,
            phone_number: otpState.phoneNumber,
            otp_id: otpState.otpId
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            otpState.step === 'PhoneNumber' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_alert__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        variant: "error",
                        message: serverError && t(serverError),
                        className: "mb-4",
                        closeable: true,
                        onClose: ()=>setServerError(null)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        onSubmit: onSendCodeSubmission,
                        isLoading: isLoading,
                        phoneNumber: phoneNumber
                    })
                ]
            }),
            otpState.step === 'OtpForm' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_otp_code_verify_form__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                onSubmit: onVerifyCodeSubmission,
                isLoading: otpVerifyLoading
            })
        ]
    }));
};

});

/***/ })

};
;
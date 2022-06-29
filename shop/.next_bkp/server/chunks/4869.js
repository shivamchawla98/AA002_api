"use strict";
exports.id = 4869;
exports.ids = [4869];
exports.modules = {

/***/ 792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OtpLoginView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8788);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5815);
/* harmony import */ var _components_otp_atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4602);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4144);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4641);
/* harmony import */ var _components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7763);
/* harmony import */ var _components_otp_code_verify_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2787);
/* harmony import */ var _components_otp_otp_register_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2280);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_logo__WEBPACK_IMPORTED_MODULE_7__, _components_otp_otp_register_form__WEBPACK_IMPORTED_MODULE_10__, _components_otp_code_verify_form__WEBPACK_IMPORTED_MODULE_9__, _components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_8__, _framework_user__WEBPACK_IMPORTED_MODULE_4__, _components_otp_atom__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_3__]);
([_components_ui_logo__WEBPACK_IMPORTED_MODULE_7__, _components_otp_otp_register_form__WEBPACK_IMPORTED_MODULE_10__, _components_otp_code_verify_form__WEBPACK_IMPORTED_MODULE_9__, _components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_8__, _framework_user__WEBPACK_IMPORTED_MODULE_4__, _components_otp_atom__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











function OtpLogin() {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const [otpState] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_components_otp_atom__WEBPACK_IMPORTED_MODULE_5__/* .optAtom */ .R);
    const { mutate: sendOtpCode , isLoading , serverError , setServerError ,  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_4__/* .useSendOtpCode */ .Tk)();
    const { mutate: otpLogin , isLoading: otpLoginLoading , serverError: optLoginError ,  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_4__/* .useOtpLogin */ .hv)();
    function onSendCodeSubmission({ phone_number  }) {
        sendOtpCode({
            phone_number: `+${phone_number}`
        });
    }
    function onOtpLoginSubmission(values) {
        otpLogin({
            ...values
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-4",
        children: [
            otpState.step === 'PhoneNumber' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_alert__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        variant: "error",
                        message: serverError && t(serverError),
                        className: "mb-4",
                        closeable: true,
                        onClose: ()=>setServerError(null)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_otp_phone_number_form__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            onSubmit: onSendCodeSubmission,
                            isLoading: isLoading,
                            view: "login"
                        })
                    })
                ]
            }),
            otpState.step === 'OtpForm' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_otp_code_verify_form__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                isLoading: otpLoginLoading,
                onSubmit: onOtpLoginSubmission
            }),
            otpState.step === 'RegisterForm' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_otp_otp_register_form__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                loading: otpLoginLoading,
                onSubmit: onOtpLoginSubmission
            })
        ]
    }));
}
function OtpLoginView() {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__/* .useModalAction */ .SO)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-center w-screen h-screen px-5 py-6 bg-light sm:p-8 md:h-auto md:max-w-md md:rounded-xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-4 text-sm leading-relaxed text-center mb-7 text-body sm:mt-5 sm:mb-10 md:text-base",
                children: t('otp-login-helper')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OtpLogin, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex flex-col items-center justify-center text-sm mt-9 mb-7 text-heading sm:mt-11 sm:mb-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "w-full"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "absolute -top-2.5 bg-light px-2 ltr:left-2/4 ltr:-ml-4 rtl:right-2/4 rtl:-mr-4",
                        children: t('text-or')
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-sm text-center text-body sm:text-base",
                children: [
                    t('text-back-to'),
                    ' ',
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>openModal('LOGIN_VIEW')
                        ,
                        className: "font-semibold underline transition-colors duration-200 text-accent hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none ltr:ml-1 rtl:mr-1",
                        children: t('text-login')
                    })
                ]
            })
        ]
    }));
};

});

/***/ }),

/***/ 2280:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OtpRegisterForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4254);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9258);
/* harmony import */ var _components_ui_forms_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8248);
/* harmony import */ var _components_ui_forms_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9235);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4144);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5584);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










const otpLoginFormSchemaForNewUser = yup__WEBPACK_IMPORTED_MODULE_9__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_9__.string().email('error-email-format').required('error-email-required'),
    name: yup__WEBPACK_IMPORTED_MODULE_9__.string().required('error-name-required'),
    code: yup__WEBPACK_IMPORTED_MODULE_9__.string().required('error-code-required')
});
function OtpRegisterForm({ onSubmit , loading  }) {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__/* .useModalAction */ .SO)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-5 space-y-5 border border-gray-200 rounded",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_7__/* .Form */ .l, {
            onSubmit: onSubmit,
            validationSchema: otpLoginFormSchemaForNewUser,
            children: ({ register , control , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            label: t('text-email'),
                            ...register('email'),
                            type: "email",
                            variant: "outline",
                            className: "mb-5",
                            error: t(errors.email?.message)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            label: t('text-name'),
                            ...register('name'),
                            variant: "outline",
                            className: "mb-5",
                            error: t(errors.name?.message)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_label__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    children: t('text-otp-code')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                    control: control,
                                    render: ({ field: { onChange , onBlur , value  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_otp_input__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            value: value,
                                            onChange: onChange,
                                            numInputs: 6,
                                            separator: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "hidden sm:inline-block",
                                                children: "-"
                                            }),
                                            containerStyle: "flex items-center justify-between -mx-2",
                                            inputStyle: "flex items-center justify-center !w-full mx-2 sm:!w-9 !px-0 appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base rounded focus:border-accent h-12",
                                            disabledStyle: "!bg-gray-100"
                                        })
                                    ,
                                    name: "code",
                                    defaultValue: ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-2 gap-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    variant: "outline",
                                    className: "hover:border-red-500 hover:bg-red-500",
                                    onClick: closeModal,
                                    children: t('text-cancel')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    loading: loading,
                                    disabled: loading,
                                    children: t('text-verify-code')
                                })
                            ]
                        })
                    ]
                })
        })
    }));
};

});

/***/ })

};
;
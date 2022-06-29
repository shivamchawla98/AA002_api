"use strict";
exports.id = 4458;
exports.ids = [4458];
exports.modules = {

/***/ 5020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "updateFormState": () => (/* binding */ updateFormState),
/* harmony export */   "default": () => (/* binding */ ForgotUserPassword)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5584);
/* harmony import */ var _components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8248);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9258);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6024);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(little_state_machine__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4144);
/* harmony import */ var _components_ui_forms_password_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6741);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5815);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4641);
/* harmony import */ var _ui_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8788);
/* harmony import */ var _icons_arrow_prev__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9198);
/* harmony import */ var _icons_arrow_next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9195);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_logo__WEBPACK_IMPORTED_MODULE_10__, _framework_user__WEBPACK_IMPORTED_MODULE_8__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__]);
([_components_ui_logo__WEBPACK_IMPORTED_MODULE_10__, _framework_user__WEBPACK_IMPORTED_MODULE_8__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);














const emailFormValidation = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email('error-email-format').required('error-email-required')
});
const tokenFormValidation = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    token: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('error-password-required')
});
const passwordFormValidation = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().required()
});
function EmailForm({ email , onSubmit , isLoading , serverError  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l, {
        onSubmit: onSubmit,
        useFormProps: {
            defaultValues: {
                email
            }
        },
        validationSchema: emailFormValidation,
        serverError: serverError && t(serverError),
        className: "text-left",
        children: ({ register , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        label: t('text-email'),
                        type: "email",
                        ...register('email'),
                        error: t(errors.email?.message)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        type: "submit",
                        className: "!mt-5 w-full text-sm tracking-[0.2px] lg:!mt-6",
                        loading: isLoading,
                        disabled: isLoading,
                        children: [
                            t('text-submit-email'),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_arrow_next__WEBPACK_IMPORTED_MODULE_13__/* .ArrowNextIcon */ .z, {
                                className: "w-5"
                            })
                        ]
                    })
                ]
            })
    }));
}
function TokenForm({ token , onSubmit , isLoading , serverError , handlePrevStep  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l, {
        onSubmit: onSubmit,
        useFormProps: {
            defaultValues: {
                token
            }
        },
        validationSchema: tokenFormValidation,
        serverError: serverError,
        children: ({ register , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        label: t('token-label'),
                        ...register('token'),
                        error: t(errors.token?.message)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                onClick: handlePrevStep,
                                className: "order-1 w-full !bg-cyan-500 text-sm tracking-[0.2px] hover:!bg-cyan-600",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_12__/* .ArrowPrevIcon */ .W, {
                                        className: "w-5"
                                    }),
                                    t('text-previous-step')
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "w-full text-sm tracking-[0.2px] sm:order-2",
                                loading: isLoading,
                                disabled: isLoading,
                                children: [
                                    t('text-submit-token'),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_arrow_next__WEBPACK_IMPORTED_MODULE_13__/* .ArrowNextIcon */ .z, {
                                        className: "w-5"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
    }));
}
function PasswordForm({ onSubmit , isLoading , handlePrevStep  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l, {
        onSubmit: onSubmit,
        useFormProps: {
            defaultValues: {
                password: ''
            }
        },
        validationSchema: passwordFormValidation,
        children: ({ register , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_password_input__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        label: t('text-new-password'),
                        ...register('password'),
                        error: t(errors.password?.message)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                onClick: handlePrevStep,
                                className: "order-1 w-full !bg-cyan-500 text-sm tracking-[0.2px] hover:!bg-cyan-600",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_12__/* .ArrowPrevIcon */ .W, {
                                        className: "w-5"
                                    }),
                                    t('text-previous-step')
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "w-full text-sm tracking-[0.2px] sm:order-2",
                                loading: isLoading,
                                disabled: isLoading,
                                children: t('text-reset-password')
                            })
                        ]
                    })
                ]
            })
    }));
}
function RenderFormSteps() {
    const { mutate: forgotPassword , isLoading , message , formError ,  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_8__/* .useForgotPassword */ .pO)();
    const { mutate: verifyForgotPasswordToken , isLoading: verifying , formError: tokenFormError ,  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_8__/* .useVerifyForgotPasswordToken */ .TQ)();
    const { mutate: resetPassword , isLoading: resetting  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_8__/* .useResetPassword */ .mI)();
    // use hook for getting form state and actions
    const { state , actions  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_5__.useStateMachine)({
        updateFormState
    });
    const emailFormHandle = ({ email  })=>{
        forgotPassword({
            email
        });
    };
    const passwordFormHandle = ({ password  })=>{
        resetPassword({
            password,
            token: state.token,
            email: state.email
        });
    };
    const tokenFormHandle = ({ token  })=>{
        verifyForgotPasswordToken({
            token,
            email: state.email
        });
    };
    function backToPreviousStep(step) {
        actions.updateFormState({
            step
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            state.step === 'Email' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmailForm, {
                email: state.email,
                onSubmit: emailFormHandle,
                isLoading: isLoading,
                serverError: formError
            }),
            state.step === 'Token' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_alert__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: "mb-4",
                        message: message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TokenForm, {
                        token: state.token,
                        onSubmit: tokenFormHandle,
                        isLoading: verifying,
                        serverError: tokenFormError,
                        handlePrevStep: ()=>backToPreviousStep('Email')
                    })
                ]
            }),
            state.step === 'Password' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PasswordForm, {
                    onSubmit: passwordFormHandle,
                    isLoading: resetting,
                    handlePrevStep: ()=>backToPreviousStep('Token')
                })
            })
        ]
    }));
}
const initialState = {
    step: 'Email',
    email: '',
    password: '',
    token: ''
};
//@ts-ignore
(0,little_state_machine__WEBPACK_IMPORTED_MODULE_5__.createStore)(initialState);
const updateFormState = (state, payload)=>{
    return {
        ...state,
        ...payload
    };
};
function ForgotUserPassword() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)('common');
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__/* .useModalAction */ .SO)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(little_state_machine__WEBPACK_IMPORTED_MODULE_5__.StateMachineProvider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-4 text-sm leading-relaxed text-center mb-7 text-body sm:mt-5 sm:mb-10 md:text-base",
                    children: t('forgot-password-helper')
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RenderFormSteps, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex flex-col items-center justify-center text-sm mt-9 mb-7 text-heading sm:mt-11 sm:mb-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                            className: "w-full"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "start-2/4 -ms-4 absolute -top-2.5 bg-light px-2",
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
                            className: "font-semibold underline transition-colors duration-200 ms-1 text-accent hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none",
                            children: t('text-login')
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 9876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ Eye)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Eye = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            })
        ]
    })
;


/***/ }),

/***/ 4602:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ initialOtpState),
/* harmony export */   "R": () => (/* binding */ optAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const initialOtpState = {
    step: 'PhoneNumber',
    isContactExist: false,
    otpId: null,
    phoneNumber: ''
};
const optAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(initialOtpState);

});

/***/ }),

/***/ 8788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9581);



const variantClasses = {
    info: 'bg-blue-100 text-blue-600',
    warning: 'bg-yellow-100 text-yellow-600',
    error: 'bg-red-100 text-red-500',
    success: 'bg-green-100 text-accent',
    infoOutline: 'border border-blue-200 text-blue-600',
    warningOutline: 'border border-yellow-200 text-yellow-600',
    errorOutline: 'border border-red-200 text-red-600',
    successOutline: 'border border-green-200 text-green-600'
};
const Alert = ({ message , closeable =false , variant ='info' , className , onClose ,  })=>{
    if (!message) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative flex items-center justify-between rounded py-4 px-5 shadow-sm', variantClasses[variant], className),
        role: "alert",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm",
                children: message
            }),
            closeable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "data-dismiss": "alert",
                "aria-label": "Close",
                onClick: onClose,
                title: "Close alert",
                className: "absolute top-1/2 -mt-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-red-500 transition-colors duration-200 hover:bg-gray-300 hover:bg-opacity-25 focus:bg-gray-300 focus:bg-opacity-25 focus:outline-none ltr:right-2 ltr:-mr-0.5 rtl:left-2 rtl:-ml-0.5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_2__/* .CloseIcon */ .T, {
                        className: "h-3 w-3"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);


/***/ }),

/***/ 8248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const variantClasses = {
    normal: 'bg-gray-100 border border-border-base rounded focus:shadow focus:bg-light focus:border-accent',
    solid: 'bg-gray-100 border border-border-100 rounded focus:bg-light focus:border-accent',
    outline: 'border border-border-base rounded focus:border-accent',
    line: 'ltr:pl-0 rtl:pr-0 border-b border-border-base rounded-none focus:border-accent'
};
const sizeClasses = {
    small: 'text-sm h-9',
    medium: 'h-12',
    big: 'h-14'
};
const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(({ className , label , name , error , children , variant ='normal' , dimension ='medium' , shadow =false , disabled =false , type ='text' , inputClassName , ...rest }, ref)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: name,
                className: "block mb-3 text-sm font-semibold leading-none text-body-dark",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                type: type,
                ref: ref,
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-none focus:ring-0', shadow && 'focus:shadow', variantClasses[variant], sizeClasses[dimension], disabled && 'cursor-not-allowed bg-gray-100', inputClassName),
                disabled: disabled,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: "false",
                "aria-invalid": error ? 'true' : 'false',
                ...rest
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 text-xs text-red-500",
                children: error
            })
        ]
    }));
});
Input.displayName = 'Input';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 6741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ password_input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(1434);
// EXTERNAL MODULE: ./src/components/icons/eye-icon.tsx
var eye_icon = __webpack_require__(9876);
;// CONCATENATED MODULE: ./src/components/icons/eye-off-icon.tsx

const EyeOff = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        })
    })
;

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/ui/forms/password-input.tsx







const variantClasses = {
    normal: 'bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent',
    solid: 'bg-gray-100 border border-border-100 focus:bg-light focus:border-accent',
    outline: 'border border-border-base focus:border-accent'
};
const PasswordInput = /*#__PURE__*/ external_react_default().forwardRef(({ className , inputClassName , label , name , error , children , variant ='normal' , shadow =false , type ='text' , forgotPageLink ='' , forgotPageRouteOnClick , ...rest }, ref)=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: name,
                        className: "font-semibold text-sm text-body",
                        children: label
                    }),
                    forgotPageLink && /*#__PURE__*/ jsx_runtime_.jsx(ui_link/* default */.Z, {
                        href: forgotPageLink,
                        className: "text-xs text-accent transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover",
                        children: t('common:text-forgot-password')
                    }),
                    forgotPageRouteOnClick && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: forgotPageRouteOnClick,
                        type: "button",
                        className: "text-xs text-accent transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover",
                        children: t('common:text-forgot-password')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        id: name,
                        name: name,
                        type: show ? 'text' : 'password',
                        ref: ref,
                        className: external_classnames_default()('py-3 ltr:pl-4 rtl:pr-4 ltr:pr-11 rtl:pl-11 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0', shadow && 'focus:shadow', variantClasses[variant], inputClassName),
                        autoComplete: "off",
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        ...rest
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: name,
                        className: "absolute ltr:right-4 rtl:left-4 top-5 -mt-2 text-body cursor-pointer",
                        onClick: ()=>setShow((prev)=>!prev
                            )
                        ,
                        children: show ? /*#__PURE__*/ jsx_runtime_.jsx(EyeOff, {
                            className: "w-6 h-6"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(eye_icon/* Eye */.b, {
                            className: "w-6 h-6"
                        })
                    })
                ]
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "my-2 text-xs text-red-500",
                children: error
            })
        ]
    }));
});
PasswordInput.displayName = 'PasswordInput';
/* harmony default export */ const password_input = (PasswordInput);


/***/ }),

/***/ 5815:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aF": () => (/* binding */ useUser),
/* harmony export */   "PC": () => (/* binding */ useDeleteAddress),
/* harmony export */   "Io": () => (/* binding */ useUpdateUser),
/* harmony export */   "AW": () => (/* binding */ useContact),
/* harmony export */   "f0": () => (/* binding */ useLogin),
/* harmony export */   "ob": () => (/* binding */ useSocialLogin),
/* harmony export */   "hv": () => (/* binding */ useOtpLogin),
/* harmony export */   "Tk": () => (/* binding */ useSendOtpCode),
/* harmony export */   "_7": () => (/* binding */ useVerifyOtpCode),
/* harmony export */   "mr": () => (/* binding */ useRegister),
/* harmony export */   "aU": () => (/* binding */ useLogout),
/* harmony export */   "y8": () => (/* binding */ useChangePassword),
/* harmony export */   "pO": () => (/* binding */ useForgotPassword),
/* harmony export */   "mI": () => (/* binding */ useResetPassword),
/* harmony export */   "TQ": () => (/* binding */ useVerifyForgotPasswordToken)
/* harmony export */ });
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4144);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_authorization_atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(269);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var _lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9897);
/* harmony import */ var _gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4869);
/* harmony import */ var _gql_address_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(162);
/* harmony import */ var _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(375);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_form_error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4988);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6024);
/* harmony import */ var little_state_machine__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(little_state_machine__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5020);
/* harmony import */ var _components_otp_atom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4602);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3117);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__, _store_checkout__WEBPACK_IMPORTED_MODULE_15__, jotai__WEBPACK_IMPORTED_MODULE_4__, _store_authorization_atom__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_5__, _utils_form_error__WEBPACK_IMPORTED_MODULE_11__, _components_otp_atom__WEBPACK_IMPORTED_MODULE_14__]);
([_components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__, _store_checkout__WEBPACK_IMPORTED_MODULE_15__, jotai__WEBPACK_IMPORTED_MODULE_4__, _store_authorization_atom__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_5__, _utils_form_error__WEBPACK_IMPORTED_MODULE_11__, _components_otp_atom__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
















function useUser() {
    const [isAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_3__/* .authorizationAtom */ .O);
    const { data , loading: isLoading , error ,  } = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useCustomerQuery */ .k1)({
        fetchPolicy: 'network-only',
        skip: !isAuthorized,
        onError: (err)=>{
            console.log(err);
        }
    });
    return {
        me: data?.me,
        isLoading,
        error,
        isAuthorized
    };
}
const useDeleteAddress = ()=>{
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    const [mutate, { loading: isLoading  }] = (0,_gql_address_graphql__WEBPACK_IMPORTED_MODULE_7__/* .useDeleteAddressMutation */ .c)({
        refetchQueries: [
            {
                query: _gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .CustomerDocument */ .dp
            }
        ],
        onCompleted: (data)=>{
            closeModal();
        },
        onError: (err)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(err.message);
        }
    });
    function deleteAddress({ id  }) {
        mutate({
            variables: {
                id
            }
        });
    }
    return {
        mutate: deleteAddress,
        isLoading
    };
};
const useUpdateUser = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    const [updateProfile, { loading: isLoading  }] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useUpdateCustomerMutation */ .oZ)({
        onCompleted: (data)=>{
            if (data?.updateUser?.id) {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(t('profile-update-successful'));
                closeModal();
            }
        },
        onError: (err)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(t('error-something-wrong'));
        }
    });
    function update({ id , address , name , profile  }) {
        updateProfile({
            variables: {
                //@ts-ignore
                input: {
                    id,
                    name,
                    ...profile && {
                        profile: {
                            upsert: {
                                id: profile?.id,
                                bio: profile.bio,
                                avatar: profile.avatar
                            }
                        }
                    },
                    ...address && {
                        address: {
                            upsert: address
                        }
                    }
                }
            }
        });
    }
    return {
        mutate: update,
        isLoading
    };
};
const useContact = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const [mutate, { loading: isLoading  }] = (0,_gql_settings_graphql__WEBPACK_IMPORTED_MODULE_8__/* .useContactUsMutation */ .sF)({
        onCompleted: (data)=>{
            if (data?.contactUs?.success) {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(t(data.contactUs.message));
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(t(data?.contactUs?.message));
            }
        },
        onError: (err)=>{
            console.log(err);
        }
    });
    function handleSubmit(values) {
        mutate({
            variables: {
                input: values
            }
        });
    }
    return {
        mutate: handleSubmit,
        isLoading
    };
};
function useLogin() {
    const [_, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_3__/* .authorizationAtom */ .O);
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    const { setToken  } = (0,_lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_5__/* .useToken */ .d)();
    let { 0: serverError , 1: setServerError  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const [mutate, { loading: isLoading  }] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useLoginMutation */ .YA)({
        onCompleted: (data)=>{
            if (!data.login?.token) {
                setServerError('error-credential-wrong');
                return;
            }
            setToken(data.login.token);
            setAuthorized(true);
            closeModal();
        },
        onError: (error)=>{
            console.log(error.message, 'error');
        }
    });
    function login(values) {
        mutate({
            variables: {
                input: {
                    ...values
                }
            }
        });
    }
    return {
        mutate: login,
        isLoading,
        serverError,
        setServerError
    };
}
function useSocialLogin() {
    const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useApolloClient)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const [_, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_3__/* .authorizationAtom */ .O);
    const { setToken  } = (0,_lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_5__/* .useToken */ .d)();
    const [mutate, { loading: isLoading , error  }] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useSocialLoginMutation */ .u4)({
        onCompleted: (data)=>{
            if (data?.socialLogin?.token && data?.socialLogin?.permissions?.length) {
                setToken(data?.socialLogin?.token);
                setAuthorized(true);
                client.resetStore();
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(t('error-credential-wrong'));
            }
        },
        onError: (err)=>{
            console.log(err.message);
        }
    });
    function handleSubmit(input) {
        mutate({
            variables: {
                input
            }
        });
    }
    return {
        mutate: handleSubmit,
        isLoading,
        error
    };
}
function useOtpLogin() {
    const [otpState, setOtpState] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_components_otp_atom__WEBPACK_IMPORTED_MODULE_14__/* .optAtom */ .R);
    const [_, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_3__/* .authorizationAtom */ .O);
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    const { setToken  } = (0,_lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_5__/* .useToken */ .d)();
    let { 0: serverError , 1: setServerError  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const [otpLogin, { loading: isLoading  }] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useOtpLoginMutation */ ._0)({
        onCompleted: (data)=>{
            if (!data?.otpLogin?.token && !data?.otpLogin?.permissions?.length) {
                setServerError('text-otp-verify-failed');
                return;
            }
            setToken(data?.otpLogin?.token);
            setAuthorized(true);
            setOtpState({
                ..._components_otp_atom__WEBPACK_IMPORTED_MODULE_14__/* .initialOtpState */ .L
            });
            closeModal();
        },
        onError: (err)=>{
            console.log(err);
        // setError(err.message);
        }
    });
    function handleSubmit(input) {
        otpLogin({
            variables: {
                input: {
                    ...input,
                    phone_number: otpState.phoneNumber,
                    otp_id: otpState.otpId
                }
            }
        });
    }
    return {
        mutate: handleSubmit,
        isLoading,
        serverError,
        setServerError
    };
}
function useSendOtpCode() {
    const [otpState, setOtpState] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_components_otp_atom__WEBPACK_IMPORTED_MODULE_14__/* .optAtom */ .R);
    let { 0: serverError , 1: setServerError  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const [mutate, { loading: isLoading  }] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useSendOtpCodeMutation */ .MZ)({
        onCompleted: (data)=>{
            if (!data?.sendOtpCode?.success) {
                setServerError(data?.sendOtpCode?.message);
                return;
            }
            setOtpState({
                ...otpState,
                otpId: data?.sendOtpCode?.id,
                isContactExist: data?.sendOtpCode?.is_contact_exist,
                phoneNumber: data?.sendOtpCode?.phone_number,
                step: data?.sendOtpCode?.is_contact_exist ? 'OtpForm' : 'RegisterForm'
            });
        },
        onError: (err)=>{
            console.log(err);
        }
    });
    function sendOtpCode(input) {
        mutate({
            variables: {
                input
            }
        });
    }
    return {
        mutate: sendOtpCode,
        isLoading,
        serverError,
        setServerError
    };
}
function useVerifyOtpCode({ onVerifySuccess  }) {
    const [otpState, setOtpState] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_components_otp_atom__WEBPACK_IMPORTED_MODULE_14__/* .optAtom */ .R);
    let { 0: serverError , 1: setServerError  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const [mutate, { loading: isLoading  }] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useVerifyOtpCodeMutation */ .n5)({
        onCompleted: (data)=>{
            if (!data?.verifyOtpCode?.success) {
                setServerError(data?.verifyOtpCode?.message);
                return;
            }
            if (onVerifySuccess) {
                onVerifySuccess({
                    phone_number: otpState.phoneNumber
                });
            }
            setOtpState({
                ..._components_otp_atom__WEBPACK_IMPORTED_MODULE_14__/* .initialOtpState */ .L
            });
        },
        onError: (error)=>{
            //FIXME: need to handle error message properly
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.message);
        }
    });
    function onVerify(input) {
        mutate({
            variables: {
                input: {
                    ...input
                }
            }
        });
    }
    return {
        mutate: onVerify,
        isLoading,
        serverError,
        setServerError
    };
}
function useRegister() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const { setToken  } = (0,_lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_5__/* .useToken */ .d)();
    const [_, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_3__/* .authorizationAtom */ .O);
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    let { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const [registerUser, { loading: isLoading  }] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useRegisterMutation */ .l4)({
        onCompleted: (data)=>{
            if (data?.register?.token && data?.register?.permissions?.length) {
                setToken(data?.register?.token);
                setAuthorized(true);
                closeModal();
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(t('error-credential-wrong'));
            }
        },
        onError: (error)=>{
            const serverErrors = (0,_utils_form_error__WEBPACK_IMPORTED_MODULE_11__/* .getErrorMessage */ .e)(error);
            setFormError(Object.fromEntries(Object.entries(serverErrors?.validation).map(([k, v])=>[
                    k.split('.')[1],
                    v, 
                ]
            )));
        }
    });
    function register(values) {
        registerUser({
            variables: {
                input: {
                    ...values
                }
            }
        });
    }
    return {
        mutate: register,
        isLoading,
        formError
    };
}
function useLogout() {
    const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useApolloClient)();
    const { setToken  } = (0,_lib_hooks_use_token__WEBPACK_IMPORTED_MODULE_5__/* .useToken */ .d)();
    const [_, setAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_3__/* .authorizationAtom */ .O);
    const [_r, resetCheckout] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_checkout__WEBPACK_IMPORTED_MODULE_15__/* .clearCheckoutAtom */ .y9);
    const [signOut] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useLogoutMutation */ ._y)({
        onCompleted: (data)=>{
            if (data?.logout) {
                setToken('');
                setAuthorized(false);
                resetCheckout();
                client.resetStore();
            }
        }
    });
    return {
        mutate: signOut
    };
}
function useChangePassword() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const [changePassword, { loading: isLoading  }] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useChangePasswordMutation */ .$h)();
    let { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    function change(input) {
        changePassword({
            variables: {
                input
            },
            onCompleted: (data)=>{
                if (!data?.changePassword?.success) {
                    setFormError({
                        oldPassword: data?.changePassword?.message ?? ''
                    });
                    return;
                }
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(t('password-successful'));
            }
        });
    }
    return {
        mutate: change,
        isLoading,
        formError
    };
}
function useForgotPassword() {
    const { actions  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_12__.useStateMachine)({
        updateFormState: _components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__.updateFormState
    });
    let { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    let { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    const [forgetPassword, { loading: isLoading  }] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useForgetPasswordMutation */ .xy)();
    function forget(input) {
        forgetPassword({
            variables: {
                input
            },
            onCompleted: (res)=>{
                if (!res?.forgetPassword?.success) {
                    setFormError({
                        email: res?.forgetPassword?.message
                    });
                    return;
                }
                setMessage(res?.forgetPassword?.message);
                actions.updateFormState({
                    email: input.email,
                    step: 'Token'
                });
            }
        });
    }
    return {
        mutate: forget,
        isLoading,
        message,
        formError
    };
}
function useResetPassword() {
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
    const [resetPassword, { loading: isLoading  }] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useResetPasswordMutation */ .gL)();
    const { actions  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_12__.useStateMachine)({
        updateFormState: _components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__.updateFormState
    });
    function reset(input) {
        resetPassword({
            variables: {
                input
            },
            onCompleted: (res)=>{
                if (res?.resetPassword?.success) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success('Successfully Reset Password!');
                    actions.updateFormState({
                        ..._components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__.initialState
                    });
                    openModal('LOGIN_VIEW');
                }
            }
        });
    }
    return {
        mutate: reset,
        isLoading
    };
}
function useVerifyForgotPasswordToken() {
    const { actions  } = (0,little_state_machine__WEBPACK_IMPORTED_MODULE_12__.useStateMachine)({
        updateFormState: _components_auth_forgot_password__WEBPACK_IMPORTED_MODULE_13__.updateFormState
    });
    const [verifyToken, { loading: isLoading  }] = (0,_gql_auth_graphql__WEBPACK_IMPORTED_MODULE_6__/* .useVerifyForgetPasswordTokenMutation */ .AV)();
    let { 0: formError , 1: setFormError  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
    function verify(input) {
        verifyToken({
            variables: {
                input
            },
            onCompleted: (res)=>{
                if (!res.verifyForgetPasswordToken?.success) {
                    setFormError({
                        token: res.verifyForgetPasswordToken?.message
                    });
                    return;
                }
                actions.updateFormState({
                    step: 'Password',
                    token: input.token
                });
            }
        });
    }
    return {
        mutate: verify,
        isLoading,
        formError
    };
}

});

/***/ }),

/***/ 4988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getErrorMessage)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


function getErrorMessage(error) {
    let processedError = {
        message: '',
        validation: []
    };
    if (error.graphQLErrors) {
        for (const graphQLError of error.graphQLErrors){
            if (graphQLError.extensions && graphQLError.extensions.category === 'validation') {
                processedError['message'] = graphQLError.message;
                processedError['validation'] = graphQLError.extensions.validation;
                return processedError;
            } else if (graphQLError.extensions && graphQLError.extensions.category === 'authorization') {
                js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove('auth_token');
                js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove('auth_permissions');
                next_router__WEBPACK_IMPORTED_MODULE_0___default().push('/');
            }
        }
    }
    processedError['message'] = error.message;
    return processedError;
}

});

/***/ }),

/***/ 9897:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useToken)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4357);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


function useToken() {
    return {
        setToken (token) {
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(_lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_TOKEN_KEY */ .nd, token, {
                expires: 1
            });
        },
        getToken () {
            return js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_TOKEN_KEY */ .nd);
        },
        removeToken () {
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove(_lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_TOKEN_KEY */ .nd);
        },
        hasToken () {
            const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(_lib_constants__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_TOKEN_KEY */ .nd);
            if (!token) return false;
            return true;
        }
    };
}

});

/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useDeleteAddressMutation)
/* harmony export */ });
/* unused harmony export DeleteAddressDocument */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const DeleteAddressDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation DeleteAddress($id: ID!) {
  deleteAddress(id: $id) {
    id
    title
    type
    default
    address {
      country
      city
      state
      zip
      street_address
    }
  }
}
    `;
/**
 * __useDeleteAddressMutation__
 *
 * To run a mutation, you first call `useDeleteAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAddressMutation, { data, loading, error }] = useDeleteAddressMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */ function useDeleteAddressMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(DeleteAddressDocument, options);
}


/***/ }),

/***/ 4869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YA": () => (/* binding */ useLoginMutation),
/* harmony export */   "u4": () => (/* binding */ useSocialLoginMutation),
/* harmony export */   "MZ": () => (/* binding */ useSendOtpCodeMutation),
/* harmony export */   "n5": () => (/* binding */ useVerifyOtpCodeMutation),
/* harmony export */   "_0": () => (/* binding */ useOtpLoginMutation),
/* harmony export */   "_y": () => (/* binding */ useLogoutMutation),
/* harmony export */   "l4": () => (/* binding */ useRegisterMutation),
/* harmony export */   "$h": () => (/* binding */ useChangePasswordMutation),
/* harmony export */   "xy": () => (/* binding */ useForgetPasswordMutation),
/* harmony export */   "AV": () => (/* binding */ useVerifyForgetPasswordTokenMutation),
/* harmony export */   "gL": () => (/* binding */ useResetPasswordMutation),
/* harmony export */   "oZ": () => (/* binding */ useUpdateCustomerMutation),
/* harmony export */   "dp": () => (/* binding */ CustomerDocument),
/* harmony export */   "k1": () => (/* binding */ useCustomerQuery)
/* harmony export */ });
/* unused harmony exports LoginDocument, SocialLoginDocument, SendOtpCodeDocument, VerifyOtpCodeDocument, OtpLoginDocument, LogoutDocument, RegisterDocument, ChangePasswordDocument, ForgetPasswordDocument, VerifyForgetPasswordTokenDocument, ResetPasswordDocument, UpdateCustomerDocument, useCustomerLazyQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const LoginDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation Login($email: String!, $password: String!) {
  login(input: {email: $email, password: $password}) {
    token
    permissions
  }
}
    `;
/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */ function useLoginMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(LoginDocument, options);
}
const SocialLoginDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation SocialLogin($input: SocialLoginInput!) {
  socialLogin(input: $input) {
    token
    permissions
  }
}
    `;
/**
 * __useSocialLoginMutation__
 *
 * To run a mutation, you first call `useSocialLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSocialLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [socialLoginMutation, { data, loading, error }] = useSocialLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useSocialLoginMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(SocialLoginDocument, options);
}
const SendOtpCodeDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation SendOtpCode($input: OtpInput!) {
  sendOtpCode(input: $input) {
    id
    message
    success
    provider
    phone_number
    is_contact_exist
  }
}
    `;
/**
 * __useSendOtpCodeMutation__
 *
 * To run a mutation, you first call `useSendOtpCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendOtpCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendOtpCodeMutation, { data, loading, error }] = useSendOtpCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useSendOtpCodeMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(SendOtpCodeDocument, options);
}
const VerifyOtpCodeDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation VerifyOtpCode($input: VerifyOtpInput!) {
  verifyOtpCode(input: $input) {
    message
    success
  }
}
    `;
/**
 * __useVerifyOtpCodeMutation__
 *
 * To run a mutation, you first call `useVerifyOtpCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyOtpCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyOtpCodeMutation, { data, loading, error }] = useVerifyOtpCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useVerifyOtpCodeMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(VerifyOtpCodeDocument, options);
}
const OtpLoginDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation OtpLogin($input: OtpLoginInput!) {
  otpLogin(input: $input) {
    token
    permissions
  }
}
    `;
/**
 * __useOtpLoginMutation__
 *
 * To run a mutation, you first call `useOtpLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOtpLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [otpLoginMutation, { data, loading, error }] = useOtpLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useOtpLoginMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(OtpLoginDocument, options);
}
const LogoutDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation Logout {
  logout
}
    `;
/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */ function useLogoutMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(LogoutDocument, options);
}
const RegisterDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    token
    permissions
  }
}
    `;
/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useRegisterMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(RegisterDocument, options);
}
const ChangePasswordDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation ChangePassword($input: ChangePasswordInput!) {
  changePassword(input: $input) {
    message
    success
  }
}
    `;
/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useChangePasswordMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(ChangePasswordDocument, options);
}
const ForgetPasswordDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation ForgetPassword($input: ForgetPasswordInput!) {
  forgetPassword(input: $input) {
    message
    success
  }
}
    `;
/**
 * __useForgetPasswordMutation__
 *
 * To run a mutation, you first call `useForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgetPasswordMutation, { data, loading, error }] = useForgetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useForgetPasswordMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(ForgetPasswordDocument, options);
}
const VerifyForgetPasswordTokenDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation VerifyForgetPasswordToken($input: VerifyForgetPasswordTokenInput!) {
  verifyForgetPasswordToken(input: $input) {
    message
    success
  }
}
    `;
/**
 * __useVerifyForgetPasswordTokenMutation__
 *
 * To run a mutation, you first call `useVerifyForgetPasswordTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyForgetPasswordTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyForgetPasswordTokenMutation, { data, loading, error }] = useVerifyForgetPasswordTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useVerifyForgetPasswordTokenMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(VerifyForgetPasswordTokenDocument, options);
}
const ResetPasswordDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation ResetPassword($input: ResetPasswordInput!) {
  resetPassword(input: $input) {
    message
    success
  }
}
    `;
/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useResetPasswordMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(ResetPasswordDocument, options);
}
const UpdateCustomerDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation UpdateCustomer($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    email
    profile {
      id
      avatar {
        id
        thumbnail
        original
      }
      bio
      socials {
        type
        link
      }
      contact
    }
    address {
      title
      default
      address {
        country
        city
        state
        zip
      }
      type
    }
  }
}
    `;
/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useUpdateCustomerMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(UpdateCustomerDocument, options);
}
const CustomerDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Customer {
  me {
    id
    name
    email
    profile {
      id
      avatar {
        id
        thumbnail
        original
      }
      bio
      socials {
        type
        link
      }
      contact
    }
    address {
      id
      title
      default
      type
      address {
        country
        city
        state
        zip
        street_address
      }
    }
    wallet {
      id
      total_points
      points_used
      available_points
    }
  }
}
    `;
/**
 * __useCustomerQuery__
 *
 * To run a query within a React component, call `useCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomerQuery({
 *   variables: {
 *   },
 * });
 */ function useCustomerQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(CustomerDocument, options);
}
function useCustomerLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(CustomerDocument, options);
}


/***/ })

};
;
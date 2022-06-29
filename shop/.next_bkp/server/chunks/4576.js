"use strict";
exports.id = 4576;
exports.ids = [4576];
exports.modules = {

/***/ 2787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OtpCodeForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4254);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9258);
/* harmony import */ var _components_ui_forms_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9235);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4144);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5584);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5641);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const otpLoginFormSchemaForExistingUser = yup__WEBPACK_IMPORTED_MODULE_7__.object().shape({
    code: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('error-code-required')
});
function OtpCodeForm({ onSubmit , isLoading  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)('common');
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_4__/* .useModalAction */ .SO)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-5 space-y-5 border border-gray-200 rounded",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_5__/* .Form */ .l, {
            onSubmit: onSubmit,
            validationSchema: otpLoginFormSchemaForExistingUser,
            children: ({ control , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_label__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    children: t('text-otp-code')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.Controller, {
                                    control: control,
                                    render: ({ field: { onChange , onBlur , value  }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_otp_input__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            value: value,
                                            onChange: onChange,
                                            numInputs: 6,
                                            separator: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "hidden sm:inline-block",
                                                children: "-"
                                            }),
                                            // containerStyle="justify-center space-x-2 sm:space-x-0 rtl:space-x-reverse"
                                            containerStyle: "flex items-center justify-between -mx-2",
                                            // inputStyle="flex items-center justify-center !w-full sm:!w-11 appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base rounded focus:border-accent h-12"
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    variant: "outline",
                                    onClick: closeModal,
                                    className: "hover:border-red-500 hover:bg-red-500",
                                    children: t('text-cancel')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    loading: isLoading,
                                    disabled: isLoading,
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

/***/ }),

/***/ 7763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PhoneNumberForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5584);
/* harmony import */ var _components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7798);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9258);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const checkoutContactSchema = yup__WEBPACK_IMPORTED_MODULE_6__.object().shape({
    phone_number: yup__WEBPACK_IMPORTED_MODULE_6__.string().required('error-contact-required')
});
function PhoneNumberForm({ phoneNumber , onSubmit , isLoading , view  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__/* .Form */ .l, {
        onSubmit: onSubmit,
        validationSchema: checkoutContactSchema,
        className: "w-full",
        useFormProps: {
            defaultValues: {
                phone_number: phoneNumber
            }
        },
        children: ({ control , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex w-full items-center md:min-w-[360px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
                                name: "phone_number",
                                control: control,
                                render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_phone_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        country: "us",
                                        inputClass: "!p-0 ltr:!pr-4 rtl:!pl-4 ltr:!pl-14 rtl:!pr-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-border-base ltr:!border-r-0 rtl:!border-l-0 !rounded ltr:!rounded-r-none rtl:!rounded-l-none focus:!border-accent !h-12",
                                        dropdownClass: "focus:!ring-0 !border !border-border-base !shadow-350",
                                        ...field
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "!text-sm ltr:!rounded-l-none rtl:!rounded-r-none",
                                loading: isLoading,
                                disabled: isLoading,
                                children: view === 'login' ? t('text-send-otp') : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        Boolean(phoneNumber) ? t('text-update') : t('text-add'),
                                        ' ',
                                        t('nav-menu-contact')
                                    ]
                                })
                            })
                        ]
                    }),
                    errors.phone_number?.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-2 text-xs text-red-500 ltr:text-left rtl:text-right",
                        children: t(errors.phone_number.message)
                    })
                ]
            })
    }));
};

});

/***/ }),

/***/ 9235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const Label = ({ className , ...rest })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('block text-body-dark font-semibold text-sm leading-none mb-3', className),
        ...rest
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


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
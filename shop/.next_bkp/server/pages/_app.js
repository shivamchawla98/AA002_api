(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 4866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoginView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4641);
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8788);
/* harmony import */ var _components_ui_forms_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8248);
/* harmony import */ var _components_ui_forms_password_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6741);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9258);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_icons_google__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9689);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4144);
/* harmony import */ var _components_icons_mobile_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8529);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5584);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5815);
/* harmony import */ var _components_icons_anonymous_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8497);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_logo__WEBPACK_IMPORTED_MODULE_2__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_12__, _framework_user__WEBPACK_IMPORTED_MODULE_13__]);
([_components_ui_logo__WEBPACK_IMPORTED_MODULE_2__, _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_12__, _framework_user__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

















const loginFormSchema = yup__WEBPACK_IMPORTED_MODULE_8__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_8__.string().email('error-email-format').required('error-email-required'),
    password: yup__WEBPACK_IMPORTED_MODULE_8__.string().required('error-password-required')
});
function LoginForm() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('common');
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_10__/* .useModalAction */ .SO)();
    const isCheckout = router.pathname.includes('checkout');
    const { mutate: login , isLoading , serverError , setServerError  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_13__/* .useLogin */ .f0)();
    function onSubmit({ email , password  }) {
        login({
            email,
            password
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_alert__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                variant: "error",
                message: serverError && t(serverError),
                className: "mb-6",
                closeable: true,
                onClose: ()=>setServerError(null)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_12__/* .Form */ .l, {
                onSubmit: onSubmit,
                validationSchema: loginFormSchema,
                children: ({ register , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                label: t('text-email'),
                                ...register('email'),
                                type: "email",
                                variant: "outline",
                                className: "mb-5",
                                error: t(errors.email?.message)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_password_input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                label: t('text-password'),
                                ...register('password'),
                                error: t(errors.password?.message),
                                variant: "outline",
                                className: "mb-5",
                                forgotPageRouteOnClick: ()=>openModal('FORGOT_VIEW')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    className: "h-11 w-full sm:h-12",
                                    loading: isLoading,
                                    disabled: isLoading,
                                    children: t('text-login')
                                })
                            })
                        ]
                    })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8",
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
                className: "mt-2 grid grid-cols-1 gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "!bg-social-google !text-light hover:!bg-social-google-hover",
                        disabled: isLoading,
                        onClick: ()=>{
                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)('google');
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_google__WEBPACK_IMPORTED_MODULE_9__/* .GoogleIcon */ ._, {
                                className: "h-4 w-4 ltr:mr-3 rtl:ml-3"
                            }),
                            t('text-login-google')
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "h-11 w-full !bg-gray-500 !text-light hover:!bg-gray-600 sm:h-12",
                        disabled: isLoading,
                        onClick: ()=>openModal('OTP_LOGIN')
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_mobile_icon__WEBPACK_IMPORTED_MODULE_11__/* .MobileIcon */ .p, {
                                className: "h-5 text-light ltr:mr-2 rtl:ml-2"
                            }),
                            t('text-login-mobile')
                        ]
                    }),
                    isCheckout && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "h-11 w-full !bg-pink-700 !text-light hover:!bg-pink-800 sm:h-12",
                        disabled: isLoading,
                        onClick: ()=>router.push(`${_lib_routes__WEBPACK_IMPORTED_MODULE_16__/* .ROUTES.CHECKOUT */ .Z.CHECKOUT}/guest`)
                        ,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_anonymous_icon__WEBPACK_IMPORTED_MODULE_14__/* .AnonymousIcon */ .s, {
                                className: "h-6 text-light ltr:mr-2 rtl:ml-2"
                            }),
                            t('text-guest-checkout')
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: "w-full"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center text-sm text-body sm:text-base",
                children: [
                    t('text-no-account'),
                    ' ',
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>openModal('REGISTER')
                        ,
                        className: "font-semibold text-accent underline transition-colors duration-200 hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-none ltr:ml-1 rtl:mr-1",
                        children: t('text-register')
                    })
                ]
            })
        ]
    }));
}
function LoginView() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-4 mb-8 text-center text-sm text-body sm:mt-5 sm:mb-10 md:text-base",
                children: t('login-helper')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginForm, {})
        ]
    }));
};

});

/***/ }),

/***/ 1442:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_user__WEBPACK_IMPORTED_MODULE_3__]);
_framework_user__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const SocialLogin = ()=>{
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();
    const loading = status === 'loading';
    const { mutate: socialLogin , error  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_3__/* .useSocialLogin */ .ob)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // is true when valid social login access token and provider is available in the session
        // but not authorize/logged in
        if (session?.access_token && session?.provider) {
            socialLogin({
                provider: session.provider,
                access_token: session.access_token
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        session
    ]);
    // When rendering client side don't display anything until loading is complete
    if (false) {}
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: error
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialLogin);

});

/***/ }),

/***/ 8497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ AnonymousIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AnonymousIcon = ({ ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        height: "24",
        viewBox: "0 0 32 32",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M23 26.896c2.664 0 4.832-2.167 4.832-4.831S25.664 17.233 23 17.233c-1.828 0-3.403 1.032-4.224 2.533h-5.553c-.82-1.501-2.395-2.533-4.223-2.533-2.664 0-4.832 2.168-4.832 4.832s2.168 4.83 4.832 4.83 4.831-2.166 4.831-4.83c0-.103-.024-.198-.03-.3h4.397c-.006.102-.03.197-.03.3A4.837 4.837 0 0 0 23 26.895zm0-7.663c1.561 0 2.832 1.27 2.832 2.832s-1.27 2.83-2.832 2.83-2.832-1.269-2.832-2.83 1.27-2.832 2.832-2.832zM9 24.896c-1.562 0-2.832-1.27-2.832-2.831S7.438 19.233 9 19.233s2.831 1.27 2.831 2.832-1.27 2.83-2.831 2.83zM30.274 14.784a52.039 52.039 0 0 0-4.757-1.114L23.98 5.911c-.06-.29-.24-.54-.49-.68a1.03 1.03 0 0 0-.84-.06 18.806 18.806 0 0 1-13.3 0 .967.967 0 0 0-.83.06c-.26.14-.44.39-.5.68l-1.537 7.76a52.048 52.048 0 0 0-4.758 1.113 1 1 0 0 0-.687 1.237c.152.53.706.833 1.237.687a49.898 49.898 0 0 1 27.45 0 1.001 1.001 0 0 0 .549-1.924zM8.587 13.32 9.76 7.431a20.76 20.76 0 0 0 12.48 0l1.17 5.888a51.879 51.879 0 0 0-14.823 0z"
        })
    }));
};


/***/ }),

/***/ 1038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ BackArrowRound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BackArrowRound = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 219.151 219.151",
        fill: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M109.576 219.151c60.419 0 109.573-49.156 109.573-109.576C219.149 49.156 169.995 0 109.576 0S.002 49.156.002 109.575c0 60.42 49.155 109.576 109.574 109.576zm0-204.151c52.148 0 94.573 42.426 94.574 94.575 0 52.149-42.425 94.575-94.574 94.576-52.148-.001-94.573-42.427-94.573-94.577C15.003 57.427 57.428 15 109.576 15z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M94.861 156.507a7.502 7.502 0 0010.606 0 7.499 7.499 0 00-.001-10.608l-28.82-28.819 83.457-.008a7.5 7.5 0 00-.001-15l-83.46.008 28.827-28.825a7.5 7.5 0 00-10.607-10.608l-41.629 41.628a7.495 7.495 0 00-2.197 5.303 7.51 7.51 0 002.198 5.305l41.627 41.624z"
            })
        ]
    })
;


/***/ }),

/***/ 9689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ GoogleIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const GoogleIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19.986",
        height: "20.39",
        viewBox: "0 0 19.986 20.39",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            "data-name": "Path 2",
            d: "M10.195 20.39c5.883 0 9.791-4.13 9.791-9.958a8.711 8.711 0 00-.166-1.7H10.2v3.5h5.787a5.522 5.522 0 01-5.787 4.402 6.441 6.441 0 010-12.88 5.727 5.727 0 014.062 1.571l2.764-2.655A9.749 9.749 0 0010.195 0a10.195 10.195 0 000 20.39z",
            fill: "currentColor"
        })
    })
;


/***/ }),

/***/ 8529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ MobileIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const MobileIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 27.442 27.442",
        ...props,
        fill: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M19.494 0H7.948a1.997 1.997 0 00-1.997 1.999v23.446c0 1.102.892 1.997 1.997 1.997h11.546a1.998 1.998 0 001.997-1.997V1.999A1.999 1.999 0 0019.494 0zm-8.622 1.214h5.7c.144 0 .261.215.261.481s-.117.482-.261.482h-5.7c-.145 0-.26-.216-.26-.482s.115-.481.26-.481zm2.85 24.255a1.275 1.275 0 110-2.55 1.275 1.275 0 010 2.55zm6.273-4.369H7.448V3.373h12.547V21.1z"
        })
    })
;


/***/ }),

/***/ 8398:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MobileCategoryMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9635);
/* harmony import */ var _components_categories_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9900);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function MobileCategoryMenu({ variables  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-full max-h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_categories_categories__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                layout: "classic",
                className: "!block",
                variables: variables
            })
        })
    }));
};

});

/***/ }),

/***/ 658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3642);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_settings__WEBPACK_IMPORTED_MODULE_1__]);
_framework_settings__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const DefaultSeo = ()=>{
    const { settings  } = (0,_framework_settings__WEBPACK_IMPORTED_MODULE_1__/* .useSettings */ .rV)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.DefaultSeo, {
        additionalMetaTags: [
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1 maximum-scale=1'
            },
            {
                name: 'apple-mobile-web-app-capable',
                content: 'yes'
            },
            {
                name: 'theme-color',
                content: '#ffffff'
            }, 
        ],
        additionalLinkTags: [
            {
                rel: 'apple-touch-icon',
                href: 'icons/apple-icon-180.png'
            },
            {
                rel: 'manifest',
                href: '/manifest.json'
            }, 
        ],
        title: settings?.seo?.metaTitle,
        titleTemplate: `${settings?.seo?.metaTitle || settings?.siteTitle || 'E-Commerce'} | %s`,
        defaultTitle: "PickBazar",
        description: settings?.seo?.metaDescription || settings?.siteSubtitle,
        canonical: settings?.seo?.canonicalUrl,
        openGraph: {
            title: settings?.seo?.ogTitle,
            description: settings?.seo?.ogDescription,
            type: 'website',
            locale: 'en_US',
            site_name: settings?.siteTitle,
            images: [
                {
                    url: settings?.seo?.ogImage?.original,
                    width: 800,
                    height: 600,
                    alt: settings?.seo?.ogTitle
                }, 
            ]
        },
        twitter: {
            handle: settings?.seo?.twitterHandle,
            site: settings?.siteTitle,
            cardType: settings?.seo?.twitterCardType
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultSeo);

});

/***/ }),

/***/ 9635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4641);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4178);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9581);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_logo__WEBPACK_IMPORTED_MODULE_1__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_2__]);
([_components_ui_logo__WEBPACK_IMPORTED_MODULE_1__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_3__, jotai__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const DrawerWrapper = ({ children  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
    const [_, closeSidebar] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_3__/* .drawerAtom */ .P);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-full flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "fixed top-0 z-20 mb-4 flex w-full max-w-md items-center justify-between border-b border-border-200 border-opacity-75 bg-white p-5 md:mb-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        className: "w-24 md:w-auto"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>closeSidebar({
                                display: false,
                                view: ''
                            })
                        ,
                        className: "flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-body transition-all duration-200 hover:bg-accent hover:text-light focus:bg-accent focus:text-light focus:outline-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: t('text-close')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_4__/* .CloseIcon */ .T, {
                                className: "h-2.5 w-2.5"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pt-20",
                children: children
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerWrapper);

});

/***/ }),

/***/ 28:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9677);
/* harmony import */ var _reach_portal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_portal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5782);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7046);
/* harmony import */ var _lib_motion_fade_in_right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4329);
/* harmony import */ var _lib_motion_fade_in_left__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8952);
/* harmony import */ var _lib_motion_fade_in_out__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6107);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const Drawer = ({ children , open =false , variant ='right' , useBlurBackdrop , onClose ,  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (ref.current) {
            const target =  false && 0;
            if (open) {
                (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__.disableBodyScroll)(target);
            } else {
                (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__.enableBodyScroll)(target);
            }
        }
        return ()=>{
            (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__.clearAllBodyScrollLocks)();
        };
    }, [
        open
    ]);
    // useEffect(() => {
    //   if (ref.current) {
    //     if (open) {
    //       disableBodyScroll(ref.current);
    //     } else {
    //       enableBodyScroll(ref.current);
    //     }
    //   }
    //   return () => {
    //     clearAllBodyScrollLocks();
    //   };
    // }, [open]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reach_portal__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {
            children: open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.aside, {
                ref: ref,
                initial: "from",
                animate: "to",
                exit: "from",
                variants: variant === 'right' ? (0,_lib_motion_fade_in_right__WEBPACK_IMPORTED_MODULE_7__/* .fadeInRight */ .E)() : (0,_lib_motion_fade_in_left__WEBPACK_IMPORTED_MODULE_8__/* .fadeInLeft */ .O)(),
                className: "fixed inset-0 z-50 h-full overflow-hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute inset-0 overflow-hidden",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            initial: "from",
                            animate: "to",
                            exit: "from",
                            variants: (0,_lib_motion_fade_in_out__WEBPACK_IMPORTED_MODULE_9__/* .fadeInOut */ .I)(0.35),
                            onClick: onClose,
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('absolute inset-0 bg-dark bg-opacity-40', useBlurBackdrop && 'use-blur-backdrop')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('absolute inset-y-0 flex max-w-full outline-none', variant === 'right' ? 'ltr:right-0 rtl:left-0' : 'ltr:left-0 rtl:right-0'),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-full w-screen max-w-md",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "drawer flex h-full flex-col bg-light text-base shadow-xl",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        className: "h-full w-full",
                                        children: children
                                    })
                                })
                            })
                        })
                    ]
                })
            }, "drawer")
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drawer);

});

/***/ }),

/***/ 9315:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ManagedDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_mobile_menu_mobile_category_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8398);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4178);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5218);
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_mobile_menu_mobile_category_menu__WEBPACK_IMPORTED_MODULE_1__, _drawer__WEBPACK_IMPORTED_MODULE_5__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_2__, jotai__WEBPACK_IMPORTED_MODULE_3__]);
([_components_layouts_mobile_menu_mobile_category_menu__WEBPACK_IMPORTED_MODULE_1__, _drawer__WEBPACK_IMPORTED_MODULE_5__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_2__, jotai__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const CartSidebarView = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(5648), __webpack_require__.e(9118)]).then(__webpack_require__.bind(__webpack_require__, 9118))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/drawer/managed-drawer.tsx -> " + "@/components/cart/cart-sidebar-view"
        ]
    }
});
const MobileAuthorizedMenu = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(()=>__webpack_require__.e(/* import() */ 9653).then(__webpack_require__.bind(__webpack_require__, 9653))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/drawer/managed-drawer.tsx -> " + "@/components/layouts/mobile-menu/mobile-authorized-menu"
        ]
    }
});
const MobileMainMenu = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(()=>__webpack_require__.e(/* import() */ 609).then(__webpack_require__.bind(__webpack_require__, 609))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/drawer/managed-drawer.tsx -> " + "@/components/layouts/mobile-menu/mobile-main-menu"
        ]
    }
});
const SearchFilterView = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(6551), __webpack_require__.e(5589), __webpack_require__.e(2819), __webpack_require__.e(9172)]).then(__webpack_require__.bind(__webpack_require__, 2819))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/drawer/managed-drawer.tsx -> " + "@/components/search-view/sidebar-filter"
        ]
    }
});
function ManagedDrawer() {
    const [{ display , view , data  }, setDrawerState] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_2__/* .drawerAtom */ .P);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_drawer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        open: display,
        onClose: ()=>setDrawerState({
                display: false,
                view: ''
            })
        ,
        variant: [
            'FILTER_VIEW',
            'MAIN_MENU_VIEW',
            'FILTER_LAYOUT_TWO_VIEW',
            'SEARCH_FILTER', 
        ].includes(view) ? 'left' : 'right',
        children: [
            view === 'cart' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartSidebarView, {}),
            view === 'FILTER_VIEW' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_mobile_menu_mobile_category_menu__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                variables: data
            }),
            view === 'MAIN_MENU_VIEW' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileMainMenu, {}),
            view === 'AUTH_MENU_VIEW' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileAuthorizedMenu, {}),
            view === 'SEARCH_FILTER' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchFilterView, {
                type: data?.type,
                showManufacturers: data?.showManufacturers
            })
        ]
    }));
};

});

/***/ }),

/***/ 2045:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5218);
/* harmony import */ var _components_ui_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8192);
/* harmony import */ var _modal_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4144);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_modal_modal__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const OtpLoginView = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(4576), __webpack_require__.e(4869)]).then(__webpack_require__.bind(__webpack_require__, 792))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/auth/otp-login"
        ]
    }
});
const Login = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/auth/login-form"
        ]
    },
    ssr: false
});
const Register = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 3089).then(__webpack_require__.bind(__webpack_require__, 3089))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/auth/register-form"
        ]
    }
});
const ForgotPassword = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 5020))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/auth/forgot-password"
        ]
    }
});
const ProductDetailsModalView = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/products/details/popup"
        ]
    },
    ssr: false
});
const ShopInfoCard = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(5385), __webpack_require__.e(9883), __webpack_require__.e(4967)]).then(__webpack_require__.bind(__webpack_require__, 4967))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/shops/sidebar"
        ]
    }
});
const CreateOrUpdateAddressForm = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/address/address-form"
        ]
    },
    ssr: false
});
const CreateOrUpdateGuestAddressForm = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3398), __webpack_require__.e(2758)]).then(__webpack_require__.bind(__webpack_require__, 2758))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/checkout/create-or-update-guest"
        ]
    }
});
const AddressDeleteView = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>__webpack_require__.e(/* import() */ 4722).then(__webpack_require__.bind(__webpack_require__, 4722))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/address/delete-view"
        ]
    }
});
const AddOrUpdateCheckoutContact = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(4576), __webpack_require__.e(3043), __webpack_require__.e(7162)]).then(__webpack_require__.bind(__webpack_require__, 6263))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/checkout/contact/add-or-update"
        ]
    }
});
const ProfileAddOrUpdateContact = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(4576), __webpack_require__.e(3043), __webpack_require__.e(5550)]).then(__webpack_require__.bind(__webpack_require__, 5550))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/profile/profile-add-or-update-contact"
        ]
    }
});
const CreateRefundView = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(2709), __webpack_require__.e(4538), __webpack_require__.e(3398), __webpack_require__.e(1445), __webpack_require__.e(616)]).then(__webpack_require__.bind(__webpack_require__, 616))
, {
    loadableGenerated: {
        modules: [
            "../components/ui/modal/managed-modal.tsx -> " + "@/components/refunds/refund-form"
        ]
    }
});
const ManagedModal = ()=>{
    const { isOpen , view , data  } = (0,_modal_context__WEBPACK_IMPORTED_MODULE_3__/* .useModalState */ .X9)();
    const { closeModal  } = (0,_modal_context__WEBPACK_IMPORTED_MODULE_3__/* .useModalAction */ .SO)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_modal_modal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        open: isOpen,
        onClose: closeModal,
        children: [
            view === 'LOGIN_VIEW' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Login, {}),
            view === 'REGISTER' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Register, {}),
            view === 'FORGOT_VIEW' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ForgotPassword, {}),
            view === 'OTP_LOGIN' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OtpLoginView, {}),
            view === 'REFUND_REQUEST' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateRefundView, {}),
            view === 'ADD_OR_UPDATE_ADDRESS' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateOrUpdateAddressForm, {}),
            view === 'ADD_OR_UPDATE_GUEST_ADDRESS' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateOrUpdateGuestAddressForm, {}),
            view === 'ADD_OR_UPDATE_CHECKOUT_CONTACT' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddOrUpdateCheckoutContact, {}),
            view === 'ADD_OR_UPDATE_PROFILE_CONTACT' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileAddOrUpdateContact, {}),
            view === 'DELETE_ADDRESS' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddressDeleteView, {}),
            view === 'PRODUCT_DETAILS' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductDetailsModalView, {
                productSlug: data
            }),
            view === 'SHOP_INFO' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShopInfoCard, {
                shop: data?.shop,
                cardClassName: "!hidden",
                className: "!flex !h-screen !w-screen max-w-screen-sm flex-col"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManagedModal);

});

/***/ }),

/***/ 8192:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9581);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





function Modal({ open , onClose , children  }) {
    const cancelButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
        show: open,
        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
            as: "div",
            className: "fixed inset-0 z-50 overflow-y-auto",
            initialFocus: cancelButtonRef,
            static: true,
            open: open,
            onClose: onClose,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "min-h-full md:p-5 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Overlay, {
                            className: "fixed inset-0 bg-gray-900 bg-opacity-50 w-full h-full"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "inline-block h-screen align-middle",
                        "aria-hidden": "true",
                        children: "​"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "inline-block min-w-content max-w-full ltr:text-left rtl:text-right align-middle transition-all relative",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    onClick: onClose,
                                    "aria-label": "Close panel",
                                    ref: cancelButtonRef,
                                    className: "inline-block lg:hidden outline-none focus:outline-none absolute ltr:right-4 rtl:left-4 top-4 z-[60]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: t('text-close')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_1__/* .CloseIcon */ .T, {
                                            className: "w-4 h-4"
                                        })
                                    ]
                                }),
                                children
                            ]
                        })
                    })
                ]
            })
        })
    }));
};

});

/***/ }),

/***/ 7046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(153);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__);




const Scrollbar = ({ options , className , style , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__.OverlayScrollbarsComponent, {
        options: {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('os-theme-thin-dark', className),
            scrollbars: {
                autoHide: 'scroll'
            },
            ...options ? options : {}
        },
        style: style,
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);


/***/ }),

/***/ 894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ QueryProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _framework_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_client__WEBPACK_IMPORTED_MODULE_2__]);
_framework_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function QueryProvider({ pageProps , children  }) {
    const apolloClient = (0,_framework_client__WEBPACK_IMPORTED_MODULE_2__/* .useApollo */ .Uk)(pageProps);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
        client: apolloClient,
        children: children
    }));
};

});

/***/ }),

/***/ 8952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ fadeInLeft)
/* harmony export */ });
function fadeInLeft(duration = 0.3) {
    return {
        from: {
            left: '-100%',
            transition: {
                type: 'easeInOut',
                duration: duration
            }
        },
        to: {
            left: 0,
            transition: {
                type: 'easeInOut',
                duration: duration
            }
        }
    };
}


/***/ }),

/***/ 6107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ fadeInOut)
/* harmony export */ });
function fadeInOut(duration = 0.2) {
    return {
        from: {
            opacity: 0,
            transition: {
                type: 'easeInOut',
                duration: duration
            }
        },
        to: {
            opacity: 1,
            transition: {
                type: 'easeInOut',
                duration: duration
            }
        }
    };
}


/***/ }),

/***/ 4329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ fadeInRight)
/* harmony export */ });
function fadeInRight(duration = 0.3) {
    return {
        from: {
            right: '-100%',
            transition: {
                type: 'easeInOut',
                duration: duration
            }
        },
        to: {
            right: 0,
            transition: {
                type: 'easeInOut',
                duration: duration
            }
        }
    };
}


/***/ }),

/***/ 7867:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3659);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_icons_back_arrow_round__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1038);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5815);
/* harmony import */ var _components_auth_login_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4866);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_auth_login_form__WEBPACK_IMPORTED_MODULE_5__, _framework_user__WEBPACK_IMPORTED_MODULE_4__]);
([_components_auth_login_form__WEBPACK_IMPORTED_MODULE_5__, _framework_user__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const PrivateRoute = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { me , isAuthorized  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_4__/* .useUser */ .aF)();
    const isUser = !!me;
    if (!isUser && !isAuthorized) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative flex justify-center w-full min-h-screen py-5 md:py-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "absolute flex items-center justify-center w-8 h-8 text-gray-200 transition-colors md:w-16 md:h-16 top-5 md:top-1/2 ltr:left-5 rtl:right-5 ltr:md:left-10 rtl:md:right-10 md:-mt-8 md:text-gray-300 hover:text-gray-400",
                    onClick: router.back,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_back_arrow_round__WEBPACK_IMPORTED_MODULE_3__/* .BackArrowRound */ .Y, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col my-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_login_form__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                })
            ]
        }));
    }
    if (isUser && isAuthorized) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        }));
    }
    // Session is being fetched, or no user.
    // If no user, useEffect() will redirect.
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        showText: false
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);

});

/***/ }),

/***/ 3806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7532);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4144);
/* harmony import */ var _components_ui_modal_managed_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2045);
/* harmony import */ var _components_ui_drawer_managed_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9315);
/* harmony import */ var _components_seo_default_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(658);
/* harmony import */ var _components_ui_search_search_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(476);
/* harmony import */ var _lib_private_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7867);
/* harmony import */ var _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2730);
/* harmony import */ var _components_auth_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1442);
/* harmony import */ var _framework_client_query_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(894);
/* harmony import */ var _components_cart_cart_counter_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2069);
/* harmony import */ var _components_layouts_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5511);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_auth_social_login__WEBPACK_IMPORTED_MODULE_12__, _components_ui_drawer_managed_drawer__WEBPACK_IMPORTED_MODULE_7__, _components_ui_modal_managed_modal__WEBPACK_IMPORTED_MODULE_6__, _components_layouts_footer__WEBPACK_IMPORTED_MODULE_15__, _lib_private_route__WEBPACK_IMPORTED_MODULE_10__, _components_seo_default_seo__WEBPACK_IMPORTED_MODULE_8__, _components_cart_cart_counter_button__WEBPACK_IMPORTED_MODULE_14__, _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_11__, _framework_client_query_provider__WEBPACK_IMPORTED_MODULE_13__]);
([_components_auth_social_login__WEBPACK_IMPORTED_MODULE_12__, _components_ui_drawer_managed_drawer__WEBPACK_IMPORTED_MODULE_7__, _components_ui_modal_managed_modal__WEBPACK_IMPORTED_MODULE_6__, _components_layouts_footer__WEBPACK_IMPORTED_MODULE_15__, _lib_private_route__WEBPACK_IMPORTED_MODULE_10__, _components_seo_default_seo__WEBPACK_IMPORTED_MODULE_8__, _components_cart_cart_counter_button__WEBPACK_IMPORTED_MODULE_14__, _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_11__, _framework_client_query_provider__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

















function CustomApp({ Component , pageProps: { session , ...pageProps }  }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page)=>page
    );
    const authenticationRequired = Component.authenticationRequired ?? false;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_framework_client_query_provider__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
            pageProps: pageProps,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_search_search_context__WEBPACK_IMPORTED_MODULE_9__/* .SearchProvider */ .X$, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_5__/* .ModalProvider */ .DY, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_11__/* .CartProvider */ .Zl, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cart_cart_counter_button__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_default_seo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                    authenticationRequired ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_private_route__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        children: getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                            ...pageProps
                                        }))
                                    }) : getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                        ...pageProps
                                    })),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_footer__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_modal_managed_modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_drawer_managed_drawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {
                                        autoClose: 2000,
                                        theme: "colored"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_auth_social_login__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                ]
                            })
                        ]
                    })
                })
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.appWithTranslation)(CustomApp));

});

/***/ }),

/***/ 7532:
/***/ (() => {



/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 7812:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ 4394:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 9677:
/***/ ((module) => {

"use strict";
module.exports = require("@reach/portal");

/***/ }),

/***/ 5782:
/***/ ((module) => {

"use strict";
module.exports = require("body-scroll-lock");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 6330:
/***/ ((module) => {

"use strict";
module.exports = require("deepmerge");

/***/ }),

/***/ 6024:
/***/ ((module) => {

"use strict";
module.exports = require("little-state-machine");

/***/ }),

/***/ 9699:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ 1649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 153:
/***/ ((module) => {

"use strict";
module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 1817:
/***/ ((module) => {

"use strict";
module.exports = require("rc-slider");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8782:
/***/ ((module) => {

"use strict";
module.exports = require("react-content-loader");

/***/ }),

/***/ 3599:
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ 6358:
/***/ ((module) => {

"use strict";
module.exports = require("react-dropzone");

/***/ }),

/***/ 9709:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 4254:
/***/ ((module) => {

"use strict";
module.exports = require("react-otp-input");

/***/ }),

/***/ 5452:
/***/ ((module) => {

"use strict";
module.exports = require("react-phone-input-2");

/***/ }),

/***/ 1929:
/***/ ((module) => {

"use strict";
module.exports = require("react-select");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 7139:
/***/ ((module) => {

"use strict";
module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

"use strict";
module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 3706:
/***/ ((module) => {

"use strict";
module.exports = import("apollo-upload-client");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

"use strict";
module.exports = import("jotai/utils");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,5519,3570,8598,9258,8649,5584,6331,5511,3669,4458,476,3659,2069], () => (__webpack_exec__(3806)));
module.exports = __webpack_exports__;

})();
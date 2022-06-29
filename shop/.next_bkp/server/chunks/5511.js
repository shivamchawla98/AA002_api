"use strict";
exports.id = 5511;
exports.ids = [5511];
exports.modules = {

/***/ 5760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ SendIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SendIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16.045",
        height: "16",
        viewBox: "0 0 16.045 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            id: "send",
            d: "M17.633,9.293,3.284,2.079a.849.849,0,0,0-1.2,1.042l2,5.371,9.138,1.523L4.086,11.538l-2,5.371a.812.812,0,0,0,1.2.962l14.349-7.214A.762.762,0,0,0,17.633,9.293Z",
            transform: "translate(-2.009 -1.994)",
            fill: "currentColor"
        })
    })
;


/***/ }),

/***/ 5511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8598);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1434);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4641);
/* harmony import */ var _components_settings_subscribe_to_newsletter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(212);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_settings_subscribe_to_newsletter__WEBPACK_IMPORTED_MODULE_5__, _components_ui_logo__WEBPACK_IMPORTED_MODULE_4__]);
([_components_settings_subscribe_to_newsletter__WEBPACK_IMPORTED_MODULE_5__, _components_ui_logo__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const Footer = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full flex-col border-gray-800 bg-white px-5 md:px-10 lg:border-b-8 lg:px-[50px] xl:px-16",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 pt-16 md:grid-cols-3 lg:pt-24 lg:pb-16 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 2xl:grid-cols-5",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-[2px] flex h-16 items-start",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("address", {
                            className: "mb-7 text-sm not-italic text-heading",
                            children: t(_settings_site__WEBPACK_IMPORTED_MODULE_2__/* .siteSettings.footer.address */ .U.footer.address)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "mb-1 text-sm text-heading",
                            children: t(_settings_site__WEBPACK_IMPORTED_MODULE_2__/* .siteSettings.footer.email */ .U.footer.email)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-sm text-heading",
                            children: t(_settings_site__WEBPACK_IMPORTED_MODULE_2__/* .siteSettings.footer.phone */ .U.footer.phone)
                        })
                    ]
                }),
                _settings_site__WEBPACK_IMPORTED_MODULE_2__/* .siteSettings.footer.menus.map */ .U.footer.menus.map((menu, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "mt-3 mb-4 font-semibold text-heading lg:mb-7",
                                children: t(menu.title)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "space-y-3",
                                children: menu.links.map((link, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            href: link.href,
                                            className: "text-sm text-heading transition-colors hover:text-orange-500",
                                            children: t(link.name)
                                        })
                                    }, `${link.href}-${index}`)
                                )
                            })
                        ]
                    }, `${menu.title}-${idx}`)
                ),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-span-full md:col-span-2 lg:col-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_settings_subscribe_to_newsletter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        title: "text-subscribe-now",
                        description: "text-subscribe-details"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

});

/***/ }),

/***/ 212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SubscribeToNewsletter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_settings_subscription_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9658);
/* harmony import */ var _framework_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3642);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_settings_subscription_form__WEBPACK_IMPORTED_MODULE_1__, _framework_settings__WEBPACK_IMPORTED_MODULE_2__]);
([_components_settings_subscription_form__WEBPACK_IMPORTED_MODULE_1__, _framework_settings__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




function SubscribeToNewsletter({ title , description  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { mutate: subscribe , isLoading: loading , isSubscribed ,  } = (0,_framework_settings__WEBPACK_IMPORTED_MODULE_2__/* .useSubscription */ .mU)();
    function onSubmit({ email  }) {
        subscribe({
            email
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mt-3 mb-7 text-xl font-semibold text-heading",
                children: t(title)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-7 text-sm text-heading",
                children: t(description)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_settings_subscription_form__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                onSubmit: onSubmit,
                loading: loading,
                success: isSubscribed
            })
        ]
    }));
};

});

/***/ }),

/***/ 9658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SubscriptionForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icons_send_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5760);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5584);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__]);
_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const subscribeFormSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_4__.string().email('error-email-format').required('error-email-required')
});
function SubscriptionForm({ onSubmit , loading , success  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_3__/* .Form */ .l, {
            onSubmit: onSubmit,
            validationSchema: subscribeFormSchema,
            children: ({ register , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative w-full rounded border border-gray-200 bg-gray-50 ltr:pr-11 rtl:pl-11",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "email",
                                    id: "email_subscribe",
                                    ...register('email'),
                                    placeholder: t('common:text-enter-email'),
                                    className: "h-14 w-full border-0 bg-transparent text-sm text-body outline-none focus:outline-none ltr:pl-5 rtl:pr-5"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "absolute top-1/2 -mt-2 ltr:right-3 rtl:left-3",
                                    children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "flex h-5 w-5 shrink-0 animate-spin rounded-full border-[3px] border-t-[3px] border-gray-300 text-accent ltr:ml-2 rtl:mr-2",
                                        style: {
                                            borderTopColor: 'currentcolor'
                                        }
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_send_icon__WEBPACK_IMPORTED_MODULE_2__/* .SendIcon */ .j, {
                                        className: "text-gray-500 transition-colors hover:text-accent"
                                    })
                                })
                            ]
                        }),
                        errors.email?.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-1 text-[13px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-red-500",
                                children: t(errors.email.message)
                            })
                        }),
                        !loading && success && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-1 text-[13px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-accent",
                                children: t('text-subscribe-successfully')
                            })
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
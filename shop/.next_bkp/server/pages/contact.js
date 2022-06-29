"use strict";
(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335];
exports.modules = {

/***/ 1601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/contact-illustration.2f6adc05.svg","height":232,"width":299});

/***/ }),

/***/ 6437:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9258);
/* harmony import */ var _components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5584);
/* harmony import */ var _components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8248);
/* harmony import */ var _components_ui_forms_text_area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3398);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5815);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__, _framework_user__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__, _framework_user__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const contactFormSchema = yup__WEBPACK_IMPORTED_MODULE_7__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('error-name-required'),
    email: yup__WEBPACK_IMPORTED_MODULE_7__.string().email('error-email-format').required('error-email-required'),
    subject: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('error-subject-required'),
    description: yup__WEBPACK_IMPORTED_MODULE_7__.string().required('error-description-required')
});
const ContactForm = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    const { mutate , isLoading  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_5__/* .useContact */ .AW)();
    function onSubmit(values) {
        mutate(values);
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_form__WEBPACK_IMPORTED_MODULE_2__/* .Form */ .l, {
        onSubmit: onSubmit,
        validationSchema: contactFormSchema,
        children: ({ register , formState: { errors  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                label: t('text-name'),
                                ...register('name'),
                                variant: "outline",
                                error: t(errors.name?.message)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                label: t('text-email'),
                                ...register('email'),
                                type: "email",
                                variant: "outline",
                                error: t(errors.email?.message)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        label: t('text-subject'),
                        ...register('subject'),
                        variant: "outline",
                        className: "my-6",
                        error: t(errors.subject?.message)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_text_area__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        label: t('text-description'),
                        ...register('description'),
                        variant: "outline",
                        className: "my-6",
                        error: t(errors.description?.message)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        loading: isLoading,
                        disabled: isLoading,
                        children: t('text-submit')
                    })
                ]
            })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

});

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


/***/ }),

/***/ 7309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_general_ssr__WEBPACK_IMPORTED_MODULE_11__.b),
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_settings_contact_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6437);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(495);
/* harmony import */ var _assets_contact_illustration_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1601);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1179);
/* harmony import */ var _lib_format_address__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4320);
/* harmony import */ var _lib_get_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1379);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_icons_social__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4131);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3176);
/* harmony import */ var _framework_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3642);
/* harmony import */ var _framework_general_ssr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1476);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__, _components_settings_contact_form__WEBPACK_IMPORTED_MODULE_2__, _framework_settings__WEBPACK_IMPORTED_MODULE_10__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_11__]);
([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__, _components_settings_contact_form__WEBPACK_IMPORTED_MODULE_2__, _framework_settings__WEBPACK_IMPORTED_MODULE_10__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);













const ContactPage = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const { settings  } = (0,_framework_settings__WEBPACK_IMPORTED_MODULE_10__/* .useSettings */ .rV)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                title: 'Contact',
                url: 'contact'
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full bg-gray-100",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mx-auto flex w-full max-w-7xl flex-col py-10 px-5 md:flex-row xl:py-14 xl:px-8 2xl:px-14",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "order-2 w-full shrink-0 bg-light p-5 md:order-1 md:w-72 lg:w-96",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-8 flex w-full items-center justify-center overflow-hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
                                        src: _assets_contact_illustration_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                        alt: t('nav-menu-contact'),
                                        className: "h-auto w-full"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-8 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mb-3 font-semibold text-heading",
                                            children: t('text-address')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-body",
                                            children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()((0,_lib_format_address__WEBPACK_IMPORTED_MODULE_12__/* .formatAddress */ .T)(settings?.contactDetails?.location)) ? (0,_lib_format_address__WEBPACK_IMPORTED_MODULE_12__/* .formatAddress */ .T)(settings?.contactDetails?.location) : t('common:text-no-address')
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-8 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mb-3 font-semibold text-heading",
                                            children: t('text-phone')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-body",
                                            children: settings?.contactDetails?.contact ? settings?.contactDetails?.contact : t('text-no-contact')
                                        })
                                    ]
                                }),
                                settings?.contactDetails?.website && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-8 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mb-3 font-semibold text-heading",
                                            children: t('text-website')
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm text-body",
                                                    children: settings?.contactDetails?.website
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: settings?.contactDetails?.website ?? '#',
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "text-sm font-semibold text-accent hover:text-accent-hover focus:text-blue-500 focus:outline-none",
                                                    children: t('text-visit-site')
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-8 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mb-4 font-semibold text-heading",
                                            children: t('text-follow-us')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex items-center justify-start",
                                            children: settings?.contactDetails?.socials?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: item?.url,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: `text-muted transition-colors duration-300 focus:outline-none ltr:mr-8 ltr:last:mr-0 rtl:ml-8 rtl:last:ml-0 hover:${item.hoverClass}`,
                                                    children: (0,_lib_get_icon__WEBPACK_IMPORTED_MODULE_6__/* .getIcon */ .q)({
                                                        iconList: _components_icons_social__WEBPACK_IMPORTED_MODULE_8__,
                                                        iconName: item?.icon,
                                                        className: 'w-4 h-4'
                                                    })
                                                }, index)
                                            )
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "order-1 mb-8 w-full bg-light p-5 md:order-2 md:mb-0 md:p-8 ltr:md:ml-7 rtl:md:mr-7 ltr:lg:ml-9 rtl:lg:mr-9",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "mb-7 font-body text-xl font-bold text-heading md:text-2xl",
                                    children: t('text-questions-comments')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_settings_contact_form__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
ContactPage.getLayout = _components_layouts_layout__WEBPACK_IMPORTED_MODULE_5__/* .getLayout */ .G;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactPage);

});

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 7812:
/***/ ((module) => {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ 4394:
/***/ ((module) => {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 6024:
/***/ ((module) => {

module.exports = require("little-state-machine");

/***/ }),

/***/ 9699:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 113:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 153:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8782:
/***/ ((module) => {

module.exports = require("react-content-loader");

/***/ }),

/***/ 3599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 7139:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 3706:
/***/ ((module) => {

module.exports = import("apollo-upload-client");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,8598,9258,8649,7698,5584,6331,5511,8218,1179,4458,7129,5385,3398], () => (__webpack_exec__(7309)));
module.exports = __webpack_exports__;

})();
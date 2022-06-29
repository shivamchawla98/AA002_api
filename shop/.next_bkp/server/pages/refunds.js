"use strict";
(() => {
var exports = {};
exports.id = 4185;
exports.ids = [4185];
exports.modules = {

/***/ 3731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(447);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3669);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6078);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4195);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6619);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3291);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9480);
/* harmony import */ var _components_ui_cards_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2008);
/* harmony import */ var _components_icons_eye_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9876);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1434);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3445);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(110);
/* harmony import */ var _framework_order__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_2__, _framework_order__WEBPACK_IMPORTED_MODULE_16__]);
([_lib_use_price__WEBPACK_IMPORTED_MODULE_2__, _framework_order__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

















const RenderStatusBadge = ({ status  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    switch(status.toLowerCase()){
        case 'approved':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                text: t('text-approved'),
                color: "bg-accent"
            }));
        case 'rejected':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                text: t('text-rejected'),
                color: "bg-red-500"
            }));
        case 'processing':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                text: t('text-processing'),
                color: "bg-yellow-500"
            }));
        default:
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                text: t('text-pending'),
                color: "bg-purple-500"
            }));
    }
};
const RefundView = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { alignLeft , alignRight  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_4__/* .useIsRTL */ .S)();
    const { refunds , error  } = (0,_framework_order__WEBPACK_IMPORTED_MODULE_16__/* .useRefunds */ .rT)({
        limit: 10
    });
    const refundTableColumns = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>[
            {
                title: t('text-id'),
                dataIndex: 'id',
                key: 'id',
                align: 'center',
                ellipsis: true,
                className: '!text-sm',
                width: 75
            },
            {
                title: t('text-reason'),
                dataIndex: 'title',
                key: 'title',
                align: alignLeft,
                ellipsis: true,
                className: '!text-sm',
                width: 220,
                render: function renderQuantity(title) {
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "whitespace-nowrap",
                        children: title
                    }));
                }
            },
            {
                title: t('text-status'),
                dataIndex: 'status',
                key: 'status',
                align: 'center',
                ellipsis: true,
                className: '!text-sm',
                width: 160,
                render: function renderStatus(status) {
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RenderStatusBadge, {
                        status: status
                    }));
                }
            },
            {
                title: t('text-tracking-number'),
                dataIndex: '',
                key: 'pivot',
                align: 'center',
                className: '!text-sm',
                width: 160,
                render: function renderTrackingNumber(pivot) {
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: pivot?.order?.tracking_number
                    }));
                }
            },
            {
                title: t('text-amount'),
                dataIndex: 'amount',
                key: 'amount',
                align: alignRight,
                className: '!text-sm',
                width: 150,
                render: function RenderPrice(amount) {
                    const { price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
                        amount: amount
                    });
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: price
                    }));
                }
            },
            {
                title: t('text-date'),
                dataIndex: 'created_at',
                key: 'created_at',
                align: 'center',
                className: '!text-sm',
                width: 160,
                render: (date)=>{
                    dayjs__WEBPACK_IMPORTED_MODULE_6___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7___default()));
                    dayjs__WEBPACK_IMPORTED_MODULE_6___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_8___default()));
                    dayjs__WEBPACK_IMPORTED_MODULE_6___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_9___default()));
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "whitespace-nowrap",
                        children: dayjs__WEBPACK_IMPORTED_MODULE_6___default().utc(date).tz(dayjs__WEBPACK_IMPORTED_MODULE_6___default().tz.guess()).fromNow()
                    }));
                }
            },
            {
                title: t('text-details'),
                dataIndex: 'order',
                key: 'order',
                align: 'center',
                className: '!text-sm',
                width: 100,
                render: (order)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_14__/* .ROUTES.ORDERS */ .Z.ORDERS}/${order?.tracking_number}`,
                        className: "inline-block text-body transition duration-200 hover:text-accent-hover focus:text-accent-hover",
                        title: t('text-view-order'),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_eye_icon__WEBPACK_IMPORTED_MODULE_12__/* .Eye */ .b, {
                            width: 20
                        })
                    })
            }, 
        ]
    , [
        alignLeft,
        alignRight,
        t
    ]);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_15__["default"], {
        message: error.message
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_cards_card__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        className: "min-h-screen w-full self-stretch overflow-hidden lg:min-h-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mb-8 text-center text-2xl font-semibold text-heading",
                children: t('text-my-refunds')
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .Table */ .i, {
                columns: refundTableColumns,
                data: refunds,
                rowKey: (record)=>record.created_at
                ,
                className: "orderDetailsTable w-full border border-gray-200",
                scroll: {
                    x: 500,
                    y: 700
                }
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefundView);

});

/***/ }),

/***/ 9480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



const Badge = ({ className , color: colorOverride , textColor: textColorOverride , text , style ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const classes = {
        root: 'px-3 py-1 rounded-full text-sm',
        default: 'bg-accent',
        text: 'text-light'
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, {
            [classes.default]: !colorOverride,
            [classes.text]: !textColorOverride
        }, colorOverride, textColorOverride, className),
        style: style,
        children: t(text)
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);


/***/ }),

/***/ 2008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const Card = ({ className , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('p-5 md:p-8 bg-light shadow rounded', className),
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ rc_table__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3345);
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_table__WEBPACK_IMPORTED_MODULE_0__);




/***/ }),

/***/ 4953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_general_ssr__WEBPACK_IMPORTED_MODULE_4__.b),
/* harmony export */   "default": () => (/* binding */ RefundsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_refunds_refund_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3731);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3176);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2391);
/* harmony import */ var _framework_general_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1476);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__, _components_refunds_refund_view__WEBPACK_IMPORTED_MODULE_1__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_4__]);
([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__, _components_refunds_refund_view__WEBPACK_IMPORTED_MODULE_1__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





function RefundsPage() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                noindex: true,
                nofollow: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_refunds_refund_view__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    }));
};
// const getLayout = (page: React.ReactElement) =>
//   getSiteLayout(
//     <div className="flex flex-col items-start w-full min-h-screen mx-auto bg-gray-100 lg:flex-row max-w-1920 md:py-10 md:px-5 xl:py-14 xl:px-8 2xl:px-14 lg:min-h-0">
//       <DashboardSidebar className="hidden shrink-0 lg:block lg:w-80 ltr:mr-8 rtl:ml-8" />
//       {page}
//     </div>
//   );
RefundsPage.authenticationRequired = true;
RefundsPage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: page
    }));
}; // RefundsPage.getLayout = getLayout;

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

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 3291:
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ 6619:
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

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

/***/ 3345:
/***/ ((module) => {

module.exports = require("rc-table");

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
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,8598,9258,8649,7698,5584,6331,3669,4458,7129,4538,2391], () => (__webpack_exec__(4953)));
module.exports = __webpack_exports__;

})();
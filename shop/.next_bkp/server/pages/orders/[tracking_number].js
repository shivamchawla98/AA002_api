"use strict";
(() => {
var exports = {};
exports.id = 3201;
exports.ids = [3201];
exports.modules = {

/***/ 4842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Order)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1434);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3669);
/* harmony import */ var _lib_format_address__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4320);
/* harmony import */ var _lib_format_string__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5645);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3445);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2730);
/* harmony import */ var _components_icons_checkmark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7025);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9480);
/* harmony import */ var _components_orders_order_items__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9121);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2451);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3117);
/* harmony import */ var _components_orders_suborder_items__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3931);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3659);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_orders_statuses__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2857);
/* harmony import */ var _framework_order__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4538);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_order__WEBPACK_IMPORTED_MODULE_17__, _components_orders_suborder_items__WEBPACK_IMPORTED_MODULE_13__, _components_orders_order_items__WEBPACK_IMPORTED_MODULE_10__, _components_orders_statuses__WEBPACK_IMPORTED_MODULE_16__, _lib_use_price__WEBPACK_IMPORTED_MODULE_4__, _store_checkout__WEBPACK_IMPORTED_MODULE_12__, jotai__WEBPACK_IMPORTED_MODULE_11__, _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_7__]);
([_framework_order__WEBPACK_IMPORTED_MODULE_17__, _components_orders_suborder_items__WEBPACK_IMPORTED_MODULE_13__, _components_orders_order_items__WEBPACK_IMPORTED_MODULE_10__, _components_orders_statuses__WEBPACK_IMPORTED_MODULE_16__, _lib_use_price__WEBPACK_IMPORTED_MODULE_4__, _store_checkout__WEBPACK_IMPORTED_MODULE_12__, jotai__WEBPACK_IMPORTED_MODULE_11__, _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





















function OrderView({ order  }) {
    console.log('order:', order);
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
    const { resetCart  } = (0,_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_7__/* .useCart */ .jD)();
    const [, resetCheckout] = (0,jotai__WEBPACK_IMPORTED_MODULE_11__.useAtom)(_store_checkout__WEBPACK_IMPORTED_MODULE_12__/* .clearCheckoutAtom */ .y9);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        resetCart();
        resetCheckout();
    }, [
        resetCart,
        resetCheckout
    ]);
    const { price: total  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: order?.paid_total
    });
    const { price: wallet_total  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: order?.wallet_point?.amount
    });
    const { price: sub_total  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: order?.amount
    });
    const { price: shipping_charge  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: order?.delivery_fee ?? 0
    });
    const { price: tax  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: order?.sales_tax ?? 0
    });
    const { price: discount  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: order?.discount ?? 0
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-4 sm:p-8",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mx-auto w-full max-w-screen-lg rounded border bg-light p-6 shadow-sm sm:p-8 lg:p-12",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    className: "mb-9 flex flex-col items-center justify-between text-base font-bold text-heading sm:mb-12 sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "order-2 mt-5 ltr:mr-auto rtl:ml-auto sm:order-1 sm:mt-0",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "ltr:mr-4 rtl:ml-4",
                                    children: [
                                        t('text-status'),
                                        " :"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    text: order?.status?.name,
                                    className: "whitespace-nowrap text-sm font-normal"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            href: _lib_routes__WEBPACK_IMPORTED_MODULE_5__/* .ROUTES.HOME */ .Z.HOME,
                            className: "order-1 inline-flex items-center text-base font-normal text-accent underline hover:text-accent-hover hover:no-underline sm:order-2",
                            children: t('text-back-to-home')
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mb-6 grid gap-4 sm:grid-cols-2 md:mb-12 lg:grid-cols-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rounded border border-border-200 py-4 px-5 shadow-sm",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mb-2 text-sm font-semibold text-heading",
                                    children: t('text-order-number')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm text-body-dark",
                                    children: order?.tracking_number
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rounded border border-border-200 py-4 px-5 shadow-sm",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mb-2 text-sm font-semibold text-heading",
                                    children: t('text-date')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm text-body-dark",
                                    children: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(order?.created_at).format('MMMM D, YYYY')
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rounded border border-border-200 py-4 px-5 shadow-sm",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mb-2 text-sm font-semibold text-heading",
                                    children: t('text-total')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm text-body-dark",
                                    children: total
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "rounded border border-border-200 py-4 px-5 shadow-sm",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mb-2 text-sm font-semibold text-heading",
                                    children: t('text-payment-method')
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-sm text-body-dark",
                                    children: order?.payment_gateway ?? 'N/A'
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-8 flex w-full items-center justify-center md:mb-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_statuses__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                        status: order?.status?.serial
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col lg:flex-row",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-12 w-full lg:mb-0 lg:w-1/2 ltr:lg:pr-3 rtl:lg:pl-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "mb-6 text-xl font-bold text-heading",
                                    children: t('text-total-amount')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-5 flex text-body-dark",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "w-5/12 text-sm font-semibold text-heading sm:w-4/12",
                                                    children: t('text-sub-total')
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ",
                                                    children: sub_total
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-5 flex text-body-dark",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "w-5/12 text-sm font-semibold text-heading sm:w-4/12",
                                                    children: t('text-shipping-charge')
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ",
                                                    children: shipping_charge
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-5 flex text-body-dark",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "w-5/12 text-sm font-semibold text-heading sm:w-4/12",
                                                    children: t('text-tax')
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ",
                                                    children: tax
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-5 flex text-body-dark",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "w-5/12 text-sm font-semibold text-heading sm:w-4/12",
                                                    children: t('text-discount')
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12 ",
                                                    children: discount
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-5 flex text-body-dark",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "w-5/12 text-sm font-semibold text-heading sm:w-4/12",
                                                    children: t('text-total')
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12",
                                                    children: total
                                                })
                                            ]
                                        }),
                                        wallet_total && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-5 flex text-body-dark",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "w-5/12 text-sm font-semibold text-heading sm:w-4/12",
                                                    children: t('text-paid-from-wallet')
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-7/12 text-sm ltr:pl-4 rtl:pr-4 sm:w-8/12",
                                                    children: wallet_total
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full lg:w-1/2 ltr:lg:pl-3 rtl:lg:pr-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "mb-6 text-xl font-bold text-heading",
                                    children: t('text-order-details')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-5 flex text-body-dark",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "w-4/12 text-sm font-semibold text-heading",
                                                    children: t('text-total-item')
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-8/12 text-sm ltr:pl-4 rtl:pr-4 ",
                                                    children: (0,_lib_format_string__WEBPACK_IMPORTED_MODULE_19__/* .formatString */ .U)(order?.products?.length, t('text-item'))
                                                })
                                            ]
                                        }),
                                        !(0,lodash__WEBPACK_IMPORTED_MODULE_15__.isEmpty)(order?.delivery_time) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-5 flex text-body-dark",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "w-4/12 text-sm font-semibold text-heading",
                                                    children: t('text-deliver-time')
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-8/12 text-sm ltr:pl-4 rtl:pr-4 ",
                                                    children: order?.delivery_time
                                                })
                                            ]
                                        }),
                                        !(0,lodash__WEBPACK_IMPORTED_MODULE_15__.isEmpty)(order?.shipping_address) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-5 flex text-body-dark",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "w-4/12 text-sm font-semibold text-heading",
                                                    children: t('text-shipping-address')
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-8/12 text-sm ltr:pl-4 rtl:pr-4 ",
                                                    children: (0,_lib_format_address__WEBPACK_IMPORTED_MODULE_20__/* .formatAddress */ .T)(order?.shipping_address)
                                                })
                                            ]
                                        }),
                                        !(0,lodash__WEBPACK_IMPORTED_MODULE_15__.isEmpty)(order?.billing_address) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "mt-5 flex text-body-dark",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    className: "w-4/12 text-sm font-semibold text-heading",
                                                    children: t('text-billing-address')
                                                }),
                                                ":",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-8/12 text-sm ltr:pl-4 rtl:pr-4",
                                                    children: (0,_lib_format_address__WEBPACK_IMPORTED_MODULE_20__/* .formatAddress */ .T)(order?.billing_address)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_order_items__WEBPACK_IMPORTED_MODULE_10__/* .OrderItems */ .t, {
                        products: order?.products
                    })
                }),
                order?.children?.length > 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "mt-12 mb-6 text-xl font-bold text-heading",
                            children: t('text-sub-orders')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-12 flex items-start rounded border border-gray-700 p-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mt-0.5 flex h-4 w-4 items-center justify-center rounded-sm bg-dark px-2 ltr:mr-3 rtl:ml-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_checkmark__WEBPACK_IMPORTED_MODULE_8__/* .CheckMark */ .Y, {
                                                className: "h-2 w-2 shrink-0 text-light"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-sm text-heading",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "font-bold",
                                                    children: [
                                                        t('text-note'),
                                                        ":"
                                                    ]
                                                }),
                                                ' ',
                                                t('message-sub-order')
                                            ]
                                        })
                                    ]
                                }),
                                Array.isArray(order?.children) && order?.children.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_suborder_items__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        items: order?.children
                                    })
                                })
                            ]
                        })
                    ]
                }) : null
            ]
        })
    }));
}
function Order() {
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_18__.useRouter)();
    const { order , isLoading  } = (0,_framework_order__WEBPACK_IMPORTED_MODULE_17__/* .useOrder */ .Aj)({
        tracking_number: query.tracking_number.toString()
    });
    if (isLoading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            showText: false
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OrderView, {
        order: order
    }));
};

});

/***/ }),

/***/ 3931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6078);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9480);
/* harmony import */ var _lib_format_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5645);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3669);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1434);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3445);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(447);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_5__]);
_lib_use_price__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const SuborderItems = ({ items  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
    const { alignLeft , alignRight  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_1__/* .useIsRTL */ .S)();
    const orderTableColumns = [
        {
            title: t('text-tracking-number'),
            dataIndex: 'tracking_number',
            key: 'tracking_number',
            align: alignLeft
        },
        {
            title: t('text-date'),
            dataIndex: 'date',
            key: 'date',
            align: alignLeft,
            render: (created_at)=>dayjs__WEBPACK_IMPORTED_MODULE_3___default()(created_at).format('MMMM D, YYYY')
        },
        {
            title: t('text-status'),
            dataIndex: 'status',
            key: 'status',
            align: alignLeft,
            render: function renderStatus(status) {
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    text: status?.name,
                    style: {
                        backgroundColor: status?.color
                    }
                }));
            }
        },
        {
            title: t('text-item'),
            dataIndex: 'products',
            key: 'products',
            align: alignLeft,
            render: (products)=>(0,_lib_format_string__WEBPACK_IMPORTED_MODULE_9__/* .formatString */ .U)(products?.length, t('text-item'))
        },
        {
            title: t('text-total-price'),
            dataIndex: 'paid_total',
            key: 'paid_total',
            align: alignRight,
            // width: 100,
            render: function TotalPrice(paid_total) {
                const { price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)({
                    amount: paid_total
                });
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: price
                }));
            }
        },
        {
            title: '',
            dataIndex: 'tracking_number',
            key: 'tracking_number',
            align: alignRight,
            // width: 100,
            render: function renderTrackingNumber(tracking_number) {
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_7__/* .ROUTES.ORDERS */ .Z.ORDERS}/${tracking_number}`,
                    className: "inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow bg-gray-700 text-light border border-transparent hover:bg-gray-900 px-4 py-0 h-10 text-sm",
                    children: t('text-view')
                }));
            }
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_8__/* .Table */ .i, {
        //@ts-ignore
        columns: orderTableColumns,
        emptyText: t('table:empty-table-data'),
        //@ts-ignore
        data: items,
        rowKey: "id",
        scroll: {
            x: 800
        }
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuborderItems);

});

/***/ }),

/***/ 3176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);


const Seo = ({ title , description , images , url , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
        title: title,
        openGraph: {
            ...Boolean(url) && {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/${url}`
            },
            title,
            description,
            ...Boolean(images) && {
                images: images?.map((item)=>({
                        url: item?.image?.original,
                        alt: item?.title
                    })
                )
            }
        },
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


/***/ }),

/***/ 1481:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8649);
/* harmony import */ var _gql_groups_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7698);
/* harmony import */ var _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const getServerSideProps = async ({ locale  })=>{
    const apolloClient = (0,_client__WEBPACK_IMPORTED_MODULE_1__/* .initializeApollo */ ["in"])();
    await apolloClient.query({
        query: _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_3__/* .SettingsDocument */ .m9
    });
    await apolloClient.query({
        query: _gql_groups_graphql__WEBPACK_IMPORTED_MODULE_2__/* .GroupsDocument */ .pt
    });
    return (0,_client__WEBPACK_IMPORTED_MODULE_1__/* .addApolloState */ ._p)(apolloClient, {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, [
                'common'
            ])
        }
    });
};

});

/***/ }),

/***/ 5645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ formatString)
/* harmony export */ });
function formatString(count, string) {
    if (!count) return `${count} ${string}`;
    return count > 1 ? `${count} ${string}s` : `${count} ${string}`;
}


/***/ }),

/***/ 4233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _framework_order_ssr__WEBPACK_IMPORTED_MODULE_4__.N),
/* harmony export */   "default": () => (/* binding */ OrderPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1179);
/* harmony import */ var _components_orders_order_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4842);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3176);
/* harmony import */ var _framework_order_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1481);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _components_orders_order_view__WEBPACK_IMPORTED_MODULE_2__, _framework_order_ssr__WEBPACK_IMPORTED_MODULE_4__]);
([_components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__, _components_orders_order_view__WEBPACK_IMPORTED_MODULE_2__, _framework_order_ssr__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





function OrderPage() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                noindex: true,
                nofollow: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_order_view__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    }));
};
OrderPage.getLayout = _components_layouts_layout__WEBPACK_IMPORTED_MODULE_1__/* .getLayout */ .G; // wallet_point only parent order - no children

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

/***/ 6330:
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,8598,8649,7698,5584,5511,8218,1179,3669,4538,3659,7307], () => (__webpack_exec__(4233)));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 6660;
exports.ids = [6660];
exports.modules = {

/***/ 6598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SadFaceIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SadFaceIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 106.059 106.059",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M90.546 15.518c-20.688-20.69-54.347-20.69-75.031-.005-20.688 20.685-20.686 54.345.002 75.034 20.682 20.684 54.341 20.684 75.027-.004 20.686-20.685 20.685-54.343.002-75.025zm-5.789 69.24c-17.494 17.494-45.96 17.496-63.455.002-17.498-17.497-17.496-45.966 0-63.46 17.494-17.493 45.959-17.495 63.457.002 17.494 17.494 17.492 45.963-.002 63.456zm-7.74-10.757a2.998 2.998 0 0 1-1.562 3.943 2.998 2.998 0 0 1-3.944-1.562c-2.893-6.689-9.73-11.012-17.421-11.012-7.868 0-14.747 4.319-17.522 11.004a3.002 3.002 0 0 1-3.921 1.621 3 3 0 0 1-1.62-3.921c3.71-8.932 12.764-14.703 23.063-14.703 10.084 0 19.084 5.742 22.927 14.63zM33.24 38.671a6.201 6.201 0 1 1 12.4 0 6.201 6.201 0 0 1-12.4 0zm28.117 0a6.201 6.201 0 0 1 12.403 0c0 3.426-2.776 6.202-6.2 6.202s-6.203-2.776-6.203-6.202z"
        })
    })
;


/***/ }),

/***/ 9739:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3669);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_1__]);
_lib_use_price__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const OrderCard = ({ onClick , order , isActive  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
    const { id , status , created_at , delivery_time  } = order;
    const { price: amount  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
        amount: order?.amount
    });
    const { price: total  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
        amount: order?.total
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: onClick,
        role: "button",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('bg-gray-100 rounded overflow-hidden w-full flex shrink-0 flex-col mb-4 border-2 border-transparent cursor-pointer last:mb-0', isActive === true && '!border-accent'),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center border-b border-border-200 py-3 px-5 md:px-3 lg:px-5 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "flex font-bold text-sm lg:text-base text-heading ltr:mr-4 rtl:ml-4 shrink-0",
                        children: [
                            t('text-order'),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "font-normal",
                                children: [
                                    "#",
                                    id
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-sm text-blue-500 bg-blue-100 px-3 py-2 rounded whitespace-nowrap truncate max-w-full",
                        title: status.name,
                        children: status.name
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col p-5 md:p-3 lg:px-4 lg:py-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-sm text-heading w-full flex justify-between items-center mb-4 last:mb-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "w-24 overflow-hidden shrink-0",
                                children: t('text-order-date')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ltr:mr-auto rtl:ml-auto",
                                children: ":"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ltr:ml-1 rtl:mr-1",
                                children: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(created_at).format('MMMM D, YYYY')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-sm text-heading w-full flex justify-between items-center mb-4 last:mb-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "w-24 overflow-hidden shrink-0",
                                children: t('text-deliver-time')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ltr:mr-auto rtl:ml-auto",
                                children: ":"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ltr:ml-1 rtl:mr-1 truncate",
                                children: delivery_time
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-sm font-bold text-heading w-full flex justify-between items-center mb-4 last:mb-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "w-24 overflow-hidden shrink-0",
                                children: t('text-amount')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ltr:mr-auto rtl:ml-auto",
                                children: ":"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ltr:ml-1 rtl:mr-1",
                                children: amount
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-sm font-bold text-heading w-full flex justify-between items-center mb-4 last:mb-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "w-24 overflow-hidden flex-shrink-0",
                                children: t('text-total-price')
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ltr:mr-auto rtl:ml-auto",
                                children: ":"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ltr:ml-1 rtl:mr-1",
                                children: total
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderCard);

});

/***/ }),

/***/ 3116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3372);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3669);
/* harmony import */ var _lib_format_address__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4320);
/* harmony import */ var _components_orders_statuses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2857);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1434);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3445);
/* harmony import */ var _components_icons_eye_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9876);
/* harmony import */ var _order_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9121);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4144);
/* harmony import */ var _components_icons_sad_face__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6598);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9480);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_order_items__WEBPACK_IMPORTED_MODULE_8__, _components_orders_statuses__WEBPACK_IMPORTED_MODULE_3__, _lib_use_price__WEBPACK_IMPORTED_MODULE_2__]);
([_order_items__WEBPACK_IMPORTED_MODULE_8__, _components_orders_statuses__WEBPACK_IMPORTED_MODULE_3__, _lib_use_price__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);














const RenderStatusBadge = ({ status  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
    switch(status.toLowerCase()){
        case 'approved':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                text: `${t('text-refund')} ${t('text-approved')}`,
                color: "bg-accent",
                className: "ltr:mr-4 rtl:ml-4"
            }));
        case 'rejected':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                text: `${t('text-refund')} ${t('text-rejected')}`,
                color: "bg-red-500",
                className: "ltr:mr-4 rtl:ml-4"
            }));
        case 'processing':
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                text: `${t('text-refund')} ${t('text-processing')}`,
                color: "bg-yellow-500",
                className: "ltr:mr-4 rtl:ml-4"
            }));
        // case 'pending':
        default:
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                text: `${t('text-refund')} ${t('text-pending')}`,
                color: "bg-purple-500",
                className: "ltr:mr-4 rtl:ml-4"
            }));
    }
};
function RefundView({ status , orderId  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_10__/* .useModalAction */ .SO)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: status ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RenderStatusBadge, {
            status: status
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: "flex items-center text-sm font-semibold text-body transition-colors hover:text-accent disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:text-gray-400 ltr:mr-4 rtl:ml-4",
            onClick: ()=>openModal('REFUND_REQUEST', orderId)
            ,
            disabled: Boolean(status),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_sad_face__WEBPACK_IMPORTED_MODULE_11__/* .SadFaceIcon */ .t, {
                    width: 18,
                    className: "ltr:mr-2 rtl:ml-2"
                }),
                t('text-ask-refund')
            ]
        })
    }));
}
const OrderDetails = ({ order  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
    const { id , products , status , shipping_address , billing_address , tracking_number , refund ,  } = order ?? {};
    const { price: amount  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        amount: order?.amount
    });
    const { price: discount  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        amount: order?.discount
    });
    const { price: total  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        amount: order?.total
    });
    const { price: delivery_fee  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        amount: order?.delivery_fee
    });
    const { price: sales_tax  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        amount: order?.sales_tax
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full flex-col border border-border-200 bg-white lg:w-2/3",
        children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(order) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center border-b border-border-200 p-5 md:flex-row md:justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "mb-2 flex text-sm font-semibold text-heading md:text-lg",
                            children: [
                                t('text-order-details'),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "px-2",
                                    children: "-"
                                }),
                                ' ',
                                tracking_number
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RefundView, {
                                    status: refund?.status,
                                    orderId: id
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_6__/* .ROUTES.ORDERS */ .Z.ORDERS}/${tracking_number}`,
                                    className: "flex items-center text-sm font-semibold text-accent no-underline transition duration-200 hover:text-accent-hover focus:text-accent-hover",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_eye_icon__WEBPACK_IMPORTED_MODULE_7__/* .Eye */ .b, {
                                            width: 20,
                                            className: "ltr:mr-2 rtl:ml-2"
                                        }),
                                        t('text-sub-orders')
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col border-b border-border-200 sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full flex-col border-b border-border-200 px-5 py-4 sm:border-b-0 ltr:sm:border-r rtl:sm:border-l md:w-3/5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mb-2 block text-sm font-bold text-heading",
                                            children: t('text-shipping-address')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-body",
                                            children: (0,_lib_format_address__WEBPACK_IMPORTED_MODULE_13__/* .formatAddress */ .T)(shipping_address)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mb-2 block text-sm font-bold text-heading",
                                            children: t('text-billing-address')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-body",
                                            children: (0,_lib_format_address__WEBPACK_IMPORTED_MODULE_13__/* .formatAddress */ .T)(billing_address)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full flex-col px-5 py-4 md:w-2/5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-3 flex justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-body",
                                            children: t('text-sub-total')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-heading",
                                            children: amount
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-3 flex justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-body",
                                            children: t('text-discount')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-heading",
                                            children: discount
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-3 flex justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-body",
                                            children: t('text-delivery-fee')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-heading",
                                            children: delivery_fee
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-3 flex justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-body",
                                            children: t('text-tax')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-heading",
                                            children: sales_tax
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm font-bold text-heading",
                                            children: t('text-total')
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm font-bold text-heading",
                                            children: total
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex w-full items-center justify-center px-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_statuses__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                status: status?.serial
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_order_items__WEBPACK_IMPORTED_MODULE_8__/* .OrderItems */ .t, {
                            products: products
                        })
                    ]
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto max-w-lg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                text: "text-no-order-found"
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetails);

});

/***/ }),

/***/ 836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9258);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3659);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3070);
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_collapse__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(495);
/* harmony import */ var _assets_no_result_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5946);








const OrderListMobile = ({ showLoaders , hasNextPage , isLoadingMore , onLoadMore , notFound , children , order ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col w-full lg:hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col w-full h-full px-0 pb-5",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-xl font-semibold pb-5 text-heading",
                    children: t('profile-sidebar-orders')
                }),
                Boolean(order) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((rc_collapse__WEBPACK_IMPORTED_MODULE_4___default()), {
                    accordion: true,
                    defaultActiveKey: "active",
                    expandIcon: ()=>null
                    ,
                    children: [
                        showLoaders ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                showText: false
                            })
                        }) : children,
                        hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center mt-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                loading: isLoadingMore,
                                onClick: onLoadMore,
                                className: "text-sm md:text-base font-semibold h-11",
                                children: t('text-load-more')
                            })
                        })
                    ]
                }),
                notFound && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex flex-col items-center justify-center py-10 my-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-5/6 h-full flex items-center justify-center mb-7",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_5__/* .Image */ .E, {
                                src: _assets_no_result_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                className: "w-full h-full object-contain",
                                alt: "No Order Found"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-sm font-semibold text-body text-center",
                            children: t('error-no-orders')
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderListMobile);


/***/ }),

/***/ 6653:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9258);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3659);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3372);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7046);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _order_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3116);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_order_details__WEBPACK_IMPORTED_MODULE_6__]);
_order_details__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const OrdersWithLoader = ({ showLoaders , hasNextPage , isLoadingMore , onLoadMore , notFound , children , order ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "hidden w-full overflow-hidden lg:flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full ltr:pr-5 rtl:pl-5 md:w-1/3 ltr:lg:pr-8 rtl:lg:pl-8",
                style: {
                    height: 'calc(100vh - 60px)'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex h-full flex-col bg-white pb-5 md:border md:border-border-200",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "py-5 px-5 text-xl font-semibold text-heading",
                            children: t('profile-sidebar-orders')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: "w-full",
                            style: {
                                height: 'calc(100% - 80px)'
                            },
                            children: [
                                showLoaders ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        showText: false
                                    })
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "px-5",
                                    children: [
                                        children,
                                        hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-8 flex justify-center lg:mt-12",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                loading: isLoadingMore,
                                                onClick: onLoadMore,
                                                className: "h-11 text-sm font-semibold md:text-base",
                                                children: t('text-load-more')
                                            })
                                        })
                                    ]
                                }),
                                notFound && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "my-auto flex h-full w-full items-center justify-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "text-center text-sm font-semibold text-body",
                                        children: t('error-no-orders')
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            Boolean(order) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_order_details__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                order: order
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto max-w-lg bg-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    text: "text-no-order-found"
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrdersWithLoader);

});

/***/ }),

/***/ 9822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Orders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3070);
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_collapse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(110);
/* harmony import */ var _components_orders_orders_with_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6653);
/* harmony import */ var _components_orders_order_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9739);
/* harmony import */ var _components_orders_order_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3116);
/* harmony import */ var _components_orders_order_list_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(836);
/* harmony import */ var _framework_order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_orders_order_details__WEBPACK_IMPORTED_MODULE_6__, _components_orders_order_card__WEBPACK_IMPORTED_MODULE_5__, _components_orders_orders_with_loader__WEBPACK_IMPORTED_MODULE_4__, _framework_order__WEBPACK_IMPORTED_MODULE_8__]);
([_components_orders_order_details__WEBPACK_IMPORTED_MODULE_6__, _components_orders_order_card__WEBPACK_IMPORTED_MODULE_5__, _components_orders_orders_with_loader__WEBPACK_IMPORTED_MODULE_4__, _framework_order__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









function Orders() {
    const { orders , isLoading , error , hasMore , loadMore , isLoadingMore  } = (0,_framework_order__WEBPACK_IMPORTED_MODULE_8__/* .useOrders */ .yi)();
    const { 0: order , 1: setOrder  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (orders.length) {
            setOrder(orders[0]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        orders.length
    ]);
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_3__["default"], {
        message: error.message
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_orders_with_loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                notFound: !isLoading && !orders?.length,
                isLoadingMore: isLoadingMore,
                onLoadMore: loadMore,
                showLoaders: isLoading && !orders.length,
                hasNextPage: hasMore,
                order: order,
                children: orders.map((_order, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_order_card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        order: _order,
                        onClick: ()=>setOrder(_order)
                        ,
                        isActive: order?.id === _order?.id
                    }, index)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_order_list_mobile__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                notFound: !isLoading && !orders?.length,
                isLoadingMore: isLoadingMore,
                onLoadMore: loadMore,
                showLoaders: isLoading && !orders.length,
                hasNextPage: hasMore,
                order: order,
                children: orders.map((_order, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((rc_collapse__WEBPACK_IMPORTED_MODULE_2___default().Panel), {
                        header: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_order_card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            order: _order,
                            onClick: ()=>setOrder(_order)
                            ,
                            isActive: order?.id === _order?.id
                        }, `mobile_${index}`),
                        headerClass: "accordion-title",
                        className: "mb-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_order_details__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            order: order
                        })
                    }, index)
                )
            })
        ]
    }));
};

});

/***/ }),

/***/ 8610:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_general_ssr__WEBPACK_IMPORTED_MODULE_4__.b),
/* harmony export */   "default": () => (/* binding */ OrdersPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_orders_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9822);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3176);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2391);
/* harmony import */ var _framework_general_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1476);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__, _components_orders_orders__WEBPACK_IMPORTED_MODULE_1__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_4__]);
([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__, _components_orders_orders__WEBPACK_IMPORTED_MODULE_1__, _framework_general_ssr__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





function OrdersPage() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                noindex: true,
                nofollow: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_orders_orders__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    }));
};
OrdersPage.authenticationRequired = true;
OrdersPage.getLayout = function getLayout(page) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: page
    }));
};

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

/***/ 3070:
/***/ ((module) => {

module.exports = require("rc-collapse");

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
var __webpack_exports__ = __webpack_require__.X(0, [2652,4939,5218,2709,5519,3570,6551,6403,571,8598,9258,3372,8649,7698,5584,6331,3669,4458,7129,4538,2391,3659,7307], () => (__webpack_exec__(8610)));
module.exports = __webpack_exports__;

})();
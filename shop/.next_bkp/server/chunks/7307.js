exports.id = 7307;
exports.ids = [7307];
exports.modules = {

/***/ 8483:
/***/ ((module) => {

// Exports
module.exports = {
	"progress_container": "progress-box_progress_container___zzev",
	"bar": "progress-box_bar__t1PIC",
	"progress_wrapper": "progress-box_progress_wrapper___Kwhc",
	"checked": "progress-box_checked__SaJdX",
	"status_wrapper": "progress-box_status_wrapper__6S4IY"
};


/***/ }),

/***/ 7025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ CheckMark)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const CheckMark = ({ ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20.894",
        height: "16",
        viewBox: "0 0 20.894 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            "data-name": "_ionicons_svg_ios-checkmark (3)",
            d: "M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z",
            transform: "translate(-148.4 -173.6)",
            fill: "currentColor"
        })
    }));
};


/***/ }),

/***/ 9121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ OrderItems)
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
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(495);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2478);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_2__]);
_lib_use_price__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const OrderItemList = (_, record)=>{
    const { price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        amount: record.pivot?.unit_price
    });
    let name = record.name;
    if (record?.pivot?.variation_option_id) {
        const variationTitle = record?.variation_options?.find((vo)=>vo?.id === record?.pivot?.variation_option_id
        )['title'];
        name = `${name} - ${variationTitle}`;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-16 h-16 flex shrink-0 rounded overflow-hidden relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_6__/* .Image */ .E, {
                    src: record.image?.thumbnail ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_7__/* .productPlaceholder */ .Hb,
                    alt: name,
                    className: "w-full h-full object-cover",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col ltr:ml-4 rtl:mr-4 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex mb-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-sm text-body truncate inline-block overflow-hidden",
                                children: [
                                    name,
                                    " x\xa0"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm text-heading font-semibold truncate inline-block overflow-hidden",
                                children: record.unit
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-sm text-accent font-semibold mb-1 truncate inline-block overflow-hidden",
                        children: price
                    })
                ]
            })
        ]
    }));
};
const OrderItems = ({ products  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { alignLeft , alignRight  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_4__/* .useIsRTL */ .S)();
    const orderTableColumns = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>[
            {
                title: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ltr:pl-20 rtl:pr-20",
                    children: t('text-item')
                }),
                dataIndex: '',
                key: 'items',
                align: alignLeft,
                width: 250,
                ellipsis: true,
                render: OrderItemList
            },
            {
                title: t('text-quantity'),
                dataIndex: 'pivot',
                key: 'pivot',
                align: 'center',
                width: 100,
                render: function renderQuantity(pivot) {
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-base",
                        children: pivot.order_quantity
                    }));
                }
            },
            {
                title: t('text-price'),
                dataIndex: 'pivot',
                key: 'price',
                align: alignRight,
                width: 100,
                render: function RenderPrice(pivot) {
                    const { price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
                        amount: pivot.subtotal
                    });
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: price
                    }));
                }
            }, 
        ]
    , [
        alignLeft,
        alignRight,
        t
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_1__/* .Table */ .i, {
        //@ts-ignore
        columns: orderTableColumns,
        data: products,
        rowKey: (record)=>record.pivot?.variation_option_id ? record.pivot.variation_option_id : record.created_at
        ,
        className: "orderDetailsTable w-full",
        scroll: {
            x: 350,
            y: 500
        }
    }));
};

});

/***/ }),

/***/ 2857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3659);
/* harmony import */ var _components_ui_progress_box_progress_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8402);
/* harmony import */ var _framework_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_order__WEBPACK_IMPORTED_MODULE_4__]);
_framework_order__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const OrderStatuses = ({ status  })=>{
    const { orderStatuses , isLoading , error  } = (0,_framework_order__WEBPACK_IMPORTED_MODULE_4__/* .useOrderStatuses */ .Rr)({
        limit: 100
    });
    if (isLoading) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        showText: false
    }));
    if (error) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__["default"], {
        message: error.message
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_progress_box_progress_box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        data: orderStatuses,
        status: status
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderStatuses);

});

/***/ }),

/***/ 9480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 8402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_checkmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7025);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7046);
/* harmony import */ var _progress_box_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8483);
/* harmony import */ var _progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4__);





const ProgressBox = ({ status , data  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: "h-full w-full",
        options: {
            scrollbars: {
                autoHide: 'never'
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex w-full flex-col py-7 md:flex-row md:items-start md:justify-start",
            children: data?.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().progress_container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().progress_wrapper), status >= item.serial ? (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().checked) : ''),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().status_wrapper),
                                    children: status >= item.serial ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-4 w-3",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_checkmark__WEBPACK_IMPORTED_MODULE_1__/* .CheckMark */ .Y, {
                                            className: "w-full"
                                        })
                                    }) : item.serial
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_progress_box_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col items-start ltr:ml-5 rtl:mr-5 md:items-center ltr:md:ml-0 rtl:md:mr-0",
                            children: item && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-base font-semibold capitalize text-body-dark ltr:text-left rtl:text-right md:px-2 md:!text-center",
                                children: item?.name
                            })
                        })
                    ]
                }, item.id)
            )
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBox);


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

/***/ 447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ rc_table__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3345);
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_table__WEBPACK_IMPORTED_MODULE_0__);




/***/ }),

/***/ 4320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ })

};
;
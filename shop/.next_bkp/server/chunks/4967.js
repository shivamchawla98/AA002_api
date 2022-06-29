"use strict";
exports.id = 4967;
exports.ids = [4967];
exports.modules = {

/***/ 4967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(495);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_format_address__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4320);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_truncate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9883);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4144);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7046);
/* harmony import */ var _lib_get_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1379);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2478);
/* harmony import */ var _components_icons_social__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4131);












const ShopSidebar = ({ shop , className , cardClassName ,  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { openModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__/* .useModalAction */ .SO)();
    function handleMoreInfoModal() {
        return openModal('SHOP_INFO', {
            shop
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex items-center lg:hidden w-full bg-light border-b border-gray-300 py-4 px-6 sticky top-[55px] z-10', cardClassName),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-16 h-16 mx-auto overflow-hidden bg-gray-200 border border-gray-100 rounded-lg ltr:mr-4 rtl:ml-4 shrink-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                            alt: t('logo'),
                            src: shop?.logo?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_9__/* .productPlaceholder */ .Hb,
                            layout: "fill",
                            objectFit: "cover"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-base font-semibold text-heading",
                                children: shop.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "text-sm font-semibold transition text-accent hover:text-accent-hover",
                                onClick: handleMoreInfoModal,
                                children: t('text-more-info')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('bg-light md:rounded h-full w-full lg:w-80 2xl:w-96 hidden lg:block', className),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-h-full overflow-hidden",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('w-full', 'scrollbar_height'),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col items-center w-full border-b border-gray-200 p-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative mx-auto mb-8 overflow-hidden bg-gray-200 border border-gray-100 rounded-lg w-44 h-44",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .E, {
                                            alt: t('logo'),
                                            src: shop?.logo?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_9__/* .productPlaceholder */ .Hb,
                                            layout: "fill",
                                            objectFit: "cover"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "mb-2 text-lg font-semibold text-heading",
                                        children: shop.name
                                    }),
                                    shop?.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-2 text-sm leading-relaxed text-center text-body",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_truncate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            character: 70,
                                            children: shop.description
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex items-center justify-start mt-3",
                                        children: shop?.settings?.socials?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: item.url,
                                                target: "_blank",
                                                className: `text-muted focus:outline-none ltr:mr-6 rtl:ml-6 ltr:last:mr-0 rtl:last:ml-0 transition-colors duration-300 hover:${item.hoverClass}`,
                                                rel: "noreferrer",
                                                children: (0,_lib_get_icon__WEBPACK_IMPORTED_MODULE_8__/* .getIcon */ .q)({
                                                    iconList: _components_icons_social__WEBPACK_IMPORTED_MODULE_10__,
                                                    iconName: item.icon,
                                                    className: 'w-4 h-4'
                                                })
                                            }, index)
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-7",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col mb-7 last:mb-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mb-2 text-sm font-semibold text-heading",
                                                children: t('text-address')
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm text-body",
                                                children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()((0,_lib_format_address__WEBPACK_IMPORTED_MODULE_11__/* .formatAddress */ .T)(shop?.address)) ? (0,_lib_format_address__WEBPACK_IMPORTED_MODULE_11__/* .formatAddress */ .T)(shop?.address) : t('common:text-no-address')
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col mb-7 last:mb-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mb-2 text-sm font-semibold text-heading",
                                                children: t('text-phone')
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm text-body",
                                                children: shop?.settings?.contact ? shop?.settings?.contact : t('text-no-contact')
                                            })
                                        ]
                                    }),
                                    shop?.settings?.website && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mb-2 text-sm font-semibold text-heading",
                                                children: t('text-website')
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-sm text-body",
                                                        children: shop.settings.website
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: shop.settings.website,
                                                        target: "_blank",
                                                        className: "text-sm font-semibold text-accent hover:text-accent-hover focus:outline-none focus:text-accent-hover",
                                                        rel: "noreferrer",
                                                        children: t('text-visit-site')
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopSidebar);


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


/***/ })

};
;
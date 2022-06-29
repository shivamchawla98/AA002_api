"use strict";
exports.id = 9653;
exports.ids = [9653];
exports.modules = {

/***/ 9653:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileAuthorizedMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8598);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9635);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2451);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4178);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__, jotai__WEBPACK_IMPORTED_MODULE_5__, _framework_user__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__, jotai__WEBPACK_IMPORTED_MODULE_5__, _framework_user__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








function MobileAuthorizedMenu() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { me  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_7__/* .useUser */ .aF)();
    const [_, closeSidebar] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_6__/* .drawerAtom */ .P);
    function handleClick(path) {
        router.push(path);
        closeSidebar({
            display: false,
            view: ''
        });
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "flex-grow",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "flex items-center justify-between w-full px-5 pt-3 text-sm font-semibold capitalize bg-gray-100 border-t border-dashed md:px-8 ltr:text-left rtl:text-right text-body focus:outline-none border-border-200",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: t('text-total-points')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: me?.wallet?.total_points ?? 0
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "flex items-center justify-between w-full px-5 pt-3 text-sm font-semibold capitalize bg-gray-100 md:px-8 ltr:text-left rtl:text-right text-body focus:outline-none",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: t('text-points-used')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: me?.wallet?.points_used ?? 0
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "flex items-center justify-between w-full px-5 py-3 text-sm font-semibold capitalize bg-gray-100 border-b border-dashed md:px-8 ltr:text-left rtl:text-right text-body focus:outline-none border-border-200",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: t('text-available-points')
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: me?.wallet?.available_points ?? 0
                        })
                    ]
                }),
                _settings_site__WEBPACK_IMPORTED_MODULE_1__/* .siteSettings.authorizedLinksMobile.map */ .U.authorizedLinksMobile.map(({ href , label  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "block px-5 py-3 text-sm font-semibold capitalize transition duration-200 cursor-pointer md:px-8 text-heading hover:text-accent",
                            onClick: ()=>handleClick(href)
                            ,
                            children: t(label)
                        })
                    }, `${href}${label}`)
                )
            ]
        })
    }));
};

});

/***/ })

};
;
"use strict";
exports.id = 2391;
exports.ids = [2391];
exports.modules = {

/***/ 5522:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1434);
/* harmony import */ var _settings_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8598);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_user__WEBPACK_IMPORTED_MODULE_6__]);
_framework_user__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const DashboardSidebar = ({ className  })=>{
    const { mutate: logout  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_6__/* .useLogout */ .aU)();
    const { me  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_6__/* .useUser */ .aF)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    console.log('pathname:', pathname);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
        className: className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "overflow-hidden border rounded border-border-200 bg-light",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "py-7",
                    children: _settings_site__WEBPACK_IMPORTED_MODULE_2__/* .siteSettings.dashboardSidebarMenu.slice */ .U.dashboardSidebarMenu.slice(0, -1).map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "py-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                href: item.href,
                                className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('block border-l-4 border-transparent py-2 px-10 font-semibold text-heading transition-colors hover:text-accent focus:text-accent', {
                                    '!border-accent text-accent': pathname === item.href
                                }),
                                children: t(item.label)
                            })
                        }, idx)
                    )
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "py-4 border-t border-border-200 bg-light",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "block py-2 px-11 ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>logout()
                            ,
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('font-semibold text-heading transition-colors hover:text-accent focus:text-accent'),
                            children: t('profile-sidebar-logout')
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardSidebar);

});

/***/ }),

/***/ 6080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GeneralLayout)
/* harmony export */ });
/* unused harmony export getGeneralLayout */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5883);
/* harmony import */ var _mobile_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8036);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__, _header__WEBPACK_IMPORTED_MODULE_1__]);
([_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__, _header__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



function GeneralLayout({ children , layout  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-screen flex-col bg-gray-100 transition-colors duration-150",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                layout: layout
            }),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobile_navigation__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    }));
};
const getGeneralLayout = (page)=>/*#__PURE__*/ _jsxs(GeneralLayout, {
        layout: page.props.layout,
        children: [
            page,
            /*#__PURE__*/ _jsx(MobileNavigation, {})
        ]
    })
;

});

/***/ }),

/***/ 2391:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DashboardLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5522);
/* harmony import */ var _components_layouts_general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6080);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__, _components_layouts_general__WEBPACK_IMPORTED_MODULE_2__]);
([_components_dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__, _components_layouts_general__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




function DashboardLayout({ children , layout , className  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_general__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        layout: "general",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('_dashboard mx-auto flex w-full max-w-1920 flex-col items-start bg-gray-100 px-5 py-10 lg:flex-row xl:py-14 xl:px-8 2xl:px-14', className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    className: "hidden shrink-0 ltr:mr-8 rtl:ml-8 lg:block lg:w-80"
                }),
                children
            ]
        })
    }));
};

});

/***/ })

};
;
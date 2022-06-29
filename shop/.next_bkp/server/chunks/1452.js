"use strict";
exports.id = 1452;
exports.ids = [1452];
exports.modules = {

/***/ 1452:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7046);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3372);
/* harmony import */ var _components_ui_tree_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7752);
/* harmony import */ var _components_ui_loaders_categories_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6332);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3599);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_tree_menu__WEBPACK_IMPORTED_MODULE_3__]);
_components_ui_tree_menu__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const StickySidebarListCategories = ({ notFound , categories , loading , className  })=>{
    if (loading) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "hidden xl:block",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-72 mt-8 px-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_categories_loader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            })
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: `lg:sticky lg:top-22 h-full xl:w-72 hidden xl:block bg-light ${className}`,
        children: [
            !react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-h-full overflow-hidden flex-grow",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    className: "w-full max-h-screen",
                    style: {
                        height: 'calc(100vh - 5.35rem)'
                    },
                    children: !notFound ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "px-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tree_menu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            items: categories,
                            className: "xl:py-8"
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "min-h-full w-full pt-6 pb-8 px-9 lg:p-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            text: "text-no-category",
                            className: "h-96"
                        })
                    })
                })
            }),
            react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-h-full overflow-hidden flex-grow",
                children: !notFound ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tree_menu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        items: categories,
                        className: "xl:py-8"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "min-h-full w-full pt-6 pb-8 px-9 lg:p-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        text: "text-no-category",
                        className: "h-96"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickySidebarListCategories);

});

/***/ }),

/***/ 735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ExpandLessIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ExpandLessIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 9l-7 7-7-7"
        })
    })
;


/***/ }),

/***/ 8477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ ExpandMoreIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ExpandMoreIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M5 15l7-7 7 7"
        })
    })
;


/***/ }),

/***/ 7752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons_expand_less_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(735);
/* harmony import */ var _components_icons_expand_more_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8477);
/* harmony import */ var _lib_get_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1379);
/* harmony import */ var _components_icons_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5450);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4178);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__, jotai__WEBPACK_IMPORTED_MODULE_10__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__, jotai__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











const TreeMenuItem = ({ className , item , depth =0 ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const active = router?.query?.category;
    const isActive = active === item.slug || item?.children?.some((_item)=>_item.slug === active
    );
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(isActive);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        setOpen(isActive);
    }, [
        isActive
    ]);
    const { slug , name , children: items , icon  } = item;
    const [{ display  }, setDrawerState] = (0,jotai__WEBPACK_IMPORTED_MODULE_10__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_9__/* .drawerAtom */ .P);
    function toggleCollapse() {
        setOpen((prevValue)=>!prevValue
        );
    }
    function onClick() {
        const { pathname , query  } = router;
        const navigate = ()=>router.push({
                pathname,
                query: {
                    ...query,
                    category: slug
                }
            }, undefined, {
                scroll: false
            })
        ;
        if (Array.isArray(items) && !!items.length) {
            toggleCollapse();
            navigate();
        } else {
            navigate();
            display && setDrawerState({
                display: false,
                view: ''
            });
        }
    }
    let expandIcon;
    if (Array.isArray(items) && items.length) {
        expandIcon = !isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_expand_less_icon__WEBPACK_IMPORTED_MODULE_4__/* .ExpandLessIcon */ .Z, {
            className: "w-3 h-3"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_expand_more_icon__WEBPACK_IMPORTED_MODULE_5__/* .ExpandMoreIcon */ .h, {
            className: "w-3 h-3"
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: `/${name}/search?category=${name}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.li, {
                    initial: false,
                    animate: {
                        backgroundColor: '#ffffff'
                    },
                    onClick: onClick,
                    className: "py-1 rounded-md",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('flex items-center w-full py-2 ltr:text-left rtl:text-right outline-none text-body-dark font-semibold  focus:outline-none focus:ring-0 focus:text-accent transition-all ease-in-expo', isOpen ? 'text-accent' : 'text-body-dark', className ? className : 'text-sm'),
                        children: [
                            icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex w-5 h-5 ltr:mr-4 rtl:ml-4 items-center justify-center",
                                children: (0,_lib_get_icon__WEBPACK_IMPORTED_MODULE_6__/* .getIcon */ .q)({
                                    iconList: _components_icons_category__WEBPACK_IMPORTED_MODULE_7__,
                                    iconName: icon,
                                    className: 'h-full w-full'
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ltr:ml-auto rtl:mr-auto",
                                children: expandIcon
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                initial: false,
                children: Array.isArray(items) && isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.ul, {
                        initial: "collapsed",
                        animate: "open",
                        exit: "collapsed",
                        variants: {
                            open: {
                                opacity: 1,
                                height: 'auto'
                            },
                            collapsed: {
                                opacity: 0,
                                height: 0
                            }
                        },
                        transition: {
                            duration: 0.8,
                            ease: [
                                0.04,
                                0.62,
                                0.23,
                                0.98
                            ]
                        },
                        className: "ltr:ml-4 rtl:mr-4 text-xs",
                        children: items.map((currentItem)=>{
                            const childDepth = depth + 1;
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TreeMenuItem, {
                                item: currentItem,
                                depth: childDepth,
                                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('text-sm text-body ltr:ml-5 rtl:mr-5')
                            }, `${currentItem.name}${currentItem.slug}`));
                        })
                    }, "content")
                }) : null
            })
        ]
    }));
};
function TreeMenu({ items , className  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('text-xs', className),
        children: items?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TreeMenuItem, {
                item: item
            }, `${item.name}${item.slug}`)
        )
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeMenu);

});

/***/ })

};
;
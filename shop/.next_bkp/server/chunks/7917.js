"use strict";
exports.id = 7917;
exports.ids = [7917];
exports.modules = {

/***/ 2862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2478);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(495);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1434);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3445);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_get_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1379);
/* harmony import */ var _components_icons_social__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4131);











const ManufacturerCard = ({ item: item1 , className  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_6__/* .ROUTES.MANUFACTURERS */ .Z.MANUFACTURERS}/${item1?.slug}`,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex items-center p-5 border border-gray-200 bg-white rounded cursor-pointer shadow-md relative', className),
        title: item1?.name,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('w-16 h-16 relative flex shrink-0 items-center justify-center bg-gray-300 rounded-full overflow-hidden'),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .E, {
                    src: item1?.image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__/* .avatarPlaceholder */ .Pb,
                    alt: item1?.name,
                    layout: "fill",
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col ltr:ml-4 rtl:mr-4 overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-lg font-semibold text-heading mb-2 transition-colors hover:text-orange-500 truncate",
                        children: item1?.name
                    }),
                    !(0,lodash__WEBPACK_IMPORTED_MODULE_7__.isEmpty)(item1?.socials) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center space-x-3 rtl:space-x-reverse mt-1.5 ltr:ml-1 rtl:mr-1",
                        children: item1?.socials?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: item.url,
                                target: "_blank",
                                className: `text-body focus:outline-none transition-colors duration-300 hover:text-accent cursor-pointer`,
                                rel: "noreferrer",
                                children: (0,_lib_get_icon__WEBPACK_IMPORTED_MODULE_9__/* .getIcon */ .q)({
                                    iconList: _components_icons_social__WEBPACK_IMPORTED_MODULE_10__,
                                    iconName: item.icon,
                                    className: 'w-[16px] h-[14px]'
                                })
                            }, index)
                        )
                    }) : // <span className="text-xs text-body flex">
                    //   {t('common:text-no-address')}
                    // </span>
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center space-x-3 rtl:space-x-reverse mt-1.5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/",
                            target: "_blank",
                            className: `text-body focus:outline-none transition-colors duration-300 hover:text-accent cursor-pointer`,
                            rel: "noreferrer",
                            children: (0,_lib_get_icon__WEBPACK_IMPORTED_MODULE_9__/* .getIcon */ .q)({
                                iconList: _components_icons_social__WEBPACK_IMPORTED_MODULE_10__,
                                iconName: 'FacebookIcon',
                                className: 'w-[16px] h-[14px]'
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManufacturerCard);


/***/ }),

/***/ 2840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);


const ManufacturerLoader = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), {
        speed: 2,
        width: 280,
        height: 120,
        viewBox: "0 0 280 120",
        backgroundColor: "#e0e0e0",
        foregroundColor: "#cecece",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "50",
                cy: "50",
                r: "50"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "112",
                y: "24",
                rx: "0",
                ry: "0",
                width: "180",
                height: "18"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "114",
                y: "56",
                rx: "0",
                ry: "0",
                width: "90",
                height: "12"
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManufacturerLoader);


/***/ }),

/***/ 2438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useManufacturers),
/* harmony export */   "a": () => (/* binding */ useTopManufacturers)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated_types___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4744);
/* harmony import */ var _gql_manufacturers_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4701);




function useManufacturers(options) {
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { data , loading: isLoading , error , fetchMore , networkStatus ,  } = (0,_gql_manufacturers_graphql__WEBPACK_IMPORTED_MODULE_3__/* .useManufacturersQuery */ .ML)({
        variables: {
            first: options?.limit,
            ...query?.text && {
                text: `%${query?.text}%`
            },
            ...query.searchType && {
                hasType: {
                    column: _generated_types___WEBPACK_IMPORTED_MODULE_2__/* .QueryManufacturersHasTypeColumn.Slug */ .eO.Slug,
                    operator: _generated_types___WEBPACK_IMPORTED_MODULE_2__/* .SqlOperator.Eq */ .qv.Eq,
                    value: query.searchType
                }
            }
        },
        notifyOnNetworkStatusChange: true
    });
    function handleLoadMore() {
        if (data?.manufacturers?.paginatorInfo.hasMorePages) {
            fetchMore({
                variables: {
                    page: data?.manufacturers?.paginatorInfo?.currentPage + 1,
                    first: options?.limit
                }
            });
        }
    }
    return {
        manufacturers: data?.manufacturers?.data ?? [],
        paginatorInfo: data?.manufacturers?.paginatorInfo,
        isLoading,
        error,
        isLoadingMore: networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_0__.NetworkStatus.fetchMore,
        loadMore: handleLoadMore,
        hasMore: Boolean(data?.manufacturers?.paginatorInfo?.hasMorePages)
    };
}
function useTopManufacturers(options) {
    const { data , loading: isLoading , error ,  } = (0,_gql_manufacturers_graphql__WEBPACK_IMPORTED_MODULE_3__/* .useTopManufacturersQuery */ .oc)({
        variables: options
    });
    return {
        manufacturers: data?.topManufacturers ?? [],
        isLoading,
        error
    };
}


/***/ })

};
;
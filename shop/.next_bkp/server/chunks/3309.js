"use strict";
exports.id = 3309;
exports.ids = [3309];
exports.modules = {

/***/ 4435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2478);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(495);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1434);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3445);






const AuthorCard = ({ item  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        href: `${_lib_routes__WEBPACK_IMPORTED_MODULE_5__/* .ROUTES.AUTHORS */ .Z.AUTHORS}/${item?.slug}`,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('text-center bg-light flex flex-col items-center relative cursor-pointer group'),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('flex items-center justify-center rounded-full overflow-hidden w-44 h-44 relative mb-6 bg-gray-100 border-4 border-white shadow-350'),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
                    src: item?.image?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__/* .avatarPlaceholder */ .Pb,
                    alt: item?.name,
                    layout: "fill",
                    objectFit: "contain"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-semibold text-heading text-center block transition-colors group-hover:text-orange-500",
                children: item.name
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorCard);


/***/ }),

/***/ 9:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8782);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);


const AuthorLoader = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_1___default()), {
        speed: 2,
        width: 360,
        height: 260,
        viewBox: "0 0 360 260",
        backgroundColor: "#e0e0e0",
        foregroundColor: "#cecece",
        style: {
            width: '100%'
        },
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "180",
                cy: "106",
                r: "80"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                x: "20",
                y: "217",
                rx: "0",
                ry: "0",
                width: "320",
                height: "30"
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorLoader);


/***/ }),

/***/ 6013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useAuthors),
/* harmony export */   "V": () => (/* binding */ useTopAuthors)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gql_authors_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8095);



function useAuthors(options) {
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { data , loading: isLoading , error , fetchMore , networkStatus ,  } = (0,_gql_authors_graphql__WEBPACK_IMPORTED_MODULE_2__/* .useAuthorsQuery */ .MT)({
        variables: {
            first: options?.limit,
            ...query?.text && {
                text: `%${query?.text}%`
            }
        },
        notifyOnNetworkStatusChange: true
    });
    function handleLoadMore() {
        if (data?.authors?.paginatorInfo.hasMorePages) {
            fetchMore({
                variables: {
                    page: data?.authors?.paginatorInfo?.currentPage + 1
                }
            });
        }
    }
    return {
        authors: data?.authors?.data ?? [],
        paginatorInfo: data?.authors?.paginatorInfo,
        isLoading,
        error,
        isLoadingMore: networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_0__.NetworkStatus.fetchMore,
        loadMore: handleLoadMore,
        hasMore: Boolean(data?.authors?.paginatorInfo?.hasMorePages)
    };
}
function useTopAuthors(options) {
    const { data , loading: isLoading , error ,  } = (0,_gql_authors_graphql__WEBPACK_IMPORTED_MODULE_2__/* .useTopAuthorsQuery */ .In)({
        variables: options
    });
    return {
        authors: data?.topAuthors ?? [],
        isLoading,
        error
    };
}


/***/ })

};
;
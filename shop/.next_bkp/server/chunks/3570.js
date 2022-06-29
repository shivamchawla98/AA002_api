"use strict";
exports.id = 3570;
exports.ids = [3570];
exports.modules = {

/***/ 4744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pt": () => (/* binding */ ProductStatus),
/* harmony export */   "uD": () => (/* binding */ QueryCategoriesHasTypeColumn),
/* harmony export */   "eO": () => (/* binding */ QueryManufacturersHasTypeColumn),
/* harmony export */   "VT": () => (/* binding */ QueryOrderStatusesOrderByColumn),
/* harmony export */   "od": () => (/* binding */ QueryProductsHasAuthorColumn),
/* harmony export */   "yv": () => (/* binding */ QueryProductsHasManufacturerColumn),
/* harmony export */   "NG": () => (/* binding */ QueryProductsHasTagsColumn),
/* harmony export */   "Tu": () => (/* binding */ QueryProductsHasTypeColumn),
/* harmony export */   "UQ": () => (/* binding */ QueryProductsOrderByColumn),
/* harmony export */   "qv": () => (/* binding */ SqlOperator),
/* harmony export */   "As": () => (/* binding */ SortOrder)
/* harmony export */ });
/* unused harmony exports AddressType, CouponType, PaymentGatewayType, Permission, ProductType, QueryAttributesOrderByColumn, QueryAuthorsOrderByColumn, QueryCategoriesOrderByColumn, QueryCouponsOrderByColumn, QueryManufacturersOrderByColumn, QueryProductsHasCategoriesColumn, QueryShippingClassesOrderByColumn, QueryTagsHasTypeColumn, QueryTagsOrderByColumn, QueryTaxClassesOrderByColumn, QueryTypesOrderByColumn, QueryUsersOrderByColumn, RefundStatus, ShippingType, WithdrawStatus */
var AddressType;
(function(AddressType) {
    AddressType["Billing"] = 'BILLING';
    AddressType["Shipping"] = 'SHIPPING';
})(AddressType || (AddressType = {}));
var CouponType;
(function(CouponType) {
    CouponType["DefaultCoupon"] = 'DEFAULT_COUPON';
    CouponType["FixedCoupon"] = 'FIXED_COUPON';
    CouponType["FreeShippingCoupon"] = 'FREE_SHIPPING_COUPON';
    CouponType["PercentageCoupon"] = 'PERCENTAGE_COUPON';
})(CouponType || (CouponType = {}));
var PaymentGatewayType;
(function(PaymentGatewayType) {
    PaymentGatewayType["Cash"] = 'CASH';
    PaymentGatewayType["CashOnDelivery"] = 'CASH_ON_DELIVERY';
    PaymentGatewayType["FullWalletPayment"] = 'FULL_WALLET_PAYMENT';
    PaymentGatewayType["Stripe"] = 'STRIPE';
})(PaymentGatewayType || (PaymentGatewayType = {}));
var Permission;
(function(Permission) {
    Permission["Customer"] = 'CUSTOMER';
    Permission["Staff"] = 'STAFF';
    Permission["StoreOwner"] = 'STORE_OWNER';
    Permission["SuperAdmin"] = 'SUPER_ADMIN';
})(Permission || (Permission = {}));
var ProductStatus;
(function(ProductStatus) {
    ProductStatus["Draft"] = 'DRAFT';
    ProductStatus["Publish"] = 'PUBLISH';
})(ProductStatus || (ProductStatus = {}));
var ProductType;
(function(ProductType) {
    ProductType["Simple"] = 'SIMPLE';
    ProductType["Variable"] = 'VARIABLE';
})(ProductType || (ProductType = {}));
var QueryAttributesOrderByColumn;
(function(QueryAttributesOrderByColumn) {
    QueryAttributesOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryAttributesOrderByColumn["Name"] = 'NAME';
    QueryAttributesOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryAttributesOrderByColumn || (QueryAttributesOrderByColumn = {}));
var QueryAuthorsOrderByColumn;
(function(QueryAuthorsOrderByColumn) {
    QueryAuthorsOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryAuthorsOrderByColumn["Name"] = 'NAME';
    QueryAuthorsOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryAuthorsOrderByColumn || (QueryAuthorsOrderByColumn = {}));
var QueryCategoriesHasTypeColumn;
(function(QueryCategoriesHasTypeColumn) {
    QueryCategoriesHasTypeColumn["Slug"] = 'SLUG';
})(QueryCategoriesHasTypeColumn || (QueryCategoriesHasTypeColumn = {}));
var QueryCategoriesOrderByColumn;
(function(QueryCategoriesOrderByColumn) {
    QueryCategoriesOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryCategoriesOrderByColumn["Name"] = 'NAME';
    QueryCategoriesOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryCategoriesOrderByColumn || (QueryCategoriesOrderByColumn = {}));
var QueryCouponsOrderByColumn;
(function(QueryCouponsOrderByColumn) {
    QueryCouponsOrderByColumn["Amount"] = 'AMOUNT';
    QueryCouponsOrderByColumn["Code"] = 'CODE';
    QueryCouponsOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryCouponsOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryCouponsOrderByColumn || (QueryCouponsOrderByColumn = {}));
var QueryManufacturersHasTypeColumn;
(function(QueryManufacturersHasTypeColumn) {
    QueryManufacturersHasTypeColumn["Slug"] = 'SLUG';
})(QueryManufacturersHasTypeColumn || (QueryManufacturersHasTypeColumn = {}));
var QueryManufacturersOrderByColumn;
(function(QueryManufacturersOrderByColumn) {
    QueryManufacturersOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryManufacturersOrderByColumn["Name"] = 'NAME';
    QueryManufacturersOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryManufacturersOrderByColumn || (QueryManufacturersOrderByColumn = {}));
var QueryOrderStatusesOrderByColumn;
(function(QueryOrderStatusesOrderByColumn) {
    QueryOrderStatusesOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryOrderStatusesOrderByColumn["Name"] = 'NAME';
    QueryOrderStatusesOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryOrderStatusesOrderByColumn || (QueryOrderStatusesOrderByColumn = {}));
var QueryProductsHasAuthorColumn;
(function(QueryProductsHasAuthorColumn) {
    QueryProductsHasAuthorColumn["Slug"] = 'SLUG';
})(QueryProductsHasAuthorColumn || (QueryProductsHasAuthorColumn = {}));
var QueryProductsHasCategoriesColumn;
(function(QueryProductsHasCategoriesColumn) {
    QueryProductsHasCategoriesColumn["Slug"] = 'SLUG';
})(QueryProductsHasCategoriesColumn || (QueryProductsHasCategoriesColumn = {}));
var QueryProductsHasManufacturerColumn;
(function(QueryProductsHasManufacturerColumn) {
    QueryProductsHasManufacturerColumn["Slug"] = 'SLUG';
})(QueryProductsHasManufacturerColumn || (QueryProductsHasManufacturerColumn = {}));
var QueryProductsHasTagsColumn;
(function(QueryProductsHasTagsColumn) {
    QueryProductsHasTagsColumn["Slug"] = 'SLUG';
})(QueryProductsHasTagsColumn || (QueryProductsHasTagsColumn = {}));
var QueryProductsHasTypeColumn;
(function(QueryProductsHasTypeColumn) {
    QueryProductsHasTypeColumn["Slug"] = 'SLUG';
})(QueryProductsHasTypeColumn || (QueryProductsHasTypeColumn = {}));
var QueryProductsOrderByColumn;
(function(QueryProductsOrderByColumn) {
    QueryProductsOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryProductsOrderByColumn["MinPrice"] = 'MIN_PRICE';
    QueryProductsOrderByColumn["Name"] = 'NAME';
    QueryProductsOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryProductsOrderByColumn || (QueryProductsOrderByColumn = {}));
var QueryShippingClassesOrderByColumn;
(function(QueryShippingClassesOrderByColumn) {
    QueryShippingClassesOrderByColumn["Amount"] = 'AMOUNT';
    QueryShippingClassesOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryShippingClassesOrderByColumn["Name"] = 'NAME';
    QueryShippingClassesOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryShippingClassesOrderByColumn || (QueryShippingClassesOrderByColumn = {}));
var QueryTagsHasTypeColumn;
(function(QueryTagsHasTypeColumn) {
    QueryTagsHasTypeColumn["Slug"] = 'SLUG';
})(QueryTagsHasTypeColumn || (QueryTagsHasTypeColumn = {}));
var QueryTagsOrderByColumn;
(function(QueryTagsOrderByColumn) {
    QueryTagsOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryTagsOrderByColumn["Name"] = 'NAME';
    QueryTagsOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryTagsOrderByColumn || (QueryTagsOrderByColumn = {}));
var QueryTaxClassesOrderByColumn;
(function(QueryTaxClassesOrderByColumn) {
    QueryTaxClassesOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryTaxClassesOrderByColumn["Name"] = 'NAME';
    QueryTaxClassesOrderByColumn["Rate"] = 'RATE';
    QueryTaxClassesOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryTaxClassesOrderByColumn || (QueryTaxClassesOrderByColumn = {}));
var QueryTypesOrderByColumn;
(function(QueryTypesOrderByColumn) {
    QueryTypesOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryTypesOrderByColumn["Name"] = 'NAME';
    QueryTypesOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryTypesOrderByColumn || (QueryTypesOrderByColumn = {}));
var QueryUsersOrderByColumn;
(function(QueryUsersOrderByColumn) {
    QueryUsersOrderByColumn["CreatedAt"] = 'CREATED_AT';
    QueryUsersOrderByColumn["Name"] = 'NAME';
    QueryUsersOrderByColumn["UpdatedAt"] = 'UPDATED_AT';
})(QueryUsersOrderByColumn || (QueryUsersOrderByColumn = {}));
var RefundStatus;
(function(RefundStatus) {
    RefundStatus["Approved"] = 'APPROVED';
    RefundStatus["Pending"] = 'PENDING';
    RefundStatus["Processing"] = 'PROCESSING';
    RefundStatus["Rejected"] = 'REJECTED';
})(RefundStatus || (RefundStatus = {}));
var SqlOperator;
(function(SqlOperator) {
    SqlOperator["Between"] = 'BETWEEN';
    SqlOperator["Eq"] = 'EQ';
    SqlOperator["Gt"] = 'GT';
    SqlOperator["Gte"] = 'GTE';
    SqlOperator["In"] = 'IN';
    SqlOperator["Neq"] = 'NEQ';
})(SqlOperator || (SqlOperator = {}));
var ShippingType;
(function(ShippingType) {
    ShippingType["Fixed"] = 'FIXED';
    ShippingType["Free"] = 'FREE';
    ShippingType["Percentage"] = 'PERCENTAGE';
})(ShippingType || (ShippingType = {}));
var SortOrder;
(function(SortOrder) {
    SortOrder["Asc"] = 'ASC';
    SortOrder["Desc"] = 'DESC';
})(SortOrder || (SortOrder = {}));
var WithdrawStatus;
(function(WithdrawStatus) {
    WithdrawStatus["Approved"] = 'APPROVED';
    WithdrawStatus["OnHold"] = 'ON_HOLD';
    WithdrawStatus["Pending"] = 'PENDING';
    WithdrawStatus["Processing"] = 'PROCESSING';
    WithdrawStatus["Rejected"] = 'REJECTED';
})(WithdrawStatus || (WithdrawStatus = {}));


/***/ }),

/***/ 9900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Categories)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/ui/error-message.tsx
var error_message = __webpack_require__(110);
// EXTERNAL MODULE: ../node_modules/next/dynamic.js
var dynamic = __webpack_require__(5218);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./src/framework/graphql/gql/categories.graphql
var categories_graphql = __webpack_require__(5659);
// EXTERNAL MODULE: ./src/framework/graphql/utils/categories.ts
var categories = __webpack_require__(2535);
;// CONCATENATED MODULE: ./src/framework/graphql/category.ts



function useCategories(options) {
    console.log(options);
    const { data , loading: isLoading , error , networkStatus , fetchMore ,  } = (0,categories_graphql/* useCategoriesQuery */.Ei)({
        variables: (0,categories/* getCategories */.C)(options),
        notifyOnNetworkStatusChange: true
    });
    function handleLoadMore() {
        if (data?.categories?.paginatorInfo.hasMorePages) {
            fetchMore({
                variables: {
                    page: data?.categories?.paginatorInfo?.currentPage + 1,
                    first: 5
                }
            });
        }
    }
    return {
        categories: data?.categories?.data ?? [],
        paginatorInfo: data?.categories?.paginatorInfo,
        isLoading,
        error,
        isLoadingMore: networkStatus === client_.NetworkStatus.fetchMore,
        loadMore: handleLoadMore,
        hasMore: Boolean(data?.categories?.paginatorInfo?.hasMorePages)
    };
}

;// CONCATENATED MODULE: ./src/components/categories/categories.tsx




const StickySidebarListCategories = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3372), __webpack_require__.e(9757), __webpack_require__.e(8932), __webpack_require__.e(1452)]).then(__webpack_require__.bind(__webpack_require__, 1452))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/sticky-sidebar-list-categories"
        ]
    }
});
const StaticSidebarVerticalRectangleCategories = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3372), __webpack_require__.e(6331), __webpack_require__.e(2402), __webpack_require__.e(5718)]).then(__webpack_require__.bind(__webpack_require__, 5718))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/sliding-vertical-rectangle-categories"
        ]
    }
});
const StickySidebarBoxedCategories = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3372), __webpack_require__.e(9757), __webpack_require__.e(8932), __webpack_require__.e(525)]).then(__webpack_require__.bind(__webpack_require__, 525))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/sticky-sidebar-boxed-categories"
        ]
    }
});
const FilterCategoryGrid = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(2709), __webpack_require__.e(6403), __webpack_require__.e(9258), __webpack_require__.e(3372), __webpack_require__.e(5094), __webpack_require__.e(2090), __webpack_require__.e(1949), __webpack_require__.e(1350), __webpack_require__.e(9757), __webpack_require__.e(3897)]).then(__webpack_require__.bind(__webpack_require__, 1161))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/filter-category-grid"
        ]
    }
});
const SlidingCardCategories = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3372), __webpack_require__.e(6331), __webpack_require__.e(2402), __webpack_require__.e(3685), __webpack_require__.e(5902), __webpack_require__.e(2046)]).then(__webpack_require__.bind(__webpack_require__, 2046))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/sliding-card-category"
        ]
    }
});
const SlidingCardCategories1 = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3372), __webpack_require__.e(6331), __webpack_require__.e(2402), __webpack_require__.e(3685), __webpack_require__.e(5902), __webpack_require__.e(9422)]).then(__webpack_require__.bind(__webpack_require__, 9422))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/sliding-card-category1"
        ]
    }
});
const SlidingCardCategories2 = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3372), __webpack_require__.e(6331), __webpack_require__.e(2402), __webpack_require__.e(3685), __webpack_require__.e(5902), __webpack_require__.e(8872)]).then(__webpack_require__.bind(__webpack_require__, 8872))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/sliding-card-category2"
        ]
    }
});
const SlidingCardCategoriesParent = (0,dynamic["default"])(()=>Promise.all(/* import() */[__webpack_require__.e(3372), __webpack_require__.e(6331), __webpack_require__.e(2402), __webpack_require__.e(4493)]).then(__webpack_require__.bind(__webpack_require__, 4493))
, {
    loadableGenerated: {
        modules: [
            "../components/categories/categories.tsx -> " + "@/components/categories/sliding-card-category-parent"
        ]
    }
});
const MAP_CATEGORY_TO_GROUP = {
    classic: StickySidebarListCategories,
    modern: StickySidebarBoxedCategories,
    standard: StaticSidebarVerticalRectangleCategories,
    minimal: FilterCategoryGrid,
    compact: SlidingCardCategories,
    compact1: SlidingCardCategories1,
    compact2: SlidingCardCategories2,
    compactParent: SlidingCardCategoriesParent,
    default: StickySidebarListCategories
};
function Categories({ layout , className , variables  }) {
    const { categories , isLoading , error  } = useCategories(variables);
    if (error) return(/*#__PURE__*/ jsx_runtime_.jsx(error_message["default"], {
        message: error.message
    }));
    const Component = MAP_CATEGORY_TO_GROUP[layout];
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        notFound: !Boolean(categories.length),
        categories: categories,
        loading: isLoading,
        className: className,
        variables: variables
    }));
};


/***/ }),

/***/ 9581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CloseIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CloseIcon = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
            clipRule: "evenodd"
        })
    })
;


/***/ }),

/***/ 110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error": () => (/* binding */ Error),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);


const Error = ({ message  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "mt-2 text-xs text-red-500 ltr:text-left rtl:text-right",
        children: t(message)
    }));
};
const ErrorMessage = ({ message  })=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "max-w-sm p-5 mx-auto mt-16 text-lg font-semibold text-center bg-red-400 rounded min-w-min text-light",
        children: t(message)
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);


/***/ }),

/***/ 4641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(495);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1434);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2478);
/* harmony import */ var _framework_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_settings__WEBPACK_IMPORTED_MODULE_5__]);
_framework_settings__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const Logo = ({ className , ...props })=>{
    const { settings: { logo , siteTitle  } ,  } = (0,_framework_settings__WEBPACK_IMPORTED_MODULE_5__/* .useSettings */ .rV)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: "/",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('inline-flex', className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "relative h-10 w-32 overflow-hidden md:w-40",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                src: logo?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_4__/* .logoPlaceholder */ .nM,
                alt: siteTitle || 'PickBazar Logo',
                layout: "fill",
                objectFit: "contain",
                loading: "eager"
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

});

/***/ }),

/***/ 4144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DY": () => (/* binding */ ModalProvider),
/* harmony export */   "X9": () => (/* binding */ useModalState),
/* harmony export */   "SO": () => (/* binding */ useModalAction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    view: undefined,
    isOpen: false,
    data: null
};
function modalReducer(state, action) {
    switch(action.type){
        case 'open':
            return {
                ...state,
                view: action.view,
                data: action.payload,
                isOpen: true
            };
        case 'close':
            return {
                ...state,
                view: undefined,
                data: null,
                isOpen: false
            };
        default:
            throw new Error('Unknown Modal Action!');
    }
}
const ModalStateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(initialState);
ModalStateContext.displayName = 'ModalStateContext';
const ModalActionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
ModalActionContext.displayName = 'ModalActionContext';
const ModalProvider = ({ children  })=>{
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(modalReducer, initialState);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalStateContext.Provider, {
        value: state,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalActionContext.Provider, {
            value: dispatch,
            children: children
        })
    }));
};
function useModalState() {
    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ModalStateContext);
    if (context === undefined) {
        throw new Error(`useModalState must be used within a ModalProvider`);
    }
    return context;
}
function useModalAction() {
    const dispatch = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ModalActionContext);
    if (dispatch === undefined) {
        throw new Error(`useModalAction must be used within a ModalProvider`);
    }
    return {
        openModal (view, payload) {
            dispatch({
                type: 'open',
                view,
                payload
            });
        },
        closeModal () {
            dispatch({
                type: 'close'
            });
        }
    };
}


/***/ }),

/***/ 3642:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rV": () => (/* binding */ useSettings),
/* harmony export */   "xh": () => (/* binding */ useUploads),
/* harmony export */   "mU": () => (/* binding */ useSubscription)
/* harmony export */ });
/* unused harmony export useVerifyCoupon */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_get_preview_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(256);
/* harmony import */ var _gql_coupons_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5199);
/* harmony import */ var _gql_settings_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(375);
/* harmony import */ var _gql_upload_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2306);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2451);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3117);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_checkout__WEBPACK_IMPORTED_MODULE_6__, jotai__WEBPACK_IMPORTED_MODULE_5__]);
([_store_checkout__WEBPACK_IMPORTED_MODULE_6__, jotai__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









function useSettings() {
    const { data , loading: isLoading , error  } = (0,_gql_settings_graphql__WEBPACK_IMPORTED_MODULE_2__/* .useSettingsQuery */ .nq)();
    return {
        settings: data?.settings?.options ?? {},
        isLoading,
        error
    };
}
const useUploads = ({ onChange , defaultFiles  })=>{
    const { 0: files , 1: setFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_lib_get_preview_image__WEBPACK_IMPORTED_MODULE_8__/* .getPreviewImage */ .a)(defaultFiles));
    const [mutate, { loading: isLoading  }] = (0,_gql_upload_graphql__WEBPACK_IMPORTED_MODULE_3__/* .useUploadMutation */ .g)({
        onCompleted: (data)=>{
            if (onChange) {
                const dataAfterRemoveTypename = data.upload?.map(({ __typename , ...rest })=>rest
                );
                onChange(dataAfterRemoveTypename);
                setFiles((0,_lib_get_preview_image__WEBPACK_IMPORTED_MODULE_8__/* .getPreviewImage */ .a)(dataAfterRemoveTypename));
            }
        }
    });
    function upload(data) {
        mutate({
            variables: {
                attachment: data
            }
        });
    }
    return {
        mutate: upload,
        isLoading,
        files
    };
};
const useVerifyCoupon = ()=>{
    const { t  } = useTranslation();
    const [_, applyCoupon] = useAtom(couponAtom);
    let { 0: formError , 1: setFormError  } = useState(null);
    const [mutate, { loading: isLoading  }] = useVerifyCouponMutation({
        onCompleted: (data)=>{
            if (!data?.verifyCoupon?.is_valid) {
                setFormError({
                    code: t('error-invalid-coupon')
                });
            }
            applyCoupon(data?.verifyCoupon?.coupon);
        },
        onError: (error)=>{
            toast.error(error.message);
        }
    });
    function verify(data) {
        mutate({
            variables: {
                code: data.code
            }
        });
    }
    return {
        mutate: verify,
        isLoading,
        formError,
        setFormError
    };
};
function useSubscription() {
    let { 0: isSubscribed , 1: setIsSubscribed  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [mutate, { loading: isLoading  }] = (0,_gql_settings_graphql__WEBPACK_IMPORTED_MODULE_2__/* .useSubscribeToNewsletterMutation */ .SQ)({
        onCompleted: ()=>{
            setIsSubscribed(true);
        },
        onError: ()=>{
            setIsSubscribed(false);
        }
    });
    function subscribe({ email  }) {
        mutate({
            variables: {
                email
            }
        });
    }
    return {
        mutate: subscribe,
        isLoading,
        isSubscribed
    };
}

});

/***/ }),

/***/ 2535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ getCategories)
/* harmony export */ });
/* harmony import */ var _generated_types___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4744);

const getCategories = ({ type , limit , name , parent , page =1 , orderField , sortOrder =_generated_types___WEBPACK_IMPORTED_MODULE_0__/* .SortOrder.Desc */ .As.Desc  })=>{
    return {
        ...type && {
            hasType: {
                column: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .QueryCategoriesHasTypeColumn.Slug */ .uD.Slug,
                operator: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .SqlOperator.Eq */ .qv.Eq,
                value: type
            }
        },
        ...orderField && {
            orderBy: [
                {
                    column: orderField,
                    order: sortOrder
                }
            ]
        },
        ...name && {
            name
        },
        ...parent !== undefined && {
            parent
        },
        page,
        first: limit
    };
};


/***/ }),

/***/ 4357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qW": () => (/* binding */ CART_KEY),
/* harmony export */   "nd": () => (/* binding */ AUTH_TOKEN_KEY),
/* harmony export */   "iK": () => (/* binding */ CHECKOUT),
/* harmony export */   "jH": () => (/* binding */ RTL_LANGUAGES)
/* harmony export */ });
/* unused harmony exports TOKEN, AUTH_PERMISSIONS, LIMIT, SUPER_ADMIN, CUSTOMER, SHOPS_LIMIT, PRODUCT_INITIAL_FETCH_LIMIT */
const CART_KEY = 'pick-cart';
const TOKEN = 'token';
const AUTH_TOKEN_KEY = 'auth_token';
const AUTH_PERMISSIONS = 'auth_permissions';
const LIMIT = 10;
const SUPER_ADMIN = 'super_admin';
const CUSTOMER = 'customer';
const CHECKOUT = 'pickbazar-checkout';
const SHOPS_LIMIT = 20;
const RTL_LANGUAGES = [
    'ar',
    'he'
];
const PRODUCT_INITIAL_FETCH_LIMIT = 30;


/***/ }),

/***/ 256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ getPreviewImage)
/* harmony export */ });
const getPreviewImage = (value)=>{
    let images = [];
    if (value) {
        images = Array.isArray(value) ? value.map(({ thumbnail  })=>({
                preview: thumbnail
            })
        ) : [
            {
                preview: value.thumbnail
            }
        ];
    }
    return images;
};


/***/ }),

/***/ 2478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pb": () => (/* reexport */ avatar),
  "Qg": () => (/* reexport */ coupon),
  "nM": () => (/* reexport */ logo),
  "Hb": () => (/* reexport */ product)
});

;// CONCATENATED MODULE: ./src/assets/placeholders/product.svg
/* harmony default export */ const product = ({"src":"/_next/static/media/product.ba64d04a.svg","height":210,"width":270});
;// CONCATENATED MODULE: ./src/assets/placeholders/coupon.svg
/* harmony default export */ const coupon = ({"src":"/_next/static/media/coupon.5015b440.svg","height":240,"width":320});
;// CONCATENATED MODULE: ./src/assets/placeholders/avatar.svg
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.c9441dc8.svg","height":120,"width":120});
;// CONCATENATED MODULE: ./src/assets/placeholders/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.0679544b.svg","height":18,"width":109});
;// CONCATENATED MODULE: ./src/lib/placeholders.tsx






/***/ }),

/***/ 1486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport default from dynamic */ react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7139);
/* harmony import */ var react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useLocalStorage__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 269:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ authorizationAtom)
/* harmony export */ });
/* unused harmony export checkIsLoggedIn */
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4357);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



function checkIsLoggedIn() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get(_lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_TOKEN_KEY */ .nd);
    if (!token) return false;
    return true;
}
const authorizationAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(checkIsLoggedIn());

});

/***/ }),

/***/ 3117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y9": () => (/* binding */ clearCheckoutAtom),
/* harmony export */   "Km": () => (/* binding */ billingAddressAtom),
/* harmony export */   "du": () => (/* binding */ shippingAddressAtom),
/* harmony export */   "Gh": () => (/* binding */ deliveryTimeAtom),
/* harmony export */   "lu": () => (/* binding */ customerContactAtom),
/* harmony export */   "Jb": () => (/* binding */ verifiedResponseAtom)
/* harmony export */ });
/* unused harmony exports defaultCheckout, checkoutAtom, paymentGatewayAtom, verifiedTokenAtom, couponAtom, discountAtom, walletAtom, payableAmountAtom */
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4357);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__]);
([jotai__WEBPACK_IMPORTED_MODULE_0__, jotai_utils__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const defaultCheckout = {
    billing_address: null,
    shipping_address: null,
    delivery_time: null,
    payment_gateway: 'STRIPE',
    customer_contact: '',
    verified_response: null,
    coupon: null,
    payable_amount: 0,
    use_wallet: false
};
// Original atom.
const checkoutAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.atomWithStorage)(_lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKOUT */ .iK, defaultCheckout);
const clearCheckoutAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null, (_get, set, _data)=>{
    return set(checkoutAtom, defaultCheckout);
});
const billingAddressAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).billing_address
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        billing_address: data
    });
});
const shippingAddressAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).shipping_address
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        shipping_address: data
    });
});
const deliveryTimeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).delivery_time
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        delivery_time: data
    });
});
const paymentGatewayAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).payment_gateway
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        payment_gateway: data
    });
});
const verifiedTokenAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).token
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        token: data
    });
});
const customerContactAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).customer_contact
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        customer_contact: data
    });
});
const verifiedResponseAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).verified_response
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        verified_response: data
    });
});
const couponAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).coupon
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        coupon: data
    });
});
const discountAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).coupon?.amount
);
const walletAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).use_wallet
, (get, set)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        use_wallet: !prev.use_wallet
    });
});
const payableAmountAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)((get)=>get(checkoutAtom).payable_amount
, (get, set, data)=>{
    const prev = get(checkoutAtom);
    return set(checkoutAtom, {
        ...prev,
        payable_amount: data
    });
});

});

/***/ }),

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ drawerAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const drawerAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    display: false,
    view: '',
    data: null
});

});

/***/ }),

/***/ 2730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jD": () => (/* binding */ useCart),
/* harmony export */   "Zl": () => (/* binding */ CartProvider)
/* harmony export */ });
/* unused harmony export cartContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1864);
/* harmony import */ var _cart_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8503);
/* harmony import */ var _lib_use_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1486);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4357);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3117);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_checkout__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_4__]);
([_store_checkout__WEBPACK_IMPORTED_MODULE_5__, jotai__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const cartContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
cartContext.displayName = 'CartContext';
const useCart = ()=>{
    const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(cartContext);
    if (context === undefined) {
        throw new Error(`useCart must be used within a CartProvider`);
    }
    return react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>context
    , [
        context
    ]);
};
const CartProvider = (props)=>{
    const [savedCart, saveCart] = (0,_lib_use_local_storage__WEBPACK_IMPORTED_MODULE_3__/* .useLocalStorage */ ._)(_lib_constants__WEBPACK_IMPORTED_MODULE_6__/* .CART_KEY */ .qW, JSON.stringify(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__/* .initialState */ .E));
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__/* .cartReducer */ .C, savedCart ? JSON.parse(savedCart) : _cart_reducer__WEBPACK_IMPORTED_MODULE_2__/* .initialState */ .E);
    const [, emptyVerifiedResponse] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_checkout__WEBPACK_IMPORTED_MODULE_5__/* .verifiedResponseAtom */ .Jb);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        emptyVerifiedResponse(null);
    }, [
        emptyVerifiedResponse,
        state
    ]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        saveCart(JSON.stringify(state));
    }, [
        state,
        saveCart
    ]);
    const addItemToCart = (item, quantity)=>dispatch({
            type: 'ADD_ITEM_WITH_QUANTITY',
            item,
            quantity
        })
    ;
    const removeItemFromCart = (id)=>dispatch({
            type: 'REMOVE_ITEM_OR_QUANTITY',
            id
        })
    ;
    const clearItemFromCart = (id)=>dispatch({
            type: 'REMOVE_ITEM',
            id
        })
    ;
    const isInCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>!!(0,_cart_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .rV)(state.items, id)
    , [
        state.items
    ]);
    const getItemFromCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>(0,_cart_utils__WEBPACK_IMPORTED_MODULE_7__/* .getItem */ .rV)(state.items, id)
    , [
        state.items
    ]);
    const isInStock = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>(0,_cart_utils__WEBPACK_IMPORTED_MODULE_7__/* .inStock */ .pz)(state.items, id)
    , [
        state.items
    ]);
    const resetCart = ()=>dispatch({
            type: 'RESET_CART'
        })
    ;
    const value = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>({
            ...state,
            addItemToCart,
            removeItemFromCart,
            clearItemFromCart,
            getItemFromCart,
            isInCart,
            isInStock,
            resetCart
        })
    , [
        getItemFromCart,
        isInCart,
        isInStock,
        state
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(cartContext.Provider, {
        value: value,
        ...props
    }));
};

});

/***/ }),

/***/ 1864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ initialState),
/* harmony export */   "C": () => (/* binding */ cartReducer)
/* harmony export */ });
/* harmony import */ var _cart_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8503);

const initialState = {
    items: [],
    isEmpty: true,
    totalItems: 0,
    totalUniqueItems: 0,
    total: 0,
    meta: null
};
function cartReducer(state, action) {
    switch(action.type){
        case 'ADD_ITEM_WITH_QUANTITY':
            {
                const items = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .addItemWithQuantity */ .Kv)(state.items, action.item, action.quantity);
                return generateFinalState(state, items);
            }
        case 'REMOVE_ITEM_OR_QUANTITY':
            {
                const items = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .removeItemOrQuantity */ .um)(state.items, action.id, action.quantity ?? 1);
                return generateFinalState(state, items);
            }
        case 'ADD_ITEM':
            {
                const items = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .addItem */ .jX)(state.items, action.item);
                return generateFinalState(state, items);
            }
        case 'REMOVE_ITEM':
            {
                const items = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .removeItem */ .cl)(state.items, action.id);
                return generateFinalState(state, items);
            }
        case 'UPDATE_ITEM':
            {
                const items = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .updateItem */ .$G)(state.items, action.id, action.item);
                return generateFinalState(state, items);
            }
        case 'RESET_CART':
            return initialState;
        default:
            return state;
    }
}
const generateFinalState = (state, items)=>{
    const totalUniqueItems = (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .calculateUniqueItems */ .tm)(items);
    console.log(totalUniqueItems, items, state);
    return {
        ...state,
        items: (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .calculateItemTotals */ .pQ)(items),
        totalItems: (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .calculateTotalItems */ .yL)(items),
        totalUniqueItems,
        total: (0,_cart_utils__WEBPACK_IMPORTED_MODULE_0__/* .calculateTotal */ .tf)(items),
        isEmpty: totalUniqueItems === 0
    };
};


/***/ }),

/***/ 8503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kv": () => (/* binding */ addItemWithQuantity),
/* harmony export */   "um": () => (/* binding */ removeItemOrQuantity),
/* harmony export */   "jX": () => (/* binding */ addItem),
/* harmony export */   "rV": () => (/* binding */ getItem),
/* harmony export */   "$G": () => (/* binding */ updateItem),
/* harmony export */   "cl": () => (/* binding */ removeItem),
/* harmony export */   "pz": () => (/* binding */ inStock),
/* harmony export */   "pQ": () => (/* binding */ calculateItemTotals),
/* harmony export */   "tf": () => (/* binding */ calculateTotal),
/* harmony export */   "yL": () => (/* binding */ calculateTotalItems),
/* harmony export */   "tm": () => (/* binding */ calculateUniqueItems)
/* harmony export */ });
/* unused harmony export calculatePaidTotal */
function addItemWithQuantity(items, item, quantity) {
    if (quantity <= 0) throw new Error("cartQuantity can't be zero or less than zero");
    const existingItemIndex = items.findIndex((existingItem)=>existingItem.id === item.id
    );
    if (existingItemIndex > -1) {
        const newItems = [
            ...items
        ];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
    }
    return [
        ...items,
        {
            ...item,
            quantity
        }
    ];
}
function removeItemOrQuantity(items, id, quantity) {
    return items.reduce((acc, item)=>{
        if (item.id === id) {
            const newQuantity = item.quantity - quantity;
            return newQuantity > 0 ? [
                ...acc,
                {
                    ...item,
                    quantity: newQuantity
                }
            ] : [
                ...acc
            ];
        }
        return [
            ...acc,
            item
        ];
    }, []);
}
// Simple CRUD for Item
function addItem(items, item) {
    return [
        ...items,
        item
    ];
}
function getItem(items, id) {
    return items.find((item)=>item.id === id
    );
}
function updateItem(items, id, item) {
    return items.map((existingItem)=>existingItem.id === id ? {
            ...existingItem,
            ...item
        } : existingItem
    );
}
function removeItem(items, id) {
    return items.filter((existingItem)=>existingItem.id !== id
    );
}
function inStock(items, id) {
    const item = getItem(items, id);
    if (item) return item["quantity"] < item["stock"];
    return false;
}
const calculateItemTotals = (items)=>items.map((item)=>({
            ...item,
            itemTotal: item.price * item.quantity
        })
    )
;
const calculateTotal = (items)=>items.reduce((total, item)=>total + item.quantity * item.price
    , 0)
;
const calculateTotalItems = (items)=>items.reduce((sum, item)=>sum + item.quantity
    , 0)
;
const calculateUniqueItems = (items)=>items.length
;
const calculatePaidTotal = ({ totalAmount , tax , shipping_charge  }, discount)=>{
    let paidTotal = totalAmount + tax + shipping_charge;
    if (discount) {
        paidTotal = paidTotal - discount;
    }
    return paidTotal;
};


/***/ }),

/***/ 5659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bb": () => (/* binding */ CategoriesDocument),
/* harmony export */   "Ei": () => (/* binding */ useCategoriesQuery)
/* harmony export */ });
/* unused harmony exports CategoryPartsFragmentDoc, PaginatorPartsFragmentDoc, useCategoriesLazyQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const CategoryPartsFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment CategoryParts on Category {
  id
  name
  slug
  details
  parent_id
  products_count
  image {
    id
    original
    thumbnail
  }
  icon
  type {
    id
    name
    slug
  }
}
    `;
const PaginatorPartsFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment PaginatorParts on PaginatorInfo {
  count
  currentPage
  firstItem
  hasMorePages
  lastItem
  lastPage
  perPage
  total
}
    `;
const CategoriesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Categories($orderBy: [QueryCategoriesOrderByOrderByClause!], $hasType: QueryCategoriesHasTypeWhereHasConditions, $name: String, $first: Int = 2, $page: Int, $parent: ID) {
  categories(
    hasType: $hasType
    orderBy: $orderBy
    name: $name
    first: $first
    page: $page
    parent: $parent
  ) {
    data {
      ...CategoryParts
      children {
        ...CategoryParts
        children {
          ...CategoryParts
        }
      }
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${CategoryPartsFragmentDoc}
${PaginatorPartsFragmentDoc}`;
/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      hasType: // value for 'hasType'
 *      name: // value for 'name'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *      parent: // value for 'parent'
 *   },
 * });
 */ function useCategoriesQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(CategoriesDocument, options);
}
function useCategoriesLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(CategoriesDocument, options);
}


/***/ }),

/***/ 5199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ID": () => (/* binding */ useCouponsQuery)
/* harmony export */ });
/* unused harmony exports PaginatorPartsFragmentDoc, CouponDocument, useCouponQuery, useCouponLazyQuery, VerifyCouponDocument, useVerifyCouponMutation, CouponsDocument, useCouponsLazyQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const PaginatorPartsFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment PaginatorParts on PaginatorInfo {
  count
  currentPage
  firstItem
  hasMorePages
  lastItem
  lastPage
  perPage
  total
}
    `;
const CouponDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Coupon($id: ID, $code: String) {
  coupon(id: $id, code: $code) {
    id
    code
    type
    amount
    is_valid
  }
}
    `;
/**
 * __useCouponQuery__
 *
 * To run a query within a React component, call `useCouponQuery` and pass it any options that fit your needs.
 * When your component renders, `useCouponQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCouponQuery({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */ function useCouponQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(CouponDocument, options);
}
function useCouponLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(CouponDocument, options);
}
const VerifyCouponDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation VerifyCoupon($code: String!) {
  verifyCoupon(code: $code) {
    is_valid
    coupon {
      id
      code
      type
      amount
      is_valid
    }
  }
}
    `;
/**
 * __useVerifyCouponMutation__
 *
 * To run a mutation, you first call `useVerifyCouponMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyCouponMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyCouponMutation, { data, loading, error }] = useVerifyCouponMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */ function useVerifyCouponMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useMutation(VerifyCouponDocument, options);
}
const CouponsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Coupons($first: Int!, $page: Int) {
  coupons(first: $first, page: $page) {
    data {
      id
      code
      description
      type
      image {
        id
        original
        thumbnail
      }
      amount
      active_from
      expire_at
      created_at
      updated_at
      is_valid
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${PaginatorPartsFragmentDoc}`;
/**
 * __useCouponsQuery__
 *
 * To run a query within a React component, call `useCouponsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCouponsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCouponsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */ function useCouponsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(CouponsDocument, options);
}
function useCouponsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(CouponsDocument, options);
}


/***/ }),

/***/ 375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m9": () => (/* binding */ SettingsDocument),
/* harmony export */   "nq": () => (/* binding */ useSettingsQuery),
/* harmony export */   "SQ": () => (/* binding */ useSubscribeToNewsletterMutation),
/* harmony export */   "sF": () => (/* binding */ useContactUsMutation)
/* harmony export */ });
/* unused harmony exports useSettingsLazyQuery, SubscribeToNewsletterDocument, ContactUsDocument */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const SettingsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Settings {
  settings {
    id
    options {
      siteTitle
      siteSubtitle
      currency
      useOtp
      deliveryTime {
        title
        description
      }
      logo {
        id
        thumbnail
        original
      }
      taxClass
      shippingClass
      contactDetails {
        contact
        website
        socials {
          icon
          url
        }
        location {
          lat
          lng
          city
          state
          country
          zip
          formattedAddress
        }
      }
      seo {
        metaTitle
        metaDescription
        ogTitle
        ogDescription
        ogImage {
          id
          thumbnail
          original
        }
        twitterHandle
        twitterCardType
        metaTags
        canonicalUrl
      }
      google {
        isEnable
        tagManagerId
      }
      facebook {
        isEnable
        appId
        pageId
      }
    }
  }
}
    `;
/**
 * __useSettingsQuery__
 *
 * To run a query within a React component, call `useSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsQuery({
 *   variables: {
 *   },
 * });
 */ function useSettingsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(SettingsDocument, options);
}
function useSettingsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(SettingsDocument, options);
}
const SubscribeToNewsletterDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation SubscribeToNewsletter($email: String!) {
  subscribeToNewsletter(email: $email)
}
    `;
/**
 * __useSubscribeToNewsletterMutation__
 *
 * To run a mutation, you first call `useSubscribeToNewsletterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToNewsletterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeToNewsletterMutation, { data, loading, error }] = useSubscribeToNewsletterMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */ function useSubscribeToNewsletterMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(SubscribeToNewsletterDocument, options);
}
const ContactUsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation ContactUs($input: ContactInput!) {
  contactUs(input: $input) {
    message
    success
  }
}
    `;
/**
 * __useContactUsMutation__
 *
 * To run a mutation, you first call `useContactUsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContactUsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUsMutation, { data, loading, error }] = useContactUsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useContactUsMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(ContactUsDocument, options);
}


/***/ }),

/***/ 2306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useUploadMutation)
/* harmony export */ });
/* unused harmony export UploadDocument */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const UploadDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation Upload($attachment: [Upload!]!) {
  upload(attachment: $attachment) {
    original
    thumbnail
    id
  }
}
    `;
/**
 * __useUploadMutation__
 *
 * To run a mutation, you first call `useUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMutation, { data, loading, error }] = useUploadMutation({
 *   variables: {
 *      attachment: // value for 'attachment'
 *   },
 * });
 */ function useUploadMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(UploadDocument, options);
}


/***/ })

};
;
"use strict";
exports.id = 6403;
exports.ids = [6403];
exports.modules = {

/***/ 6403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rn": () => (/* binding */ useProducts),
/* harmony export */   "os": () => (/* binding */ usePopularProducts)
/* harmony export */ });
/* unused harmony export useProduct */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gql_products_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2709);
/* harmony import */ var _utils_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5286);



function useProducts(options) {
    const { data , loading: isLoading , error , fetchMore , networkStatus ,  } = (0,_gql_products_graphql__WEBPACK_IMPORTED_MODULE_1__/* .useProductsQuery */ .kN)({
        variables: (0,_utils_products__WEBPACK_IMPORTED_MODULE_2__/* .getProducts */ .X)(options)
    });
    function handleLoadMore() {
        if (data?.products?.paginatorInfo.hasMorePages) {
            fetchMore({
                variables: {
                    page: data?.products?.paginatorInfo?.currentPage + 1,
                    first: 30
                }
            });
        }
    }
    return {
        products: data?.products?.data ?? [],
        paginatorInfo: data?.products?.paginatorInfo,
        isLoading,
        error,
        isLoadingMore: networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_0__.NetworkStatus.fetchMore,
        loadMore: handleLoadMore,
        hasMore: Boolean(data?.products?.paginatorInfo?.hasMorePages)
    };
}
const usePopularProducts = (options)=>{
    const { data , loading: isLoading , error ,  } = (0,_gql_products_graphql__WEBPACK_IMPORTED_MODULE_1__/* .usePopularProductsQuery */ .T8)({
        variables: options
    });
    return {
        products: data?.popularProducts ?? [],
        isLoading,
        error
    };
};
function useProduct({ slug  }) {
    const { data , loading: isLoading , error ,  } = useProductQuery({
        variables: {
            slug
        }
    });
    return {
        product: data?.product,
        isLoading,
        error
    };
}


/***/ }),

/***/ 5286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ getProducts)
/* harmony export */ });
/* harmony import */ var _generated_types___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4744);

const getProducts = ({ searchQuery , type , limit , text , categories , shop_id , price , manufacturer , author , tags , page =1 , status =_generated_types___WEBPACK_IMPORTED_MODULE_0__/* .ProductStatus.Publish */ .Pt.Publish , orderBy =_generated_types___WEBPACK_IMPORTED_MODULE_0__/* .QueryProductsOrderByColumn.CreatedAt */ .UQ.CreatedAt , sortedBy =_generated_types___WEBPACK_IMPORTED_MODULE_0__/* .SortOrder.Asc */ .As.Asc  })=>{
    return {
        ...!shop_id && !author && !manufacturer && type && {
            hasType: {
                column: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .QueryProductsHasTypeColumn.Slug */ .Tu.Slug,
                operator: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .SqlOperator.Eq */ .qv.Eq,
                value: type
            }
        },
        ...shop_id && {
            shop_id: shop_id
        },
        ...text && {
            text: `%${text}%`
        },
        ...searchQuery && {
            text: `%${searchQuery}%`
        },
        ...categories && {
            hasCategories: {
                column: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .QueryCategoriesHasTypeColumn.Slug */ .uD.Slug,
                operator: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .SqlOperator.In */ .qv.In,
                value: categories.split(',')
            }
        },
        ...manufacturer && {
            hasManufacturer: {
                column: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .QueryProductsHasManufacturerColumn.Slug */ .yv.Slug,
                operator: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .SqlOperator.In */ .qv.In,
                value: manufacturer.split(',')
            }
        },
        ...tags && {
            hasTags: {
                column: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .QueryProductsHasTagsColumn.Slug */ .NG.Slug,
                operator: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .SqlOperator.In */ .qv.In,
                value: tags.split(',')
            }
        },
        ...author && {
            hasAuthor: {
                column: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .QueryProductsHasAuthorColumn.Slug */ .od.Slug,
                operator: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .SqlOperator.In */ .qv.In,
                value: author.split(',')
            }
        },
        ...orderBy && {
            orderBy: [
                {
                    column: orderBy.toUpperCase(),
                    order: sortedBy
                }
            ]
        },
        page,
        status,
        first: limit,
        ...price && {
            min_price: {
                from: +price.split(',')[0],
                to: +price.split(',')[1]
            }
        }
    };
};


/***/ })

};
;
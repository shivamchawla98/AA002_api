"use strict";
exports.id = 4538;
exports.ids = [4538];
exports.modules = {

/***/ 4538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yi": () => (/* binding */ useOrders),
/* harmony export */   "Aj": () => (/* binding */ useOrder),
/* harmony export */   "Rr": () => (/* binding */ useOrderStatuses),
/* harmony export */   "rT": () => (/* binding */ useRefunds),
/* harmony export */   "M6": () => (/* binding */ useDownloadableProducts),
/* harmony export */   "U5": () => (/* binding */ useCreateRefund),
/* harmony export */   "Mc": () => (/* binding */ useGenerateDownloadableUrl)
/* harmony export */ });
/* unused harmony exports useCreateOrder, useVerifyOrder */
/* harmony import */ var _generated_types___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4744);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4144);
/* harmony import */ var _gql_orders_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8245);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _gql_refunds_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8539);
/* harmony import */ var _gql_products_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2709);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2451);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3117);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_checkout__WEBPACK_IMPORTED_MODULE_10__, jotai__WEBPACK_IMPORTED_MODULE_9__]);
([_store_checkout__WEBPACK_IMPORTED_MODULE_10__, jotai__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












function useOrders(options) {
    const { data , loading: isLoading , error , fetchMore , networkStatus ,  } = (0,_gql_orders_graphql__WEBPACK_IMPORTED_MODULE_4__/* .useOrdersQuery */ .mU)({
        variables: {
            first: 10
        },
        notifyOnNetworkStatusChange: true
    });
    function handleLoadMore() {
        if (data?.orders?.paginatorInfo.hasMorePages) {
            fetchMore({
                variables: {
                    page: data?.orders?.paginatorInfo?.currentPage + 1
                }
            });
        }
    }
    return {
        orders: data?.orders?.data ?? [],
        paginatorInfo: data?.orders?.paginatorInfo,
        isLoading,
        error,
        isLoadingMore: networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_5__.NetworkStatus.fetchMore,
        loadMore: handleLoadMore,
        hasMore: Boolean(data?.orders?.paginatorInfo?.hasMorePages)
    };
}
function useOrder({ tracking_number  }) {
    const { data , loading: isLoading , error ,  } = (0,_gql_orders_graphql__WEBPACK_IMPORTED_MODULE_4__/* .useOrderQuery */ .OT)({
        variables: {
            tracking_number
        }
    });
    return {
        order: data?.order,
        isLoading,
        error
    };
}
function useOrderStatuses(options) {
    const { data , loading: isLoading , error , fetchMore , networkStatus ,  } = (0,_gql_orders_graphql__WEBPACK_IMPORTED_MODULE_4__/* .useOrderStatusesQuery */ .Qk)({
        variables: {
            first: 100,
            page: 1,
            orderBy: [
                {
                    column: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .QueryOrderStatusesOrderByColumn.Serial */ .VT.Serial,
                    order: _generated_types___WEBPACK_IMPORTED_MODULE_0__/* .SortOrder.Asc */ .As.Asc
                }, 
            ]
        },
        notifyOnNetworkStatusChange: true
    });
    function handleLoadMore() {
        if (data?.orderStatuses?.paginatorInfo.hasMorePages) {
            fetchMore({
                variables: {
                    page: data?.orderStatuses?.paginatorInfo?.currentPage + 1
                }
            });
        }
    }
    return {
        orderStatuses: data?.orderStatuses?.data ?? [],
        paginatorInfo: data?.orderStatuses?.paginatorInfo,
        isLoading,
        isLoadingMore: networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_5__.NetworkStatus.fetchMore,
        error,
        loadMore: handleLoadMore,
        hasMore: Boolean(data?.orderStatuses?.paginatorInfo?.hasMorePages)
    };
}
function useRefunds(options) {
    const { data , loading: isLoading , error , fetchMore , networkStatus ,  } = (0,_gql_refunds_graphql__WEBPACK_IMPORTED_MODULE_7__/* .useRefundsQuery */ .mc)({
        variables: {
            orderBy: 'created_at',
            sortedBy: 'desc'
        },
        notifyOnNetworkStatusChange: true
    });
    function handleLoadMore() {
        if (data?.refunds?.paginatorInfo.hasMorePages) {
            fetchMore({
                variables: {
                    page: data?.refunds?.paginatorInfo?.currentPage + 1
                }
            });
        }
    }
    return {
        refunds: data?.refunds?.data ?? [],
        paginatorInfo: data?.refunds?.paginatorInfo,
        isLoading,
        isLoadingMore: networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_5__.NetworkStatus.fetchMore,
        error,
        loadMore: handleLoadMore,
        hasMore: Boolean(data?.refunds?.paginatorInfo?.hasMorePages)
    };
}
const useDownloadableProducts = (options)=>{
    const { data , loading: isLoading , error , fetchMore , networkStatus ,  } = (0,_gql_products_graphql__WEBPACK_IMPORTED_MODULE_8__/* .useDownloadableProductsQuery */ .m4)({
        variables: {
            first: options.limit
        },
        notifyOnNetworkStatusChange: true
    });
    function handleLoadMore() {
        if (data?.downloads?.paginatorInfo.hasMorePages) {
            fetchMore({
                variables: {
                    page: data?.downloads?.paginatorInfo?.currentPage + 1,
                    first: 5
                }
            });
        }
    }
    return {
        downloads: data?.downloads?.data ?? [],
        paginatorInfo: data?.downloads?.paginatorInfo,
        isLoading,
        isLoadingMore: networkStatus === _apollo_client__WEBPACK_IMPORTED_MODULE_5__.NetworkStatus.fetchMore,
        error,
        loadMore: handleLoadMore,
        hasMore: Boolean(data?.downloads?.paginatorInfo?.hasMorePages)
    };
};
function useCreateRefund() {
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_3__/* .useModalAction */ .SO)();
    const [refundRequest, { loading: isLoading  }] = (0,_gql_refunds_graphql__WEBPACK_IMPORTED_MODULE_7__/* .useCreateRefundMutation */ .cq)({
        refetchQueries: [
            'Orders'
        ],
        onCompleted: ()=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(t('text-refund-request-submitted'));
            closeModal();
        }
    });
    function createRefundRequest(input) {
        refundRequest({
            variables: {
                input
            }
        });
    }
    return {
        createRefundRequest,
        isLoading
    };
}
function useCreateOrder() {
    const router = useRouter();
    const [createOrder, { loading: isLoading  }] = useCreateOrderMutation({
        onCompleted: (data)=>{
            if (data?.createOrder?.tracking_number) {
                router.push(`${ROUTES.ORDERS}/${data?.createOrder?.tracking_number}`);
            }
        },
        onError: (error)=>{
            toast.error(error.message);
        }
    });
    function create(input) {
        createOrder({
            variables: {
                input
            }
        });
    }
    return {
        createOrder: create,
        isLoading
    };
}
function useGenerateDownloadableUrl() {
    const [getDownloadableUrl] = (0,_gql_products_graphql__WEBPACK_IMPORTED_MODULE_8__/* .useGenerateDownloadableUrlMutation */ .YY)({
        onCompleted: (data)=>{
            function download(fileUrl, fileName) {
                var a = document.createElement('a');
                a.href = fileUrl;
                a.setAttribute('download', fileName);
                a.click();
            }
            download(data?.generateDownloadableUrl, 'record.name');
        }
    });
    function generateDownloadableUrl(digital_file_id) {
        getDownloadableUrl({
            variables: {
                input: {
                    digital_file_id
                }
            }
        });
    }
    return {
        generateDownloadableUrl
    };
}
function useVerifyOrder() {
    const [_, setVerifiedResponse] = useAtom(verifiedResponseAtom);
    const [mutate, { loading: isLoading , error  }] = useVerifyCheckoutMutation({
        onCompleted: (data)=>{
            if (data?.verifyCheckout) {
                //@ts-ignore
                setVerifiedResponse(data.verifyCheckout);
            }
        },
        onError: (err)=>{
            toast.error(err.message);
        }
    });
    function verifyOrder(values) {
        mutate({
            variables: {
                input: values
            }
        });
    }
    return {
        mutate: verifyOrder,
        isLoading,
        error
    };
}

});

/***/ }),

/***/ 8245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mU": () => (/* binding */ useOrdersQuery),
/* harmony export */   "OT": () => (/* binding */ useOrderQuery),
/* harmony export */   "Qk": () => (/* binding */ useOrderStatusesQuery)
/* harmony export */ });
/* unused harmony exports OrderPartsFragmentDoc, PaginatorPartsFragmentDoc, OrdersDocument, useOrdersLazyQuery, OrderDocument, useOrderLazyQuery, OrderStatusesDocument, useOrderStatusesLazyQuery, VerifyCheckoutDocument, useVerifyCheckoutMutation, CreateOrderDocument, useCreateOrderMutation */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const OrderPartsFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment OrderParts on Order {
  id
  tracking_number
  customer_contact
  customer {
    name
  }
  status {
    id
    name
    color
    serial
  }
  products {
    name
    price
    sale_price
    created_at
    image {
      id
      original
      thumbnail
    }
    variation_options {
      id
      title
    }
    pivot {
      variation_option_id
      order_quantity
      unit_price
      subtotal
    }
    quantity
    unit
  }
  amount
  sales_tax
  total
  paid_total
  payment_id
  payment_gateway
  coupon {
    code
    amount
    type
  }
  discount
  delivery_fee
  delivery_time
  coupon {
    id
    code
  }
  billing_address {
    country
    city
    state
    zip
    street_address
  }
  shipping_address {
    country
    city
    state
    zip
    street_address
  }
  refund {
    id
    title
    amount
    status
  }
  wallet_point {
    id
    amount
  }
  created_at
  updated_at
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
const OrdersDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Orders($tracking_number: String, $orderBy: String, $sortedBy: String, $customer_id: ID, $shop_id: ID, $first: Int = 10, $page: Int) {
  orders(
    tracking_number: $tracking_number
    orderBy: $orderBy
    sortedBy: $sortedBy
    customer_id: $customer_id
    shop_id: $shop_id
    first: $first
    page: $page
  ) {
    data {
      ...OrderParts
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${OrderPartsFragmentDoc}
${PaginatorPartsFragmentDoc}`;
/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      tracking_number: // value for 'tracking_number'
 *      orderBy: // value for 'orderBy'
 *      sortedBy: // value for 'sortedBy'
 *      customer_id: // value for 'customer_id'
 *      shop_id: // value for 'shop_id'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */ function useOrdersQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(OrdersDocument, options);
}
function useOrdersLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(OrdersDocument, options);
}
const OrderDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Order($tracking_number: String, $id: ID) {
  order(tracking_number: $tracking_number, id: $id) {
    ...OrderParts
    children {
      ...OrderParts
    }
  }
}
    ${OrderPartsFragmentDoc}`;
/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      tracking_number: // value for 'tracking_number'
 *      id: // value for 'id'
 *   },
 * });
 */ function useOrderQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(OrderDocument, options);
}
function useOrderLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(OrderDocument, options);
}
const OrderStatusesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query OrderStatuses($first: Int, $page: Int, $text: String, $orderBy: [QueryOrderStatusesOrderByOrderByClause!]) {
  orderStatuses(first: $first, page: $page, text: $text, orderBy: $orderBy) {
    data {
      id
      name
      color
      serial
    }
    paginatorInfo {
      currentPage
      firstItem
      hasMorePages
      lastItem
      perPage
      total
      lastPage
      count
    }
  }
}
    `;
/**
 * __useOrderStatusesQuery__
 *
 * To run a query within a React component, call `useOrderStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderStatusesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      page: // value for 'page'
 *      text: // value for 'text'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */ function useOrderStatusesQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(OrderStatusesDocument, options);
}
function useOrderStatusesLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(OrderStatusesDocument, options);
}
const VerifyCheckoutDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation VerifyCheckout($input: CheckoutVerificationInput!) {
  verifyCheckout(input: $input) {
    total_tax
    shipping_charge
    unavailable_products
    wallet_amount
    wallet_currency
  }
}
    `;
/**
 * __useVerifyCheckoutMutation__
 *
 * To run a mutation, you first call `useVerifyCheckoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyCheckoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyCheckoutMutation, { data, loading, error }] = useVerifyCheckoutMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useVerifyCheckoutMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useMutation(VerifyCheckoutDocument, options);
}
const CreateOrderDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    ...OrderParts
  }
}
    ${OrderPartsFragmentDoc}`;
/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useCreateOrderMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useMutation(CreateOrderDocument, options);
}


/***/ }),

/***/ 8539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mc": () => (/* binding */ useRefundsQuery),
/* harmony export */   "cq": () => (/* binding */ useCreateRefundMutation)
/* harmony export */ });
/* unused harmony exports PaginatorPartsFragmentDoc, RefundsDocument, useRefundsLazyQuery, CreateRefundDocument */
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
const RefundsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Refunds($orderBy: String, $sortedBy: String, $shop_id: Int, $order_id: Int, $customer_id: Int, $first: Int = 10, $page: Int) {
  refunds(
    orderBy: $orderBy
    sortedBy: $sortedBy
    shop_id: $shop_id
    order_id: $order_id
    customer_id: $customer_id
    first: $first
    page: $page
  ) {
    data {
      id
      title
      amount
      status
      order {
        tracking_number
      }
      created_at
      updated_at
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${PaginatorPartsFragmentDoc}`;
/**
 * __useRefundsQuery__
 *
 * To run a query within a React component, call `useRefundsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRefundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRefundsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      sortedBy: // value for 'sortedBy'
 *      shop_id: // value for 'shop_id'
 *      order_id: // value for 'order_id'
 *      customer_id: // value for 'customer_id'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */ function useRefundsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(RefundsDocument, options);
}
function useRefundsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(RefundsDocument, options);
}
const CreateRefundDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation CreateRefund($input: CreateRefundInput!) {
  createRefund(input: $input) {
    id
    title
    description
    images {
      thumbnail
      original
      id
    }
  }
}
    `;
/**
 * __useCreateRefundMutation__
 *
 * To run a mutation, you first call `useCreateRefundMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRefundMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRefundMutation, { data, loading, error }] = useCreateRefundMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useCreateRefundMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(CreateRefundDocument, options);
}


/***/ })

};
;
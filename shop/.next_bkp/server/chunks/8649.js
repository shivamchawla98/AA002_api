"use strict";
exports.id = 8649;
exports.ids = [8649];
exports.modules = {

/***/ 8649:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "in": () => (/* binding */ initializeApollo),
/* harmony export */   "_p": () => (/* binding */ addApolloState),
/* harmony export */   "Uk": () => (/* binding */ useApollo)
/* harmony export */ });
/* unused harmony export APOLLO_STATE_PROP_NAME */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4394);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7812);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3706);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6330);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(113);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4357);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_5__, apollo_upload_client__WEBPACK_IMPORTED_MODULE_4__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_5__, apollo_upload_client__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
let apolloClient;
function createApolloClient() {
    const authLink = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__.setContext)((_, { headers  })=>{
        const token = js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].get(_lib_constants__WEBPACK_IMPORTED_MODULE_9__/* .AUTH_TOKEN_KEY */ .nd);
        //TODO: log headers to see if cookies are being sent
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ''
            }
        };
    });
    const httpLink = (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_4__.createUploadLink)({
        uri: "http://38.242.199.115:4000/graphql",
        credentials: 'same-origin'
    });
    const errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_2__.onError)(({ graphQLErrors , networkError  })=>{
        if (graphQLErrors) graphQLErrors.map(({ message , locations , path  })=>{
            if (message === 'PICKBAZAR_ERROR.NOT_AUTHORIZED') {
                // every 401/unauthorized error will be caught here and update the global local state
                js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].remove(_lib_constants__WEBPACK_IMPORTED_MODULE_9__/* .AUTH_TOKEN_KEY */ .nd);
                next_router__WEBPACK_IMPORTED_MODULE_8___default().reload();
            // authorize(false);
            }
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });
    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
        ssrMode: "undefined" === 'undefined',
        // @ts-ignore
        link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.from)([
            authLink,
            errorLink,
            httpLink
        ]),
        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({
            typePolicies: {
                User: {
                    fields: {
                        address: {
                            merge: false
                        }
                    }
                },
                Type: {
                    fields: {
                        settings: {
                            merge: true
                        }
                    }
                },
                Query: {
                    fields: {
                        products: {
                            keyArgs: [
                                'shop_id',
                                'text',
                                'min_price',
                                'hasType',
                                'hasCategories',
                                'hasTags',
                                'hasManufacturer',
                                'hasAuthor',
                                'orderBy', 
                            ],
                            merge (existing, incoming) {
                                return existing ? {
                                    ...incoming,
                                    data: [
                                        ...existing.data,
                                        ...incoming.data
                                    ]
                                } : incoming;
                            }
                        },
                        //products:concatPagination()
                        orders: {
                            keyArgs: false,
                            merge (existing, incoming) {
                                return existing ? {
                                    ...incoming,
                                    data: [
                                        ...existing.data,
                                        ...incoming.data
                                    ]
                                } : incoming;
                            }
                        },
                        categories: {
                            merge: true
                        }
                    }
                }
            }
        })
    });
}
function initializeApollo(initialState) {
    const _apolloClient = apolloClient ?? createApolloClient();
    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // get hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();
        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        const data = deepmerge__WEBPACK_IMPORTED_MODULE_6___default()(initialState, existingCache, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray, sourceArray)=>[
                    ...sourceArray,
                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!lodash_isEqual__WEBPACK_IMPORTED_MODULE_7___default()(d, s)
                        )
                    ), 
                ]
        });
        // Restore the cache with the merged data
        _apolloClient.cache.restore(data);
    }
    // For SSG and SSR always create a new Apollo Client
    if (true) return _apolloClient;
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}
function addApolloState(client, pageProps) {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
    }
    return pageProps;
}
function useApollo(pageProps) {
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo(state)
    , [
        state
    ]);
}

});

/***/ })

};
;
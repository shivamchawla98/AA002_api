"use strict";
exports.id = 4701;
exports.ids = [4701];
exports.modules = {

/***/ 4701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y4": () => (/* binding */ ManufacturersDocument),
/* harmony export */   "ML": () => (/* binding */ useManufacturersQuery),
/* harmony export */   "oc": () => (/* binding */ useTopManufacturersQuery),
/* harmony export */   "xb": () => (/* binding */ ManufacturerDocument)
/* harmony export */ });
/* unused harmony exports ManufacturerPartsFragmentDoc, PaginatorPartsFragmentDoc, useManufacturersLazyQuery, TopManufacturersDocument, useTopManufacturersLazyQuery, useManufacturerQuery, useManufacturerLazyQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const ManufacturerPartsFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment ManufacturerParts on Manufacturer {
  id
  name
  is_approved
  slug
  description
  website
  socials {
    url
    icon
  }
  image {
    id
    original
    thumbnail
  }
  type {
    id
    name
    slug
  }
  cover_image {
    id
    original
    thumbnail
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
const ManufacturersDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Manufacturers($hasType: QueryManufacturersHasTypeWhereHasConditions, $text: String, $is_approved: Boolean, $orderBy: [QueryManufacturersOrderByOrderByClause!], $first: Int = 15, $page: Int) {
  manufacturers(
    text: $text
    orderBy: $orderBy
    hasType: $hasType
    is_approved: $is_approved
    first: $first
    page: $page
  ) {
    data {
      ...ManufacturerParts
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${ManufacturerPartsFragmentDoc}
${PaginatorPartsFragmentDoc}`;
/**
 * __useManufacturersQuery__
 *
 * To run a query within a React component, call `useManufacturersQuery` and pass it any options that fit your needs.
 * When your component renders, `useManufacturersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useManufacturersQuery({
 *   variables: {
 *      hasType: // value for 'hasType'
 *      text: // value for 'text'
 *      is_approved: // value for 'is_approved'
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */ function useManufacturersQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(ManufacturersDocument, options);
}
function useManufacturersLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(ManufacturersDocument, options);
}
const TopManufacturersDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query TopManufacturers($limit: Int = 15) {
  topManufacturers(limit: $limit) {
    ...ManufacturerParts
  }
}
    ${ManufacturerPartsFragmentDoc}`;
/**
 * __useTopManufacturersQuery__
 *
 * To run a query within a React component, call `useTopManufacturersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopManufacturersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopManufacturersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */ function useTopManufacturersQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(TopManufacturersDocument, options);
}
function useTopManufacturersLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(TopManufacturersDocument, options);
}
const ManufacturerDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Manufacturer($slug: String) {
  manufacturer(slug: $slug) {
    ...ManufacturerParts
  }
}
    ${ManufacturerPartsFragmentDoc}`;
/**
 * __useManufacturerQuery__
 *
 * To run a query within a React component, call `useManufacturerQuery` and pass it any options that fit your needs.
 * When your component renders, `useManufacturerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useManufacturerQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */ function useManufacturerQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(ManufacturerDocument, options);
}
function useManufacturerLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(ManufacturerDocument, options);
}


/***/ })

};
;
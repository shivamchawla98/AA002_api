"use strict";
exports.id = 8095;
exports.ids = [8095];
exports.modules = {

/***/ 8095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gg": () => (/* binding */ AuthorsDocument),
/* harmony export */   "MT": () => (/* binding */ useAuthorsQuery),
/* harmony export */   "In": () => (/* binding */ useTopAuthorsQuery),
/* harmony export */   "Mf": () => (/* binding */ AuthorDocument)
/* harmony export */ });
/* unused harmony exports AuthorPartsFragmentDoc, PaginatorPartsFragmentDoc, useAuthorsLazyQuery, TopAuthorsDocument, useTopAuthorsLazyQuery, useAuthorQuery, useAuthorLazyQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const AuthorPartsFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment AuthorParts on Author {
  id
  name
  is_approved
  slug
  bio
  quote
  born
  death
  languages
  socials {
    url
    icon
  }
  image {
    id
    original
    thumbnail
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
const AuthorsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Authors($text: String, $is_approved: Boolean, $orderBy: [QueryAuthorsOrderByOrderByClause!], $first: Int = 15, $page: Int) {
  authors(
    text: $text
    orderBy: $orderBy
    is_approved: $is_approved
    first: $first
    page: $page
  ) {
    data {
      ...AuthorParts
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${AuthorPartsFragmentDoc}
${PaginatorPartsFragmentDoc}`;
/**
 * __useAuthorsQuery__
 *
 * To run a query within a React component, call `useAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorsQuery({
 *   variables: {
 *      text: // value for 'text'
 *      is_approved: // value for 'is_approved'
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */ function useAuthorsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(AuthorsDocument, options);
}
function useAuthorsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(AuthorsDocument, options);
}
const TopAuthorsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query TopAuthors($limit: Int = 15) {
  topAuthors(limit: $limit) {
    ...AuthorParts
  }
}
    ${AuthorPartsFragmentDoc}`;
/**
 * __useTopAuthorsQuery__
 *
 * To run a query within a React component, call `useTopAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopAuthorsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */ function useTopAuthorsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(TopAuthorsDocument, options);
}
function useTopAuthorsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(TopAuthorsDocument, options);
}
const AuthorDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Author($slug: String) {
  author(slug: $slug) {
    ...AuthorParts
  }
}
    ${AuthorPartsFragmentDoc}`;
/**
 * __useAuthorQuery__
 *
 * To run a query within a React component, call `useAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */ function useAuthorQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(AuthorDocument, options);
}
function useAuthorLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(AuthorDocument, options);
}


/***/ })

};
;
"use strict";
exports.id = 7698;
exports.ids = [7698];
exports.modules = {

/***/ 7698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pt": () => (/* binding */ GroupsDocument),
/* harmony export */   "RW": () => (/* binding */ useGroupsQuery),
/* harmony export */   "fH": () => (/* binding */ GroupDocument),
/* harmony export */   "xR": () => (/* binding */ useGroupQuery)
/* harmony export */ });
/* unused harmony exports useGroupsLazyQuery, useGroupLazyQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const GroupsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Groups($text: String, $orderBy: [QueryTypesOrderByOrderByClause!]) {
  types(text: $text, orderBy: $orderBy) {
    id
    name
    slug
    icon
    banners {
      id
      title
      image {
        id
        original
        thumbnail
      }
    }
    settings {
      isHome
      layoutType
      productCard
    }
  }
}
    `;
/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *      text: // value for 'text'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */ function useGroupsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GroupsDocument, options);
}
function useGroupsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GroupsDocument, options);
}
const GroupDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Group($id: ID, $slug: String) {
  type(id: $id, slug: $slug) {
    id
    slug
    banners {
      id
      title
      description
      image {
        id
        original
        thumbnail
      }
    }
    promotional_sliders {
      id
      thumbnail
      original
    }
  }
}
    `;
/**
 * __useGroupQuery__
 *
 * To run a query within a React component, call `useGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */ function useGroupQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GroupDocument, options);
}
function useGroupLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GroupDocument, options);
}


/***/ })

};
;
"use strict";
exports.id = 2709;
exports.ids = [2709];
exports.modules = {

/***/ 2709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sz": () => (/* binding */ ProductsDocument),
/* harmony export */   "kN": () => (/* binding */ useProductsQuery),
/* harmony export */   "MP": () => (/* binding */ ProductDocument),
/* harmony export */   "RU": () => (/* binding */ PopularProductsDocument),
/* harmony export */   "T8": () => (/* binding */ usePopularProductsQuery),
/* harmony export */   "m4": () => (/* binding */ useDownloadableProductsQuery),
/* harmony export */   "YY": () => (/* binding */ useGenerateDownloadableUrlMutation)
/* harmony export */ });
/* unused harmony exports ProductPartsFragmentDoc, PaginatorPartsFragmentDoc, AuthorPartsFragmentDoc, useProductsLazyQuery, useProductQuery, useProductLazyQuery, usePopularProductsLazyQuery, DownloadableProductsDocument, useDownloadableProductsLazyQuery, GenerateDownloadableUrlDocument */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const ProductPartsFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    fragment ProductParts on Product {
  id
  name
  slug
  type {
    id
    name
    slug
    settings {
      productCard
    }
  }
  product_type
  price
  sale_price
  min_price
  max_price
  quantity
  unit
  sku
  is_digital
  is_external
  image {
    id
    thumbnail
    original
  }
  tags {
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
const ProductsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Products($orderBy: [QueryProductsOrderByOrderByClause!], $text: String, $status: String, $hasType: QueryProductsHasTypeWhereHasConditions, $hasCategories: QueryProductsHasCategoriesWhereHasConditions, $hasAuthor: QueryProductsHasAuthorWhereHasConditions, $hasManufacturer: QueryProductsHasManufacturerWhereHasConditions, $hasTags: QueryProductsHasTagsWhereHasConditions, $first: Int, $page: Int, $shop_id: ID, $price: PriceRange, $max_price: PriceRange, $min_price: PriceRange) {
  products(
    orderBy: $orderBy
    text: $text
    status: $status
    hasType: $hasType
    hasCategories: $hasCategories
    hasAuthor: $hasAuthor
    hasManufacturer: $hasManufacturer
    hasTags: $hasTags
    first: $first
    page: $page
    shop_id: $shop_id
    price: $price
    max_price: $max_price
    min_price: $min_price
  ) {
    data {
      ...ProductParts
      author {
        name
        slug
        id
      }
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${ProductPartsFragmentDoc}
${PaginatorPartsFragmentDoc}`;
/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      text: // value for 'text'
 *      status: // value for 'status'
 *      hasType: // value for 'hasType'
 *      hasCategories: // value for 'hasCategories'
 *      hasAuthor: // value for 'hasAuthor'
 *      hasManufacturer: // value for 'hasManufacturer'
 *      hasTags: // value for 'hasTags'
 *      first: // value for 'first'
 *      page: // value for 'page'
 *      shop_id: // value for 'shop_id'
 *      price: // value for 'price'
 *      max_price: // value for 'max_price'
 *      min_price: // value for 'min_price'
 *   },
 * });
 */ function useProductsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(ProductsDocument, options);
}
function useProductsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(ProductsDocument, options);
}
const ProductDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query Product($id: ID, $slug: String) {
  product(id: $id, slug: $slug) {
    ...ProductParts
    author {
      ...AuthorParts
    }
    manufacturer {
      id
      name
      slug
    }
    shop_id
    shop {
      name
      slug
    }
    description
    categories {
      id
      name
      slug
      children {
        id
        name
        slug
      }
    }
    gallery {
      id
      thumbnail
      original
    }
    variations {
      id
      value
      meta
      attribute {
        id
        name
        slug
      }
    }
    variation_options {
      id
      title
      price
      sale_price
      quantity
      is_disable
      image {
        id
        thumbnail
        original
      }
      options {
        name
        value
      }
    }
    author {
      id
      name
      slug
    }
    related_products(limit: 8) {
      ...ProductParts
    }
  }
}
    ${ProductPartsFragmentDoc}
${AuthorPartsFragmentDoc}`;
/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */ function useProductQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(ProductDocument, options);
}
function useProductLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(ProductDocument, options);
}
const PopularProductsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query PopularProducts($limit: Int, $type_slug: String, $range: Int) {
  popularProducts(limit: $limit, type_slug: $type_slug, range: $range) {
    ...ProductParts
    author {
      name
      slug
      id
    }
  }
}
    ${ProductPartsFragmentDoc}`;
/**
 * __usePopularProductsQuery__
 *
 * To run a query within a React component, call `usePopularProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularProductsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      type_slug: // value for 'type_slug'
 *      range: // value for 'range'
 *   },
 * });
 */ function usePopularProductsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(PopularProductsDocument, options);
}
function usePopularProductsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(PopularProductsDocument, options);
}
const DownloadableProductsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query DownloadableProducts($first: Int = 15, $page: Int) {
  downloads(first: $first, page: $page) {
    data {
      file {
        fileable {
          __typename
          ... on Product {
            name
            slug
            image {
              id
              thumbnail
              original
            }
            shop {
              name
              slug
            }
          }
          ... on Variation {
            title
            product {
              name
              image {
                id
                thumbnail
                original
              }
            }
            image {
              id
            }
          }
        }
      }
      id
      purchase_key
      digital_file_id
      created_at
    }
    paginatorInfo {
      ...PaginatorParts
    }
  }
}
    ${PaginatorPartsFragmentDoc}`;
/**
 * __useDownloadableProductsQuery__
 *
 * To run a query within a React component, call `useDownloadableProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDownloadableProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDownloadableProductsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      page: // value for 'page'
 *   },
 * });
 */ function useDownloadableProductsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(DownloadableProductsDocument, options);
}
function useDownloadableProductsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(DownloadableProductsDocument, options);
}
const GenerateDownloadableUrlDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation GenerateDownloadableUrl($input: GenerateDownloadableUrlInput!) {
  generateDownloadableUrl(input: $input)
}
    `;
/**
 * __useGenerateDownloadableUrlMutation__
 *
 * To run a mutation, you first call `useGenerateDownloadableUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateDownloadableUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateDownloadableUrlMutation, { data, loading, error }] = useGenerateDownloadableUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useGenerateDownloadableUrlMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(GenerateDownloadableUrlDocument, options);
}


/***/ })

};
;
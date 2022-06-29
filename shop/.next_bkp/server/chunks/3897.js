"use strict";
exports.id = 3897;
exports.ids = [3897];
exports.modules = {

/***/ 1161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ filter_category_grid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/ui/not-found.tsx
var not_found = __webpack_require__(3372);
// EXTERNAL MODULE: ./src/components/ui/loaders/categories-loader.tsx
var categories_loader = __webpack_require__(6332);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(495);
// EXTERNAL MODULE: ./src/lib/placeholders.tsx + 4 modules
var placeholders = __webpack_require__(2478);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/ui/category-card.tsx




const CategoryCard = ({ item , onClick  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative w-full h-80 rounded-lg p-8 bg-light shadow-downfall-sm transition-shadow hover:shadow-downfall-lg group",
        onClick: onClick,
        role: "button",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col flex-1 h-full relative z-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-heading font-semibold text-lg mb-1",
                        children: item.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "mt-auto flex text-accent font-semibold text-sm underline opacity-100 lg:opacity-0 transition-opacity group-hover:opacity-100",
                        children: t('text-view-more')
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute bottom-0 ltr:right-0 rtl:left-0 w-full h-full rounded-lg overflow-hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                    className: "w-full h-full",
                    src: item?.image?.original ?? placeholders/* productPlaceholder */.Hb,
                    alt: item?.name ?? '',
                    layout: "responsive",
                    width: 432,
                    height: 336
                })
            })
        ]
    }));
};
/* harmony default export */ const category_card = (CategoryCard);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/assets/arrow-forward.png
/* harmony default export */ const arrow_forward = ({"src":"/_next/static/media/arrow-forward.fd3c3816.png","height":32,"width":18,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAMFBMVEXt7e3w8PDy8vLV1dXh4eHm5ubr6+va2trn5+fk5OTc3Nzv7+/39/fs7Ozu7u7z8/PFGBEBAAAADnRSTlMBYSEMjMKXQeux9NfDVesNwZgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVAiZBcEJAoAgCACwgXZoBf//bZvYF8ZzD2QviJr4+iTrxdHJrOAHEeIAwHFHXGkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/ui/breadcrumb-button.tsx




const BreadcrumbButton = ({ text , image , onClick ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        className: external_classnames_default()('relative h-14 rounded-lg bg-light px-7 text-base font-semibold text-heading shadow-downfall-xs transition-shadow hover:shadow-downfall-sm', {
            'ltr:pr-[5.5rem] rtl:pl-[5.5rem]': image
        }),
        onClick: onClick,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "whitespace-nowrap",
                children: text
            }),
            image && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute bottom-0 h-full overflow-hidden rounded-lg w-14 ltr:right-0 ltr:rounded-l-none rtl:left-0 rtl:rounded-r-none",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                    className: "w-full h-full",
                    src: image ?? placeholders/* productPlaceholder */.Hb,
                    alt: text ?? '',
                    layout: "responsive",
                    width: 60,
                    height: 60
                })
            })
        ]
    })
;
/* harmony default export */ const breadcrumb_button = (BreadcrumbButton);

;// CONCATENATED MODULE: ./src/components/ui/category-breadcrumb-card.tsx






const BreadcrumbWithIndicator = ({ text , image , onClick ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "relative w-[18px] h-[32px] flex-shrink-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* Image */.E, {
                    className: "w-full h-full",
                    src: arrow_forward,
                    alt: ">",
                    layout: "responsive",
                    width: 18,
                    height: 32
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb_button, {
                text: text,
                image: image,
                onClick: onClick
            })
        ]
    })
;
const CategoryBreadcrumb = ({ categories ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    const router = (0,router_.useRouter)();
    const { pathname , query  } = router;
    const resetCategoryClick = ()=>{
        const { category , ...rest } = query;
        router.push({
            pathname,
            query: {
                ...rest
            }
        }, undefined, {
            scroll: false
        });
    };
    const onCategoryClick = (slug)=>{
        const { category , ...rest } = query;
        router.push({
            pathname,
            query: {
                ...rest,
                category: slug
            }
        }, undefined, {
            scroll: false
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-x-5 rtl:space-x-reverse",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(breadcrumb_button, {
                text: t('text-all-categories'),
                onClick: resetCategoryClick
            }),
            categories?.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(BreadcrumbWithIndicator, {
                    text: category?.name,
                    image: category?.image?.original,
                    onClick: ()=>onCategoryClick(category?.slug)
                }, category?.slug)
            )
        ]
    }));
};
/* harmony default export */ const category_breadcrumb_card = (CategoryBreadcrumb);

// EXTERNAL MODULE: ./src/components/ui/scrollbar.tsx
var scrollbar = __webpack_require__(7046);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(9699);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
;// CONCATENATED MODULE: ./src/lib/find-nested-data.tsx
const findNestedData = (array, query, nestingKey)=>array?.reduce((prev, curr)=>{
        if (prev) return prev;
        if (curr.slug === query) return curr;
        if (curr[nestingKey]) return findNestedData(curr[nestingKey], query, nestingKey);
    }, null)
;
/* harmony default export */ const find_nested_data = (findNestedData);

// EXTERNAL MODULE: ./src/components/products/grids/home.tsx
var home = __webpack_require__(1350);
;// CONCATENATED MODULE: ./src/components/categories/filter-category-grid.tsx












function findParentCategories(treeItems, parentId = null, link = 'id') {
    let itemList = [];
    if (parentId) {
        const parentItem = treeItems?.find((item)=>item[link] === parentId
        );
        itemList = parentItem?.parent_id ? [
            ...findParentCategories(treeItems, parentItem.parent_id),
            parentItem,
            ...itemList, 
        ] : [
            parentItem,
            ...itemList
        ];
    }
    return itemList;
}
const FilterCategoryGrid = ({ notFound , categories , loading , variables ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    const router = (0,router_.useRouter)();
    const { pathname , query  } = router;
    const selectedCategory = Boolean(query.category) && find_nested_data(categories, query.category, 'children');
    const parentCategories = findParentCategories(categories, selectedCategory?.parent_id);
    const renderCategories = Boolean(selectedCategory) ? selectedCategory?.children : categories?.filter((category)=>!category?.parent_id
    );
    const onCategoryClick = (slug)=>{
        router.push({
            pathname,
            query: {
                ...query,
                category: slug
            }
        }, undefined, {
            scroll: false
        });
    };
    if (loading) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "hidden xl:block",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-8 w-72 px-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(categories_loader/* default */.Z, {})
            })
        }));
    }
    if (notFound) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-light",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "min-h-full p-5 md:p-8 lg:p-12 2xl:p-16",
                children: /*#__PURE__*/ jsx_runtime_.jsx(not_found/* default */.Z, {
                    text: "text-no-category",
                    className: "h-96"
                })
            })
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-light",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "px-3 pt-3 md:px-6 md:pt-6 lg:px-10 lg:pt-10 2xl:px-14 2xl:pt-14",
                children: query?.category ? /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                    className: "w-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: external_classnames_default()('px-2 pt-2 pb-7', {
                            'mb-8 divide-dashed border-b border-dashed border-gray-200': query?.category
                        }),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(category_breadcrumb_card, {
                            categories: [
                                ...parentCategories,
                                selectedCategory
                            ]
                        })
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "mb-8 px-2 pt-2 text-2xl font-semibold text-heading",
                    children: t('text-all-categories')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-5 !pt-0 md:p-8 lg:p-12 2xl:p-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6",
                        children: Array.isArray(renderCategories) && renderCategories?.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `${item?.slug}/search/?category=${item.slug}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(category_card, {
                                    item: item
                                }, idx)
                            })
                        )
                    }),
                    isEmpty_default()(renderCategories) && /*#__PURE__*/ jsx_runtime_.jsx(home/* default */.Z, {
                        gridClassName: "!grid-cols-[repeat(auto-fill,minmax(290px,1fr))]",
                        variables: variables
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const filter_category_grid = (FilterCategoryGrid);


/***/ }),

/***/ 4383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a9": () => (/* binding */ PRODUCTS_PER_PAGE),
/* harmony export */   "Fi": () => (/* binding */ TYPES_PER_PAGE),
/* harmony export */   "kL": () => (/* binding */ CATEGORIES_PER_PAGE),
/* harmony export */   "LX": () => (/* binding */ AUTHORS_PER_PAGE),
/* harmony export */   "Vc": () => (/* binding */ MANUFACTURERS_PER_PAGE)
/* harmony export */ });
/* unused harmony export SHOPS_PER_PAGE */
const PRODUCTS_PER_PAGE = 30;
const TYPES_PER_PAGE = 15;
const CATEGORIES_PER_PAGE = 1000;
const SHOPS_PER_PAGE = 30;
const AUTHORS_PER_PAGE = 30;
const MANUFACTURERS_PER_PAGE = 30;


/***/ })

};
;
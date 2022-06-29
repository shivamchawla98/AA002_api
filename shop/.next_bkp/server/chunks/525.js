"use strict";
exports.id = 525;
exports.ids = [525];
exports.modules = {

/***/ 525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sticky_sidebar_boxed_categories)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/ui/scrollbar.tsx
var scrollbar = __webpack_require__(7046);
// EXTERNAL MODULE: ./src/components/ui/not-found.tsx
var not_found = __webpack_require__(3372);
// EXTERNAL MODULE: ./src/components/ui/loaders/categories-loader.tsx
var categories_loader = __webpack_require__(6332);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/lib/get-icon.tsx
var get_icon = __webpack_require__(1379);
// EXTERNAL MODULE: ./src/components/icons/category/index.tsx + 41 modules
var category = __webpack_require__(5450);
;// CONCATENATED MODULE: ./src/components/ui/outlined-boxed-category.tsx





const CategoryItem = ({ item  })=>{
    const router = (0,router_.useRouter)();
    const { pathname , query  } = router;
    const selectedQueries = query.category;
    const onCategoryClick = (slug)=>{
        if (selectedQueries === slug) {
            const { category , ...rest } = query;
            router.push({
                pathname,
                query: {
                    ...rest
                }
            }, undefined, {
                scroll: false
            });
            return;
        }
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
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()('text-center rounded bg-light py-4 flex flex-col items-center justify-start relative overflow-hidden cursor-pointer border-2', selectedQueries === item?.slug ? 'border-gray-800' : 'border-border-100 xl:border-transparent'),
        role: "button",
        onClick: ()=>onCategoryClick(item?.slug)
        ,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-20 flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "w-10 h-10 inline-block",
                    children: (0,get_icon/* getIcon */.q)({
                        iconList: category,
                        iconName: item?.icon,
                        className: 'w-10 h-10'
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-sm font-semibold text-heading text-center px-2.5 block",
                children: item?.name
            })
        ]
    }));
};
function OutlinedBoxedCategoryMenu({ items  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: items?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(CategoryItem, {
                item: item
            }, `${item.name}${item.slug}`)
        )
    }));
}
/* harmony default export */ const outlined_boxed_category = (OutlinedBoxedCategoryMenu);

;// CONCATENATED MODULE: ./src/components/categories/sticky-sidebar-boxed-categories.tsx





const StickySidebarBoxedCategories = ({ notFound , categories , loading , className  })=>{
    if (loading) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "hidden xl:block",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-72 mt-8 px-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(categories_loader/* default */.Z, {})
            })
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("aside", {
        className: `lg:sticky lg:top-22 h-full w-full lg:w-[380px] hidden xl:block bg-light lg:bg-gray-100 ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
            style: {
                maxHeight: 'calc(100vh - 88px)'
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-5",
                children: !notFound ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(outlined_boxed_category, {
                        items: categories,
                        className: "py-8"
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "min-h-full pt-6 pb-8 px-4 lg:p-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(not_found/* default */.Z, {
                        text: "text-no-category",
                        className: "h-96"
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const sticky_sidebar_boxed_categories = (StickySidebarBoxedCategories);


/***/ })

};
;
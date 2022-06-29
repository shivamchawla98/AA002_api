"use strict";
exports.id = 8579;
exports.ids = [8579];
exports.modules = {

/***/ 5766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ChevronLeft = ({ width , height , strokeWidth =2 , className ,  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: width,
        height: height,
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: strokeWidth,
            d: "M15 19l-7-7 7-7"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronLeft);


/***/ }),

/***/ 7215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ChevronRight = ({ width , height , strokeWidth =2 , className ,  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: width,
        height: height,
        className: className,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: strokeWidth,
            d: "M9 5l7 7-7 7"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronRight);


/***/ }),

/***/ 6615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ variation_groups)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/ui/boxed-attribute.tsx


const BoxedAttribute = ({ title , value , active , className , color , ...props })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()('h-full py-2 px-5 flex flex-col rounded items-center justify-center border border-gray-200 bg-gray-50 cursor-pointer text-body font-semibold', {
            '!border-accent !border-2 !text-accent': active
        }),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: value
            })
        ]
    }));
};
/* harmony default export */ const boxed_attribute = (BoxedAttribute);

;// CONCATENATED MODULE: ./src/components/ui/attribute.tsx



function Attribute({ type , isActive , value , color , attribute , variant ='normal' , onClick  }) {
    switch(type){
        case 'formats':
            return(/*#__PURE__*/ jsx_runtime_.jsx(boxed_attribute, {
                title: "Hardcover",
                value: "$9.59",
                active: isActive
            }));
        case 'color':
            return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                role: "button",
                onClick: onClick,
                className: external_classnames_default()('h-11 w-11 p-0.5 flex items-center justify-center border-2 rounded-full border-transparent cursor-pointer', {
                    '!border-accent': isActive
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "w-full h-full rounded-full border border-border-200",
                    style: {
                        backgroundColor: color
                    }
                })
            }));
        default:
            return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                role: "button",
                onClick: onClick,
                className: external_classnames_default()('px-4 py-3 text-sm rounded text-heading bg-gray-50 border-border-200 cursor-pointer transition-colors', {
                    '!text-light !bg-accent !border-accent': isActive && variant === 'normal',
                    '!border-accent !text-accent': isActive && variant === 'outline',
                    'border-2 font-semibold': variant === 'outline',
                    border: variant === 'normal'
                }),
                children: value
            }));
    }
}
// const Attribute: React.FC<AttributeProps> = ({
//   value,
//   active,
//   className,
//   color,
//   ...props
// }) => {
//   const classes = cn(
//     {
//       'px-4 py-3 text-sm border rounded text-heading bg-gray-50 border-border-200':
//         className !== 'color',
//       '!text-light !bg-accent !border-accent': active && className !== 'color',
//       'h-11 w-11 p-0.5 flex items-center justify-center border-2 rounded-full border-transparent':
//         className === 'color',
//       '!border-accent': active && className === 'color',
//     },
//     'cursor-pointer'
//   );
//   return (
//     <div className={classes} {...props}>
//       {className === 'color' ? (
//         <span
//           className="w-full h-full rounded-full border border-border-200"
//           style={{ backgroundColor: color }}
//         />
//       ) : (
//         value
//       )}
//     </div>
//   );
// };
/* harmony default export */ const ui_attribute = (Attribute);

// EXTERNAL MODULE: ./src/components/products/details/attributes.context.tsx
var attributes_context = __webpack_require__(3125);
// EXTERNAL MODULE: ./src/components/ui/scrollbar.tsx
var scrollbar = __webpack_require__(7046);
;// CONCATENATED MODULE: ./src/components/products/details/variation-groups.tsx




const VariationGroups = ({ variations , variant  })=>{
    const { attributes , setAttributes  } = (0,attributes_context/* useAttributes */.Ch)();
    const replaceHyphens = (str)=>{
        return str.replace(/-/g, ' ');
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: Object.keys(variations).map((variationName, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-4 border-b border-border-200 border-opacity-70 first:pt-0 flex items-center last:pb-0 last:border-b-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "text-sm font-semibold text-heading leading-none capitalize ltr:mr-5 rtl:ml-5 min-w-[60px] inline-block whitespace-nowrap",
                        children: [
                            replaceHyphens(variationName),
                            " :"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                        className: "w-full pb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full flex space-x-4 rtl:space-x-reverse -mb-1.5",
                            children: variations[variationName].map((attribute)=>/*#__PURE__*/ jsx_runtime_.jsx(ui_attribute, {
                                    // className={variationName}
                                    type: variationName,
                                    color: attribute.meta ? attribute.meta : attribute?.value,
                                    isActive: attributes[variationName] === attribute.value,
                                    value: attribute.value,
                                    variant: variant,
                                    onClick: ()=>setAttributes((prev)=>({
                                                ...prev,
                                                [variationName]: attribute.value
                                            })
                                        )
                                }, attribute.id)
                            )
                        })
                    })
                ]
            }, index)
        )
    }));
};
/* harmony default export */ const variation_groups = (VariationGroups);


/***/ }),

/***/ 2446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VariationPrice)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3669);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_use_price__WEBPACK_IMPORTED_MODULE_1__]);
_lib_use_price__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



function VariationPrice({ selectedVariation , minPrice , maxPrice  }) {
    const { price , basePrice  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(selectedVariation && {
        amount: Number(selectedVariation.sale_price ? selectedVariation.sale_price : selectedVariation.price),
        baseAmount: Number(selectedVariation.price)
    });
    const { price: min_price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
        amount: Number(minPrice)
    });
    const { price: max_price  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)({
        amount: Number(maxPrice)
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                className: "text-2xl md:text-3xl font-semibold text-accent no-underline",
                children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(selectedVariation) ? `${price}` : `${min_price} - ${max_price}`
            }),
            basePrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("del", {
                className: "text-sm md:text-base font-normal text-muted ltr:ml-2 rtl:mr-2",
                children: basePrice
            })
        ]
    }));
};

});

/***/ }),

/***/ 7046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(153);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__);




const Scrollbar = ({ options , className , style , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__.OverlayScrollbarsComponent, {
        options: {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('os-theme-thin-dark', className),
            scrollbars: {
                autoHide: 'scroll'
            },
            ...options ? options : {}
        },
        style: style,
        ...props
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);


/***/ }),

/***/ 7927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W_": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation),
/* harmony export */   "o3": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs),
/* harmony export */   "tl": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination),
/* harmony export */   "pt": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay),
/* harmony export */   "tq": () => (/* reexport safe */ swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper),
/* harmony export */   "o5": () => (/* reexport safe */ swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_0__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







});

/***/ }),

/***/ 5382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ThumbsCarousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5766);
/* harmony import */ var _components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7215);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7927);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(495);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2478);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6078);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_3__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];









// product gallery breakpoints
const galleryCarouselBreakpoints = {
    320: {
        slidesPerView: 2
    },
    480: {
        slidesPerView: 3
    },
    640: {
        slidesPerView: 3
    },
    800: {
        slidesPerView: 4
    }
};
const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 0
};
const ThumbsCarousel = ({ gallery , hideThumbs =false , aspectRatio ='square' ,  })=>{
    const { 0: thumbsSwiper , 1: setThumbsSwiper  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { isRTL  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_7__/* .useIsRTL */ .S)();
    const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const nextRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_3__/* .Swiper */ .tq, {
                        id: "productGallery",
                        modules: [
                            _components_ui_slider__WEBPACK_IMPORTED_MODULE_3__/* .Navigation */ .W_,
                            _components_ui_slider__WEBPACK_IMPORTED_MODULE_3__/* .Thumbs */ .o3
                        ],
                        thumbs: {
                            swiper: thumbsSwiper
                        },
                        navigation: {
                            prevEl: prevRef.current,
                            nextEl: nextRef.current
                        },
                        ...swiperParams,
                        children: gallery?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_3__/* .SwiperSlide */ .o5, {
                                className: "selection:bg-transparent flex justify-center items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .E, {
                                    src: item?.original ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__/* .productPlaceholder */ .Hb,
                                    alt: `Product gallery ${item.id}`,
                                    width: aspectRatio === 'square' ? 450 : 420,
                                    height: aspectRatio === 'square' ? 450 : 560,
                                    // layout="responsive"
                                    className: "ltr:ml-auto rtl:mr-auto"
                                })
                            }, `product-gallery-${item.id}`)
                        )
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: prevRef,
                        className: "product-gallery-prev cursor-pointer absolute top-2/4 ltr:-left-4 rtl:-right-4 ltr:md:-left-5 rtl:md:-right-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-gray-100",
                        children: isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "w-4 h-4"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            className: "w-4 h-4"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: nextRef,
                        className: "product-gallery-next cursor-pointer absolute top-2/4 ltr:-right-4 rtl:-left-4 ltr:md:-right-5 rtl:md:-left-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-gray-100",
                        children: isRTL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            className: "w-4 h-4"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            className: "w-4 h-4"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('max-w-md mt-5 lg:mt-8 mx-auto relative lg:pb-2', {
                    hidden: hideThumbs
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_3__/* .Swiper */ .tq, {
                    id: "productGalleryThumbs",
                    onSwiper: setThumbsSwiper,
                    spaceBetween: 20,
                    watchSlidesProgress: true,
                    freeMode: true,
                    observer: true,
                    observeParents: true,
                    breakpoints: galleryCarouselBreakpoints,
                    children: gallery?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_3__/* .SwiperSlide */ .o5, {
                            className: "flex items-center justify-center cursor-pointer rounded overflow-hidden border border-border-200 border-opacity-75 hover:opacity-75",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_4__/* .Image */ .E, {
                                src: item?.thumbnail ?? _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__/* .productPlaceholder */ .Hb,
                                alt: `Product thumb gallery ${item.id}`,
                                width: 80,
                                height: 80
                            })
                        }, `product-thumb-gallery-${item.id}`)
                    )
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 6917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ displayImage)
/* harmony export */ });
function displayImage(selectedVariationImage, gallery, image) {
    if (selectedVariationImage) {
        return [
            selectedVariationImage
        ];
    }
    if (gallery?.length) {
        return gallery;
    }
    if (image) {
        return [
            image
        ];
    }
    return [];
}


/***/ }),

/***/ 9370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ getVariations)
/* harmony export */ });
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8492);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__);

function getVariations(variations) {
    if (!variations) return {};
    return lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default()(variations, 'attribute.slug');
}


/***/ }),

/***/ 4045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ isVariationSelected)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);

function isVariationSelected(variations, attributes) {
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(variations)) return true;
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(attributes)) {
        return Object.keys(variations).every((variation)=>attributes.hasOwnProperty(variation)
        );
    }
    return false;
}


/***/ }),

/***/ 1474:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ stickyShortDetailsAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const stickyShortDetailsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);

});

/***/ })

};
;
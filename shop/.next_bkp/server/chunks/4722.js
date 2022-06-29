"use strict";
exports.id = 4722;
exports.ids = [4722];
exports.modules = {

/***/ 4722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddressDeleteView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_cards_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4144);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_user__WEBPACK_IMPORTED_MODULE_3__]);
_framework_user__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function AddressDeleteView() {
    const { data: { addressId  } ,  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_2__/* .useModalState */ .X9)();
    const { closeModal  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_2__/* .useModalAction */ .SO)();
    const { mutate: deleteAddressById , isLoading  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_3__/* .useDeleteAddress */ .PC)();
    function handleDelete() {
        if (!addressId) {
            return;
        }
        deleteAddressById({
            id: addressId
        });
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_cards_confirmation__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        onCancel: closeModal,
        onDelete: handleDelete,
        deleteBtnLoading: isLoading
    }));
};

});

/***/ }),

/***/ 401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ confirmation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/icons/trash.tsx


const Trash = ({ width , height , className  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: width,
        height: height,
        className: className,
        fill: "currentColor",
        viewBox: "0 0 1792 1792",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"
        })
    }));
};
/* harmony default export */ const trash = (Trash);

// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(9258);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/ui/cards/confirmation.tsx





const Confirmation = ({ onCancel , onDelete , icon , title ='button-delete' , description ='delete-item-confirm' , cancelBtnText ='button-cancel' , deleteBtnText ='button-delete' , cancelBtnClassName , deleteBtnClassName , cancelBtnLoading , deleteBtnLoading ,  })=>{
    const { t  } = (0,external_next_i18next_.useTranslation)('common');
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "p-4 pb-6 bg-light m-auto max-w-sm w-full rounded-md md:rounded-xl sm:w-[24rem]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full h-full text-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex h-full flex-col justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "mt-4 m-auto text-accent",
                        children: icon ? icon : /*#__PURE__*/ jsx_runtime_.jsx(trash, {
                            className: "w-12 h-12"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-heading text-xl font-bold mt-4",
                        children: t(title)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-body-dark dark:text-muted leading-relaxed py-2 px-6",
                        children: t(description)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between space-x-4 rtl:space-x-reverse w-full mt-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    onClick: onCancel,
                                    loading: cancelBtnLoading,
                                    disabled: cancelBtnLoading,
                                    variant: "custom",
                                    className: external_classnames_default()('w-full py-2 px-4 bg-accent focus:outline-none hover:bg-accent-hover focus:bg-accent-hover text-light transition ease-in duration-200 text-center text-base font-semibold rounded shadow-md', cancelBtnClassName),
                                    children: t(cancelBtnText)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-1/2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                                    onClick: onDelete,
                                    loading: deleteBtnLoading,
                                    disabled: deleteBtnLoading,
                                    variant: "custom",
                                    className: external_classnames_default()('w-full py-2 px-4 bg-red-600 focus:outline-none hover:bg-red-700 focus:bg-red-700 text-light transition ease-in duration-200 text-center text-base font-semibold rounded shadow-md', deleteBtnClassName),
                                    children: t(deleteBtnText)
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const confirmation = (Confirmation);


/***/ })

};
;
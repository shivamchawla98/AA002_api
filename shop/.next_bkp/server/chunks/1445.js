"use strict";
exports.id = 1445;
exports.ids = [1445];
exports.modules = {

/***/ 9525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ UploadIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const UploadIcon = ({ color ='currentColor' , width ='41px' , height ='30px' , ...rest })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: width,
        height: height,
        viewBox: "0 0 40.909 30",
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            transform: "translate(0 -73.091)",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "data-name": "Path 2125",
                d: "M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z",
                transform: "translate(0)",
                fill: "#e6e6e6"
            })
        })
    }));
};


/***/ }),

/***/ 1445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3216);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
([_components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const FileInput = ({ control , name , multiple  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
        control: control,
        name: name,
        defaultValue: [],
        render: ({ field: { ref , ...rest }  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_forms_uploader__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                ...rest,
                multiple: multiple
            })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileInput);

});

/***/ }),

/***/ 3216:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Uploader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6358);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons_upload_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9525);
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3659);
/* harmony import */ var _framework_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_framework_settings__WEBPACK_IMPORTED_MODULE_6__]);
_framework_settings__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







function Uploader({ onChange , value , name , onBlur , multiple =false  }) {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
    const { mutate: upload , isLoading , files ,  } = (0,_framework_settings__WEBPACK_IMPORTED_MODULE_6__/* .useUploads */ .xh)({
        onChange,
        defaultFiles: value
    });
    const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((acceptedFiles)=>{
        upload(acceptedFiles);
    }, [
        upload
    ]);
    const { getRootProps , getInputProps  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_2__.useDropzone)({
        accept: 'image/*',
        multiple,
        onDrop
    });
    //FIXME: package update need to check
    // types: [
    //   {
    //     description: 'Images',
    //     accept: {
    //       'image/*': ['.png', '.gif', '.jpeg', '.jpg']
    //     }
    //   },
    // ],
    // excludeAcceptAllOption: true,
    // multiple: false
    const thumbs = files.map((file, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "relative mt-2 inline-flex flex-col overflow-hidden rounded border border-border-100 ltr:mr-2 rtl:ml-2",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex h-16 w-16 min-w-0 items-center justify-center overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: file.preview,
                    alt: file?.name
                })
            })
        }, idx)
    );
    //FIXME: maybe no need to use this
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>()=>{
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach((file)=>URL.revokeObjectURL(file.preview)
            );
        }
    , [
        files
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "upload",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ...getRootProps({
                    className: 'border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'
                }),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ...getInputProps({
                            name,
                            onBlur
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_upload_icon__WEBPACK_IMPORTED_MODULE_4__/* .UploadIcon */ .r, {
                        className: "text-muted-light"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mt-4 text-center text-sm text-body",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "font-semibold text-accent",
                                children: t('text-upload-highlight')
                            }),
                            ' ',
                            t('text-upload-message'),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xs text-body",
                                children: t('text-img-format')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                className: "mt-2 flex flex-wrap",
                children: [
                    !!thumbs.length && thumbs,
                    isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-2 flex h-16 items-center ltr:ml-2 rtl:mr-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            text: t('text-loading'),
                            simple: true,
                            className: "h-6 w-6"
                        })
                    })
                ]
            })
        ]
    }));
};

});

/***/ })

};
;
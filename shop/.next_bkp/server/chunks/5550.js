"use strict";
exports.id = 5550;
exports.ids = [5550];
exports.modules = {

/***/ 5550:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4144);
/* harmony import */ var _components_otp_otp_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3043);
/* harmony import */ var _framework_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_otp_otp_form__WEBPACK_IMPORTED_MODULE_3__, _framework_user__WEBPACK_IMPORTED_MODULE_4__]);
([_components_otp_otp_form__WEBPACK_IMPORTED_MODULE_3__, _framework_user__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const ProfileAddOrUpdateContact = ()=>{
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
    const { data: { customerId , contact , profileId  } ,  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_2__/* .useModalState */ .X9)();
    const { mutate: updateProfile  } = (0,_framework_user__WEBPACK_IMPORTED_MODULE_4__/* .useUpdateUser */ .Io)();
    function onContactUpdate({ phone_number  }) {
        if (!customerId) {
            return false;
        }
        updateProfile({
            id: customerId,
            profile: {
                id: profileId,
                contact: phone_number
            }
        });
    }
    console.log(customerId, contact, profileId, 'customerId, contactNumber, profileId');
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col justify-center min-h-screen p-5 bg-light sm:p-8 md:min-h-0 md:rounded-xl",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: "mb-5 text-sm font-semibold text-center text-heading sm:mb-6",
                children: [
                    contact ? t('text-update') : t('text-add-new'),
                    ' ',
                    t('text-contact-number')
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_otp_otp_form__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                phoneNumber: contact,
                onVerifySuccess: onContactUpdate
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileAddOrUpdateContact);

});

/***/ })

};
;
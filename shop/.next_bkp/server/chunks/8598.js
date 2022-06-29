"use strict";
exports.id = 8598;
exports.ids = [8598];
exports.modules = {

/***/ 8598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ siteSettings)
/* harmony export */ });
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3445);

const siteSettings = {
    name: 'PickBazar',
    description: '',
    logo: {
        url: '/logo.svg',
        alt: 'PickBazar',
        href: '/grocery',
        width: 128,
        height: 40
    },
    defaultLanguage: 'en',
    currencyCode: 'USD',
    product: {
        placeholderImage: '/product-placeholder.svg',
        cardMaps: {
            grocery: 'Krypton',
            furniture: 'Radon',
            bag: 'Oganesson',
            makeup: 'Neon',
            book: 'Xenon',
            medicine: 'Helium',
            default: 'Argon'
        }
    },
    authorizedLinks: [
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.PROFILE */ .Z.PROFILE,
            label: 'auth-menu-profile'
        },
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.ORDERS */ .Z.ORDERS,
            label: 'auth-menu-my-orders'
        },
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.CHECKOUT */ .Z.CHECKOUT,
            label: 'auth-menu-checkout'
        }, 
    ],
    authorizedLinksMobile: [
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.PROFILE */ .Z.PROFILE,
            label: 'auth-menu-profile'
        },
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.ORDERS */ .Z.ORDERS,
            label: 'auth-menu-my-orders'
        },
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.REFUNDS */ .Z.REFUNDS,
            label: 'text-my-refunds'
        },
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.CHECKOUT */ .Z.CHECKOUT,
            label: 'auth-menu-checkout'
        },
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.CHANGE_PASSWORD */ .Z.CHANGE_PASSWORD,
            label: 'profile-sidebar-password'
        },
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.LOGOUT */ .Z.LOGOUT,
            label: 'auth-menu-logout'
        }, 
    ],
    dashboardSidebarMenu: [
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.PROFILE */ .Z.PROFILE,
            label: 'profile-sidebar-profile'
        },
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.CHANGE_PASSWORD */ .Z.CHANGE_PASSWORD,
            label: 'profile-sidebar-password'
        },
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.ORDERS */ .Z.ORDERS,
            label: 'profile-sidebar-orders'
        },
        // {
        //   href: ROUTES.DOWNLOADS,
        //   label: 'profile-sidebar-downloads',
        // },
        // {
        //   href: ROUTES.REFUNDS,
        //   label: 'text-my-refunds',
        // },
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.HELP */ .Z.HELP,
            label: 'profile-sidebar-help'
        },
        {
            href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.LOGOUT */ .Z.LOGOUT,
            label: 'profile-sidebar-logout'
        }, 
    ],
    sellingAdvertisement: {
        image: {
            src: '/selling.png',
            alt: 'Selling Advertisement'
        }
    },
    cta: {
        mockup_img_src: '/mockup-img.png',
        play_store_link: '/',
        app_store_link: '/'
    },
    footer: {
        copyright: {
            name: 'PickurNeeds',
            href: 'https://pickurneeds.in/'
        },
        address: 'A-1, Near Sun Shine Banquet, Dhirpur Village New Delhi PinCode :-110009',
        email: 'info@pickurneeds.in',
        phone: '+91 7289922572',
        menus: [
            {
                title: 'text-explore',
                links: [
                    {
                        name: 'text-about-us',
                        href: '/'
                    },
                    {
                        name: 'text-sitemap',
                        href: '/'
                    },
                    {
                        name: 'text-bookmarks',
                        href: '/'
                    },
                    {
                        name: 'text-sign-join',
                        href: '/'
                    }, 
                ]
            },
            {
                title: 'text-customer-service',
                links: [
                    {
                        name: 'text-faq-help',
                        href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.HELP */ .Z.HELP
                    },
                    {
                        name: 'text-returns',
                        href: '/'
                    },
                    {
                        name: 'text-accessibility',
                        href: '/'
                    },
                    {
                        name: 'text-contact-us',
                        href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.CONTACT */ .Z.CONTACT
                    },
                    {
                        name: 'text-store-pickup',
                        href: '/'
                    }, 
                ]
            },
            {
                title: 'text-our-information',
                links: [
                    {
                        name: 'text-privacy-update',
                        href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.PRIVACY */ .Z.PRIVACY
                    },
                    {
                        name: 'text-terms-condition',
                        href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.TERMS */ .Z.TERMS
                    },
                    {
                        name: 'text-return-policy',
                        href: '/'
                    },
                    {
                        name: 'text-sitemap',
                        href: '/'
                    }, 
                ]
            }, 
        ],
        payment_methods: [
            {
                img: '/payment/master.png',
                url: '/'
            },
            {
                img: '/payment/skrill.png',
                url: '/'
            },
            {
                img: '/payment/paypal.png',
                url: '/'
            },
            {
                img: '/payment/visa.png',
                url: '/'
            },
            {
                img: '/payment/discover.png',
                url: '/'
            }, 
        ]
    }
};


/***/ })

};
;
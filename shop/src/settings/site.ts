import { ROUTES } from '@/lib/routes';
export const siteSettings = {
  name: 'PickBazar',
  description: '',
  logo: {
    url: '/logo.svg',
    alt: 'PickBazar',
    href: '/grocery',
    width: 128,
    height: 40,
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
      default: 'Argon',
    },
  },
  authorizedLinks: [
    { href: ROUTES.PROFILE, label: 'auth-menu-profile' },
    { href: ROUTES.ORDERS, label: 'auth-menu-my-orders' },
    { href: ROUTES.CHECKOUT, label: 'auth-menu-checkout' },
  ],
  authorizedLinksMobile: [
    { href: ROUTES.PROFILE, label: 'auth-menu-profile' },
    { href: ROUTES.ORDERS, label: 'auth-menu-my-orders' },
    { href: ROUTES.REFUNDS, label: 'text-my-refunds' },
    { href: ROUTES.CHECKOUT, label: 'auth-menu-checkout' },
    { href: ROUTES.CHANGE_PASSWORD, label: 'profile-sidebar-password' },
    { href: ROUTES.LOGOUT, label: 'auth-menu-logout' },
  ],
  dashboardSidebarMenu: [
    {
      href: ROUTES.PROFILE,
      label: 'profile-sidebar-profile',
    },
    {
      href: ROUTES.CHANGE_PASSWORD,
      label: 'profile-sidebar-password',
    },
    {
      href: ROUTES.ORDERS,
      label: 'profile-sidebar-orders',
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
      href: ROUTES.HELP,
      label: 'profile-sidebar-help',
    },
    {
      href: ROUTES.LOGOUT,
      label: 'profile-sidebar-logout',
    },
  ],
  sellingAdvertisement: {
    image: {
      src: '/selling.png',
      alt: 'Selling Advertisement',
    },
  },
  cta: {
    mockup_img_src: '/mockup-img.png',
    play_store_link: '/',
    app_store_link: '/',
  },
  footer: {
    copyright: {
      name: 'PickurNeeds',
      href: 'https://pickurneeds.in/',
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
            href: ROUTES.ABOUT,
          },
          // {
          //   name: 'text-sitemap',
          //   href: '/',
          // },
          // {
          //   name: 'text-bookmarks',
          //   href: '/',
          // },
          // {
          //   name: 'text-sign-join',
          //   href: '/',
          // },
        ],
      },
      {
        title: 'text-customer-service',
        links: [
          {
            name: 'text-faq-help',
            href: ROUTES.HELP,
          },
          // {
          //   name: 'text-returns',
          //   href: '/',
          // },
          // {
          //   name: 'text-accessibility',
          //   href: '/',
          // },
          {
            name: 'text-contact-us',
            href: ROUTES.CONTACT,
          },
          {
            name: 'text-store-pickup',
            href: '/',
          },
        ],
      },
      {
        title: 'text-our-information',
        links: [
          {
            name: 'text-privacy-update',
            href: ROUTES.PRIVACY,
          },
          {
            name: 'text-terms-condition',
            href: ROUTES.TERMS,
          },
          // {
          //   name: 'text-return-policy',
          //   href: '/',
          // },
          // {
          //   name: 'text-sitemap',
          //   href: '/',
          // },
        ],
      },
    ],
    payment_methods: [
      {
        img: '/payment/master.png',
        url: '/',
      },
      {
        img: '/payment/skrill.png',
        url: '/',
      },
      {
        img: '/payment/paypal.png',
        url: '/',
      },
      {
        img: '/payment/visa.png',
        url: '/',
      },
      {
        img: '/payment/discover.png',
        url: '/',
      },
    ],
  },
};

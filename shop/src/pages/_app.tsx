import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { SessionProvider } from 'next-auth/react';
import '@/assets/css/main.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from '@/components/ui/modal/modal.context';
import ManagedModal from '@/components/ui/modal/managed-modal';
import ManagedDrawer from '@/components/ui/drawer/managed-drawer';
import DefaultSeo from '@/components/seo/default-seo';
import { SearchProvider } from '@/components/ui/search/search.context';
import PrivateRoute from '@/lib/private-route';
import { CartProvider } from '@/store/quick-cart/cart.context';
import { WishlistProvider } from '@/store/quick-wishlist/wishlist.context';
import SocialLogin from '@/components/auth/social-login';
import { NextPageWithLayout } from '@/types';
import QueryProvider from '@/framework/client/query-provider';
import CartCounterButton from '@/components/cart/cart-counter-button';
import WishlistCounterButton from '@/components/wishlist/wishlist-counter-button';
import Footer from '@/components/layouts/footer';
import { BuyNowProvider } from '@/store/quick-buynow/buynow.context';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const authenticationRequired = Component.authenticationRequired ?? false;

  return (
    <SessionProvider session={session}>
      <QueryProvider pageProps={pageProps}>
        <SearchProvider>
          <ModalProvider>
            <CartProvider>
              <WishlistProvider>
                <BuyNowProvider >
                  <CartCounterButton />
                  <WishlistCounterButton />
                  <>
                    <DefaultSeo />
                    {authenticationRequired ? (
                      <PrivateRoute>
                        {getLayout(<Component {...pageProps} />)}
                      </PrivateRoute>
                    ) : (
                      getLayout(<Component {...pageProps} />)
                    )}
                    <Footer />
                    <ManagedModal />
                    <ManagedDrawer />
                    <ToastContainer autoClose={2000} theme="colored" />
                    <SocialLogin />
                  </>
                </BuyNowProvider>
              </WishlistProvider>
            </CartProvider>
          </ModalProvider>
        </SearchProvider>
      </QueryProvider>
    </SessionProvider>
  );
}
export default appWithTranslation(CustomApp);

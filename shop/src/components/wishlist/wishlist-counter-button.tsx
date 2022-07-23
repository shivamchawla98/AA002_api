import WishlistCheckBagIcon from '@/components/icons/cart-check-bag';
import { formatString } from '@/lib/format-string';
import usePrice from '@/lib/use-price';
import { drawerAtom } from '@/store/drawer-atom';
import { useWishlist } from '@/store/quick-wishlist/wishlist.context';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import Wishlist from '../icons/wishlist';
import WishlistCheckBag from '../icons/wishlist-check-bag';

const WishlistCounterButton = () => {
  const { t } = useTranslation();
  const { totalUniqueItems, total } = useWishlist();
  const [_, setDisplayWishlist] = useAtom(drawerAtom);
  const { price: totalPrice } = usePrice({
    amount: total,
  });
  function handleWishlistSidebar() {
    setDisplayWishlist({ display: true, view: 'wishlist' });
  }
  return (
    <button
      className="hidden product-wishlist lg:flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 ltr:right-0 rtl:left-0 z-40 shadow-900 rounded ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none bg-accent text-light text-sm font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover"
      onClick={handleWishlistSidebar}
      style={{marginTop: "4rem"}}
    >
      <span className="flex pb-0.5">
        <Wishlist className="shrink-0" width={14} height={16} />
        <span className="flex ltr:ml-2 rtl:mr-2">
          {formatString(totalUniqueItems, t('common:text-item'))}
        </span>
      </span>
      {/* <span className="bg-light rounded w-full py-2 px-2 text-accent mt-3">
        {totalPrice}
      </span> */}
    </button>
  );
};

export default WishlistCounterButton;

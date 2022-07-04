import { CartOutlinedIcon } from '@/components/icons/cart-outlined';
import { drawerAtom } from '@/store/drawer-atom';
import { useWishlist } from '@/store/quick-wishlist/wishlist.context';
import { useAtom } from 'jotai';

const WishlistCounterIconButton = () => {
  const { totalUniqueItems } = useWishlist();
  const [_, setDisplayWishlist] = useAtom(drawerAtom);
  function handleWishlistSidebar() {
    setDisplayWishlist({ display: true, view: 'wishlist' });
  }
  return (
    <button
      className="hidden product-wishlist lg:flex relative"
      onClick={handleWishlistSidebar}
    >
      <CartOutlinedIcon className="w-5 h-5" />
      {totalUniqueItems > 0 && (
        <span className="min-w-[20px] h-5 flex items-center justify-center rounded-full bg-accent text-light text-[10px] absolute ltr:-right-1/2 rtl:-left-1/2 -top-1/2">
          {totalUniqueItems}
        </span>
      )}
    </button>
  );
};

export default WishlistCounterIconButton;

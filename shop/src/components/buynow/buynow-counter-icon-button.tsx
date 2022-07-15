import { CartOutlinedIcon } from '@/components/icons/cart-outlined';
import { drawerAtom } from '@/store/drawer-atom';
import { useBuyNow } from '@/store/quick-buynow/buynow.context';
import { useAtom } from 'jotai';

const BuyNowCounterIconButton = () => {
  const { totalUniqueItems } = useBuyNow();
  const [_, setDisplayBuyNow] = useAtom(drawerAtom);
  function handleBuyNowSidebar() {
    setDisplayBuyNow({ display: true, view: 'buynow' });
  }
  return (
    <button
      className="hidden product-buynow lg:flex relative"
      onClick={handleBuyNowSidebar}
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

export default BuyNowCounterIconButton;

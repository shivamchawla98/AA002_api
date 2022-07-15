import Counter from '@/components/ui/counter';
import AddToBuyNowBtn from '@/components/products/add-to-buynow/add-to-buynow-btn';
import { cartAnimation } from '@/lib/cart-animation';
import { useBuyNow } from '@/store/quick-buynow/buynow.context';
import { generateBuyNowItem } from '@/store/quick-buynow/generate-buynow-item';
import { useRouter } from 'next/router';
import { ROUTES } from '@/lib/routes';


interface Props {
  data: any;
  variant?: 'helium' | 'neon' | 'argon' | 'oganesson' | 'single' | 'big';
  counterVariant?:
  | 'helium'
  | 'neon'
  | 'argon'
  | 'oganesson'
  | 'single'
  | 'details';
  counterClass?: string;
  variation?: any;
  disabled?: boolean;
}

export const AddToBuyNow = ({
  data,
  variant = 'helium',
  counterVariant,
  counterClass,
  variation,
  disabled,
}: Props) => {
  const {
    addItemToBuyNow,
    removeItemFromBuyNow,
    isInStock,
    getItemFromBuyNow,
    resetBuyNow,
    isInBuyNow,
  } = useBuyNow();
  const item = generateBuyNowItem(data, variation);
  const handleAddClick = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    e.stopPropagation();
    console.log("add clicked");
    resetBuyNow();
    addItemToBuyNow(item, 1);
    if (!isInBuyNow(item.id)) {
      // alert("hello");
      // cartAnimation(e);
      handleCheckout();
    }
  };
  const { items, totalUniqueItems, total } = useBuyNow();
  function handleCheckout() {
    const isRegularCheckout = items.find((item) => !Boolean(item.is_digital));
    // if (isRegularCheckout) {
    router.push(
      {
        pathname: ROUTES.CHECKOUT,
        query: {
          checkoutType: "buynow"
        }
      }
    );
    // } else {
    // router.push(ROUTES.CHECKOUT_DIGITAL);
    // }

    // closeSidebar({ display: false, view: '' });
  }
  const router = useRouter();
  const handleBuyNowClick = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    e.stopPropagation();
    addItemToBuyNow(item, 1);
    if (!isInBuyNow(item.id)) {
      // cartAnimation(e);
      handleCheckout();
      // removeItemFromBuyNow();

    }
    router.push(ROUTES.CHECKOUT);
  };

  const handleRemoveClick = (e: any) => {
    e.stopPropagation();
    removeItemFromBuyNow(item.id);
  };
  const outOfStock = isInBuyNow(item?.id) && !isInStock(item.id);
  return !isInBuyNow(item?.id) ? (
    <>
      <AddToBuyNowBtn
        disabled={disabled || outOfStock}
        variant={variant}
        onClick={handleAddClick}
      />
    </>
  ) : (
    <>
      {/* <Counter
        value={getItemFromBuyNow(item.id).quantity}
        onDecrement={handleRemoveClick}
        onIncrement={handleAddClick}
        variant={counterVariant || variant}
        className={counterClass}
        disabled={outOfStock}
      /> */}
      <AddToBuyNowBtn
        disabled={disabled || outOfStock}
        variant={variant}
        onClick={handleAddClick}
      />
    </>
  );
};

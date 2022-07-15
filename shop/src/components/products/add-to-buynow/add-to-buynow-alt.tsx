import Counter from '@/components/ui/counter';
import { cartAnimation } from '@/lib/cart-animation';
import { useBuyNow } from '@/store/quick-buynow/buynow.context';
import { generateBuyNowItem } from '@/store/quick-buynow/generate-buynow-item';
import Button from '@/components/ui/button';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

interface Props {
  data: any;
  variant?:
    | 'helium'
    | 'neon'
    | 'argon'
    | 'oganesson'
    | 'single'
    | 'big'
    | 'bordered';
  counterVariant?:
    | 'helium'
    | 'neon'
    | 'argon'
    | 'oganesson'
    | 'single'
    | 'details'
    | 'bordered';
  counterClass?: string;
  variation?: any;
  disabled?: boolean;
}

export const AddToBuyNowAlt = ({
  data,
  variant = 'helium',
  counterVariant,
  counterClass,
  variation,
  disabled,
}: Props) => {
  const { t } = useTranslation('common');
  const {
    addItemToBuyNow,
    removeItemFromBuyNow,
    isInStock,
    getItemFromBuyNow,
    isInBuyNow,
  } = useBuyNow();
  const item = generateBuyNowItem(data, variation);
  // const [quantity, setQuantity] = useState<number>(() =>
  //   isInBuyNow(item?.id) ? getItemFromBuyNow(item.id).quantity : 1
  // );
  const [quantity, setQuantity] = useState<number>(1);
  const increment = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
    // addItemToBuyNow(item, 1);
    // if (!isInBuyNow(item.id)) {
    //   buynowAnimation(e);
    // }
  };
  const handleAddClick = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    e.stopPropagation();
    addItemToBuyNow(item, quantity);
    setQuantity(1);
    if (!isInBuyNow(item.id)) {
      cartAnimation(e);
    }
  };
  const decrement = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
    e.stopPropagation();
    setQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });

    // removeItemFromBuyNow(item.id);
  };
  const outOfStock = isInBuyNow(item?.id) && !isInStock(item.id);
  return (
    <div className=" flex items-center space-x-3 rtl:space-x-reverse">
      <Counter
        value={quantity}
        onDecrement={decrement}
        onIncrement={increment}
        variant={counterVariant || variant}
        className={counterClass}
        disabled={outOfStock}
      />
      <Button
        className="h-14 w-full flex-shrink max-w-sm"
        onClick={handleAddClick}
        disabled={disabled || outOfStock}
      >
        {t('text-add-to-buynow')}
      </Button>
    </div>
  );
};

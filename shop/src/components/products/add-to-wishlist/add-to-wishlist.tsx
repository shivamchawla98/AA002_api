import Counter from '@/components/ui/counter';
import AddToWishlistBtn from '@/components/products/add-to-wishlist/add-to-wishlist-btn';
import { cartAnimation } from '@/lib/cart-animation';
import { useWishlist } from '@/store/quick-wishlist/wishlist.context';
import { generateWishlistItem } from '@/store/quick-wishlist/generate-wishlist-item';
import { useRouter } from 'next/router';
import { ROUTES } from '@/lib/routes';
import AddToWishlistBtnFilled from './add-to-wishlist-btn-filled';


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

export const AddToWishlist = ({
  data,
  variant = 'helium',
  counterVariant,
  counterClass,
  variation,
  disabled,
}: Props) => {
  const {
    addItemToWishlist,
    removeItemFromWishlist,
    isInStock,
    getItemFromWishlist,
    isInWishlist,
  } = useWishlist();
  const item = generateWishlistItem(data, variation);
  const handleAddWishlistClick = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    e.stopPropagation();
    addItemToWishlist(item);
    if (!isInWishlist(item.id)) {
      cartAnimation(e);
    }
  };
  const router = useRouter();
  const handleBuyNowClick = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    e.stopPropagation();
    addItemToWishlist(item);
    if (!isInWishlist(item.id)) {
      cartAnimation(e);
    }
    router.push(ROUTES.CHECKOUT);
  };

  const handleRemoveClick = (e: any) => {
    e.stopPropagation();
    removeItemFromWishlist(item.id);
  };
  const outOfStock = isInWishlist(item?.id) && !isInStock(item.id);
  console.log("ittttttteeeeeeeeeeeeeeeeemmmmmmmmmmmm");
  console.log(item);
  console.log(isInWishlist(item.id));
  return !isInWishlist(item?.id) ? (
    <>
      <AddToWishlistBtn
        disabled={disabled || outOfStock}
        variant={variant}
        onClick={handleAddWishlistClick}
      />
    </>
  ) : (
    <>
      <AddToWishlistBtnFilled
        disabled={disabled || outOfStock}
        variant={variant}
        onClick={handleAddWishlistClick}
      />
    </>
  );
};

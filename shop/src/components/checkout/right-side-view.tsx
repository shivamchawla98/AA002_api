import { verifiedResponseAtom } from '@/store/checkout';
import { useAtom } from 'jotai';
import isEmpty from 'lodash/isEmpty';
import dynamic from 'next/dynamic';
const UnverifiedItemList = dynamic(
  () => import('@/components/checkout/item/unverified-item-list')
);
const VerifiedItemList = dynamic(
  () => import('@/components/checkout/item/verified-item-list')
);

export const RightSideView = ({
  hideTitle = false,
  checkoutType = 'cart',
}: {
  hideTitle?: boolean;
  checkoutType?: string
}) => {
  const [verifiedResponse] = useAtom(verifiedResponseAtom);
  if (isEmpty(verifiedResponse)) {
    return <UnverifiedItemList hideTitle={hideTitle} checkoutType={checkoutType} />;
  }
  return <VerifiedItemList checkoutType={checkoutType} />;
};

export default RightSideView;

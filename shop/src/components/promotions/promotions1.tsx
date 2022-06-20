import PromotionSlider from '@/components/promotions/promotion-slider1';
import ErrorMessage from '@/components/ui/error-message';
import { useType } from '@/framework/type';

export default function PromotionSliders1({ variables }: any) {
  const { type, error } = useType(variables.type);
  if (error) return <ErrorMessage message={error.message} />;
  if (!type?.promotional_sliders) return null;
  return <PromotionSlider sliders={type?.promotional_sliders} />;
}

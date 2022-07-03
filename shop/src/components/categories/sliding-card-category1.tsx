import BakeryCategoryLoader from '@/components/ui/loaders/bakery-categories-loader';
import NotFound from '@/components/ui/not-found';
import SectionBlock from '@/components/ui/section-block';
import SolidCardCategory from '@/components/ui/solid-card-category';
import { Category } from '@/framework/types';
interface SlidingCardCategoriesProps {
  notFound: boolean;
  loading: boolean;
  categories: Category[];
}

const SlidingCardCategories1: React.FC<SlidingCardCategoriesProps> = ({
  notFound,
  categories,
  loading,
}) => {
  if (loading) {
    return (
      <div className="hidden xl:block">
        <div className="w-full h-52 flex justify-center mt-8 px-2">
          <BakeryCategoryLoader />
        </div>
      </div>
    );
  }
  console.log("111111111111");
  console.log(categories);
  return (
    <SectionBlock title="Beauty & Personal Care">
      {!notFound ? (
        <SolidCardCategory items={categories[1].children} className="py-8" />
      ) : (
        <div className="min-h-full">
          <NotFound text="text-no-category" className="h-96" />
        </div>
      )}
    </SectionBlock>
  );
};

export default SlidingCardCategories1;

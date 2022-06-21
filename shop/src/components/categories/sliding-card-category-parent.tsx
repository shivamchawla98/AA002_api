import BakeryCategoryLoader from '@/components/ui/loaders/bakery-categories-loader';
import NotFound from '@/components/ui/not-found';
import SectionBlockHeader from '@/components/ui/section-block-header';
import SolidCardCategoryHeader from '@/components/ui/solid-card-category-header';
import { Category } from '@/framework/types';
interface SlidingCardCategoriesProps {
  notFound: boolean;
  loading: boolean;
  categories: Category[];
}

const SlidingCardCategories: React.FC<SlidingCardCategoriesProps> = ({
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
  // console.log("6666666666666666");
  // console.log(categories);
  return (
    <SectionBlockHeader>
      <div>
        {!notFound ? (
          <SolidCardCategoryHeader items={categories} />
        ) : (
          <div className="min-h-full">
            <NotFound text="text-no-category" className="h-96" />
          </div>
        )}
      </div>
    </SectionBlockHeader>
  );
};

export default SlidingCardCategories;

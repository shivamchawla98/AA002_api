import Banner from '@/components/banners/banner';
import PromotionSliders from '@/components/promotions/promotions';
import PromotionSliders1 from '@/components/promotions/promotions1';
import PromotionSliders2 from '@/components/promotions/promotions2';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import FilterBar from './filter-bar';
import ProductGridHome from '@/components/products/grids/home';
import type { HomePageProps } from '@/types';
import SectionBlock from '../ui/section-block';
import PopularProductsGrid from '@/components/products/popular-products';

export default function ClassicLayout({ variables }: HomePageProps) {
  return (
    <>
      <main className="mt-6 block w-full xl:overflow-hidden">
      <Banner layout="compact" variables={variables.types} />
      {/* <SectionBlock>
          
          <Banner layout="classic" variables={variables.types} />
      </SectionBlock> */}
      <PromotionSliders variables={variables.types} />
      
      <FilterBar variables={variables.categories} />
      {/* <Element
        name="grid"
        className="flex border-t border-solid border-border-200 border-opacity-70"
      >
        <Categories layout="classic" variables={variables.categories} />
        <ProductGridHome
          className="px-4 pb-8 lg:p-8"
          variables={variables.products}
        />
      </Element> */}
       <Categories layout="compact" variables={variables.categories} />
       <PromotionSliders1 variables={variables.types} />
       <Categories layout="compact1" variables={variables.categories} />
       <PromotionSliders2 variables={variables.types} />
       <Categories layout="compact2" variables={variables.categories} />
       {/* <Categories layout="compact" variables={variables.categories} /> */}
       <PopularProductsGrid variables={variables.popularProducts} />
      </main>
    </>
  );
}

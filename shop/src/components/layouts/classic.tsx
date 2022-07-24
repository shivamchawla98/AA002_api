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
      <a href='http://38.242.199.115:3000/Electronics/search?category=Electronics&type=Electronics'>
      <PromotionSliders variables={variables.types} />
      </a>
      
      
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
       <Categories layout="compact" variables={{ limit: 1000, parent: 1, type: "Electronics" }} />
       <a href='http://38.242.199.115:3000/Beauty%20&%20Personal%20Care/search?category=Beauty%20&%20Personal%20Care&type=Beauty%20&%20Personal%20Care'>
       <PromotionSliders1 variables={variables.types} />
       </a>
       <Categories layout="compact1" variables={{ limit: 1000, parent: 1, type: "Beauty & Personal Care" }} />
       <a href='http://38.242.199.115:3000/Entertainment/search?category=Entertainment&type=Entertainment'>
       <PromotionSliders2 variables={variables.types} />
       </a>
       <Categories layout="compact2" variables={{ limit: 1000, parent: 1, type: "Entertainment" }} />
       {/* <Categories layout="compact" variables={variables.categories} /> */}
       <PopularProductsGrid variables={variables.popularProducts} />
      </main>
    </>
  );
}

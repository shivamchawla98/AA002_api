import { getLayout } from '@/components/layouts/layout';
import { AttributesProvider } from '@/components/products/details/attributes.context';
import Seo from '@/components/seo/seo';
import { useWindowSize } from '@/lib/use-window-size';
import isEmpty from 'lodash/isEmpty';
import dynamic from 'next/dynamic';

export { getStaticPaths, getStaticProps } from '@/framework/product.ssr';
console.log("line 9");
//FIXME: typescript and layout
const Details = dynamic(() => import('@/components/products/details/details'));
console.log("line 11");
const BookDetails = dynamic(
  () => import('@/components/products/details/book-details')
);
console.log("line 12");
const RelatedProducts = dynamic(
  () => import('@/components/products/details/related-products')
);
console.log("line 13");
const CartCounterButton = dynamic(
  () => import('@/components/cart/cart-counter-button'),
  { ssr: false }
);
console.log("line 14");

export default function ProductPage({ product }: any) {
  console.log(product);
  const { width } = useWindowSize();
  console.log("line 15");

  return (
    <>
      <Seo
        title={product?.name}
        url={product?.slug!}
        images={!isEmpty(product?.image) ? [product.image] : []}
      />
      <AttributesProvider>
        <div className="min-h-screen bg-light">
          {product?.type?.slug === 'books' ? (
            <BookDetails product={product} />
          ) : (
            <>
              <Details product={product} />
              {product?.related_products?.length > 1 && (
                <div className="p-5 lg:p-14 xl:p-16">
                  <RelatedProducts
                    products={product?.related_products}
                    currentProductId={product?.id}
                    gridClassName="lg:grid-cols-4 2xl:grid-cols-5 !gap-3"
                  />
                </div>
              )}
            </>
          )}
        </div>
        {width > 1023 && <CartCounterButton />}
      </AttributesProvider>
    </>
  );
}
ProductPage.getLayout = getLayout;

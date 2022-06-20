import dynamic from 'next/dynamic';
import ErrorMessage from '@/components/ui/error-message';
import { useProducts } from '@/framework/product';
import { useRouter } from "next/router";

const AutoSuggestion = dynamic(() => import('@/components/ui/auto-suggestion'));

interface AutoSuggestionProps {
  className?: string;
  searchQuery: string;
  visible: boolean;
  seeMore: boolean;
  seeMoreLink: (e: any) => void;
}
const AutoSuggestionBox: React.FC<AutoSuggestionProps> = ({
  searchQuery,
  className,
  visible,
  seeMoreLink,
  seeMore,
}) => {
  console.log("ii999ii");
  const { query } = useRouter();
  console.log(query);
  const { isLoading, products, error } = useProducts({
    type: query?.pages?.[0] as string,
    searchQuery: searchQuery
  });
  console.log("Zx10R");

  // if (error) return <ErrorMessage message={error.message} />;

  console.log("jojo")
  return (
    <AutoSuggestion
      suggestions={products}
      notFound={!isLoading && !products.length}
      visible={visible}
      seeMoreLink={seeMoreLink}
      seeMore={seeMore}
      className={className}
      showLoaders={isLoading && !products.length}
    />
  );
};

export default AutoSuggestionBox;

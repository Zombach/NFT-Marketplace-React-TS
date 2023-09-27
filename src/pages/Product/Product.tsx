import './Product.scss';
import { CardsFragment } from '@src/pages/Marketplace/CardsFragment/CardsFragment';
import { CollectionsHeader } from '@components/CollectionsHeader/CollectionsHeader';
import { type FC, useEffect, useState } from 'react';
import { Product } from '@models/Product';
import { useGetProductQuery, useGetProductsQuery } from '@src/features/api/productsApi';
import { useParams } from 'react-router-dom';
import ActivitySellersCards from './components/ActivitySellersCards/ActivitySellersCards';
import ProductSection from './components/ProductSection/ProductSection';
import Sellers from '@components/Sellers/Sellers';

type UrlParams = {
  productId: string;
};

export const ProductComponent: FC = () => {
  const { productId } = useParams<keyof UrlParams>() as UrlParams;
  const [isTable, setIsTable] = useState<boolean>(false);
  const { data: products } = useGetProductsQuery();
  const { data: product } = useGetProductQuery(productId);

  console.log('product', product);

  return (
    <div className="product-page">
      {product && <ProductSection product={product}></ProductSection>}
      <Sellers title={'Activity'} countOnPage={4} SellersCards={ActivitySellersCards}></Sellers>
      <div className="market-place-section">
        <h2>More from the collection</h2>
        <CollectionsHeader />
        {products && <CardsFragment cards={products} isTable={isTable} />}
      </div>
    </div>
  );
};

export default ProductComponent;

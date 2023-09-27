import './Marketplace.scss';
import { useGetProductsQuery } from '@src/features/api/productsApi';
import CardsFragment from './CardsFragment/CardsFragment';
import CollectionsHeader from '@components/CollectionsHeader/CollectionsHeader';
import React, { type FC, useEffect, useState } from 'react';

export const Marketplace: FC = () => {
  const [isTable, setIsTable] = useState<boolean>(false);
  const { data: products } = useGetProductsQuery();

  console.log('products', products);

  return (
    <div className="market-place-section">
      <CollectionsHeader />
      {products && <CardsFragment cards={products} isTable={isTable} />}
    </div>
  );
};

export default Marketplace;

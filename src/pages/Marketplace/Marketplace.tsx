import './Marketplace.scss';
import { type FC, useState } from 'react';
import { checkOnDesktopOnly } from '@src/helpers';
import { useGetProductsQuery } from '@src/features/api/productsApi';
import CardsFragment from './CardsFragment/CardsFragment';
import CollectionsHeader from '@components/CollectionsHeader/CollectionsHeader';

export const Marketplace: FC = () => {
  const [isTable, setIsTable] = useState<boolean>(false);
  const { data: products } = useGetProductsQuery();

  return (
    <div className="market-place-section">
      {checkOnDesktopOnly() && <CollectionsHeader />}
      {products && <CardsFragment cards={products} isTable={isTable} />}
    </div>
  );
};

export default Marketplace;

import './Product.scss';
import { CardsFragment } from '@src/pages/Marketplace/CardsFragment/CardsFragment';
import { CollectionsHeader } from '@components/CollectionsHeader/CollectionsHeader';
import { type FC, useState } from 'react';
import { cards } from '@resources/moq/Marketplace';
import ProductSection from './components/ProductSection/ProductSection';

export const Product: FC = () => {
  const [isTable, setIsTable] = useState<boolean>(false);

  return (
    <div className="product-page">
      <ProductSection></ProductSection>
      <div className="market-place-section">
        <h2>More from the collection</h2>
        <CollectionsHeader />
        <CardsFragment cards={cards} isTable={isTable} />
      </div>
    </div>
  );
};

export default Product;

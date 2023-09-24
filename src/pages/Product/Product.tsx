import './Product.scss';
import { CardsFragment } from '@src/pages/Marketplace/CardsFragment/CardsFragment';
import { CollectionsHeader } from '@components/CollectionsHeader/CollectionsHeader';
import { type FC, useState } from 'react';
import { cards } from '@resources/moq/Marketplace';
import ActivitySellersCards from './components/ActivitySellersCards/ActivitySellersCards';
import ProductSection from './components/ProductSection/ProductSection';
import Sellers from '@components/Sellers/Sellers';

export const Product: FC = () => {
  const [isTable, setIsTable] = useState<boolean>(false);

  return (
    <div className="product-page">
      <ProductSection></ProductSection>
      <Sellers title={'Activity'} countOnPage={4} SellersCards={ActivitySellersCards}></Sellers>
      <div className="market-place-section">
        <h2>More from the collection</h2>
        <CollectionsHeader />
        <CardsFragment cards={cards} isTable={isTable} />
      </div>
    </div>
  );
};

export default Product;

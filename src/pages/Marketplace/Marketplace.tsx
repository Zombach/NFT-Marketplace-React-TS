import './Marketplace.scss';
import { cards } from '@resources/moq/Marketplace';
import CardsFragment from './CardsFragment/CardsFragment';
import CollectionsHeader from '@components/CollectionsHeader/CollectionsHeader';
import React, { type FC, useState } from 'react';

console.log('cards', cards);

export const Marketplace: FC = () => {
  const [isTable, setIsTable] = useState<boolean>(false);

  return (
    <div className="market-place-section">
      <CollectionsHeader />
      <CardsFragment cards={cards} isTable={isTable} />
    </div>
  );
};

export default Marketplace;

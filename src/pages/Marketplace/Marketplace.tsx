import './Marketplace.scss';
import { cards } from '@resources/moq/Collections';
import CardMiddle from '@components/Cards/components/CardMiddle/CardMiddle';
import CollectionsHeader from '@components/CollectionsHeader/CollectionsHeader';
import React, { type FC, useState } from 'react';

console.log('cards', cards);

export const Marketplace: FC = () => {
  const [isTable, setIsTable] = useState<boolean>(false);

  return (
    <div className="market-place-section">
      <CollectionsHeader />
      <div>{!isTable && cards.map((item, index) => <CardMiddle key={index} />)}</div>
    </div>
  );
};

export default Marketplace;

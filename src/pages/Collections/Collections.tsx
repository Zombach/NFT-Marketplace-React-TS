import './Collections.scss';
import { cards } from '@resources/moq/Collections';
import CollectionsHeader from '@components/CollectionsHeader/CollectionsHeader';
import Details, { CardsFragment } from './components/CardsFragment/CardsFragment';
import React, { type FC, useState } from 'react';

export const Collections: FC = () => {
  const [isTable, setIsTable] = useState<boolean>(false);

  return (
    <div className="market-place-section">
      <CollectionsHeader />
      <CardsFragment cards={cards} isTable={isTable} />
    </div>
  );
};

export default Collections;

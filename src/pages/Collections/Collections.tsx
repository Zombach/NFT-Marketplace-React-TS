import './Collections.scss';
import { CardsFragment } from './components/CardsFragment/CardsFragment';
import { type FC, useState } from 'react';
import { cards } from '@resources/moq/Collections';
import { checkOnDesktopOnly } from '@src/helpers';
import CollectionsHeader from '@components/CollectionsHeader/CollectionsHeader';

export const Collections: FC = () => {
  const [isTable, setIsTable] = useState<boolean>(false);

  return (
    <div className="market-place-section">
      {checkOnDesktopOnly() && <CollectionsHeader />}
      <CardsFragment cards={cards} isTable={isTable} />
    </div>
  );
};

export default Collections;

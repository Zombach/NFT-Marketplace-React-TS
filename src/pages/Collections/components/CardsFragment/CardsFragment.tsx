import './CardsFragment.scss';
import { CardCollections } from '@resources/moq/Collections';
import CardBig from '@components/Cards/CardBig/CardBig';
import React, { type FC } from 'react';

interface CardsFragmentProps {
  cards: CardCollections[];
  isTable: boolean;
}

export const CardsFragment: FC<CardsFragmentProps> = (props) => {
  const { cards, isTable } = props;
  return (
    <div>
      <div className="big-cards-container">{!isTable && cards.map((item, index) => <CardBig key={index} card={item} />)}</div>
    </div>
  );
};

export default CardsFragment;

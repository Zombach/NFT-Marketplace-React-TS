import './CardsFragment.scss';
import { CardMarketplace } from '@resources/moq/Marketplace';
import CardMiddle from '@components/Cards/CardMiddle/CardMiddle';
import React, { type FC } from 'react';

interface CardsFragmentProps {
  cards: CardMarketplace[];
  isTable: boolean;
}

export const CardsFragment: FC<CardsFragmentProps> = (props) => {
  const { cards, isTable } = props;
  return (
    <div>
      <div className="middle-cards-container">{!isTable && cards.map((item, index) => <CardMiddle key={index} card={item} />)}</div>
    </div>
  );
};

export default CardsFragment;

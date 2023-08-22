import './CardsRender.scss';
import { CardSmall as model } from '@models/CardModels/CardModels';
import CardSmall from '@components/Cards/CardSmall/CardSmall';
import HeaderCardSmall from './HeaderCardSmall/HeaderCardSmall';
import React, { type FC } from 'react';

interface CardsRenderProps {
  cards: model[];
}

export const CardsRender: FC<CardsRenderProps> = ({ cards }) => {
  return (
    <div className="card-small-render">
      <HeaderCardSmall />
      {cards.map((item, index) => (
        <CardSmall key={index} number={index} model={item} />
      ))}
    </div>
  );
};

export default CardsRender;

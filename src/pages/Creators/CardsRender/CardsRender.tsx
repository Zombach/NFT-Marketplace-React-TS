import './CardsRender.scss';
import { ReactComponent as Icon } from './assets/info.svg';
import { CardSmall as model } from '@models/CardModels/CardModels';
import CardSmall from '@components/Cards/CardSmall/CardSmall';
import React, { type FC } from 'react';

interface CardsRenderProps {
  cards: model[];
}

export const CardsRender: FC<CardsRenderProps> = ({ cards }) => {
  return (
    <div className="card-small-render">
      <div className="header-card">
        <p className="text part-1">Creator</p>
        <p className="text part-2">Volume (USD)</p>
        <Icon className="icon" />
        <p className="text part-3">Sales</p>
        <Icon className="icon" />
        <p className="text part-4">Items</p>
        <Icon className="icon" />
        <p className="text part-5">Followers</p>
        <Icon className="icon" />
      </div>
      {cards.map((item, index) => (
        <CardSmall key={index} number={index} model={item} />
      ))}
    </div>
  );
};

export default CardsRender;

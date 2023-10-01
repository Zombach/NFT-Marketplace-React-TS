import './Cards.scss';
import { type CardSmall as Cards } from '@models/CardModels/CardModels';
import { UserInfo } from '@models/User';
import { checkOnDesktopOnly } from '@src/helpers';
import CardSmall from '@components/Cards/CardSmall/CardSmall';
import HeaderCardSmall from './HeaderCardSmall/HeaderCardSmall';
import React, { type FC } from 'react';

interface CardsRenderProps {
  cards: UserInfo[];
}

export const CardsRender: FC<CardsRenderProps> = ({ cards }) => {
  return (
    <div className="card-small-render">
      {checkOnDesktopOnly() && <HeaderCardSmall />}
      {cards.map((item, index) => (
        <CardSmall key={index} number={index} model={item} />
      ))}
    </div>
  );
};

export default CardsRender;

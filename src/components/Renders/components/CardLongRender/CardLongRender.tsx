import './CardLongRender.scss';
import { ReactComponent as Icon } from './assets/info.svg';
import { carts as moq } from '@resources/moq/Creators';
import CardLong from '@components/CardLong/CardLong';
import React, { type FC } from 'react';

interface CardLongRenderProps {}

export const CardLongRender: FC<CardLongRenderProps> = () => {
  return (
    <div className="card-long-render">
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
      {moq.map((item, index) => (
        <CardLong key={index} number={index} model={item} />
      ))}
    </div>
  );
};

export default CardLongRender;

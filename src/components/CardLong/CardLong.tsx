import './CardLong.scss';
import React, { type FC } from 'react';

type CardLongModel = {
  userId: string;
  userName: String;
  avatar: string;
  volume: String;
  sales: String;
  items: String;
  followers: String;
  follow: Boolean;
};

interface CardLongProps {
  number: number;
  model: CardLongModel;
}

export const CardLong: FC<CardLongProps> = ({ number, model }) => {
  const { userId, userName, avatar, volume, sales, items, followers, follow } = model;
  return (
    <div className="card-long">
      <p className="number">{number}</p>
    </div>
  );
};

export default CardLong;

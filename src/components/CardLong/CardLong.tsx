import './CardLong.scss';
import React, { type FC } from 'react';
import UserInfo from './components/UserInfo/UserInfo';

type CardLongModel = {
  userId: string;
  userName: string;
  avatar: string;
  volume: string;
  sales: string;
  items: string;
  followers: string;
  follow: boolean;
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
      <UserInfo userName={userName} avatar={avatar}></UserInfo>
    </div>
  );
};

export default CardLong;

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
      <p className="text number">{number}</p>
      <UserInfo userId={userId} userName={userName} avatar={avatar}></UserInfo>
      <p className="text volume">{volume}</p>
      <p className="text sales">{sales}</p>
      <p className="text items">{items}</p>
      <p className="text followers">{followers}</p>
      <button className="follow">
        <p className="follow-text">{follow ? 'Follow' : 'Unsubscribe'}</p>
      </button>
    </div>
  );
};

export default CardLong;

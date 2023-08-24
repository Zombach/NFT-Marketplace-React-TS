import './CardSmall.scss';
import Button from '@components/ButtonBox/ButtonBox';
import React, { type FC, useState } from 'react';
import UserInfo from './components/UserInfo/UserInfo';
import type { CardSmall as Model } from '@models/CardModels/CardModels';

interface CardSmallProps {
  number: number;
  model: Model;
}

export const CardSmall: FC<CardSmallProps> = ({ number, model }) => {
  const { userId, userName, avatar, volume, sales, items, followers, follow } = model;
  const [currentFollow, setCurrentFollow] = useState<boolean>(follow);
  const onClick = () => {
    setCurrentFollow(!currentFollow);
  };

  return (
    <div className="card-small">
      <p className="text number">{number}</p>
      <UserInfo userId={userId} userName={userName} avatar={avatar}></UserInfo>
      <p className="text volume">{volume}</p>
      <p className="text sales">{sales}</p>
      <p className="text items">{items}</p>
      <p className="text followers">{followers}</p>
      <Button buttonClassName="follow" textClassName="follow-text" onClick={onClick}>
        {currentFollow ? 'Follow' : 'Unsubscribe'}
      </Button>
    </div>
  );
};

export default CardSmall;

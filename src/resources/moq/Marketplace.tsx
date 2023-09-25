import './Base.scss';
import Nft from './Nft.png';
import React, { type FC } from 'react';
import avatar from './avatar-mock.jpg';

export type CardMarketplace = {
  id: string | number;
  userId: string;
  userName: string;
  avatar: string;
  nftName: string;
  nftImage: string;
  like: string;
  time: Date;
  price: number;
  priceBnB: string;
};

const Card = (userId: string) => {
  return {
    id: 1,
    userId: '1',
    userName: '@marterium',
    avatar: avatar,
    nftName: 'Deadzone 13 Hideout',
    nftImage: Nft,
    like: '34',
    time: new Date(),
    price: 32,
    priceBnB: '≈ $140.05',
  } as CardMarketplace;
};

export const cards = [
  Card('@user 1'),
  Card('@user 2'),
  Card('@user 3'),
  Card('@user 4'),
  Card('@user 5'),
  Card('@user 6'),
  Card('@user 7'),
  Card('@user 8'),
  Card('@user 9'),
  Card('@user 10'),
  Card('@user 11'),
  Card('@user 12'),
  Card('@user 13'),
  Card('@user 14'),
  Card('@user 15'),
  Card('@user 16'),
  Card('@user 17'),
  Card('@user 18'),
  Card('@user 19'),
  Card('@user 20'),
] as CardMarketplace[];

export const Render: FC = () => {
  return (
    <div className="items">
      {cards.map((x, index) => (
        <div className="item" id={x.userId} key={`${x.userId}-${index}`}>
          <p>{x.userId}</p>
          <p>{x.userName}</p>
          <p>{x.avatar}</p>
          <p>{x.nftName}</p>
          <p>{x.nftImage}</p>
          <p>{x.like}</p>
          <p>{x.time.toString()}</p>
          <p>{x.price}</p>
          <p>{x.priceBnB}</p>
        </div>
      ))}
    </div>
  );
};

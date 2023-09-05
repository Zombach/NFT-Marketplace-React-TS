import './Base.scss';
import { Creator } from '@models/Creator';
import { Seller } from '@models/Seller';
import AvatarMock from './avatar-mock.jpg';
import React, { type FC } from 'react';
import type { CardSmall } from '@models/CardModels/CardModels';

const Card = (userName: string): CardSmall => {
  return {
    userId: '1',
    userName: userName,
    avatar: './Avatar.jpg',
    volume: '15,085,035.95',
    sales: '111,850',
    items: '50,850',
    followers: '10,150',
    follow: true,
  };
};

export const cards: CardSmall[] = [
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
];

export const Render: FC = () => {
  return (
    <div className="items">
      {cards.map((x, index) => (
        <div className="item" id={x.userId} key={`${x.userId}-${index}`}>
          <p>{x.userId}</p>
          <p>{x.userName}</p>
          <p>{x.avatar}</p>
          <p>{x.volume}</p>
          <p>{x.sales}</p>
          <p>{x.items}</p>
          <p>{x.followers}</p>
          <p>{x.follow ? 'Follow' : 'Unsubscribe'}</p>
        </div>
      ))}
    </div>
  );
};

const desc = `LIŔONA is a creator of minimalistic ⨯ bold graphic and digital artwork. 
✹ Artist / Creative Director ✹ #NFT minting `;

export const creator = (id: string) => {
  return {
    id: id,
    userName: '@YFI Fan',
    avatar: AvatarMock,
    description: desc,
    followersCount: 123,
    followingCount: 123,
    earned: 123,
    address: '0xa6794dec66df7d8b69752956df1b28ca93f77cd7',
  } as Creator;
};

export const createSeller = (id: string) => {
  return {
    id: id,
    avatar: AvatarMock,
    username: `@user ${id}`,
    lastBidTime: '15 hours ago',
    lastBidPrice: '15.5',
  };
};

export const sellersMock: Seller[] = [
  createSeller('1'),
  createSeller('2'),
  createSeller('3'),
  createSeller('4'),
  createSeller('5'),
  createSeller('6'),
  createSeller('7'),
  createSeller('8'),
  createSeller('9'),
  createSeller('10'),
  createSeller('11'),
  createSeller('12'),
];

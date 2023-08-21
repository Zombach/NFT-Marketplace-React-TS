import './Base.scss';
import React, { type FC } from 'react';

export type CardCreator = {
  userId: string;
  userName: String;
  avatar: string;
  volume: String;
  sales: String;
  items: String;
  followers: String;
  follow: Boolean;
};

const Card = (userName: string) => {
  return {
    userId: '1',
    userName: userName,
    avatar: './Avatar.jpg',
    volume: '15,085,035.95',
    sales: '111,850',
    items: '50,850',
    followers: '10,150',
    follow: true,
  } as CardCreator;
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
] as CardCreator[];

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

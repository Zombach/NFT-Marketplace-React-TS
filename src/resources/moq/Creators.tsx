import './Base.scss';
import React, { type FC } from 'react';

export type CartCreator = {
  userId: string;
  userName: String;
  avatar: string;
  volume: String;
  sales: String;
  items: String;
  followers: String;
  follow: Boolean;
};

const Cart = (userName: string) => {
  return {
    userId: '1',
    userName: userName,
    avatar: './Avatar.jpg',
    volume: '15,085,035.95',
    sales: '111,850',
    items: '50,850',
    followers: '10,150',
    follow: true,
  } as CartCreator;
};

export const carts = [
  Cart('@user 1'),
  Cart('@user 2'),
  Cart('@user 3'),
  Cart('@user 4'),
  Cart('@user 5'),
  Cart('@user 6'),
  Cart('@user 7'),
  Cart('@user 8'),
  Cart('@user 9'),
  Cart('@user 10'),
  Cart('@user 11'),
  Cart('@user 12'),
  Cart('@user 13'),
  Cart('@user 14'),
  Cart('@user 15'),
  Cart('@user 16'),
  Cart('@user 17'),
  Cart('@user 18'),
  Cart('@user 19'),
  Cart('@user 20'),
] as CartCreator[];

export const Render: FC = () => {
  return (
    <div className="items">
      {carts.map((x, index) => (
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

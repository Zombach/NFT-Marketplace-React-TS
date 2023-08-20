import './Base.scss';
import React, { type FC } from 'react';

export type CartCollections = {
  userId: string;
  collectionName: String;
  avatar: string;
  nftImage: string;
  owners: string;
  totalVolume: string;
  floor: string;
};

const Cart = (userId: string) => {
  return {
    userId: userId,
    collectionName: 'club',
    avatar: './Image.jpg',
    nftImage: 'image source',
    owners: '34,7K owners',
    totalVolume: '795,6K BNB',
    floor: '72 BNB',
  } as CartCollections;
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
] as CartCollections[];

export const Render: FC = () => {
  return (
    <div className="items">
      {carts.map((x, index) => (
        <div className="item" id={x.userId} key={`${x.userId}-${index}`}>
          <p>{x.userId}</p>
          <p>{x.collectionName}</p>
          <p>{x.avatar}</p>
          <p>{x.nftImage}</p>
          <p>{x.owners}</p>
          <p>{x.totalVolume}</p>
          <p>{x.floor}</p>
        </div>
      ))}
    </div>
  );
};

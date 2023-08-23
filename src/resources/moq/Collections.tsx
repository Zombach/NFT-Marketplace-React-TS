import './Base.scss';
import React, { type FC } from 'react';

export type CardCollections = {
  userId: string;
  collectionName: String;
  avatar: string;
  nftImage: string;
  owners: string;
  totalVolume: string;
  floor: string;
};

const Card = (userId: string) => {
  return {
    userId: userId,
    collectionName: 'club',
    avatar: './Image.jpg',
    nftImage: 'image source',
    owners: '34,7K owners',
    totalVolume: '795,6K BNB',
    floor: '72 BNB',
  } as CardCollections;
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
] as CardCollections[];

export const Render: FC = () => {
  return (
    <div className="items">
      {cards.map((x, index) => (
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

import './Base.scss';
import { Collection } from 'models/Collection';
import AvatarMock from './avatar-mock.jpg';
import React, { type FC } from 'react';
import collectionImg from './Collection.png';

export type CardCollections = {
  id: string;
  userId: string;
  collectionName: String;
  avatar: string;
  nftImage: string;
  owners: string;
  totalVolume: string;
  floor: string;
};

const Card = (id: string, userId: string) => {
  return {
    id: id,
    userId: userId,
    collectionName: 'Bored Ape Yacht Club',
    avatar: AvatarMock,
    nftImage: collectionImg,
    owners: '34,7K owners',
    totalVolume: '795,6K',
    floor: '72',
  } as CardCollections;
};

export const cards = [
  Card('1', '@user 1'),
  Card('2', '@user 2'),
  Card('3', '@user 3'),
  Card('4', '@user 4'),
  Card('5', '@user 5'),
  Card('6', '@user 6'),
  Card('7', '@user 7'),
  Card('8', '@user 8'),
  Card('9', '@user 9'),
  Card('10', '@user 10'),
  Card('11', '@user 11'),
  Card('12', '@user 12'),
  Card('13', '@user 13'),
  Card('14', '@user 14'),
  Card('15', '@user 15'),
  Card('16', '@user 16'),
  Card('17', '@user 17'),
  Card('18', '@user 18'),
  Card('19', '@user 19'),
  Card('20', '@user 20'),
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

const desc = `A handcrafted collection of 10,000 characters developed by artist DirtyRobot. Each with their own identity to be discovered within the wider stories of RENGA. In its purest form, RENGA is the art of storytelling.`;

export const collection = (id: string) => {
  return {
    id: id,
    name: 'NFT',
    userId: '1',
    userName: '@vitaxaOv',
    avatar: AvatarMock,
    description: desc,
    floorPrice: '12',
    totalVolume: '12333',
    countItems: 123,
    ownersCount: 323232,
    address: '0xa6794dec66df7d8b69752956df1b28ca93f77cd7',
  } as Collection;
};

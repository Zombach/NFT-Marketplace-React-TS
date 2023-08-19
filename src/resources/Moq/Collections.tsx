import { ReactComponent as Avatar } from './Avatar.svg';
import { FC, FunctionComponent, SVGProps } from 'react';

export type CartCollections = {
  userId: string;
  collectionName: String;
  avatar: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  nftImage: string;
  owners: string;
  totalVolume: string;
  floor: string;
};

const Cart = (userId: string) => {
  return {
    userId: userId,
    collectionName: 'club',
    avatar: Avatar,
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
    <div className="" style={{ display: 'inline-flex', flexDirection: 'column' }}>
      {carts.map((x, index) => (
        <div key={`${x.userId}-${index}`} id={x.userId} style={{ display: 'inline-flex', flexDirection: 'row' }}>
          <x.avatar></x.avatar>
          <p>{x.collectionName}</p>
          <p>{x.owners}</p>
          <p>{x.totalVolume}</p>
          <p>{x.userId}</p>
          <p>{x.nftImage}</p>
          <p>{x.floor}</p>
        </div>
      ))}
    </div>
  );
};

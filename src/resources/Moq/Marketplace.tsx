import { ReactComponent as Avatar } from './Avatar.svg';
import { FC, FunctionComponent, SVGProps } from 'react';

export type CartMarketplace = {
  userId: string;
  userName: string;
  avatar: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  nftName: string;
  nftImage: string;
  like: string;
  time: Date;
  price: string;
  priceBnB: string;
};

const Cart = (userId: string) => {
  return {
    userId: userId,
    userName: '@marterium',
    avatar: Avatar,
    nftName: 'Deadzone 13 Hideout',
    nftImage: 'image source',
    like: '34',
    time: new Date(),
    price: '0.49 BNB',
    priceBnB: '≈ $140.05',
  } as CartMarketplace;
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
] as CartMarketplace[];

export const Render: FC = () => {
  return (
    <div className="" style={{ display: 'inline-flex', flexDirection: 'column' }}>
      {carts.map((x, index) => (
        <div key={`${x.userId}-${index}`} id={x.userId} style={{ display: 'inline-flex', flexDirection: 'row' }}>
          <x.avatar></x.avatar>
          <p>{x.userName}</p>
          <p>{x.nftImage}</p>
          <p>{x.nftName}</p>
          <p>{x.like}</p>
          <p>{x.time.toString()}</p>
          <p>{x.price}</p>
          <p>{x.priceBnB}</p>
        </div>
      ))}
    </div>
  );
};

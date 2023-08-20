import './Home.scss';
import CardLong from '@components/CardLong/CardLong';
import React, { type FC } from 'react';

export const Home: FC = () => {
  return (
    <div className="">
      <CardLong
        number={1}
        model={{
          userId: '1',
          userName: '@Trickster',
          avatar: './Avatar.jpg',
          volume: '15,085,035.95',
          sales: '111,850',
          items: '50,850',
          followers: '10,150',
          follow: true,
        }}
      />
    </div>
  );
};

export default Home;

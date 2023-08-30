import './Home.scss';
import { UserContext } from '@components/Contexts/UserContext';
import { Video } from '@components/Video/Video';
import React, { type FC, useContext } from 'react';

export const Home: FC = () => {
  const context = useContext(UserContext);
  return (
    <div>
      <Video></Video>
    </div>
  );
};

export default Home;

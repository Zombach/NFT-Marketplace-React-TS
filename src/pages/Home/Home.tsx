import './Home.scss';
import { type FC, useContext } from 'react';
import { UserContext } from '@components/Contexts/UserContext';
import { Video } from '@components/Video/Video';
import SellersSection from './components/SellersSection/SellersSection';

export const Home: FC = () => {
  const context = useContext(UserContext);
  return (
    <div className="home-page">
      <SellersSection></SellersSection>
      <Video></Video>
    </div>
  );
};

export default Home;

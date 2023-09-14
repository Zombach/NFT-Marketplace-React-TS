import './Home.scss';
import { CreateNftText } from './components/CreateNftText/CreateNftText';
import { type FC, useContext } from 'react';
import { Hero } from '@pages/Home/components/Hero/Hero';
import { UserContext } from '@components/Contexts/UserContext';
import { Video } from '@components/Video/Video';
import AvatarsSection from './components/AvatarsSection/AvatarsSection';
import SellersSection from './components/SellersSection/SellersSection';

export const Home: FC = () => {
  const context = useContext(UserContext);

  return (
    <div className="home-page">
      <Hero></Hero>
      <CreateNftText></CreateNftText>
      <SellersSection></SellersSection>
      <Video></Video>
      <AvatarsSection></AvatarsSection>
    </div>
  );
};

export default Home;

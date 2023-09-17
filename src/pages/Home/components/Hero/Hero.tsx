import './Hero.scss';
import { ReactComponent as EllipseBlack } from './assets/ellipseBlack.svg';
import { ReactComponent as Line } from './assets/line.svg';
import { ReactComponent as Play } from './assets/play.svg';

import { HeaderCard } from '@components/Cards/HeaderCard/HeaderCard';

export const Hero = () => {
  return (
    <div id="home-page-container">
      <div className="home-page-header">
        <div className="left">
          <h2 className="main-text">Discover, collect, & sell NFTs</h2>
          <p className="text">Copy Discover the Most Premium, Unique and Exclusive NFT Collections</p>
          <div className="button-icon">
            <button className="btn">
              <p className="text-b">Explore</p>
            </button>
            <button className="btn white">
              <p className="text-b black">Create</p>
            </button>
          </div>
          <div className="line-home">
            <Line />
          </div>
          <div className="learn-more-section">
            <div>
              <EllipseBlack />
              <Play className="play" />
            </div>
            <a href="learnMore" className="learn-more">
              Learn more about BNB
            </a>
          </div>
        </div>
      </div>
      <div className="photo-section">
        <HeaderCard id={1} avatar="fff" username="rr" whatCreated="ff" whenCreated="ss"></HeaderCard>
      </div>
    </div>
  );
};

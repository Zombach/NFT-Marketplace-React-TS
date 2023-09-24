import './Hero.scss';
import { ReactComponent as EllipseBlack } from './assets/ellipseBlack.svg';
import { ReactComponent as Line } from './assets/line.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Play } from './assets/play.svg';

import { HeaderCard } from '@components/Cards/HeaderCard/HeaderCard';

export const Hero = () => {
  return (
    <div id="home-page-container">
      <div className="container">
        <div className="home-page-header">
          <div className="left">
            <h2 className="main-text">Discover, collect, & sell NFTs</h2>
            <p className="text">Copy Discover the Most Premium, Unique and Exclusive NFT Collections</p>
            <div className="button-icon">
              <Link to="/marketplace" className="btn">
                <span className="text-b">Explore</span>
              </Link>
              <Link to="/create-nft" className="btn white">
                <span className="text-b black">Create</span>
              </Link>
            </div>
            <div className="line-home">
              <Line />
            </div>
            <div className="learn-more-section">
              <div>
                <EllipseBlack />
                <Play className="play" />
              </div>
              <a href="#video" className="learn-more">
                Learn more about BNB
              </a>
            </div>
          </div>
        </div>
        <div>
          <HeaderCard></HeaderCard>
        </div>
      </div>
    </div>
  );
};

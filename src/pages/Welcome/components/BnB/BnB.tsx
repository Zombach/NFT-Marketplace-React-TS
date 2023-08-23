import './BnB.scss';
import { ReactComponent as Background } from './assets/background.svg';
import { ReactComponent as BnBBase } from './assets/bnb-base.svg';
import { ReactComponent as BnBMini } from './assets/bnb-mini.svg';
import { ReactComponent as Img } from './assets/img.svg';
import PictureBackground from './assets/background.jpg';
import React, { type FC } from 'react';

interface BnBProps {
  className: string;
}

export const BnB: FC<BnBProps> = ({ className }) => {
  return (
    <div className={className}>
      <Background className="background" />
      <img className="picture-background" src={PictureBackground} alt="p-b" />
      <div className="picture-block">
        <Img className="picture" />
        <BnBMini className="bnb-mini" />
        <BnBBase className="bnb-base part-1" />
        <BnBBase className="bnb-base part-2" />
      </div>
      <div className="text-block">
        <h3 className="h3">Buy Crypto in Minutes</h3>
        <span className="text">Enjoy the world’s cryptocurrency exchange at your fingertips</span>
      </div>
    </div>
  );
};

export default BnB;

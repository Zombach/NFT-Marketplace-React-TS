import './BnB.scss';
import { ReactComponent as Background } from './assets/background.svg';
import { ReactComponent as BackgroundImg } from './assets/background-img.svg';
import { ReactComponent as BnBBase } from './assets/b-n-b-base.svg';
import { ReactComponent as BnBMini } from './assets/b-n-b-mini.svg';
import { ReactComponent as Img } from './assets/img.svg';
import React, { type FC } from 'react';

interface BnBProps {
  className: string;
}

export const BnB: FC<BnBProps> = ({ className }) => {
  return (
    <div className={className}>
      <Background className="background" />
      <div className="picture-block">
        <Img className="picture" />
        <BackgroundImg className="background" />
      </div>
      <div className="text-block">
        <h3 className="h3">Buy Crypto in Minutes</h3>
        <span className="t">Enjoy the world’s cryptocurrency exchange at your fingertips</span>
      </div>
    </div>
  );
};

export default BnB;

/*
<Background className="background" />     
*/

import './BnB.scss';
import { ReactComponent as Background } from './assets/background.svg';
import { ReactComponent as BackgroundImg } from './assets/background-img.svg';
import { ReactComponent as BnBBase } from './assets/b-n-b-base.svg';
import { ReactComponent as BnBMini } from './assets/b-n-b-mini.svg';
import { ReactComponent as Img } from './assets/img.svg';
import React, { type FC } from 'react';

export const BnB: FC = () => {
  return (
    <div className="b-n-b">
      <Background className="background" />
      <div className="picture-block">
        <Img className="picture" />
        <BackgroundImg className="picture-background" />
      </div>
      <div></div>
    </div>
  );
};

export default BnB;

/*
<BnBMini className="b-n-b-mini" />
      <BnBBase className="b-n-b-base" />
*/

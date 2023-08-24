import './Subscribe.scss';
import { ReactComponent as Send } from './assets/send.svg';
import Button from '@components/ButtonBox/ButtonBox';
import React, { type FC } from 'react';
import Svg from '@components/ButtonBox/components/SvgBox/SvgBox';

export const Subscribe: FC = () => {
  return (
    <div className="subscribe">
      <div className="label">
        <Button buttonClassName="btn">Subscribe and get news</Button>
      </div>
      <div className="block">
        <div className="root">
          <div className="label">
            <p className="text">Email</p>
          </div>
          <div className="base">
            <input className="input" placeholder="placeholder..." />
            <Button buttonClassName="btn" SvgBox={<Svg className="adornment" svgClassName="send" SvgElement={Send} />}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

import './Subscribe.scss';
import { ReactComponent as Send } from './assets/Send.svg';
import React, { type FC } from 'react';

export const Subscribe: FC = () => {
  return (
    <div className="subscribe">
      <div className="label">
        <button className="btn">Subscribe and get news</button>
      </div>
      <div className="block">
        <div className="root">
          <div className="label">
            <p className="text">Email</p>
          </div>
          <div className="base">
            <input className="input" placeholder="placeholder..." />
            <div className="adornment">
              <Send className="send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
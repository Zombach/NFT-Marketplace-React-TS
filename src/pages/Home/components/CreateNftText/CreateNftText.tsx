import { ReactComponent as Line } from './assets/line.svg';
import React from 'react';

import './CreateNftText.scss';

export const CreateNftText = () => {
  return (
    <div id="create-nft-container">
      <div className="grid">
        <div className="text-info big">
          Create and <br />
          sell your NFTs
        </div>
        <div className="container">
          <div className="text-info">
            Create
            <div className="text-info mini">Creative building blocks for BnB.</div>
          </div>
          <div className="line-rotate mobile-only"></div>
          <Line className="desktop-only"></Line>
          <div className="text-info">
            Collect
            <div className="text-info mini">Unearth NFTs for your growing collection.</div>
          </div>
          <div className="line-rotate mobile-only"></div>
          <Line className="desktop-only"></Line>
          <div className="text-info">
            Sell
            <div className="text-info mini">Your NFTs will shine in our marketplace.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

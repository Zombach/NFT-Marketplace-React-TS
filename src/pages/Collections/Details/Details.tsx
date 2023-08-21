import './Details.scss';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { ReactComponent as ShareIcon } from './assets/share.svg';
import { TextType } from '@components/Button/components/Text/Text';
import AuthoredBy from '@components/AuthoredBy/AuthoredBy';
import Avatar from '@components/Avatar/Avatar';
import AvatarImg from '@components/Avatar/assets/avatar-mock.jpg';
import Button from '@components/Button/Button';
import Image from './assets/details-img.jpg';
import React, { type FC } from 'react';

export const Details: FC = () => {
  return (
    <div className="details-page">
      <div className="header-img">
        <img src={Image} alt=""></img>
      </div>
      <section className="details-page-section">
        <div className="details-page-section-left-part">
          <Avatar src={AvatarImg}></Avatar>
          <h2>Bored Ape Yacht Club</h2>
          <AuthoredBy username={'@vitaxaOv'}></AuthoredBy>
          <span className="collection-desc">
            A handcrafted collection of 10,000 characters developed by artist DirtyRobot. Each with their own identity to be discovered within the
            wider stories of RENGA. In its purest form, RENGA is the art of storytelling.
          </span>
          <div className="profile-buttons">
            <Button textType={TextType.Span} buttonClassName="create-community-button">
              Create community marketplace
            </Button>
            <div className="profile-buttons-right">
              <Button buttonClassName="bid-button">Place bid</Button>
              <Button className="share-button" Svg={ShareIcon}></Button>
            </div>
          </div>
        </div>
        <div className="details-page-section-right-part thin-block-border">
          <div className="details-item">
            <span>Floor</span>
            <EthereumPrice value={72}></EthereumPrice>
          </div>
          <div className="details-item">
            <span>Total volume</span>
            <EthereumPrice value={794.6}></EthereumPrice>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;

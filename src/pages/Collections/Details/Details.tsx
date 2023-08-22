import './Details.scss';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { type FC } from 'react';
import { ReactComponent as ShareIcon } from './assets/share.svg';
import { TextType } from '@components/Button/components/Text/Text';
import { ReactComponent as ViewIcon } from './assets/view.svg';
import { collection } from '../../../resources/moq/Collections';
import { getShortAddress } from '../../../helpers';
import { useParams } from 'react-router-dom';
import AuthoredBy from '@components/AuthoredBy/AuthoredBy';
import Avatar from '@components/Avatar/Avatar';
import Button from '@components/Button/Button';
import Image from './assets/details-img.jpg';

export const Details: FC = () => {
  const { profileId } = useParams();

  const getCollection = (id: string) => {
    return collection(id);
  };

  const item = getCollection(profileId as string);

  return (
    <div className="details-page">
      <div className="header-img">
        <img src={Image} alt=""></img>
      </div>
      <section className="details-page-section">
        <div className="details-page-section-left-part">
          <Avatar src={item.avatar}></Avatar>
          <h2>{item.name}</h2>
          <AuthoredBy username={item.userName}></AuthoredBy>
          <span className="collection-desc">{item.description}</span>
          <div className="profile-buttons">
            <Button textType={TextType.Span} buttonClassName="create-community-button primary-btn">
              Create community marketplace
            </Button>
            <div className="profile-buttons-right">
              <Button buttonClassName="bid-button primary-2-btn">Place bid</Button>
              <Button className="share-button" Svg={ShareIcon}></Button>
            </div>
          </div>
        </div>
        <div className="details-page-section-right-part thin-block-border">
          <div className="details-item">
            <span>Floor</span>
            <EthereumPrice value={item.floorPrice}></EthereumPrice>
          </div>
          <div className="details-item">
            <span>Total volume</span>
            <EthereumPrice value={item.totalVolume}></EthereumPrice>
          </div>
          <div className="details-item">
            <span>Items</span>
            <div className="details-item-right-part">{item.countItems}</div>
          </div>
          <div className="details-item">
            <span>Owners</span>
            <div className="details-item-right-part">{item.ownersCount}</div>
          </div>
          <div className="details-item">
            <span>Address</span>
            <div className="details-item-right-part">
              <span>{getShortAddress(item.address)}</span>
              <ViewIcon></ViewIcon>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;

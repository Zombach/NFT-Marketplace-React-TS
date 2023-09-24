import './CreatorProfile.scss';
import { CardsFragment } from '@pages/Marketplace/CardsFragment/CardsFragment';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { ReactComponent as ViewIcon } from '@components/Profile/assets/view.svg';
import { cards } from '@resources/moq/Marketplace';
import { creator } from '@resources/moq/Creators';
import { getShortAddress } from '@src/helpers';
import { useParams } from 'react-router-dom';
import CollectionsHeader from '@components/CollectionsHeader/CollectionsHeader';
import CreatorProfileSwitch from './components/CreatorProfileSwitch/CreatorProfileSwitch';
import ExtraInfoItem from '@components/Profile/components/ExtraInfoItem/ExtraInfoItem';
import HeaderImg from './assets/creator-header-img.jpg';
import Profile from '@components/Profile/Profile';
import React, { type FC, useState } from 'react';

export const CreatorProfile: FC = () => {
  const { profileId } = useParams();
  const [isTable, setIsTable] = useState<boolean>(false);

  const getCollection = (id: string) => {
    return creator(id);
  };

  const switchFirstItemAction = () => {};
  const switchSecondItemAction = () => {};
  const switchThirdItemAction = () => {};
  const switchFourthItemAction = () => {};

  const item = getCollection(profileId as string);
  return (
    <>
      <Profile
        headerImg={HeaderImg}
        avatar={item.avatar}
        headerName={item.userName}
        desc={item.description}
        buttonsClassName="creator-profile-buttons"
        buttonLeftText={'Follow'}
        buttonRightText={'Message'}>
        <ExtraInfoItem leftText={'Followers'} RightItem={<div className="extra-info-item-right-part">{item.followersCount}</div>}></ExtraInfoItem>
        <ExtraInfoItem leftText={'Following'} RightItem={<div className="extra-info-item-right-part">{item.followingCount}</div>}></ExtraInfoItem>
        <ExtraInfoItem leftText={'Earned'} RightItem={<EthereumPrice value={item.earned} />}></ExtraInfoItem>
        <ExtraInfoItem
          leftText={'Address'}
          RightItem={
            <div className="details-item-right-part">
              <span>{getShortAddress(item.address)}</span>
              <ViewIcon></ViewIcon>
            </div>
          }></ExtraInfoItem>
      </Profile>
      <div className="market-place-section">
        <div className="cards-header">
          <h2>Products</h2>
          <CreatorProfileSwitch
            firstItemAction={switchFirstItemAction}
            secondItemAction={switchSecondItemAction}
            thirdItemAction={switchThirdItemAction}
            switchFirstItemAction={switchFourthItemAction}></CreatorProfileSwitch>
        </div>
        <CollectionsHeader />
        <CardsFragment cards={cards} isTable={isTable} />
      </div>
    </>
  );
};

export default CreatorProfile;

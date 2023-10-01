import './CreatorProfile.scss';
import { CardsFragment } from '@pages/Marketplace/CardsFragment/CardsFragment';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { type FC, useState } from 'react';
import { ReactComponent as ViewIcon } from '@components/Profile/assets/view.svg';
import { checkOnDesktopOnly, getShortAddress } from '@src/helpers';
import { creator } from '@resources/moq/Creators';
import { initSwitchItems } from './dispatcher';
import { useGetUserProductsQuery } from '@src/features/api/productsApi';
import { useGetUserQuery } from '@src/features/api/usersApi';
import { useParams } from 'react-router-dom';
import CollectionsHeader from '@components/CollectionsHeader/CollectionsHeader';
import ExtraInfoItem from '@components/Profile/components/ExtraInfoItem/ExtraInfoItem';
import HeaderImg from './assets/creator-header-img.jpg';
import Profile from '@components/Profile/Profile';
import Switch from '@components/Switch/Switch';

export type UrlParams = {
  profileId: string;
};

export const CreatorProfile: FC = () => {
  const { profileId } = useParams<keyof UrlParams>() as UrlParams;
  const [isTable, setIsTable] = useState<boolean>(false);
  const { data: products } = useGetUserProductsQuery(profileId);
  const { data: user } = useGetUserQuery(profileId);
  const items = initSwitchItems();

  return (
    user && (
      <>
        <Profile
          headerImg={HeaderImg}
          headerName={user!.name}
          desc={user!.description ?? ''}
          buttonsClassName="creator-profile-buttons"
          buttonLeftText={'Follow'}
          buttonRightText={'Message'}
          avatar={user!.avatar}
          username={user!.email}>
          <ExtraInfoItem leftText={'Followers'} RightItem={<div className="extra-info-item-right-part">{100}</div>}></ExtraInfoItem>
          <ExtraInfoItem leftText={'Following'} RightItem={<div className="extra-info-item-right-part">{100}</div>}></ExtraInfoItem>
          <ExtraInfoItem leftText={'Earned'} RightItem={<EthereumPrice value={100} />}></ExtraInfoItem>
          <ExtraInfoItem
            leftText={'Address'}
            RightItem={
              <div className="details-item-right-part">
                {user!.address && <span>{getShortAddress(user!.address)}</span>}
                <ViewIcon></ViewIcon>
              </div>
            }></ExtraInfoItem>
        </Profile>
        <div className="market-place-section">
          <div className="cards-header">
            <h2>Products</h2>
            <Switch items={items} activeItem={1}></Switch>
          </div>
          {checkOnDesktopOnly() && <CollectionsHeader />}
          {products && <CardsFragment cards={products} isTable={isTable} />}
        </div>
      </>
    )
  );
};

export default CreatorProfile;

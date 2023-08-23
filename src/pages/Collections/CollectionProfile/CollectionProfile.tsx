import './CollectionProfile.scss';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { type FC } from 'react';
import { ReactComponent as ViewIcon } from '@components/Profile/assets/view.svg';
import { collection } from '@src/resources/moq/Collections';
import { getShortAddress } from '@src/helpers';
import { useParams } from 'react-router-dom';
import ExtraInfoItem from '@components/Profile/components/ExtraInfoItem/ExtraInfoItem';
import Image from './assets/details-img.jpg';
import Profile from '@components/Profile/Profile';

export const Details: FC = () => {
  const { profileId } = useParams();

  const getCollection = (id: string) => {
    return collection(id);
  };

  const item = getCollection(profileId as string);

  return (
    <>
      <Profile
        headerImg={Image}
        avatar={item.avatar}
        headerName={item.name}
        username={item.userName}
        desc={item.description}
        buttonLeftText={'Create community marketplace'}
        buttonRightText={'Place bid'}>
        <ExtraInfoItem leftText={'Floor'} RightItem={<EthereumPrice value={item.floorPrice} />}></ExtraInfoItem>
        <ExtraInfoItem leftText={'Total volume'} RightItem={<EthereumPrice value={item.totalVolume} />}></ExtraInfoItem>
        <ExtraInfoItem leftText={'Items'} RightItem={<div className="details-item-right-part">{item.countItems}</div>}></ExtraInfoItem>
        <ExtraInfoItem leftText={'Owners'} RightItem={<div className="details-item-right-part">{item.ownersCount}</div>}></ExtraInfoItem>
        <ExtraInfoItem
          leftText={'Address'}
          RightItem={
            <div className="details-item-right-part">
              <span>{getShortAddress(item.address)}</span>
              <ViewIcon></ViewIcon>
            </div>
          }></ExtraInfoItem>
      </Profile>
    </>
  );
};

export default Details;

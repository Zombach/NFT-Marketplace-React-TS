import './CollectionProfile.scss';
import { CollectionsHeader } from '@components/CollectionsHeader/CollectionsHeader';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { type FC, useState } from 'react';
import { ReactComponent as ViewIcon } from '@components/Profile/assets/view.svg';
import { checkOnDesktopOnly } from '@src/helpers';
import { collection } from '@src/resources/moq/Collections';
import { useParams } from 'react-router-dom';
import ExtraInfoItem from '@components/Profile/components/ExtraInfoItem/ExtraInfoItem';
import Image from './assets/details-img.jpg';
import Profile from '@components/Profile/Profile';

export const Details: FC = () => {
  const { profileId } = useParams();
  const [isTable, setIsTable] = useState<boolean>(false);

  const getCollection = (id: string) => {
    return collection(id);
  };

  const item = getCollection(profileId as string);

  return (
    <div className="collection-profile">
      <Profile
        headerImg={Image}
        avatar={item.user.avatar}
        headerName={item.name}
        username={item.user.name}
        desc={item.user.description ?? ''}
        buttonLeftText={'Create community marketplace'}
        buttonRightText={'Place bid'}>
        <ExtraInfoItem leftText={'Floor'} RightItem={<EthereumPrice value={100} />}></ExtraInfoItem>
        <ExtraInfoItem leftText={'Total volume'} RightItem={<EthereumPrice value={100} />}></ExtraInfoItem>
        <ExtraInfoItem leftText={'Items'} RightItem={<div className="details-item-right-part">{item.products.length}</div>}></ExtraInfoItem>
        <ExtraInfoItem leftText={'Owners'} RightItem={<div className="details-item-right-part">{32}</div>}></ExtraInfoItem>
        <ExtraInfoItem
          leftText={'Address'}
          RightItem={
            <div className="details-item-right-part">
              {/* <span>{getShortAddress(item.address)}</span> */}
              <ViewIcon></ViewIcon>
            </div>
          }></ExtraInfoItem>
      </Profile>
      <div className="market-place-section">
        <h2>More from the collection</h2>
        {checkOnDesktopOnly() && <CollectionsHeader />}
        {/* <CardsFragment cards={cards} isTable={isTable} /> */}
      </div>
    </div>
  );
};

export default Details;

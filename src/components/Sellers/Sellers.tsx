import './Sellers.scss';
import { ReactComponent as Arrow } from './assets/arrow.svg';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchResponseModel } from '@models/SearchResponseModel';
import { User, UserInfo } from '@models/User';
import { initSwitchItems } from './dispatcher';
import { sellersMock } from '@resources/moq/Creators';
import { useGetUsersQuery } from '@src/features/api/usersApi';
import ButtonBox from '@components/ButtonBox/ButtonBox';
import Switch from '@components/Switch/Switch';

export interface SellersProps {
  title: string;
  countOnPage: number;
  isNeededSwitch?: boolean;
  SellersCards: FC<SellersCardsProps>;
}

export interface SellersCardsProps {
  sellers: UserInfo[];
  skip: number;
}

export const Sellers: FC<SellersProps> = ({ title, countOnPage, isNeededSwitch = false, SellersCards }) => {
  const [skip, setSkip] = useState<number>(0);
  const [sellers, setSellers] = useState<UserInfo[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const { data: users } = useGetUsersQuery();

  useEffect(() => {
    const currentSellers = getSellers(skip, countOnPage);
    setTotalCount(currentSellers.totalCount);
    setSellers(currentSellers.items);
  }, [skip, users]);

  const onClickSkip = () => {
    if (skip + countOnPage >= totalCount) {
      setSkip(0);
    } else {
      setSkip(skip + countOnPage);
    }
  };

  const getSellers = (skip: number, count: number): SearchResponseModel<UserInfo> => {
    if (!users) {
      return { totalCount: 0, items: [] };
    }
    const response: SearchResponseModel<UserInfo> = { items: users?.slice(skip, skip + count), totalCount: users.length };
    return response;
  };

  return (
    <section className="sellers-section">
      <div className="sellers-section-header">
        <div className="sellers-section-header-left">
          <h2>{title}</h2>
          {isNeededSwitch && <Switch items={initSwitchItems()} activeItem={1}></Switch>}
        </div>
        <div className="sellers-section-header-right">
          <Link to={'../creators'}>See all</Link>
          <ButtonBox onClick={onClickSkip} SvgBox={<Arrow></Arrow>}></ButtonBox>
        </div>
      </div>
      <div className="seller-cards">
        <SellersCards sellers={sellers} skip={skip}></SellersCards>
      </div>
    </section>
  );
};

export default Sellers;

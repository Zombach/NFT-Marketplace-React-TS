import './Sellers.scss';
import { ReactComponent as Arrow } from './assets/arrow.svg';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchResponseModel } from '@models/SearchResponseModel';
import { Seller } from '@models/Seller';
import { initSwitchItems } from './dispatcher';
import { sellersMock } from '@resources/moq/Creators';
import ButtonBox from '@components/ButtonBox/ButtonBox';
import Switch from '@components/Switch/Switch';

export interface SellersProps {
  title: string;
  countOnPage: number;
  isNeededSwitch?: boolean;
  getSellerCard: (seller: Seller, skip: number) => React.ReactNode;
}

export const Sellers: FC<SellersProps> = ({ title, countOnPage, isNeededSwitch = false, getSellerCard }) => {
  const [skip, setSkip] = useState<number>(0);
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const currentSellers = getSellers(skip, countOnPage);
    setTotalCount(currentSellers.totalCount);
    setSellers(currentSellers.items);
  }, [countOnPage, skip]);

  const onClickSkip = () => {
    if (skip + countOnPage >= totalCount) {
      setSkip(0);
    } else {
      setSkip(skip + countOnPage);
    }
  };

  const getSellers = (skip: number, count: number): SearchResponseModel<Seller> => {
    const response: SearchResponseModel<Seller> = { items: sellersMock.slice(skip, skip + count), totalCount: sellersMock.length };
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
        {sellers.map((seller, i) => {
          return getSellerCard(seller, i + skip);
        })}
      </div>
    </section>
  );
};

export default Sellers;

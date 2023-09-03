import './Sellers.scss';
import { ReactComponent as Arrow } from './assets/arrow.svg';
import { FC, useEffect, useState } from 'react';
import { FindResponseModel } from '@models/FindResponseModel';
import { Link } from 'react-router-dom';
import { Seller } from '@models/Seller';
import { sellersMock } from '@resources/moq/Creators';
import ButtonBox, { ButtonBoxProps } from '@components/ButtonBox/ButtonBox';
import Switch, { SwitchItem } from '@components/Switch/Switch';

export interface SellersProps {
  title: string;
  countOnPage: number;
  getSellerCard: (seller: Seller, number: number) => React.ReactNode;
}

export const Sellers: FC<SellersProps> = ({ title, countOnPage, getSellerCard }) => {
  const [skip, setSkip] = useState<number>(0);
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const onClickSkip = () => {
    if (skip + countOnPage >= totalCount) {
      setSkip(0);
    } else {
      setSkip(skip + countOnPage);
    }
  };

  const firstItem: SwitchItem = {
    onClick: function (): {} {
      throw new Error('Function not implemented.');
    },
    id: '1 day',
    item: '1 day',
  };
  const secondItem: SwitchItem = {
    onClick: function (): {} {
      throw new Error('Function not implemented.');
    },
    id: '7 days',
    item: '7 days',
  };

  const thirdItem: SwitchItem = {
    onClick: function (): {} {
      throw new Error('Function not implemented.');
    },
    id: '30 days',
    item: '30 days',
  };

  const getSellers = (skip: number, count: number): FindResponseModel<Seller> => {
    const response: FindResponseModel<Seller> = { items: sellersMock.slice(skip, skip + count), totalCount: sellersMock.length };
    return response;
  };

  useEffect(() => {
    const currentSellers = getSellers(skip, countOnPage);
    setTotalCount(currentSellers.totalCount);
    setSellers(currentSellers.items);
  }, [countOnPage, skip]);

  return (
    <section className="sellers-section">
      <div className="sellers-section-header">
        <h2>{title}</h2>
        <Switch items={[firstItem, secondItem, thirdItem]} defaultState={1}></Switch>
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

import './EthereumPrice.scss';
import { ReactComponent as EthereumIcon } from '../assets/ethereum-black.svg';
import { FC } from 'react';

export interface EthereumPriceProps {
  value: number;
  children?: string;
}

export const EthereumPrice: FC<EthereumPriceProps> = ({ value, children }) => {
  return (
    <div className="ethereum-price">
      <EthereumIcon className="" />
      <div className="ethereum-price-value-currency">{value} BNB</div>
      {children ? (
        <>
          <div></div>
          <div className="ethereum-price-extra">{children}</div>
        </>
      ) : null}
    </div>
  );
};

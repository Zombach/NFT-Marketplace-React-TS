import './EthereumPrice.scss';
import { ReactComponent as EthereumIcon } from '../assets/ethereum-black.svg';
import { FC } from 'react';

export interface EthereumPriceProps {
  value: number | string;
  children?: string | React.ReactNode;
  title?: string;
}

export const EthereumPrice: FC<EthereumPriceProps> = ({ value, children, title }) => {
  return (
    <div className="ethereum-price">
      {title && (
        <>
          <div></div>
          <div className="ethereum-title">{title}</div>
        </>
      )}
      <EthereumIcon className="ethereum-icon" />
      <div className="ethereum-price-value-currency">{value} BNB</div>
      {children &&
        (typeof children === 'string' ? (
          <>
            <div></div>
            <div className="ethereum-price-extra">{children}</div>
          </>
        ) : (
          <>
            <div></div>
            {children}
          </>
        ))}
    </div>
  );
};

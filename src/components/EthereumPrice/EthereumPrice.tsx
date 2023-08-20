import './EthereumPrice.scss';
import { ReactComponent as EthereumIcon } from './assets/ethereum-black.svg';

export interface EthereumPriceProps {
  value: number;
  children?: string;
}

export const EthereumPrice = (props: EthereumPriceProps) => {
  return (
    <div className="ethereum-price">
      <EthereumIcon className="" />
      <div className="ethereum-price-value-currency">{props.value} BNB</div>
      {props.children ? (
        <>
          <div></div>
          <div className="ethereum-price-extra">{props.children}</div>
        </>
      ) : null}
    </div>
  );
};

import './EthereumPrice.scss';
import { ReactComponent as EthereumIcon } from './assets/ethereum.svg';

export interface EthereumPriceProps {
  value: number;
  children?: string;
}

export const EthereumPrice = (props: EthereumPriceProps) => {
  return (
    <div className="ethereum-price">
      <div>
        <EthereumIcon className="" />
        <span className="ethereum-price-value-currency">{props.value} BNB</span>
      </div>
      {props.children ? <span className="ethereum-price-bottom">{props.children}</span> : null}
    </div>
  );
};

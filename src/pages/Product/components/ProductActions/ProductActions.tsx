import './ProductActions.scss';
import { ReactComponent as EthereumIcon } from '@components/EthereumPrice/assets/ethereum-black.svg';
import { FC } from 'react';
import { ReactComponent as LineIcon } from './assets/icons/line.svg';
import { ReactComponent as PictureIcon } from './assets/icons/picture.svg';
import { ReactComponent as ReloadIcon } from './assets/icons/reload.svg';
import { ReactComponent as ViewIcon } from './assets/icons/view-black.svg';
import ProductActionItem from '../ProductActionItem/ProductActionItem';

export const ProductActions: FC = () => {
  return (
    <div className="product-actions thin-block-border">
      <div className="product-actions-part">
        <ProductActionItem iconSvg={EthereumIcon}>Ethereum (ERC-721)</ProductActionItem>
        <ProductActionItem iconSvg={ViewIcon}>View on Etherscan</ProductActionItem>
      </div>
      <LineIcon className="desktop-only"></LineIcon>
      <div className="product-actions-part">
        <ProductActionItem iconSvg={PictureIcon}>Open original</ProductActionItem>
        <ProductActionItem iconSvg={ReloadIcon}>Refresh Metadata</ProductActionItem>
      </div>
    </div>
  );
};

export default ProductActions;

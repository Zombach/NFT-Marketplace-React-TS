import './ProductSection.scss';
import { ReactComponent as EthereumIcon } from '@components/EthereumPrice/assets/ethereum-black.svg';
import { EthereumPrice } from '@components/EthereumPrice/EthereumPrice';
import { FC } from 'react';
import { ReactComponent as LineIcon } from './assets/line.svg';
import { ReactComponent as PictureIcon } from './assets/picture.svg';
import { ReactComponent as ReloadIcon } from './assets/reload.svg';
import { TextType } from '@components/Text/Text';
import { ReactComponent as ViewIcon } from './assets/view-black.svg';
import Avatar from '@components/Avatar/Avatar';
import AvatarMock from '@components/Avatar/assets/avatar-mock.jpg';
import Button from '@components/Button/Button';
import PriceCard from '../PriceCard/PriceCard';
import ProductActionItem from '../ProductActionItem/ProductActionItem';
import ProductImg from './assets/product-mock.svg';

export const ProductSection: FC = () => {
  return (
    <section className="product-section">
      <img src={ProductImg} alt="productImage"></img>
      <div className="product-section-right-part">
        <h2>Bored Ape Yacht Club</h2>
        <div className="authored-by">
          <Avatar src={AvatarMock}></Avatar>
          <div>
            <span className="created-by">created by: </span>
            <span>@marterium</span>
          </div>
        </div>
        <div className="product-price-block thin-block-border">
          <div className="product-price-block-top">
            <PriceCard title="Price" price={0.49} bottomText="≈ $140.05"></PriceCard>
            <PriceCard title="Highest floor bid" price={2.2} bottomText="by marterium"></PriceCard>
          </div>
          <div className="last-price">
            <span>Last sale price:</span>
            <EthereumPrice value={123}></EthereumPrice>
          </div>
          <div className="product-price-buttons">
            <Button textType={TextType.Span} buttonClassName="buy-button">
              Buy now for 2.2 BNB
            </Button>
            <Button buttonClassName="bid-button">Place bid</Button>
          </div>
        </div>
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
      </div>
    </section>
  );
};

export default ProductSection;

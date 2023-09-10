import './CartModalItems.scss';
import { CardMarketplace } from '@resources/moq/Marketplace';
import React, { FC } from 'react';

export interface CartModalProps {
  item: CardMarketplace;
}

export const CartModalItems: FC<CartModalProps> = ({ item }) => {
  return (
    <div className="cart-item-container">
      <img src={item.nftImage} alt="" />
    </div>
  );
};

export default CartModalItems;

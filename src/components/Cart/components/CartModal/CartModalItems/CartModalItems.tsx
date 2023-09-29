import './CartModalItems.scss';
import { ReactComponent as CloseIcon } from './assets/close.svg';
import { ProductItem, changeProductCount, removeFromCart } from '@components/Cart/CartSlice';
import { log } from 'console';
import { useDispatch } from 'react-redux';
import React, { FC, useEffect, useState } from 'react';
import Select from '@components/Inputs/Select/Select';

export interface CartModalProps {
  item: ProductItem;
}

export const CartModalItems: FC<CartModalProps> = ({ item }) => {
  const [defaultCount, setDefaultCount] = useState<number | string>(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    if (defaultCount) {
      dispatch(changeProductCount({ productId: Number(item.id), count: Number(defaultCount) }));
    }
  }, [defaultCount]);

  return (
    <div className="cart-item-container">
      <img src={item.img} alt="nft" />
      <div className="cart-item-description">
        <div className="description-text">
          <p>{item.name}</p>
          <Select
            options={Array.from({ length: 10 }, (_, index) => index + 1)}
            defaultValue={defaultCount}
            id={'itemsCount'}
            name={'itemsCount'}
            placeholder={'Items'}
            isRequired={false}
            setSelectedValue={(value: string | number) => setDefaultCount(value)}
          />
        </div>
        <div className="close-btn">
          <CloseIcon
            onClick={() => {
              dispatch(removeFromCart(item));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartModalItems;

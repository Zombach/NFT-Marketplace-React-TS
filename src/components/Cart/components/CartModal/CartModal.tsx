import './CartModal.scss';
import { Link, useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartItemsSum } from '@components/Cart/CartSlice';
import { useSelector } from 'react-redux';
import ButtonBox from '@components/ButtonBox/ButtonBox';
import CartModalItems from './CartModalItems/CartModalItems';
import React, { FC } from 'react';

export interface CartModalProps {
  onClose: () => void;
}

export const CartModal: FC<CartModalProps> = ({ onClose }) => {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartItemsSum);
  const navigate = useNavigate();

  return (
    <div className="cart-modal-section">
      {items?.length > 0 ? (
        <>
          {items.map((item) => (
            <CartModalItems key={item.id} item={item} />
          ))}
          <div className="total-price">
            <span>Total price</span>
            <span>{totalPrice}$</span>
          </div>
        </>
      ) : (
        <div className="empty-cart">Cart is empty</div>
      )}
      <div className="cart-buttons">
        <ButtonBox className="btn-box" onClick={onClose} buttonClassName="cart-btn primary-btn">
          Continue to searching
        </ButtonBox>
        <ButtonBox
          className="btn-box"
          buttonClassName={items?.length > 0 ? 'cart-btn primary-2-btn' : 'cart-btn disabled-btn'}
          disabled={items?.length === 0}
          onClick={() => {
            onClose();
            navigate('/checkout');
          }}>
          Check out
        </ButtonBox>
      </div>
    </div>
  );
};

export default CartModal;

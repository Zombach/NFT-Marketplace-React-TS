import { FC } from 'react';

export interface CartModalProps {
  onClose: () => void;
}

export const CartModal: FC<CartModalProps> = ({ onClose }) => {
  return <div className="cart-modal-section">ddd</div>;
};

export default CartModal;


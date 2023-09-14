import './Checkout.scss';
import CheckoutFragment from './components/CheckoutFragment/CheckoutFragment';
import React, { type FC } from 'react';

export const Checkout: FC = () => {
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <CheckoutFragment />
    </div>
  );
};

export default Checkout;

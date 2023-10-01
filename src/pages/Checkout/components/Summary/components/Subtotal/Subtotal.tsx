import './Subtotal.scss';
import React, { type FC } from 'react';

export interface SubtotalProps {
  title: string;
  price: string;
  isTotal?: boolean;
}

export const Subtotal: FC<SubtotalProps> = ({ title, price, isTotal = false }) => {
  return (
    <div className={isTotal ? 'subtotal bg-grey' : 'subtotal'}>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};

export default Subtotal;

import './Payment.scss';
import { RadioButton } from '@components/RadioButton/RadioButton';
import Card from './components/Card/Card';
import React, { type FC } from 'react';

export const CustomerInfo: FC = () => {
  return (
    <div className="payment-section">
      <Card />
      <RadioButton textLeft={'PayPal'} />
      <RadioButton textLeft={'Bank transfer'} />
      <RadioButton textLeft={'Apple pay'} />
    </div>
  );
};

export default CustomerInfo;

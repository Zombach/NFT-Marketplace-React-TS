import './Card.scss';
import { RadioButton } from '@components/RadioButton/RadioButton';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC } from 'react';

export const Card: FC = () => {
  return (
    <div className="payment-section">
      <RadioButton textLeft={'Credit card'} />
      <InputText id={'cardNumber'} name={'cardNumber'} placeholder={'Card number'} />
      <div className="credentials">
        <InputText id={'expDate'} name={'Exp.date'} placeholder={'Exp.day'} />
        <div className="code">
          <InputText id={'securityCode'} name={'securityCode'} placeholder={'CVC'} />
        </div>
      </div>
    </div>
  );
};

export default Card;

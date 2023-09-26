import './Payment.scss';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC } from 'react';

export const CustomerInfo: FC = () => {
  return (
    <div className="payment-section">
      <div className="payment-method">
        <div className="circle"></div>
        <span>Credit card</span>
      </div>
      <InputText id={'cardNumber'} name={'cardNumber'} placeholder={'Card number'} />
      <div className="credentials">
        <InputText id={'expDate'} name={'expDate'} placeholder={'Exp.day'} />
        <div className="code">
          <InputText id={'securityCode'} name={'code'} placeholder={'CVC'} />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;

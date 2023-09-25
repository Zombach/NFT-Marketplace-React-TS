import './Payment.scss';
import { PaymentModel } from '@models/PaymentModel';
import { useForm } from 'react-hook-form';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC } from 'react';

export const CustomerInfo: FC = () => {
  const { register } = useForm<PaymentModel>();

  return (
    <div className="payment-section">
      <div className="payment-method">
        <div className="circle"></div>
        <span>Credit card</span>
      </div>
      <InputText id={'cardNumber'} name={'creditCard'} placeholder={'Card number'} register={register} regName="cardNumber" />
      <div className="credentials">
        <InputText id={'expDate'} name={'Exp.date'} placeholder={'Exp.day'} register={register} regName="expDate" />
        <div className="code">
          <InputText id={'securityCode'} name={'securityCode'} placeholder={'CVC'} register={register} regName="securityCode" />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;

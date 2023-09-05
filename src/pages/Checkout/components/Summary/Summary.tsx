import './Summary.scss';
import { ReactComponent as SecurityIcon } from './assets/security.svg';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC } from 'react';
import Subtotal from './components/Subtotal/Subtotal';

export const Summary: FC = () => {
  return (
    <div className="summary-section">
      <div className="summary">
        <Subtotal title="Subtotal" price={'32.00'} />
        <Subtotal title="VAT" price={'32.00'} />
        <Subtotal title="Total" price={'32.00'} isTotal={true} />
      </div>
      <InputText id={'discount'} name={'discount'} placeholder={'Add coupon to get discount'} />
      <input form="form-checkout" className="button-pay primary-2-btn" type="submit" value="Pay $51.5" />
      <div className="payments">
        <SecurityIcon />
        <span>Payments are secured and encrypted</span>
      </div>
    </div>
  );
};

export default Summary;

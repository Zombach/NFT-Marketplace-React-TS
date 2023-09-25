import './Summary.scss';
import { ReactComponent as SecurityIcon } from './assets/security.svg';
import { SummaryModel } from '@models/SummaryModel';
import { getFormattedPrice } from '@src/utils/GetFormattedPrice';
import { selectCartItemsSum } from '@components/Cart/CartSlice';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC } from 'react';
import Subtotal from './components/Subtotal/Subtotal';

export const Summary: FC = () => {
  const totalPrice = useSelector(selectCartItemsSum);
  const { register } = useForm<SummaryModel>();
  return (
    <div className="summary-section">
      <div className="summary">
        <Subtotal title="Subtotal" price={getFormattedPrice(totalPrice)} />
        <Subtotal title="Total" price={getFormattedPrice(totalPrice)} isTotal={true} />
      </div>
      <InputText id={'discount'} name={'discount'} placeholder={'Add coupon to get discount'} register={register} regName="discount" />
      <input form="form-checkout" className="button-pay primary-2-btn" type="submit" value={`Pay ${getFormattedPrice(totalPrice)}`} />
      <div className="payments">
        <SecurityIcon />
        <span>Payments are secured and encrypted</span>
      </div>
    </div>
  );
};

export default Summary;

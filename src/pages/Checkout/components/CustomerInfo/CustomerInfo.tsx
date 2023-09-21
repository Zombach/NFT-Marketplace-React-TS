import './CustomerInfo.scss';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';

export interface CustomerInfoModel {
  name: string;
  lastName: string;
  company: string;
  city: string;
  postalCode: string;
  street: string;
  country: string;
  vat: string;
}


export const CustomerInfo: FC = () => {
   
  const { register } = useForm<CustomerInfoModel>();
  
  return (
    <div className="customer-info-section">
      <InputText id={'name'} name={'name'} placeholder={'Name'} register={register} regName="name" />
      <InputText id={'lastName'} name={'lastName'} placeholder={'Last name'} register={register} regName="lastName" />
      <InputText id={'company'} name={'company'} placeholder={'Company'} register={register} regName="company" />
      <div className="city-code-container">
        <div className="city">
          <InputText id={'city'} name={'city'} placeholder={'City'} register={register} regName="city" />
        </div>
        <InputText id={'postalCode'} name={'postalCode'} placeholder={'Postal Code'} register={register} regName="postalCode" />
      </div>
      <InputText id={'street'} name={'street'} placeholder={'Street'} register={register} regName="street" />
      <InputText id={'country'} name={'country'} placeholder={'Country'} register={register} regName="country" />
      <InputText id={'vat'} name={'vat'} placeholder={'VAT (optional)'} register={register} regName="vat" />
    </div>
  );
};

export default CustomerInfo;

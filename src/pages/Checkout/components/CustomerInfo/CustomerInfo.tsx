import './CustomerInfo.scss';
import { ObjectSchema } from 'yup';
import { useForm } from 'react-hook-form';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC, useState } from 'react';


export const CustomerInfo: FC = () => {
  return (
    <div className="customer-info-section">
      <InputText id={'name'} name={'name'} placeholder={'Name'}/>
      <InputText id={'lastName'} name={'lastName'} placeholder={'Last name'}/>
      <InputText id={'company'} name={'company'} placeholder={'Company'}/>
      <div className="city-code-container">
        <div className="city">
          <InputText id={'city'} name={'city'} placeholder={'City'}/>
        </div>
        <InputText id={'postalCode'} name={'postalCode'} placeholder={'Postal Code'}/>
      </div>
      <InputText id={'street'} name={'street'} placeholder={'Street'}/>
      <InputText id={'country'} name={'country'} placeholder={'Country'}/>
      <InputText id={'vat'} name={'vat'} placeholder={'VAT (optional)'}/>
    </div>
  );
};

export default CustomerInfo;

import './AdditionalInfo.scss';
import { useForm } from 'react-hook-form';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC, useState } from 'react';

export interface CustomerInfoModel {
  description: string;
}

export const CustomerInfo: FC = () => {
  const { register } = useForm<CustomerInfoModel>();
  return (
    <div className="additional-info-section">
      <InputText
        id={'description'}
        name={'description'}
        placeholder={'Enter a description here...'}
        isRequired={true}
        multiline={true}
        register={register}
        regName="description"
      />
    </div>
  );
};

export default CustomerInfo;

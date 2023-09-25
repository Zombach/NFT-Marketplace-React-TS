import './ContactInfo.scss';
import { useForm } from 'react-hook-form';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC } from 'react';

export interface ContactInfoModel {
  email: string;
  phone: string;
}

export const ContactInfo: FC = () => {
  const { register } = useForm<ContactInfoModel>();

  return (
    <div className="contact-info-section">
      <InputText id={'email'} name={'email'} placeholder={'Email'} register={register} regName="email" />
      <InputText id={'phone'} name={'phone'} placeholder={'Phone'} register={register} regName="phone" />
    </div>
  );
};

export default ContactInfo;

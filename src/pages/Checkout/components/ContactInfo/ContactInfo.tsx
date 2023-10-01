import './ContactInfo.scss';
import { useForm } from 'react-hook-form';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC } from 'react';

export const ContactInfo: FC = () => {
  return (
    <div className="contact-info-section">
      <InputText id={'email'} name={'email'} placeholder={'Email'} />
      <InputText id={'phone'} name={'phone'} placeholder={'Phone'} />
    </div>
  );
};

export default ContactInfo;

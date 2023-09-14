import './AdditionalInfo.scss';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC, useState } from 'react';

export const CustomerInfo: FC = () => {
  return (
    <div className="additional-info-section">
      <InputText id={'description'} name={'description'} placeholder={'Enter a description here...'} isRequired={true} multiline={true} />
    </div>
  );
};

export default CustomerInfo;

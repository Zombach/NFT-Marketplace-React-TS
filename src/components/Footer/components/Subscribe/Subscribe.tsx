import './Subscribe.scss';
import InputText from '@components/InputText/InputText';
import React, { type FC } from 'react';
import send from './assets/send.svg';

export const Subscribe: FC = () => {
  return (
    <div className="subscribe">
      <div className="label">
        <button className="btn">Subscribe and get news</button>
      </div>
      <InputText id={'footer-email'} name={'footer-email'} placeholder={'Email'} isRequired={false} icon={send} />
    </div>
  );
};

export default Subscribe;

import './EmailPassword.scss';
import { ContinueWith } from '../ContinueWith/ContinueWith';
import { Reg } from '@models/Reg';
import { TapHere } from '../TapHere/TapHere';
import { useForm } from 'react-hook-form';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC } from 'react';

export const EmailPassword: FC = () => {
  const { register } = useForm<Reg>();

  return (
    <div id="EmailPassword">
      <form className="left-block">
        <h2 className="text">Log in</h2>
        <div className="email-password-container">
          <InputText id="email" name="email" placeholder="Email / Phone number" isRequired={true} register={register} regName="email" />
          <InputText id="password" name="password" placeholder="Password" isRequired={true} register={register} regName="password" />
        </div>
        <TapHere text="Forget password?" tap="Tap here" />
        <button className="button-fill">
          <span className="text-b">Log In</span>
        </button>
        <ContinueWith />
        <div className="text-down">
          <TapHere text="Don’t have an account yet?" tap="Tap here" />
        </div>
      </form>
    </div>
  );
};

export default EmailPassword;

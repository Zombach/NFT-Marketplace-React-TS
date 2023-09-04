import './EmailPassword.scss';
import { ContinueWith } from '../ContinueWith/ContinueWith';
import { InputText } from '../../../../components/Inputs/InputText/InputText';
import { TapHere } from '../TapHere/TapHere';
import React, { type FC } from 'react';
import Select from '@components/Inputs/Select/Select';

export const EmailPassword: FC = () => {
  return (
    <div id="EmailPassword">
      <form className="left-block">
        <h2 className="text">Log in</h2>
        <div className="email-password-container">
          <InputText id="email" name="email" placeholder="Email / Phone number" isRequired={true} />
          <InputText id="password" name="password" placeholder="Password" isRequired={true} />
        </div>
        <TapHere text="Forget password?" tap="Tap here" />
        <button className="button-fill">
          <p className="text-b">Log In</p>
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

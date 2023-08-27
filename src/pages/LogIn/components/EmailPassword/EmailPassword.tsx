import './EmailPassword.scss';
import { ContinueWith } from '../ContinueWith/ContinueWith';

import { InputText } from '../../../../components/InputText/InputText';
import { TapHere } from '../TapHere/TapHere';
import React, { type FC } from 'react';

export const EmailPassword: FC = () => {
  return (
    <form className="left-block">
      <h2 className="text">Log in</h2>
      <InputText name="Email / Phone number *" value="Your email" />
      <InputText name="Password *" value="Your password" eye="eye-need" />
      <TapHere text="Forget password?" tap="Tap here" />
      <button className="button-fill">
        <p className="text-b">Log In</p>
      </button>
      <ContinueWith />
      <div className="text-down">
        <TapHere text="Don’t have an account yet?" tap="Tap here" />
      </div>
    </form>
  );
};

export default EmailPassword;

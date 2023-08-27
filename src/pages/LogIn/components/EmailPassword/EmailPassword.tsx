import './EmailPassword.scss';
import { ContinueWith } from '../ContinueWith/ContinueWith';

import { ReactComponent as EyeClosed } from './assets/eyeClosed.svg';
import { TapHere } from '../TapHere/TapHere';
import React, { type FC } from 'react';

export const EmailPassword: FC = () => {
  return (
    <form className="left-block">
      <h2 className="text">Log in</h2>
      <fieldset>
        <legend>
          Email / Phone number <span className="red-color">*</span>
        </legend>
        <div className="table">bnb1234@gmail.com</div>
      </fieldset>
      <fieldset>
        <legend>
          Password <span className="red-color">*</span>
        </legend>
        <div className="table">
          <div className="left-column">**************</div>
          <div className="right-column">
            <EyeClosed />
          </div>
        </div>
      </fieldset>
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

import './EmailPassword.scss';

import { ReactComponent as Apple } from './assets/Apple.svg';
import { ReactComponent as EyeClosed } from './assets/EyeClosed.svg';
import { ReactComponent as Google } from './assets/Google.svg';
import { ReactComponent as Line } from './assets/Line.svg';
import React, { type FC } from 'react';

export const EmailPassword: FC = () => {
  return (
    <div className="left-block">
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
      <p className="text-forget">
        Forget password?{' '}
        <button className="button">
          <span className="purple-color">Tap here</span>
        </button>
      </p>
      <button className="button-fill">
        <p className="text-b">Log In</p>
      </button>
      <div className="continue">
        <Line className="line" />
        <p className="text-continue">or continue with</p>
        <Line className="line" />
      </div>
      <div className="extra-auto-login">
        <button className="butt">
          <Google />
          <p className="text-app-goog">Google</p>
        </button>
        <button className="butt">
          <Apple />
          <p className="text-app-goog">Apple</p>
        </button>
      </div>
      <p className="text-forget down">
        Don’t have an account yet?{' '}
        <button className="button">
          <span className="purple-color">Tap here</span>
        </button>
      </p>
    </div>
  );
};

export default EmailPassword;

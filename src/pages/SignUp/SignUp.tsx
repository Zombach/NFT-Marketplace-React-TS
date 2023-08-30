import './SignUp.scss';
import { EmailPassword } from '@pages/LogIn/components/EmailPassword/EmailPassword';
import { ReactComponent as Foto } from './assets/foto.svg';
import { InputText } from '@components/InputText/InputText';
import { ReactComponent as Line } from './assets/line.svg';
import { TapHere } from '@pages/LogIn/components/TapHere/TapHere';
import React, { type FC } from 'react';

export const SignUp: FC = () => {
  return (
    <div id="sign-up-section">
      <form className="left-block">
        <h2 className="text">Sign up</h2>
        <div className="login-container">
          <InputText id="email" name="email" placeholder="Email / Phone number" isRequired={true} />
          <InputText id="password" name="password" placeholder="Password" isRequired={true} />
          <InputText id="refferal" name="refferal" placeholder="Refferal ID:" isRequired={false} className="input-group grey" />
        </div>
        <div className="one-line">
          <TapHere text="I have read and agree to BnB " tap="Terms of Service" />
          <TapHere text="and " tap="Private Policy" />
        </div>
        <button className="button-fill">
          <p className="text-b">Create personal account</p>
        </button>
      </form>
      <Line />
      <div className="foto-right">
        <Foto />
      </div>
    </div>
  );
};

export default SignUp;

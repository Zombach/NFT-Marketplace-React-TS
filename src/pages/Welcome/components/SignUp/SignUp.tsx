import './SignUp.scss';
import { ReactComponent as Apple } from './assets/Apple.svg';
import { ReactComponent as Google } from './assets/Google.svg';
import { ReactComponent as LineLeft } from './assets/LineLeft.svg';
import { ReactComponent as LineRight } from './assets/LineRight.svg';
import { ReactComponent as Man } from './assets/Man.svg';
import React, { type FC } from 'react';

interface SignUpProps {
  className: string;
}

export const SignUp: FC<SignUpProps> = ({ className }) => {
  return (
    <div className={className}>
      {/*Использовать прямое обращение к стилям тега h2, дождаться появления в dev*/}
      <h2 className="h2">Welcome to BnB!</h2>
      <button className="button">
        <Man className="icon" />
        <p className="text">Sign up with phone or email</p>
      </button>
      <div className="continue">
        <LineLeft className="line-left" />
        <p className="text">or continue with</p>
        <LineRight className="line-right" />
      </div>
      <div className="extra-auto-login">
        <button className="google">
          <Google className="icon" />
          <p className="text">Google</p>
        </button>
        <button className="apple">
          <Apple className="icon" />
          <p className="text">Apple</p>
        </button>
      </div>
      <div className="log-in">
        <p className="text">
          Already registered? <span className="part-01">Tap here to Log In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

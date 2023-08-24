import './SignUp.scss';
import { ReactComponent as Apple } from './assets/apple.svg';
import { ReactComponent as Google } from './assets/google.svg';
import { ReactComponent as LineLeft } from './assets/line-left.svg';
import { ReactComponent as LineRight } from './assets/line-right.svg';
import { ReactComponent as Man } from './assets/man.svg';
import Button from '@components/ButtonBox/ButtonBox';
import React, { type FC } from 'react';

interface SignUpProps {
  className: string;
}

export const SignUp: FC<SignUpProps> = ({ className }) => {
  return (
    <div className={className}>
      {/*Использовать прямое обращение к стилям тега h2, дождаться появления в dev*/}
      <h2 className="h2">Welcome to BnB!</h2>
      <Button SvgBox={<Man />}>Sign up with phone or email</Button>
      <div className="continue">
        <LineLeft className="line-left" />
        <p className="text">or continue with</p>
        <LineRight className="line-right" />
      </div>
      <div className="extra-auto-login">
        <Button buttonClassName="button-google" SvgBox={<Google />}>
          Google
        </Button>
        <Button buttonClassName="button-apple" SvgBox={<Apple />}>
          Apple
        </Button>
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

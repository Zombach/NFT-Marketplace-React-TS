import './SignUp.scss';
import React, { type FC } from 'react';

export const SignUp: FC = () => {
  return (
    <div className="sign-up">
      <p className="text-1">Welcome to BnB!</p>
      <p className="text-2">Already registered? Tap here to Log In</p>
    </div>
  );
};

export default SignUp;

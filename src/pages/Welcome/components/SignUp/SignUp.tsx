import './SignUp.scss';
import React, { type FC } from 'react';

export const SignUp: FC = () => {
  return (
    <div className="sign-up">
      <h2 className="h2">Welcome to BnB!</h2>
      <p className="text-2">Already registered? Tap here to Log In</p>
    </div>
  );
};

export default SignUp;

import './EmailPassword.scss';
import { ContinueWith } from '../ContinueWith/ContinueWith';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TapHere } from '../TapHere/TapHere';
import { UserLogin } from '@models/User';
import { ValidationLoginSchema } from '@pages/LogIn/LoginValidationSchema';
import { selectToken, selectUserInfo } from '@pages/LogIn/AuthSlice';
import { useLazyGetCurrentUserQuery } from '@src/features/api/usersApi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSignInMutation } from '@src/features/api/authApi';
import { yupResolver } from '@hookform/resolvers/yup';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC } from 'react';

export const EmailPassword: FC = () => {
  const methods = useForm<any>({ resolver: yupResolver(ValidationLoginSchema()) });
  const [signIn, successfully] = useSignInMutation();
  const [getCurrentUser] = useLazyGetCurrentUserQuery();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<UserLogin> = (data) => {
    signIn(data).then(() => {
      if (successfully) {
        getCurrentUser();
        navigate('/');
      }
    });
  };

  return (
    <div id="EmailPassword">
      <FormProvider {...methods}>
        <form className="left-block" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text">Log in</h2>
          <div className="email-password-container">
            <InputText id="email" name="email" placeholder="Email / Phone number" isRequired={true} />
            <InputText id="password" name="password" placeholder="Password" isRequired={true} />
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
      </FormProvider>
    </div>
  );
};

export default EmailPassword;

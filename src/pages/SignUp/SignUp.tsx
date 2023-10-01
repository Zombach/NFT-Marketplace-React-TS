import './SignUp.scss';
import { type FC, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ReactComponent as Line } from './assets/line.svg';
import { Reg } from '@models/Reg';
import { ValidationSignUp } from './ValidationSignUp';
import { yupResolver } from '@hookform/resolvers/yup';
import Checkbox from '@components/Checkbox/Checkbox';
import InputText from '@components/Inputs/InputText/InputText';
import photo from './assets/photo.png';

export interface Resp {
  accessToken: string;
}

export const SignUp: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const methods = useForm<any>({ resolver: yupResolver(ValidationSignUp()) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Reg> = (data) =>
    fetch('http://localhost:3309/api/auth/sign-in', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => localStorage.setItem('accessToken', data.accessToken));

  return (
    <div id="sign-up-section">
      <div className="photo mobile-only">
        <img src={photo} alt="" />
      </div>
      <FormProvider {...methods}>
        <form className="left-block" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text">Sign up</h2>
          <div className="login-container">
            <InputText id="email" name="email" placeholder="Email / Phone number" isRequired={true} />
            <InputText id="password" name="password" placeholder="Password" isRequired={true} />
            <InputText id="address" name="address" placeholder="Address" isRequired={true} />
          </div>
          <div>
            <Checkbox
              label={'I have read and agree to BnB Terms of Service and Private Policy'}
              onChange={(e) => {
                setIsChecked(e.target.checked);
              }}></Checkbox>
          </div>
          <button type="submit" className="button-fill">
            <p className="text-b">Create personal account</p>
          </button>
        </form>
      </FormProvider>
      <Line className="desktop-only" />
      <div className="photo desktop-only">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

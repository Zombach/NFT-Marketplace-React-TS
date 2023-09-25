import './SignUp.scss';
import { EmailPassword } from '@pages/LogIn/components/EmailPassword/EmailPassword';
import { ReactComponent as Foto } from './assets/foto.svg';

import { Creator } from '@models/Creator';
import { ReactComponent as Line } from './assets/line.svg';
import { Reg } from '@models/Reg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TapHere } from '@pages/LogIn/components/TapHere/TapHere';
import Checkbox from '@components/Checkbox/Checkbox';
import InputText from '@components/Inputs/InputText/InputText';
import React, { type FC, useEffect, useState } from 'react';
import { dividerClasses } from '@mui/material';


//export type OrderFormData<Reg> = { email: "123", password: "123321" };


export interface Resp {
  accessToken: string;
  
}
  

  
export const SignUp: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formResult, setFormResult] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Reg>();

  //const [post, setPost] = useState({ email: "123", password: "123321" });

  
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
      <form className="left-block" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text">Sign up</h2>
        <div className="login-container">
          <InputText id="email" name="email" placeholder="Email / Phone number" isRequired={true} register={register} regName="email" />
          <InputText id="password" name="password" placeholder="Password" isRequired={true} register={register} regName="password" />
           
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
      <Line />
      <div className="foto-right">
        <Foto />
      </div>
    </div>
  );
};


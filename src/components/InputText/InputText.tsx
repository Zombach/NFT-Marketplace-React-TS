import './InputText.scss';
import { ReactComponent as EyeClosed } from './assets/eyeClosed.svg';
import React, { FC } from 'react';

export interface InputTextProps {
  id: string;
  name: string;
  placeholder: string;
}

export const InputText: FC<InputTextProps> = ({ id, name, placeholder }) => {
  return (
    <div className="input-group">
      <input type="text" name={name} id={id} placeholder=" " />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
};

export default InputText;

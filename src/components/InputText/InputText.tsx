import './InputText.scss';
import { ReactComponent as EyeClosed } from './assets/eyeClosed.svg';
import React, { FC } from 'react';

export interface InputTextProps {
  id: string;
  name: string;
  placeholder: string;
  right?: string | React.ReactNode;
  isRequired?: boolean;
  minHeight?: string; //to-do
}

export const InputText: FC<InputTextProps> = ({ id, name, placeholder, right, isRequired = false }) => {
  return (
    <div className="input-group">
      <input type="text" name={name} id={id} placeholder="" />
      <label htmlFor={id}>
        {placeholder}
        {isRequired && <span className="required">*</span>}
      </label>
      {right && (typeof right === 'string' ? <img className="input-right" src={right} alt="" /> : <div className="input-right">{right}</div>)}
    </div>
  );
};

export default InputText;

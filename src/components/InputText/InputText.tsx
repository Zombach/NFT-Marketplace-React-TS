import './InputText.scss';
import { ReactComponent as EyeClosed } from './assets/eyeClosed.svg';
import React, { FC } from 'react';

export interface InputTextProps {
  id: string;
  name: string;
  placeholder: string;
  icon?: string;
  isRequired: boolean;
  minHeight?: string; //to-do
}

export const InputText: FC<InputTextProps> = ({ id, name, placeholder, icon, isRequired = false }) => {
  return (
    <div className="input-group">
      <input type="text" name={name} id={id} placeholder="" />
      <label htmlFor={id}>
        {placeholder}
        {isRequired && <span className="required">*</span>}
      </label>
      {icon && <img className="icon-img" src={icon} alt="" />}
    </div>
  );
};

export default InputText;

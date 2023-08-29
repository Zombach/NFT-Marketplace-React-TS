import './InputText.scss';
import { ReactComponent as EyeClosed } from './assets/eyeClosed.svg';
import React, { ChangeEvent, FC } from 'react';

export interface InputTextProps {
  id: string;
  name: string;
  placeholder: string;
  icon?: string;
  isRequired: boolean;
  minHeight?: string; //to-do
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: FC<InputTextProps> = ({ id, name, placeholder, icon, onChange, isRequired = false }) => {
  return (
    <div className="input-group">
      <input type="text" name={name} id={id} placeholder="" onChange={onChange} />
      <label htmlFor={id}>
        {placeholder}
        {isRequired && <span className="required">*</span>}
      </label>
      {icon && <img className="icon-img" src={icon} alt="" />}
    </div>
  );
};

export default InputText;

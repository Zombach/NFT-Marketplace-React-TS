import './InputText.scss';
import { ReactComponent as EyeClosed } from './assets/eyeClosed.svg';
import React, { FC } from 'react';

export interface InputTextProps {
  id: string;
  name: string;
  placeholder: string;
  rightSideItem?: string | React.ReactNode;
  isRequired?: boolean;
  minHeight?: string; //to-do
}

export const InputText: FC<InputTextProps> = ({ id, name, placeholder, rightSideItem, isRequired = false }) => {
  return (
    <div className="input-group">
      <input type="text" name={name} id={id} placeholder="" />
      <label htmlFor={id}>
        {placeholder}
        {isRequired && <span className="required">*</span>}
      </label>
      {rightSideItem &&
        (typeof rightSideItem === 'string' ? (
          <img className="input-right" src={rightSideItem} alt="" />
        ) : (
          <div className="input-right">{rightSideItem}</div>
        ))}
    </div>
  );
};

export default InputText;

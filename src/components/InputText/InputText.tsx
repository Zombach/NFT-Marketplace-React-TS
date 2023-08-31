import './InputText.scss';
import { ReactComponent as EyeClosed } from './assets/eyeClosed.svg';
import React, { ChangeEvent, FC } from 'react';

export interface InputTextProps {
  id: string;
  name: string;
  placeholder: string;
  rightSideItem?: string | React.ReactNode;
  isRequired?: boolean;
  minHeight?: string; //to-do
  multiline?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const InputText: FC<InputTextProps> = ({ id, name, placeholder, onChange, rightSideItem, isRequired = false, multiline = false }) => {
  return (
    <div className="input-group">
      {!multiline ? (
        <input type="text" name={name} id={id} placeholder="" onChange={onChange} />
      ) : (
        <textarea name={name} id={id} placeholder="" onChange={onChange}></textarea>
      )}
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

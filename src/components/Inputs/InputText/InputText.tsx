import '../Input.scss';
import './InputText.scss';
import { AnyObject, ObjectSchema } from 'yup';
import { useFormContext } from 'react-hook-form';
import React, { ChangeEvent, FC } from 'react';

export interface InputTextProps {
  id: string;
  name: string;
  placeholder: string;
  rightSideItem?: string | React.ReactNode;
  isRequired?: boolean;
  minHeight?: string;
  multiline?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const InputText: FC<InputTextProps> = ({ id, name, placeholder, onChange, rightSideItem, isRequired = false, multiline = false }) => {
  const schemas = useFormContext();

  return (
    <div className="input-group">
      {!multiline ? (
        <div className="input-group-container">
          <input {...schemas?.register(name)} className="input-group-input" type="text" name={name} id={id} placeholder="" onChange={onChange} />
          {schemas?.formState?.errors?.[name] && <span>{schemas?.formState?.errors?.[name]?.message?.toString()}</span>}
        </div>
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

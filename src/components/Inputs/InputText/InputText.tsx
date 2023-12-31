import '../Input.scss';
import './InputText.scss';
import { UseFormRegister, useForm, useFormContext } from 'react-hook-form';
import React, { ChangeEvent, FC } from 'react';
export interface InputTextProps {
  id: string;
  name: string;
  placeholder: string;
  rightSideItem?: string | React.ReactNode;
  isRequired?: boolean;
  minHeight?: string;
  multiline?: boolean;
  className?: string;
}

export const InputText: FC<InputTextProps> = ({ id, name, placeholder, rightSideItem, isRequired = false, multiline = false, className }) => {
  const schemas = useFormContext();
  return (
    <div className={className ?? 'input-group'}>
      {!multiline ? (
        <div className="input-group-container">
          <input {...schemas?.register(name)} className="input-group-input" type="text" name={name} id={id} placeholder="" />
          {schemas?.formState?.errors?.[name] && <span>{schemas?.formState?.errors?.[name]?.message?.toString()}</span>}
        </div>
      ) : (
        <>
          <textarea id={id} placeholder="" {...schemas?.register(name)}></textarea>
          {schemas?.formState?.errors?.[name] && <span>{schemas?.formState?.errors?.[name]?.message?.toString()}</span>}
        </>
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

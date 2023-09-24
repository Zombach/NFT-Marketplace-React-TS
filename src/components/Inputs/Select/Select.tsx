import '../Input.scss';
import './Select.scss';
import React, { FC } from 'react';

export interface SelectProps {
  id: string;
  name: string;
  placeholder: string;
  isRequired: boolean;
  minHeight?: string;
  options?: string[];
}

export const Select: FC<SelectProps> = ({ id, name, placeholder, isRequired = false, options }) => {
  return (
    <div className="input-group">
      <select className="input-group-input input-select" name={name} id={id} placeholder="">
        {options?.map((option, key) => <option key={key}>{option}</option>)}
      </select>
      <label htmlFor={id}>
        {placeholder}
        {isRequired && <span className="required">*</span>}
      </label>
    </div>
  );
};

export default Select;

import '../Input.scss';
import './Select.scss';
import React, { FC, useState } from 'react';

export interface SelectProps {
  id: string;
  name: string;
  placeholder: string;
  isRequired: boolean;
  minHeight?: string;
  options?: string[] | number[];
  defaultValue?: string | number | undefined;
  setSelectedValue: (value: string | number) => void;
}

export const Select: FC<SelectProps> = ({ id, name, placeholder, isRequired = false, options, setSelectedValue, defaultValue }) => {
  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="input-group">
      <select className="input-group-input input-select" name={name} id={id} placeholder="" defaultValue={defaultValue} onChange={handleSelectChange}>
        {options?.map((option) => <option>{option}</option>)}
      </select>
      <label htmlFor={id} className="active">
        {placeholder}
        {isRequired && <span className="required">*</span>}
      </label>
    </div>
  );
};

export default Select;

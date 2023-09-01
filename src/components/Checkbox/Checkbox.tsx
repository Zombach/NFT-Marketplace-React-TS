import './Checkbox.scss';
import React, { ChangeEvent, FC } from 'react';

export interface CheckboxProps {
  label: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ label, onChange, className }) => {
  return (
    <div className={className}>
      <input type="checkbox" id="checkbox" onChange={onChange} />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};

export default Checkbox;

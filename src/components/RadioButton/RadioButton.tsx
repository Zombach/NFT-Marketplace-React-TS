import './RadioButton.scss';
import React, { ChangeEvent } from 'react';

interface RadioButtonProps {
  textLeft: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = (props: RadioButtonProps) => {
  return (
    <label className="form-radio">
      <input type="radio" value="" name="radio" onChange={props.onChange} />
      {props.textLeft}
      <span className="dot"></span>
    </label>
  );
};

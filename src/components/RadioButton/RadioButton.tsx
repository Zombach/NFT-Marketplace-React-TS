import './RadioButton.scss';
import React, { ChangeEvent } from 'react';

interface RadioButtonProps {
  textLeft: string;
  textRight?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = (props: RadioButtonProps) => {
  return (
    <div className="column">
      <label className="form-radio">
        <input type="radio" value="" name="radio" onChange={props.onChange} />
        {props.textLeft}
        <span className="dot"></span>
      </label>
      <div className="text-right">{props.textRight}</div>
    </div>
  );
};

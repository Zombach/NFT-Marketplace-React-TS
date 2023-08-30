import './RadioButton.scss';
import React from 'react';

interface RadioButtonProps {
  textLeft: string;
  textRight?: string;
  checked?: boolean;
}

export const RadioButton = (props: RadioButtonProps) => {
  return (
    <div className="column">
      <label className="form-radio">
        <input type="radio" value="" name="radio" checked />
        {props.textLeft}
        <span className="dot"></span>
      </label>
      <div className="text-right">{props.textRight}</div>
    </div>
  );
};

import './InputText.scss';
import { ReactComponent as EyeClosed } from './assets/eyeClosed.svg';
import React from 'react';

export interface InputTextProps {
  name: string;
  value: string;
  eye?: string;
}

export const InputText = (props: InputTextProps) => {
  return (
    <div id="InputText">
      <fieldset>
        <legend>{props.name}</legend>
        <div className="table">
          <input placeholder={props.value} className="left-column" />
          <div className={props.eye ?? 'right-column'}>
            <EyeClosed />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

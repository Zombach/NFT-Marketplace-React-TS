import './TapHere.scss';
import React from 'react';

export interface TapHereProps {
  text: string;
  tap: string;
}

export const TapHere = (props: TapHereProps) => {
  return (
    <div id="tap-here">
      <p className="text-forget">
        {props.text}{' '}
        <button className="button-t">
          <span className="purple-color">{props.tap}</span>
        </button>
      </p>
    </div>
  );
};

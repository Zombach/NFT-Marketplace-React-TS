import './TapHere.scss';
import { Link } from 'react-router-dom';
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
        <button type="button" className="button-t">
          <Link to="/sign-up" className="purple-color">
            {props.tap}
          </Link>
        </button>
      </p>
    </div>
  );
};

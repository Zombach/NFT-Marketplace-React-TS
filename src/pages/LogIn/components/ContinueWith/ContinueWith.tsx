import './ContinueWith.scss';
import { ReactComponent as Apple } from '././assets/apple.svg';
import { ReactComponent as Google } from './assets/google.svg';
import { ReactComponent as Line } from './assets/line.svg';
import React from 'react';

export const ContinueWith = () => {
  return (
    <div id="google-apple">
      <div className="continue">
        <Line className="line" />
        <p className="text-continue">or continue with</p>
        <Line className="line" />
      </div>
      <div className="extra-auto-login">
        <button className="butt">
          <Google />
          <p className="text-app-goog">Google</p>
        </button>
        <button className="butt">
          <Apple />
          <p className="text-app-goog">Apple</p>
        </button>
      </div>
    </div>
  );
};

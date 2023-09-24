import './LogQR.scss';
import { ReactComponent as Vector } from './assets/vector.svg';
import React from 'react';

export const LogQR = () => {
  return (
    <div className="qr-column">
      <Vector className="photo" />
      <p className="text-qr">Log in with QR code</p>
      <p className="text-scan"> Scan this code with your camera phone to log in instantly. </p>
    </div>
  );
};

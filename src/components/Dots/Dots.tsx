import './Dots.scss';
import React, { useContext } from 'react';

import { Dot } from './Dot';

export default function Dots() {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 4; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
}

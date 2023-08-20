import './Renders.scss';
import CardLongRender from './components/CardLongRender/CardLongRender';
import React, { type FC } from 'react';

interface RendersProps {}

export const Renders: FC<RendersProps> = () => {
  return (
    <div className="renders">
      <CardLongRender />
    </div>
  );
};

export default Renders;

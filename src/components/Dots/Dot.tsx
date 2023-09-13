import './Dot.scss';
import { SliderContext } from '@components/Cards/HeaderCard/HeaderCard';
import React, { FC, useContext, useState } from 'react';

export interface DotProps {
  number: number;
}

export const Dot: FC<DotProps> = ({ number }) => {
  const slideNumber = useContext(SliderContext);

  return <div className={`dot-header ${slideNumber === number ? 'selected' : ''}`}></div>;
};

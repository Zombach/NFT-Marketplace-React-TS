/* eslint-disable @typescript-eslint/no-explicit-any */
import './ButtonBox.scss';
import React, { type FC, ReactNode } from 'react';

interface ButtonBoxProps {
  className?: string;
  buttonClassName?: string;
  textClassName?: string;
  children?: string;
  SvgBox?: ReactNode;
  onClick?: () => void;
}

export const ButtonBox: FC<ButtonBoxProps> = ({ className, buttonClassName, textClassName, children, SvgBox, onClick }): JSX.Element => {
  const buttonHandler = () => {
    if (onClick) {
      onClick();
    } else {
      // eslint-disable-next-line no-console
      console.log('Не реализованная функция');
    }
  };
  return (
    <div className={className ?? 'button-box'}>
      <button className={buttonClassName ?? 'button'} onClick={buttonHandler}>
        {SvgBox && SvgBox}
        {children && <span className={textClassName ?? 'text'}>{children}</span>}
      </button>
    </div>
  );
};

export default ButtonBox;

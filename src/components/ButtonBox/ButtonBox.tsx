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
  let click =
    onClick ??
    (() => {
      // eslint-disable-next-line
      console.log('Не реализованная функция');
    });
  return (
    <div className={className ?? 'button-box'}>
      <button className={buttonClassName ?? 'button'} onClick={() => click()}>
        {SvgBox && SvgBox}
        {children && <span className={textClassName ?? 'text'}>{children}</span>}
      </button>
    </div>
  );
};

export default ButtonBox;

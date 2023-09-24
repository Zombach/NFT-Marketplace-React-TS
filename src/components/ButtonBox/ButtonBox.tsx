import './ButtonBox.scss';
import React, { type FC, ReactNode } from 'react';

export interface ButtonBoxProps {
  className?: string;
  buttonClassName?: string;
  textClassName?: string;
  children?: string;
  SvgBox?: ReactNode;
  onClick?: () => void;
  id?: string;
  buttonId?: string;
}

export const ButtonBox: FC<ButtonBoxProps> = ({
  className,
  buttonClassName,
  textClassName,
  children,
  SvgBox,
  onClick,
  id,
  buttonId,
}): JSX.Element => {
  let click =
    onClick ??
    (() => {
      // eslint-disable-next-line
      console.log('Не реализованная функция');
    });
  return (
    <div id={id} className={className ?? 'button-box'}>
      <button id={buttonId} className={buttonClassName ?? 'button'} onClick={click}>
        {SvgBox && SvgBox}
        {children && <span className={textClassName ?? 'text'}>{children}</span>}
      </button>
    </div>
  );
};

export default ButtonBox;

import './ButtonBox.scss';
import React, { type FC, ReactNode } from 'react';

export interface ButtonBoxProps {
  className?: string;
  buttonClassName?: string;
  textClassName?: string;
  text?: string;
  SvgBox?: ReactNode;
  onClick?: () => void;
  id?: string;
  disabled?: boolean;
  isActive?: boolean;
}

export const ButtonBox: FC<ButtonBoxProps> = ({
  className,
  buttonClassName,
  textClassName,
  text,
  SvgBox,
  onClick,
  id,
  disabled,
  isActive,
}): JSX.Element => {
  let click =
    onClick ??
    (() => {
      // eslint-disable-next-line
      console.log('Не реализованная функция');
    });

  className = className ?? 'button-box';
  if (isActive) className += ' active';
  return (
    <div id={id} className={className}>
      <button className={buttonClassName ?? 'button'} onClick={click} disabled={disabled}>
        {SvgBox && SvgBox}
        {text && <span className={textClassName ?? 'text'}>{text}</span>}
      </button>
    </div>
  );
};

export default ButtonBox;

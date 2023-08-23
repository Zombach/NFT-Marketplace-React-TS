import './ButtonBox.scss';
import React, { type FC, ReactNode } from 'react';

interface ButtonBoxProps {
  className?: string;
  buttonClassName?: string | undefined;
  textClassName?: string | undefined;
  children?: string | undefined;
  SvgBox?: ReactNode | undefined;
  func?: (() => void) | undefined;
}

export const ButtonBox: FC<ButtonBoxProps> = ({ className, buttonClassName, textClassName, children, SvgBox, func }): JSX.Element => {
  className ??= 'button-box';
  buttonClassName ??= 'button';
  textClassName ??= 'text';

  return (
    <div className={className}>
      <button
        className={buttonClassName}
        onClick={() => {
          const click =
            func ??
            (() => {
              // eslint-disable-next-line
              console.log('Не реализованная функция');
            });
          click();
        }}>
        {SvgBox && SvgBox}
        {children && <span className={textClassName}>{children}</span>}
      </button>
    </div>
  );
};

export default ButtonBox;

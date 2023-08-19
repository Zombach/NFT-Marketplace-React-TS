import './Button.scss';
import React, { type FC, FunctionComponent, SVGProps } from 'react';
import console from 'node:console';

interface ButtonProps {
  text: string;
  className?: string | undefined;
  buttonClassName?: string | undefined;
  textClassName?: string | undefined;
  SvgClassName?: string | undefined;
  Svg?:
    | FunctionComponent<
        SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >
    | undefined;
  Func?: (() => void) | undefined;
}

export const Button: FC<ButtonProps> = ({ text, className, buttonClassName, textClassName, SvgClassName, Svg, Func }): JSX.Element => {
  return (
    <div className={className ?? 'button-box'}>
      {Svg !== undefined ? <Svg className={SvgClassName ?? 'background'} /> : null}
      <button
        className={buttonClassName ?? 'button'}
        onClick={() => {
          const click =
            Func ??
            (() => {
              console.log('Не реализованная функция');
            });
          click();
        }}>
        <p className={textClassName ?? 'text'}>{text}</p>
      </button>
    </div>
  );
};

export default Button;

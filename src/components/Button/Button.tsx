import './Button.scss';
import React, { type FC, FunctionComponent, SVGProps } from 'react';
import Text, { TypeEnum } from './components/Text/Text';

interface ButtonProps {
  children: string;
  className?: string | undefined;
  buttonClassName?: string | undefined;
  textClassName?: string | undefined;
  textType?: TypeEnum;
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

export const Button: FC<ButtonProps> = ({ children, className, buttonClassName, textClassName, textType, SvgClassName, Svg, Func }): JSX.Element => {
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
        <Text className={textClassName} type={textType ?? TypeEnum.P}>
          {children}
        </Text>
      </button>
    </div>
  );
};

export default Button;

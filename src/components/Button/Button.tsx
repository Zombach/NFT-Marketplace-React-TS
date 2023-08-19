import './Button.scss';
import React, { type FC, FunctionComponent, SVGProps } from 'react';
import Text, { TextType } from '../Text/Text';

interface ButtonProps {
  children: string;
  className?: string | undefined;
  buttonClassName?: string | undefined;
  textClassName?: string | undefined;
  textType?: TextType;
  svgClassName?: string | undefined;
  Svg?:
    | FunctionComponent<
        SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >
    | undefined;
  func?: (() => void) | undefined;
}

export const Button: FC<ButtonProps> = ({ children, className, buttonClassName, textClassName, textType, svgClassName, Svg, func }): JSX.Element => {
  return (
    <div className={className ?? 'button-box'}>
      {Svg !== undefined ? <Svg className={svgClassName ?? 'background'} /> : null}
      <button
        className={buttonClassName ?? 'button'}
        onClick={() => {
          const click =
            func ??
            (() => {
              // eslint-disable-next-line
              console.log('Не реализованная функция');
            });
          click();
        }}>
        <Text className={textClassName} type={textType ?? TextType.P}>
          {children}
        </Text>
      </button>
    </div>
  );
};

export default Button;

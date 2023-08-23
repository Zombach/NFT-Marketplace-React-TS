import './Button.scss';
import React, { type FC, FunctionComponent, SVGProps } from 'react';
import Text, { TextType } from './components/Text/Text';

interface ButtonProps {
  children: string;
  className?: string;
  buttonClassName?: string;
  textClassName?: string;
  textType?: TextType;
  svgClassName?: string;
  Svg?: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
  func?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, className, buttonClassName, textClassName, textType, svgClassName, Svg, func }): JSX.Element => {
  const handleClick = () => {
    if (!func) {
      console.log('Not implemented');
    }
  };

  return (
    <div className={className ?? 'button-box'}>
      {Svg !== undefined ? <Svg className={svgClassName ?? 'background'} /> : null}
      <button className={buttonClassName ?? 'button'} onClick={handleClick}>
        <Text className={textClassName} type={textType ?? TextType.P}>
          {children}
        </Text>
      </button>
    </div>
  );
};

export default Button;

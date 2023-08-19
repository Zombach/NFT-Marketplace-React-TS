import './Text.scss';
import React, { type FC, ReactNode } from 'react';

export enum TextType {
  H1 = 0,
  H2 = 1,
  P = 2,
  Span = 3,
}

interface TextProps {
  type: TextType;
  children: string;
  className?: string | undefined;
}

export const Text: FC<TextProps> = ({ type, children, className }) => {
  className = className ?? 'text';
  switch (type) {
    case TextType.H1:
      return <h1 className={className}>{children}</h1>;
    case TextType.H2:
      return <h2 className={className}>{children}</h2>;
    case TextType.P:
      return <p className={className}>{children}</p>;
    case TextType.Span:
      return <span className={className}>{children}</span>;
    default:
      return <p className={className}>{children}</p>;
  }
};

export default Text;

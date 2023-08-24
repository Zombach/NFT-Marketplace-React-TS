import './ProductActionItem.scss';
import { FC, ReactNode } from 'react';
import Button from '@components/ButtonBox/ButtonBox';

export interface ProductActionItemProps {
  children?: string;
  iconSvg: ReactNode;
  className?: string;
}

export const ProductActionsPart: FC<ProductActionItemProps> = ({ children, iconSvg }) => {
  return <Button SvgBox={iconSvg}>{children}</Button>;
};

export default ProductActionsPart;

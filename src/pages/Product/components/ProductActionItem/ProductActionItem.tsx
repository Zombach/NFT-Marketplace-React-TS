import './ProductActionItem.scss';
import { FC } from 'react';

export interface ProductActionItemProps {
  children?: string;
  iconSvg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

export const ProductActionsPart: FC<ProductActionItemProps> = (props) => {
  return (
    <button className="product-action-item">
      <props.iconSvg className={props.className} />
      <span>{props.children}</span>
    </button>
  );
};

export default ProductActionsPart;

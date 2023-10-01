import { ProductItem } from '@components/Cart/CartSlice';

export const calculateTotalPrice = (items: ProductItem[]) => {
  return items.reduce((sum, obj) => Number(obj.price) * Number(obj.count) + sum, 0);
};

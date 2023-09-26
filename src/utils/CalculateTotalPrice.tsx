import { Product } from '@components/Cart/CartSlice';

export const calculateTotalPrice = (items: Product[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

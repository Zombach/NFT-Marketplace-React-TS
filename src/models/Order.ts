import { Product } from './Product';
import { User } from './User';

export interface Order {
  id: number;
  totalAmount: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  user: User;
  products: Product[];
}

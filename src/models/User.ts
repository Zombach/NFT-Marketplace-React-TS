import { Collection } from './Collection';
import { Order } from './Order';
import { Product } from './Product';

export interface User {
  id: number;
  name: string;
  email: string;
  address?: string;
  password: string;
  avatar: string;
  description?: string;
  collections?: Collection[];
  products?: Product[];
  orders?: Order[];
}
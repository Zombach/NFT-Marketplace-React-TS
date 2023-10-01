import { Product } from './Product';
import { User } from './User';

export interface Collection {
  id?: number;
  name: string;
  desc: string;
  user: User;
  products: Product[];
}

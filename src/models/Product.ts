import { User } from './User';

export interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  creator: User;
  description: string;
  collectionId: number;
}

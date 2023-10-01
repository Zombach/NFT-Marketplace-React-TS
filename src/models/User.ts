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

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  address?: string;
  avatar: string;
  description?: string;
  collections?: Collection[];
  products?: Product[];
  orders?: Order[];
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Token {
  accessToken: string;
}

export interface TokenInfo {
  accessToken: string | undefined;
  isAuth: boolean;
  userInfo: UserInfo | null;
}

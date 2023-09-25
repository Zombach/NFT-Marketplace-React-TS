import { Creator } from './Creator';

export interface Collection {
  id: string;
  name: string;
  creator: Creator;
  floorPrice: string;
  totalVolume: string;
  countItems: number;
  ownersCount: number;
  address: string;
}

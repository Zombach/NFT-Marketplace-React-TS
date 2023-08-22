//collectionName, username, description,
//floorPrice, totalVolume, countItems, ownersCount, address

export interface Collection {
  id: string;
  name: string;
  userId: string;
  userName: string;
  avatar: string;
  description: string;
  floorPrice: string;
  totalVolume: string;
  countItems: number;
  ownersCount: number;
  address: string;
}

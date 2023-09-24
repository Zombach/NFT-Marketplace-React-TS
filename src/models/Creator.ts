export interface Creator {
  id: string;
  username: string;
  avatar: string;
  description: string;
  followersCount: number;
  followingCount: number;
  earned: number | string;
  address: string;
}

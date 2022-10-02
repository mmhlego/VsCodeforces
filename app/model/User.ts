export default interface User {
  firstName: string;
  lastName: string;

  handle: string;
  email: string;
  vkId: string;
  openId: string;

  country: string;
  city: string;
  organization: string;

  rank: string;
  rating: number;
  maxRank: string;
  maxRating: number;

  lastOnlineTimeSeconds: number;
  registrationTimeSeconds: number;
  friendOfCount: number;

  avatar: string;
  titlePhoto: string;
}

export type HeroType = {
  name: string;
  image: string;
  roles: string[];
  phone: string;
  email: string;
  socials: Social[]
};
export type Social = {
  name: string;
  url: string;
};
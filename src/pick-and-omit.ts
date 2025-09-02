export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProfile, 'height'>;

type MyOmit<T> = { [P in Exclude<keyof T, 'height'>]: T[P]; }
type MySmallProfile = MyOmit<DetailedProfile>;
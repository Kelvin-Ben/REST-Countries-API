import { atom } from 'recoil';

export interface CountryInterface {
  name: string,
  population: number,
  capital?: string,
  region: string,
  flag: string,
  numericCode: string,
}

export const countryDataState = atom<CountryInterface[]>({
  key: 'countriesState',
  default: [],
});
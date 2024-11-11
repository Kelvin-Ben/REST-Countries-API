import { atom } from 'recoil';
import countriesData from '../../data.json';

export interface Countries {
  img: string,
  title: string,
  population: number,
  capital: string
}

const countryDataAtom = atom({
  key: 'countriesState',
  default: countriesData
});

export {countryDataAtom}
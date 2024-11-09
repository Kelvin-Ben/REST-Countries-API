import { atom } from 'recoil';
import countriesData from '../../data.json';

const countriesState = atom({
  key: 'countriesState',
  default: countriesData
});

export {countriesState}
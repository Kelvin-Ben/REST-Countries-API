
 import { useSetRecoilState } from 'recoil';
 import { countryDataState}  from '../utils/recoilState.ts'
import data from '../../data.json';
import { useEffect } from 'react';

 const LoadCountries = () => {
  const setCountryData = useSetRecoilState(countryDataState);

  useEffect(() => {
    const formattedData = data.map((country) => ({
      name: country.name,
      population: country.population,
      capital: country.capital,
      region: country.region,
      flag: country.flags.svg
    }))
    setCountryData(formattedData);
  }, [setCountryData]);

    return null;
  }
  

  export default LoadCountries;
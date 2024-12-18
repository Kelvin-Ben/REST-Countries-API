
import { useSetRecoilState } from 'recoil';
import { countryDataState}  from '../utils/recoilState.ts'
import data from '../../data.json';
import { useEffect } from 'react';
import CountryList from './CountryList.tsx';

 const LoadCountries = () => {
  const setCountryData = useSetRecoilState(countryDataState);

  useEffect(() => {
    const formattedData = data.map((country) => ({
      name: country.name,
      population: country.population,
      capital: country.capital,
      region: country.region,
      flag: country.flags.svg,
      numericCode: country.numericCode,
    }))
    setCountryData(formattedData);
  }, [setCountryData]);

    return (
      <div className="p-10">
        <CountryList />
      </div>
    );
  }
  

  export default LoadCountries;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from '../../data.json';
import { CountryInterface } from "../utils/recoilState";
import { Link } from "react-router-dom";

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
}

interface CountryDetail extends CountryInterface {
  nativeName: string;
  subRegion: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: Language[];
  borders?: string[];
}

const CountryDetailPage = () => {
  const { numericCode } = useParams<{numericCode: string}>();
  console.log(numericCode);
  const [countryDetail, setCountryDetail] = useState<CountryDetail | null>(null);

  useEffect(() => {
    const foundCountry = data.find((country) => country.numericCode === numericCode );
    console.log(foundCountry)
    
    if (foundCountry) {
      const detailedCountry: CountryDetail = {
        ...foundCountry,
        nativeName: foundCountry.nativeName,
        subRegion: foundCountry.subregion,
        topLevelDomain: foundCountry.topLevelDomain || [] ,
        currencies: foundCountry.currencies || [],
        languages: foundCountry.languages || [],
        borders: foundCountry.borders || [],
      }
      setCountryDetail(detailedCountry)
    }
  }, [numericCode]);

  if(!countryDetail) return <div>Loading country details...</div>;
  
  return (
    <div className="">
      <img src={countryDetail.flag} alt={`${countryDetail.nativeName} flag`} />
      {countryDetail.population.toLocaleString()}
      <p>
      {countryDetail.nativeName}
      </p>
      {countryDetail.currencies.map(currency => currency.name).join(', ')}
      <p>
        {countryDetail.languages.map(language => language.name).join(', ')}
      </p>
      <ul className="flex gap-9 p-4">
        {countryDetail.borders?.map((border, index) => (
          <li key={index} className="border border-slate-500 p-3">{border}</li>
        ))}
      </ul>
      <Link to='/'>Back</Link>
    </div>
  )
}
export default CountryDetailPage;
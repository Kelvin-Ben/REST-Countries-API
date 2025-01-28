import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { countryDataAtom, CountryInterface } from "../utils/recoilState";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

const CountryDetailPage = () => {
  const { numericCode } = useParams<{ numericCode: string }>();
  const [countryDetail, setCountryDetail] = useState<CountryInterface | null>(
    null
  );
  const countries = useRecoilValue(countryDataAtom);

  useEffect(() => {
    const country = countries.find(
      (country) => country.numericCode === numericCode
    );
    if (country) {
      setCountryDetail(country);
    } else {
      setCountryDetail(null);
    }
  }, [numericCode, countries]);

  if (!countryDetail) return <div>Loading country details...</div>;

  return (
    <div className="">
      <img src={countryDetail.flag} alt={`${countryDetail.nativeName} flag`} />
      {countryDetail.population.toLocaleString()}
      <p>{countryDetail.nativeName}</p>
      {countryDetail.currencies?.map((currency) => currency.name).join(", ")}
      <p>
        {countryDetail.languages.map((language) => language.name).join(", ")}
      </p>
      <ul className="flex gap-9 p-4">
        {countryDetail.borders?.map((border, index) => (
          <li key={index} className="border border-slate-500 p-3">
            {border}
          </li>
        ))}
      </ul>
      <Link to="/">Back</Link>
    </div>
  );
};
export default CountryDetailPage;

import { useRecoilValue } from "recoil";
import { filteredCountrySelector } from "../utils/recoilState";
import Country from "./Country";
import { Link } from "react-router-dom";
const CountryList = () => {
  const countries = useRecoilValue(filteredCountrySelector);

  return (
    <div className="flex flex-wrap sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
      {countries.map((country) => (
        <Link to={`/country/${country.numericCode}`} key={country.numericCode}>
          <Country {...country} />
        </Link>
      ))}
    </div>
  );
};
export default CountryList;

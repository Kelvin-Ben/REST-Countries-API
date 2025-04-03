import { useRecoilValue } from "recoil";
import { filteredCountrySelector } from "../utils/recoilState";
import Country from "./Country";
import { Link } from "react-router-dom";
const CountryList = () => {
  const countries = useRecoilValue(filteredCountrySelector);

  return (
    <div className="container mx-auto mt-5 xsm:max-md:w-[100%] grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 desktop:w-[85%]">
      {countries.map((country) => (
        <Link to={`/country/${country.alpha3Code}`} key={country.alpha3Code}>
          <Country {...country} />
        </Link>
      ))}
    </div>
  );
};
export default CountryList;

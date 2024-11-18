
import { useRecoilValue } from "recoil";
import { countryDataState } from "../utils/recoilState";
import Country from "./Country";

const CountryList = () => {
  const countries = useRecoilValue(countryDataState);
  return (
    <div className="flex flex-wrap sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
      {countries.map((country => (
        <Country key={country.name} {...country} />
      )))}
    </div>
  );
};
export default CountryList;

import { useRecoilState } from "recoil";
import Country from "./Country";
import { countriesState } from '../utils';
// access data here and loop through the data
const CountryList = () => {
  const { data } = useRecoilState(countriesState)
  console.log(data)
  return (
    <div className="flex flex-wrap sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4  ">
      <Country />
    </div>
  );
};
export default CountryList;

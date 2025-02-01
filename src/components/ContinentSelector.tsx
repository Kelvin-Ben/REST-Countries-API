import { useSetRecoilState } from "recoil";
import { selectedContinentAtom } from "../utils/recoilState";

const ContinentSelector = () => {
  const setSelectedContinent = useSetRecoilState(selectedContinentAtom);
  function handleContinentChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedContinent(e.currentTarget.value);
  }
  return (
      <select onChange={handleContinentChange} className="dark:bg-[#2B3844]">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
  );
};
export default ContinentSelector;

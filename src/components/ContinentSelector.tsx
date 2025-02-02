import { useSetRecoilState } from "recoil";
import { selectedContinentAtom } from "../utils/recoilState";
import { Select } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";

const ContinentSelector = () => {
  const setSelectedContinent = useSetRecoilState(selectedContinentAtom);
  function handleContinentChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedContinent(e.currentTarget.value);
  }
  return (
    <div className="relative w-[20%]">
      <Select
        name="continent"
        className={clsx(
          "w-full py-4 appearance-none dark:bg-[#2B3844] pl-5 rounded-md bg-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
        aria-label="filter by region"
        onChange={handleContinentChange}
      >
        <option value="">Filter by Region</option>
        <option className="rounded-md" value="Africa">
          Africa
        </option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
      <ChevronDownIcon className="group pointer-events-none absolute top-5 right-5 size-5 fill-white/60" />
    </div>
  );
};
export default ContinentSelector;

import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedContinentAtom } from "../utils/recoilState";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import clsx from "clsx";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const ContinentSelector = () => {
  const setSelectedContinent = useSetRecoilState(selectedContinentAtom);
  function handleContinentChange(selected: string) {
    setSelectedContinent(selected);
  }
  const continent = useRecoilValue(selectedContinentAtom)
  return (
    <div className="relative sm:max-md:w-1/2 sm:max-md:mb-[2rem] md:max-lg:w-1/4 lg:w-[20%]">
      <Listbox value={continent} onChange={handleContinentChange}>
        <div className="relative">
          <ListboxButton className="relative block w-full items-center justify-between py-4 px-5 rounded-md bg-white dark:bg-[#2B3844] dark:border-white/5 text-left">
            {continent || "Filter by Region"}
            <ChevronDownIcon className="pointer-events-none absolute top-5 right-3 size-5 fill-white/60" aria-hidden="true" />
          </ListboxButton>
          <ListboxOptions anchor="bottom" transition className={clsx(
            'w-[var(--button-width)] rounded-md border dark:border-white/5 bg-white dark:text-[#fff] dark:bg-[#2B3844] p-1 mt-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}>
            {continents.map((continent, index) => (
              <ListboxOption key={index} value={continent} className="group flex cursor-default items-center gap-2 rounded py-1.5 px-3 select-none data-[active]:bg-[#2B3844]/10 dark:data-[focus]:bg-white/10">
                <CheckIcon className="invisible size-4  group-data-[selected]:visible" />
                {continent}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};
export default ContinentSelector;

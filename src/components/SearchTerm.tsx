import { useSetRecoilState } from "recoil";
import { searchTermAtom } from "../utils/recoilState";
import { useState } from "react";
import { Search } from "lucide-react";

const SearchTerm = () => {
  const setSearchTerm = useSetRecoilState(searchTermAtom);
  const [inputValue, setInputValue] = useState("");

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setInputValue(value);

    setSearchTerm(inputValue);
  }

  return (
    <div className="relative  w-[40%]">
      <Search className="absolute left-6 top-4 text-gray-500 dark:text-gray-300" />
      <input type="search" className="py-4 pl-16 pr-3 w-3/4 dark:bg-[#2B3844] dark:text-gray-300 outline-none rounded-md" placeholder="Search for a country..." onChange={handleChangeInput} />
    </div>
  );
};
export default SearchTerm;

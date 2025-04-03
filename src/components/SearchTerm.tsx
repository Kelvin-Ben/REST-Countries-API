import { useRecoilState } from "recoil";
import { searchTermAtom } from "../utils/recoilState";
import { Search } from "lucide-react";
import UseDebouncedValue from "../utils/UseDebouncedValue.ts";
import { useEffect } from "react";

const SearchTerm = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermAtom);
  const debouncedSearchTerm = UseDebouncedValue(searchTerm, 300);

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearchTerm]);

  return (
    <div className="relative sm:max-md:mb-[2rem] md:max-lg:w-[50%] lg:w-[40%]">
      <Search className="absolute left-6 top-4 text-gray-500" />
      <input
        type="search"
        className="xsm:max-md:w-full py-4 pl-16 pr-3 w-3/4 dark:bg-[#2B3844] outline-none rounded-md"
        placeholder="Search for a country..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
export default SearchTerm;

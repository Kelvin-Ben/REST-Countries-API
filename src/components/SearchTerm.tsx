import { useSetRecoilState } from "recoil";
import { searchTermAtom } from "../utils/recoilState";
import { useState } from "react";

const SearchTerm = () => {
  const setSearchTerm = useSetRecoilState(searchTermAtom);
  const [inputValue, setInputValue] = useState("");

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setInputValue(value);

    setSearchTerm(inputValue);
  }

  return (
    <div>
      <input type="search" className="" onChange={handleChangeInput} />
    </div>
  );
};
export default SearchTerm;

import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { countryDataAtom } from "./recoilState";
import data from "../../data.json";

// hook to fetch data and store in the country Atom
export const useFetchCountries = () => {
  const setCountries = useSetRecoilState(countryDataAtom);

  useEffect(() => {
    setCountries(data);
  }, [setCountries]);
};

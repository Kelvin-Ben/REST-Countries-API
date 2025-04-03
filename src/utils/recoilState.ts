import { atom, selector } from "recoil";

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1?: string;
  iso639_2: string;
  name: string;
  nativeName?: string;
}
export interface CountryInterface {
  name: string;
  population: number;
  capital?: string;
  region: string;
  flag: string;
  numericCode: string;
  nativeName: string;
  subregion?: string;
  topLevelDomain: string[];
  currencies?: Currency[];
  languages: Language[];
  borders?: string[];
  alpha3Code: string;
}

export const countryDataAtom = atom<CountryInterface[]>({
  key: "countryData",
  default: [],
});

export const searchTermAtom = atom<string>({
  key: "searchTerm",
  default: "",
});

export const selectedContinentAtom = atom({
  key: "selectedContinent",
  default: "",
});

// selector to filter specific country
export const filteredCountrySelector = selector({
  key: "filteredCountry",
  get: ({ get }) => {
    const countries = get(countryDataAtom);
    const searchTerm = get(searchTermAtom)
      .toLowerCase()
      .trim()
      .replace(/\s/g, "");
    const selectedContinent = get(selectedContinentAtom);

    let filteredCountries = selectedContinent
      ? countries.filter((country) => country.region === selectedContinent)
      : countries;

    if (searchTerm) {
      filteredCountries = filteredCountries.filter(
        (country) =>
          country.name.toLowerCase().includes(searchTerm) ||
          country.nativeName.toLowerCase().includes(searchTerm)
      );
    }

    return filteredCountries;
  },
});

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
  subRegion?: string;
  topLevelDomain: string[];
  currencies?: Currency[];
  languages: Language[];
  borders?: string[];
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
    const searchTerm = get(searchTermAtom);
    const selectedContinent = get(selectedContinentAtom);

    if (searchTerm) {
      return countries.filter(
        (country) =>
          country.name.toLowerCase().includes(searchTerm) ||
          country.nativeName.toLowerCase().includes(searchTerm)
      );
    }

    if (selectedContinent) {
      return countries.filter(
        (country) => country.region === selectedContinent
      );
    }

    return countries;
  },
});

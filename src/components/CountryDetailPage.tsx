import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { countryDataAtom, CountryInterface } from "../utils/recoilState";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

const CountryDetailPage = () => {
  const { alpha3Code } = useParams<{ alpha3Code?: string }>();
  console.log(alpha3Code);
  const [countryDetail, setCountryDetail] = useState<CountryInterface | null>(
    null
  );
  const countries = useRecoilValue(countryDataAtom);

  useEffect(() => {
    const country = countries.find(
      (country) => country.alpha3Code === alpha3Code
    );
    if (country) {
      setCountryDetail(country);
    } else {
      setCountryDetail(null);
    }
  }, [alpha3Code, countries]);

  if (!countryDetail)
    return (
      <div className="text-center text-xl align-center w-1/2 py-10 m-auto bg-white/10">
        Loading country details...
      </div>
    );

  return (
    <div className="flex flex-col h-full w-full px-10 xsm:px-6 md:border xl:px-12">
      <div className="xl:text-xl py-4 mb-10">
        <Link
          className="xsm:text-sm xsm:py-1 xsm:px-3 xl:py-2 xl:px-5 bg-white rounded-md border border-[#808080]/50 dark:bg-[#2B3844] dark:border-none"
          to="/"
        >
          &larr; Back
        </Link>
      </div>
      <div className="flex xsm:max-md:flex-col md:border md:gap-x-10 xl:gap-[10rem]">
        <img
          src={countryDetail.flag}
          className="xsm:w-[40%] md:my-auto h-full xsm:max-md:w-full xsm:mb-10 rounded-md"
          alt={`${countryDetail.nativeName} flag`}
        />
        <div className="my-auto xsm:max-md:flex-col xsm:text-sm">
          <h1 className="mb-10 xsm:mb-5 xsm:text-2xl xl:text-3xl font-bold">
            {countryDetail.name}
          </h1>
          <div className="w-auto flex xsm:flex-col md:flex-row md:gap-x-10 xl:gap-x-40">
            <div className="xsm:mb-10 xsm:w-full md:w-auto">
              <p className="mb-2">
                <span className="font-bold">Native Name: </span>
                <span className="text-pale dark:text-[#F2F2F2]/90 text-small">
                  {countryDetail.nativeName}
                </span>
              </p>
              <p className="mb-2">
                <span className="font-bold">Population: </span>
                <span className="text-pale dark:text-[#F2F2F2]/90 text-small">
                  {countryDetail.population.toLocaleString()}
                </span>
              </p>
              <p className="mb-2">
                <span className="font-bold">Region: </span>
                <span className="text-pale dark:text-[#F2F2F2]/90 text-small">
                  {countryDetail.region}
                </span>
              </p>
              <p className="mb-2">
                <span className="font-bold">Sub Region: </span>
                <span className="text-pale dark:text-[#F2F2F2]/90 text-small">
                  {countryDetail.subregion}
                </span>
              </p>
              <p className="mb-2">
                <span className="font-bold">Capital: </span>
                <span className="text-pale dark:text-[#F2F2F2]/90 text-small">
                  {countryDetail.capital}
                </span>
              </p>
            </div>
            <div className="xsm:mb-5">
              <p className="mb-2">
                <span className="font-bold">Top Level Domain: </span>
                <span className="text-pale dark:text-[#F2F2F2]/90 text-small">
                  {countryDetail.topLevelDomain}
                </span>
              </p>
              <p className="mb-2">
                <span className="font-bold">Currencies: </span>
                <span className="text-pale dark:text-[#F2F2F2]/90 font-light  text-small">
                  {countryDetail.currencies
                    ?.map((currency) => currency.name)
                    .join(", ")}
                </span>
              </p>
              <p className="mb-2">
                <span className="font-bold">Languages: </span>
                <span className="text-pale dark:text-[#F2F2F2]/90 font-light text-small">
                  {countryDetail.languages
                    .map((language) => language.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col xsm:items-start xsm:mb-5 items-center gap-5 py-4">
            <p className="font-bold">Border Countries: </p>
            <div className="w-1/2 xsm:w-full flex gap-2 flex-wrap">
              {countryDetail.borders && countryDetail.borders.length > 0 ? (
                countryDetail.borders.map((border) => (
                  <Link
                    to={`/country/${border}`}
                    className="xsm:text-sm border border-[#808080]/50 bg-white p-1 w-14 justify-center dark:bg-white/10 dark:border-none rounded-md flex flex-wrap"
                  >
                    {border}
                  </Link>
                ))
              ) : (
                <div className="text-[#808080]">
                  No borders for this country!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetailPage;

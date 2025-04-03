import { CountryInterface } from "../utils/recoilState";

const Country = ({
  name,
  population,
  region,
  capital,
  flag,
}: CountryInterface) => {
  return (
    <div className="w-auto h-96 xsm:max-sm:m-auto shadow-lg rounded-lg bg-white dark:bg-[#2B3844]">
      <div className="w-full h-48 overflow-hidden rounded-t-lg">
        <img
          src={flag}
          alt={`${name} flag`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col p-6 text-[#111517] dark:text-white">
        <h1 className="text-xl font-bold mb-4">{name}</h1>
        <div className="text-sm ">
          <p className="flex pb-1">
            <span className="font-semibold text-[#111517] dark:text-white">
              Population:
            </span>{" "}
            <span className="ml-2 text-[#808080]">
              {population.toLocaleString()}
            </span>{" "}
          </p>
          <p className="flex pb-1">
            <span className="font-semibold text-[#111517] dark:text-white">
              Region:
            </span>
            <span className="ml-2 text-[#808080]">{region}</span>
          </p>
          <p className="flex pb-1">
            <span className="font-semibold text-[#111517] dark:text-white">
              Capital:
            </span>{" "}
            <span className="ml-2 text-[#808080]">{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Country;

import { CountryInterface } from "../utils/recoilState";

const Country = ({name, population, region, capital, flag}: CountryInterface) => {
  return (
    <>
    <div className="w-full shadow-lg border rounded-md bg-inherit dark:bg-inherit">
      <img src={flag} className="w-full rounded-t-md" alt={`${name} flag`} />
      <h1 className="text-2xl font-bold py-2 px-4">{name}</h1>
      <div className="flex flex-col px-4 pb-6">
        <p className="flex"><span className="font-semibold">Population:</span> <span className="ml-2">{population.toLocaleString()}</span> </p>
        <p className="flex"><span className="font-semibold">Region:</span><span className="ml-2">{region}</span></p>
        <p className="flex"><span className="font-semibold">Capital:</span> <span className="ml-2">{capital}</span></p>
      </div>
    </div>
    </>
  );
};
export default Country;

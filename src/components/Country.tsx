const Country = () => {
  return (
    <div className="w-36 rounded shadow-sm">
      <img src="https://flagcdn.com/w320/af.png" alt="a country sample" />
      <h1 className="text-3xl font-bold">Germany</h1>
      <div className="">
        <p className="flex"><span className="font-semibold">Population:</span> 7,843,478</p>
        <p className="flex"><span className="font-semibold">Region:</span>Europe</p>
        <p className="flex"><span className="font-semibold">Capital:</span> Berlin</p>
      </div>
    </div>
  );
};
export default Country;

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CountryDetailPage from "./components/CountryDetailPage";
import SearchTerm from "./components/SearchTerm";
import CountryList from "./components/CountryList";
import { useFetchCountries } from "./utils/fetchData";
import ContinentSelector from "./components/ContinentSelector";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  useFetchCountries();
  return (
    <Router>
      <div className="min-h-[100vh] dark:bg-gray-900 dark:text-white">
          <Header />
          <Routes>
              <Route path="/" element={
                <div className="">
                  <div className="flex justify-between px-[3rem] py-[1rem]">
                    <SearchTerm />
                    <ContinentSelector />
                  </div>
                  <CountryList />
                </div>
                } />
              <Route path="country/:numericCode" element={<CountryDetailPage />} />
          </Routes>
      </div>
        </Router>
  );
};
export default App;

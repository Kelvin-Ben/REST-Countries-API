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
      <div className="min-h-[100vh] bg-gray-200 dark:bg-gray-900 dark:text-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="px-[3rem]">
                <div className="flex xsm:max-md:flex-col xsm:max-md:gap-10 justify-between py-[1rem] dark:text-white desktop:px-[8.5rem]">
                  <SearchTerm />
                  <ContinentSelector />
                </div>
                <CountryList />
              </div>
            }
          />
          <Route path="/country/:alpha3Code" element={<CountryDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;

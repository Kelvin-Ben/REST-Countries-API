import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import CountryDetailPage from "./components/CountryDetailPage";
import SearchTerm from "./components/SearchTerm";
import CountryList from "./components/CountryList";
import { useFetchCountries } from "./utils/hooks";
import ContinentSelector from "./components/ContinentSelector";

const App = () => {
  useFetchCountries();
  return (
    <>
      <SearchTerm />
      <ContinentSelector />
      <Router>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="country/:numericCode" element={<CountryDetailPage />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;

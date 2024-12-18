import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import LoadCountries from './components/LoadCountries'
import './index.css'
import CountryDetailPage from './components/CountryDetailPage'
const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Switch> */}
          <Route path='/' element={<LoadCountries />} />
          <Route path='country/:numericCode' element={<CountryDetailPage />} />
          {/* <Route path='*' render={() => <Redirect to='/' />} /> */}
        {/* </Switch> */}
      </Routes>
    </Router>
  )
}
export default App;
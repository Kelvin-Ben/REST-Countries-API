import CountryList from './components/CountryList'
import LoadCountries from './components/LoadCountries'
import './index.css'
const App = () => {
  return (
    <div className='px-9'>
      <LoadCountries />
      <CountryList />
    </div>
  )
}
export default App
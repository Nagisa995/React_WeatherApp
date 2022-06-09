import { React, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import {
  SearchForm
} from './SearchForm'
import {
  UIContent
} from './UIContent'
import{
  addCurrentCityInStorage,
  getCurrentCityFromStorage
} from './utils'
import {
  defaultCity
} from './const'


function Main() {
  const [currentCity, setCurrentCity] = useState(getCurrentCityFromStorage()??defaultCity);
  const [searchCityInputValue, setSearchCityInputValue] = useState('');
  

  function handleSearchChange(e) {
    setSearchCityInputValue(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault;

    addCurrentCityInStorage(searchCityInputValue);

    setCurrentCity(searchCityInputValue);
    setSearchCityInputValue('');
  }

  function handleCityFromLikeList(e) {
    const city = e.target.textContent;
    addCurrentCityInStorage(city);
    setCurrentCity(city);
  }

  return (
    <div className='main_body'>
      <SearchForm changeHandle={handleSearchChange} submitHandle={handleSearchSubmit} searchValue={searchCityInputValue} />
      <UIContent likeListHandle={handleCityFromLikeList} city={currentCity}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
)

import { React, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css'
import Cookies from 'js-cookie'
import {
  SearchForm
} from './SearchForm'
import {
  UIContent
} from './UIContent'
import {
  defaultCity
} from './const'


function Main() {
  const [currentCity, setCurrentCity] = useState(defaultCity);
  const [searchCityInputValue, setSearchCityInputValue] = useState('');
  

  function handleSearchChange(e) {
    setSearchCityInputValue(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault;

    setCurrentCity(searchCityInputValue);
    setSearchCityInputValue('');
  }

  function handleCityFromLikeList(e) {
    setCurrentCity(e.target.textContent)
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

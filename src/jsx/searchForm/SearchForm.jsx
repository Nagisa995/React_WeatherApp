import { React, useState } from 'react'
import {
    addCurrentCityInStorage,
} from '../js/utils'
import {
    changeCurrentCity
} from '../js/store/action'
import { useDispatch } from 'react-redux';


export function SearchForm() {
    const changeCity = useDispatch();
    const [searchCityInputValue, setSearchCityInputValue] = useState('');

    function handleChange(e) {
        setSearchCityInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault;

        addCurrentCityInStorage(searchCityInputValue);

        changeCity(changeCurrentCity(searchCityInputValue));
        setSearchCityInputValue('');
    }

    return (
        <form action='#' method='get' onSubmit={handleSubmit}>
            <input placeholder="enter city name" type="text" onChange={handleChange} value={searchCityInputValue} />
            <button type='submit' />
        </form>
    );
}
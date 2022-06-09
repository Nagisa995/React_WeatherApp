import React from 'react'
import './css/style.css'
import {
    deleteCityFromList
} from './utils'
import {
    deleteIcon
} from './const'


export function AddedCityList({ likeListHandle, list, changeList }) {
    function handleDeletedCity(e) {
        changeList(deleteCityFromList(e));
    }

    const cityList = list.map(element => <ListItem currentCityChange={likeListHandle} cityName={element} listChange={handleDeletedCity} />);

    return (
        <div className='location'>
            <div className="added">Added Locations:</div>
            <div className="city_list">
                <ul>
                    {cityList}
                </ul>
            </div>
        </div>
    );
}

function ListItem({ currentCityChange, cityName, listChange }) {
    return (
        <li className="city">
            <span onClick={currentCityChange}>{cityName}</span>
            <img src={deleteIcon} alt="" className="delete" id={cityName} onClick={listChange} />
        </li>
    )
}
import React from 'react'
import './css/style.css'
import {
    backGroundIcon,
    temperatureDegrees,
    getCityList,
    cityInList
} from './utils'

export function TabNow({ info, addCityInList }) {

    function handleCityAdd() {
        const сityOnList = cityInList(name);
        if (!сityOnList) {
            addCityInList(getCityList());
        }
    }

    const {
        name,
        main: {
            temp
        },
        weather: [{ icon }],
    } = info;

    return (
        <div id="Now" className="tab_block tab_Now" style={backGroundIcon(icon)}>
            <p className="gradBid">{temperatureDegrees(temp)}°</p>
            <p className="tabCity_1">{name}</p>
            <img className="position_like" src="src\img\Shape.svg" alt="" onClick={handleCityAdd} />
        </div>
    );
}
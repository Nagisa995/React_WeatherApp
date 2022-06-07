import React from 'react'
import './css/style.css'

export function TabNow() {
    return (
        <div id="Now" className="tab_block tab_Now">
            <p className="gradBid"><span id="nowTemprature">20.2</span>°</p>
            <p id='currentCityNow' className="tabCity_1">Moscow</p>
            <img id="selectIcon" className="position_like" src="src\img\Shape.svg" alt=""/>
        </div>
    );
}
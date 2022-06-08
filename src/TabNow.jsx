import React from 'react'
import './css/style.css'
import {
    backGroundIcon
} from './utils'

export function TabNow({ name, temperature, icon }) {

    return (
        <div id="Now" className="tab_block tab_Now" style={backGroundIcon(icon)}>
            <p className="gradBid">{temperature}°</p>
            <p className="tabCity_1">{name}</p>
            <img className="position_like" src="src\img\Shape.svg" alt="" />
        </div>
    );
}
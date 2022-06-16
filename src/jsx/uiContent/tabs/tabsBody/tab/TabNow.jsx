import React from 'react'
import { useDispatch } from 'react-redux';
import {
    backGroundIcon,
    temperatureDegrees,
    cityInList
} from '../../../../js/utils'
import {
    addCityInLikeList
} from '../../../../js/store/action'

export function TabNow({ info }) {
    const dispatch = useDispatch();

    function handleCityAdd() {
        cityInList(name);
        dispatch(addCityInLikeList(name));
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
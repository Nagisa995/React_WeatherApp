import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteIcon
} from '../../js/const'
import {
    deleteCityFromList
} from '../../js/utils'
import {
    deleteCityFromLikeList,
    changeCurrentCity
} from '../../js/store/action'

export function AddedCityList() {
    const dispatch = useDispatch();
    const likeList = useSelector(state => state.likeCityList);

    function handleEvent(e) {
        const element = e.target;
        if (element.className === 'delete') {
            deleteCityFromList(e);
            dispatch(deleteCityFromLikeList(element.id))
        } else {
            dispatch(changeCurrentCity(element.textContent));
        }
    }

    const cityList = likeList.map(element => <ListItem cityName={element} key={element} />);

    return (
        <div className='location'>
            <div className="added">Added Locations:</div>
            <div className="city_list">
                <ul onClick={handleEvent}>
                    {cityList}
                </ul>
            </div>
        </div>
    );
}

function ListItem({ cityName }) {
    return (
        <li className="city">
            <span>{cityName}</span>
            <img src={deleteIcon} alt="" className="delete" id={cityName} />
        </li>
    )
}
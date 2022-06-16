import { combineReducers } from 'redux'

import {
    CHANGE_CITY,
    ADD_CITY,
    DELETE_CITY
} from './action'

import {
    defaultReduxStore
} from '../const'

function currentCity(state = defaultReduxStore.currentCity, action) {
    if (action.type === CHANGE_CITY) {
        return action.city;
    }

    return state;
}

function likeCityList(state = defaultReduxStore.likeCityList, action) {
    switch (action.type) {
        case ADD_CITY: return [...state, action.city];
        case DELETE_CITY: return state.filter(city => city !== action.city);
        default: return state;
    }
}

export const weatherApp = combineReducers({
    currentCity,
    likeCityList
})
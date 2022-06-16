export const CHANGE_CITY = 'CHANGE_CITY';
export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY'

export function changeCurrentCity(city) {
    return {
        type: CHANGE_CITY,
        city
    }
}

export function addCityInLikeList(city) {
    return {
        type: ADD_CITY,
        city
    }
}

export function deleteCityFromLikeList(city) {
    return {
        type: DELETE_CITY,
        city
    }
}
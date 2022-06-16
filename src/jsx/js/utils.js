import { format } from 'date-fns'
import Cookies from 'js-cookie'

export function backGroundIcon(icon) {
    return { background: `url('http://openweathermap.org/img/wn/${icon}@2x.png') 50% 50%/80px 80px no-repeat` }
}

export function temperatureDegrees(kelvin) {
    return (kelvin - 273.15).toFixed(1)
}

export function time(seconds) {
    const timeOnUI = format(new Date(seconds * 1000), 'H:m');
    return timeOnUI
}

export function dateFromString(string) {
    const dateOnUi = format(new Date(string || 1), 'd MMMM');
    return dateOnUi
}

export function weatherIconURL(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

export function addCurrentCityInStorage(city) {
    Cookies.set('lastCity', city, { expires: (1) });
}

export function getCurrentCityFromStorage() {
    return Cookies.get('lastCity');
}

export function getCityList() {
    const cityList = Cookies.get('cityList');
    const cityListIsEmpty = cityList === undefined;

    if (cityListIsEmpty) {
        return []
    } else {
        return JSON.parse(cityList);
    }
}

export function cityInList(city) {
    const cityList = getCityList();

    const cityInList = cityList.includes(city);
    if (!cityInList) {
        cityList.push(city);
        Cookies.set('cityList', JSON.stringify(cityList));
    }
    return cityInList
}

export function deleteCityFromList(e) {
    const cityList = getCityList();
    const deletedCity = e.target.id;
    const newList = cityList.filter(element => element !== deletedCity);
    Cookies.set('cityList', JSON.stringify(newList));
    return newList
}
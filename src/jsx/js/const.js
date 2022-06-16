import {
    getCurrentCityFromStorage,
    getCityList
} from './utils'

export const defaultCity = 'Moscow'
export const SERVER_URL = 'http://api.openweathermap.org/data/2.5'
export const API_KEY = 'efa863284d367a20db3f4408d608ad72'
export const deleteIcon = 'http://simpleicon.com/wp-content/uploads/cross.png'
export const infoDefault = {
    name: '',
    main: {
        temp: '',
        feels_like: ''
    },
    weather: [{ icon: '', main: '' }],
    sys: {
        sunrise: '',
        sunset: '',
    }
}
export const infoForecastDefault = {
    city: {
        name: ''
    },
    list: [{
        dt_txt: '',
        dt: '',
        main: {
            temp: '',
            feels_like: '',
        },
        weather: [{ icon: '', main: '' }],
    }]
}

export const defaultReduxStore = {
    currentCity: getCurrentCityFromStorage() ?? defaultCity,
    likeCityList: getCityList(),
}
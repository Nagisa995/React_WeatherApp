import {
    SERVER_URL,
    API_KEY
} from './const'

export async function serverRequest(url) {
    const serverRequest = await fetch(url)
    const serverAnswer = await serverRequest.json()
    return await serverAnswer
}

export function compilationURLCurrentWeather(cityName) {
    const url = `${SERVER_URL}/weather?q=${cityName}&appid=${API_KEY}`
    return url
}

export function compilationURLForecast(cityName) {
    const url = `${SERVER_URL}/forecast?q=${cityName}&appid=${API_KEY}`
    return url
}

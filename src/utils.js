import { format } from 'date-fns'

export function backGroundIcon(icon) {
    return { background: `url('http://openweathermap.org/img/wn/${icon}@2x.png') 50% 50%/80px 80px no-repeat` }
}

export function temperatureDegrees(kelvin) {
    return (kelvin - 273.15).toFixed(1)
}

export function time(seconds) {
    const timeOnUI = format(new Date(seconds * 1000), 'H:m')
    return timeOnUI
}
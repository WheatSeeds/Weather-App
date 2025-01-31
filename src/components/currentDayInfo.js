import {createHtmlElement} from '../helpers.js'

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export function currentDayInfo(day, location){
    const date = new Date(day.datetime);

    const details = [
        {id: 'current-day-title', content: week[date.getDay()]},
        {id: 'current-day-date', content: date.toLocaleString("en-US", { day: "2-digit", month: "short", year: "numeric" })},
        {id: 'current-day-temp', content: `${Math.round((day.temp - 32) * (5/9))} °C`},
        {id: 'current-day-weather', content: day.conditions},
        {id: 'current-day-feels', content: `Feels like: ${Math.round((day.feelslike  - 32) * (5/9))} °C`},
    ]

    details.forEach(detail => {
        const element = document.getElementById(detail.id);
        element.innerHTML = detail.content;
    })

    const locationTitle = document.getElementById('location-title');
    const parts = location.split(',')
    locationTitle.innerHTML = `${parts[0]}, ${parts[2]}`;

    const image = document.getElementById('current-day-weather-image');
    image.src = `../../public/images/weather-icons/${day.icon}.svg`

}

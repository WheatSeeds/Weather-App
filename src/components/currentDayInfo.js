import {createHtmlElement} from '../helpers.js'

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export function currentDayInfo(data){
    const date = new Date(data.days[0].datetime);

    const details = [
        {id: 'current-day-title', content: week[date.getDay()]},
        {id: 'current-day-date', content: date.toLocaleString("en-US", { day: "2-digit", month: "short", year: "numeric" })},
        {id: 'current-day-temp', content: `${Math.round((data.days[0].temp - 32) * (5/9))} °C`},
        {id: 'current-day-weather', content: data.days[0].conditions},
        {id: 'current-day-feels', content: `Feels like: ${Math.round((data.days[0].feelslike  - 32) * (5/9))} °C`},
    ]

    const currentDayInfo = createHtmlElement('div', 'current-day-info', null);

    const location = createHtmlElement('div', 'location', null);
    location.innerHTML = `
    <img style="height: 24px; width: 24px" src="../../public/images/Location.svg" alt="">
    <span id="location-title">${data.resolvedAddress}</span>
    `
    const image = createHtmlElement('img', 'current-day-weather-image', null);
    image.src = `../../public/images/weather-icons/${data.days[0].icon}.svg`
    currentDayInfo.appendChild(image);

    currentDayInfo.appendChild(location)
    details.forEach(detail => {
        const element = createHtmlElement('span', detail.id, null);
        element.innerHTML = detail.content;
        currentDayInfo.appendChild(element);
    })

    return currentDayInfo
}

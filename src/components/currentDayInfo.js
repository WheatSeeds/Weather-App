import {createHtmlElement} from '../helpers.js'


export function currentDayInfo(dayData, location){
    const details = [
        {id: 'current-day-temp', content: `${location[0].toUpperCase() + location.slice(1)}, ${Math.round((dayData.temp - 32) * (5/9))} °C`},
        {id: 'current-day-date', content: dayData.datetime},
        {id: 'current-day-weather', content: dayData.conditions},
        {id: 'current-day-feels', content: `Real feel: ${Math.round((dayData.feelslike  - 32) * (5/9))} °C`},
        {id: 'current-day-wind', content: `Wind: ${(dayData.windspeed * 1.609).toFixed(1)} km/h`},
        {id: 'current-day-humidity', content: `Humidity: ${dayData.humidity}`},
    ]

    const currentDayInfo = createHtmlElement('div', 'current-day-info', null);

    details.forEach(detail => {
        const element = createHtmlElement('span', detail.id, null);
        element.innerHTML = detail.content;
        currentDayInfo.appendChild(element);
    })

    return currentDayInfo
}

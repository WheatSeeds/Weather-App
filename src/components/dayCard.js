import {createHtmlElement} from "../helpers.js";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


export function dayCard(dayData){
    const dayCard = createHtmlElement('div', null, 'day-card')
    const date = new Date(dayData.datetime);
    dayCard.innerHTML = `
    <span class="day-card-title">${days[date.getDay()].slice(0,3)}</span>
    <img class="day-card-img" alt='' src=${`../../public/images/weather-icons/${dayData.icon}.svg`}>
    <span class="day-card-weather">${Math.round(dayData.temp)}°С</span>
    `;

    return dayCard
}
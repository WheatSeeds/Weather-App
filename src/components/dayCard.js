import {createHtmlElement} from "../helpers.js";
import {currentDayInfo} from "./currentDayInfo.js";
import {updateCurrentDayHighlight} from "./currentDayHighlight.js";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentCard = null

export function dayCard(dayData){
    const dayCard = createHtmlElement('div', null, 'day-card')
    const date = new Date(dayData.datetime);
    dayCard.innerHTML = `
    <span class="day-card-title">${days[date.getDay()].slice(0,3)}</span>
    <img class="day-card-img" alt='' src=${`../../public/images/weather-icons/${dayData.icon}.svg`}>
    <span class="day-card-weather">${Math.round((dayData.temp - 32) * (5/9))} °C</span>
    `;
    dayCard.onclick = () => {
        if (currentCard) {
            currentCard.classList.remove('current-card');
        }
        dayCard.classList.add('current-card');
        currentCard = dayCard;

        currentDayInfo(dayData);
        updateCurrentDayHighlight(dayData);
    }
    return dayCard
}

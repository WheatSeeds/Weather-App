import {createHtmlElement, getDayName} from "../helpers.js";
import {currentDayInfo} from "./currentDayInfo.js";
import {updateCurrentDayHighlight} from "./currentDayHighlight.js";

export function dayCard(dayData){
    const dayCard = createHtmlElement('div','day-card')
    dayCard.innerHTML = `
    <span class="day-card-title">${getDayName(dayData.datetime).slice(0,3)}</span>
    <img class="day-card-img" alt='' src=${`../../public/images/weather-icons/${dayData.icon}.svg`}>
    <span class="day-card-weather">${Math.round((dayData.temp - 32) * (5/9))} °C</span>
    `;
    if(dayData.isActive){
        dayCard.classList.add('current-card');
    }
    dayCard.onclick = () => {
        if(!dayData.isActive){
            document.querySelector('.current-card').classList.remove('current-card');
            dayCard.classList.add('current-card');
        }
        updateCurrentDayHighlight(dayData);
        currentDayInfo(dayData);
    }
    return dayCard
}

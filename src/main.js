import './styles/dayInfo.css'
import './styles/app.css'
import './styles/searchBar.css'
import './styles/dayCardCarousel.css'
import './styles/dayCard.css'
import './styles/highlightBlock.css'
import {currentDayInfo} from "./components/currentDayInfo.js";
import {updateCurrentDayHighlight} from "./components/currentDayHighlight.js";
import {dayCardsCarousel} from "./components/dayCardsCarousel.js";
import {getWeatherData} from "./api.js";
import {searchBarQuery} from "./components/searchBar.js";
import 'dragscroll';

export function renderPage(location){
    getWeatherData(location).then(data => {
        data.days.forEach(day => {
            day.isActive = false;
        })
        data.days[0].isActive = true;
        updateCurrentDayHighlight(data.days[0])
        dayCardsCarousel(data.days)
        currentDayInfo(data.days[0], data.resolvedAddress);
    });
}

window.onload = () => {
    searchBarQuery()
    renderPage('London')
}
import {createHtmlElement} from '../helpers.js'
import {getWeatherData} from "../api.js";
import {currentDayInfo} from "./currentDayInfo.js";
import {dayCardsCarousel} from "./dayCardsCarousel.js";
import {HighlightBlock} from "./HighlightBlock.js";

export function searchBar(){
    const searchBar = createHtmlElement('div', 'search-bar', null);
    const input = createHtmlElement('input', 'search-bar-input', null);
    const image = createHtmlElement('img', 'search-bar-image', null);
    image.src = '../../public/images/Search.svg';
    searchBar.appendChild(image);
    searchBar.appendChild(input);
    input.type = 'text'
    input.placeholder = 'Search your location'
    input.onkeyup = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            getWeatherData(input.value).then(data => {
                console.log(data);
                document.querySelector('#app')
                    .appendChild(currentDayInfo(data))
                document.querySelector('#app').appendChild(HighlightBlock(data.days[0], input.value));
                document.querySelector('#app').appendChild(dayCardsCarousel(data.days));
            });
        }
    }
    return searchBar
}

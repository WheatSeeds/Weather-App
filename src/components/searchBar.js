import {createHtmlElement} from '../helpers.js'
import {getWeatherData} from "../api.js";
import {currentDayInfo} from "./currentDayInfo.js";

export function searchBar(){
    const searchBar = createHtmlElement('input', 'search-bar', null);
    searchBar.type = 'text'
    searchBar.onkeyup = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            getWeatherData(searchBar.value).then(data => {
                console.log(data.days);
                document.querySelector('#app').appendChild(currentDayInfo(data.days[0], searchBar.value));
            });
        }
    }
    return searchBar
}

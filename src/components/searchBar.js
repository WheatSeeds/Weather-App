import {createHtmlElement} from '../helpers.js'
import {getWeatherData} from "../api.js";

export function searchBar(){
    const searchBar = createHtmlElement('input', 'search-bar', null);
    searchBar.type = 'text'
    searchBar.onkeyup = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            getWeatherData(searchBar.value);
            console.log(getWeatherData(searchBar.value));
            searchBar.value = '';
        }
    }
    return searchBar
}

import {renderPage} from "../main.js";

export function searchBarQuery(){
    const searchBarInput = document.getElementById('search-bar-input');
    searchBarInput.onkeyup = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            renderPage(searchBarInput.value)
        }
    }
}

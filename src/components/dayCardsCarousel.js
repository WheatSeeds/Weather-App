import {createHtmlElement} from "../helpers.js";
import {dayCard} from "./dayCard.js";

export function dayCardsCarousel(daysData){
    const dayCardsCarousel = createHtmlElement("div", 'day-cards-carousel', null);
    daysData.forEach(day => {
        dayCardsCarousel.append(dayCard(day))
    })


    return dayCardsCarousel;
}
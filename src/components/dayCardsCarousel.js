import {dayCard} from "./dayCard.js";

export function dayCardsCarousel(daysData){
    const dayCardsCarousel = document.getElementById('day-cards-carousel');
    daysData.forEach((day, index) => {
        const card = dayCard(day);
        if (index === 0) {
            card.classList.add('current-card');
        }
        dayCardsCarousel.appendChild(card);
    })



    return dayCardsCarousel;
}
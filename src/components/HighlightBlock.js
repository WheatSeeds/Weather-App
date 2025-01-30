import {createHtmlElement} from '../helpers.js'


export function HighlightBlock(dayData){
    const HighlightBlock = createHtmlElement('div', 'current-day-highlight', null);
    const title = createHtmlElement('span', 'highlight-title', null);
    title.innerHTML = `Today's Highlight`;
    HighlightBlock.appendChild(title);
    const details = [
        {id: 'current-day-wind',
            title: 'Wind Status',
            content: `${(dayData.windspeed * 1.609).toFixed(1)} km/h`,
            image: '../../public/images/highlight-icons/wind.svg',
        },
        {id: 'current-day-humidity',title: 'Humidity', content: `${dayData.humidity} %`,
            image: '../../public/images/highlight-icons/Humidity.svg'},
        {id: 'current-day-sunrise',title: 'Sunrise', content: `${dayData.sunrise.slice(0,5)}`,
            image: '../../public/images/highlight-icons/Sunrise.svg'},
        {id: 'current-day-uv',title: 'UV Index', content: `${dayData.uvindex} UV`,
            image: '../../public/images/highlight-icons/UV.svg',},
        {id: 'current-day-visibility',title: 'Visibility', content: `${dayData.visibility} km`,
            image: '../../public/images/highlight-icons/Visibility.svg',},
        {id: 'current-day-sunset',title: 'Sunset', content: `${dayData.sunset.slice(0,5)}`,
            image: '../../public/images/highlight-icons/Sunset.svg',},

    ]

    details.forEach(detail => {
        const element = createHtmlElement('span', detail.id, 'highlight-content-block');
        element.innerHTML = `
        <img src="${detail.image}" alt="">
        <span class="highlight-title">${detail.title}</span>
        <span class="highlight-content">${detail.content}</span>
        `;
        HighlightBlock.appendChild(element);
    })
    console.log(typeof((dayData.sunset)))
    return HighlightBlock
}

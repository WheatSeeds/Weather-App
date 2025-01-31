export function updateCurrentDayHighlight(dayData){
    const details = [
        {id: 'current-day-wind', content: `${(dayData.windspeed * 1.609).toFixed(1)} km/h`},
        {id: 'current-day-humidity', content: `${dayData.humidity} %`},
        {id: 'current-day-sunrise', content: `${dayData.sunrise.slice(0,5)}`},
        {id: 'current-day-uv', content: `${dayData.uvindex} UV`},
        {id: 'current-day-visibility', content: `${dayData.visibility} km`},
        {id: 'current-day-sunset', content: `${dayData.sunset.slice(0,5)}`},
    ]
    details.forEach(detail => {
        const element = document.getElementById(detail.id);
        const content = element.querySelector('.highlight-content');
        content.innerHTML = detail.content;
    })
}

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeatherData(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`,
        {mode: 'cors'})

    return await response.json()
}

import { WEATHER, DEFAULT_CITY } from "./language.js";
import './settings.js';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const apiKey = 'ad0eb8de708236d59242e0c859fb70a1';

async function getWeather(language = 'en', city = localStorage.getItem('city') || DEFAULT_CITY[language]) { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    
    try {
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `${WEATHER[language]['wind']}: ${Math.round(data.wind.speed)} ${WEATHER['en']['wind_units']}`;
        humidity.textContent = `${WEATHER[language]['humidity']}: ${data.main.humidity}%`;
    } catch (error) {
        weatherDescription.textContent = `${WEATHER[language]['err']}`;
    }
}

export { getWeather };
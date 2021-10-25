import { WEATHER } from "./language.js";

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const apiKey = 'ad0eb8de708236d59242e0c859fb70a1';
const lang = 'ru';

async function getWeather(lang, city = localStorage.getItem('city') || 'Minsk') { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    
    try {
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `${WEATHER['en']['wind']}: ${Math.round(data.wind.speed)} ${WEATHER['en']['wind_units']}`;
        humidity.textContent = `${WEATHER['en']['humidity']}: ${data.main.humidity}%`;
    } catch (error) {
        weatherDescription.textContent = `${WEATHER['en']['err']}`;
    }
}

export { getWeather };
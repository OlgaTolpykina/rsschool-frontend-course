import './settings.js';
import { DEFAULT_CITY } from './language.js';
import { showTime } from './show-time.js';
import { showDate } from './show-date.js';
import { showGreeting }  from './show-greeting.js';
import { getLocalStorage } from './name-city.js';
import { setBg, getTimeOfDay, addListenerGitHub } from './background.js';
import { setBgUnsplash } from './background-unsplash.js';
import { setBgFlickr } from './background-flickr.js';
import { getWeather } from './weather.js';
import { getRandomQuote } from './show-quotes.js';
import playList from './playlist.js';
import './add-playlist.js';
import './play-music.js';
import './todo.js';
import './self-estimation.js';

showTime();
setBg();
addListenerGitHub();
getLocalStorage();
getWeather();
getRandomQuote();

const cityInput = document.querySelector('.city');

cityInput.addEventListener('change', function() {
    getWeather(localStorage.getItem('language'), cityInput.value);
});

cityInput.addEventListener('focus', function() {
    cityInput.placeholder = '';
});

cityInput.addEventListener('blur', function() {
    if(localStorage.getItem('city')) {
        cityInput.value = localStorage.getItem('city');
    } else {
        cityInput.placeholder = DEFAULT_CITY[localStorage.getItem('language')];
    }
});
import { showTime } from './show-time.js';
import { showDate } from './show-date.js';
import { showGreeting }  from './show-greeting.js';
import './name-city.js';
import { setBg, getTimeOfDay } from './background.js';
import { setBgUnsplash } from './background-unsplash.js';
import { setBgFlickr } from './background-flickr.js';
import { getWeather } from './weather.js';
import { getRandomQuote } from './show-quotes.js';
import playList from './playlist.js';
import './add-playlist.js';
import './play-music.js';
import './settings.js';

showTime();
setBg();
document.addEventListener('DOMContentLoaded', getWeather);
getRandomQuote();
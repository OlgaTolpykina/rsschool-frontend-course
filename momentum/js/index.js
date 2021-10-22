import { showTime } from './show-time.js';
import { showDate } from './show-date.js';
import { getTimeOfDay, showGreeting }  from './show-greeting.js';
import './name-city.js';
import { setBg } from './background.js';
import { getWeather } from './weather.js';
import { getRandomQuote } from './show-quotes.js';

showTime();
setBg();
document.addEventListener('DOMContentLoaded', getWeather);
getRandomQuote();
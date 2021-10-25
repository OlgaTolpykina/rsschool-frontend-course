import { GREETING } from "./language.js";
import { getTimeOfDay } from "./background.js"; 

const greeting = document.querySelector('.greeting');

function showGreeting() {
    const greetingText = GREETING['en'][getTimeOfDay()];
    greeting.textContent = greetingText;
}

export { showGreeting }
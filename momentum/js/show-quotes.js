import { getRandomNum } from "./background.js";
import { QUOTES } from "./language.js";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteButton = document.querySelector('.change-quote');
const settingsMenu = document.querySelector('.settings-details');
const languageOptionsMenu = document.querySelector('.settings-options-language');
let index = getRandomNum(0, 2);

async function getRandomQuote(language = 'en') {  
    const quotes = QUOTES[language];
    const res = await fetch(quotes);
    const data = await res.json(); 

    quote.textContent = data[index].text;
    author.textContent = data[index].author;
}

function getNextQuote(language = 'en') {
    index = index >= 2 ? 0 : ++index;
    getRandomQuote(language);
} 

changeQuoteButton.addEventListener('click', () => {
    getNextQuote();
    settingsMenu.classList.add('hidden');
    languageOptionsMenu.classList.remove('active');
});

function addListenerChangeQuoteButton(language) {
    changeQuoteButton.addEventListener('click', () => {
        getNextQuote(language);
        settingsMenu.classList.add('hidden');
        languageOptionsMenu.classList.remove('active');
    }); 
}

function removerListenerChangeQuoteButton() {
    changeQuoteButton.removeEventListener('click', () => {
        getNextQuote();
        settingsMenu.classList.add('hidden');
        languageOptionsMenu.classList.remove('active');
    }); 
}


export { getRandomQuote, getNextQuote, removerListenerChangeQuoteButton, addListenerChangeQuoteButton };
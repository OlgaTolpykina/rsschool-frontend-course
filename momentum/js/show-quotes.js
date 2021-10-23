import { getRandomNum } from "./background.js";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteButton = document.querySelector('.change-quote');
let index = getRandomNum(0, 2);

async function getRandomQuote() {  
    const quotes = 'js/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 

    quote.textContent = data[index].text;
    author.textContent = data[index].author;
}

function getNextQuote() {
    index = index >= 2 ? 0 : ++index;
    getRandomQuote();
} 

changeQuoteButton.addEventListener('click', getNextQuote);

export { getRandomQuote };
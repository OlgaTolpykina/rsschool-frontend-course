import { setBg, getTimeOfDay, TIME_OF_DAY, removeListenerGitHub, addListenerGitHub } from "./background.js";
import { setBgUnsplash, addListenerUnsplash, removeListenerUnsplash } from "./background-unsplash.js";
import { setBgFlickr, addListenerFlickr, removeListenerFlickr } from "./background-flickr.js";

const settingsButton = document.querySelector('.settings-icon');
const settingsMenu = document.querySelector('.settings-details');
const languageButton = document.querySelector('.language');
const widgetsButton = document.querySelector('.widgets');
const backgroundButton = document.querySelector('.background');
const settingsOptionsMenu = document.querySelector('.settings-options');
const settingsTagsMenu = document.querySelector('.tag-input');
const languageOptionsMenu = document.querySelector('.settings-options-language');
const backgroundOptionsMenu = document.querySelector('.settings-options-background');
const widgetsOptionsMenu = document.querySelector('.settings-options-widgets');
const githubBackground = document.querySelector('.github-input');
const unsplashBackground = document.querySelector('.unsplash-input');
const flickrBackground = document.querySelector('.flickr-input');
const unsplashTags = document.querySelector('.unsplash');
const flickrTags = document.querySelector('.flickr');
const audioplayerCheckbox = document.querySelector('.audioplayer-checkbox');
const timeCheckbox = document.querySelector('.time-checkbox');
const dateCheckbox = document.querySelector('.date-checkbox');
const greetingCheckbox = document.querySelector('.greeting-checkbox');
const weatherCheckbox = document.querySelector('.weather-checkbox');
const quotesCheckbox = document.querySelector('.quotes-checkbox');
const player = document.querySelector('.player');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const weather = document.querySelector('.weather');
const quotes = document.querySelector('.quotes');

function showSettingsMenu() {
    settingsMenu.classList.toggle('hidden');
}

settingsButton.addEventListener('click', () => {
    showSettingsMenu();
    languageOptionsMenu.classList.toggle('active');
    backgroundOptionsMenu.classList.remove('active');
    widgetsOptionsMenu.classList.remove('active');
    settingsTagsMenu.classList.remove('active');
    languageButton.classList.add('active');
    backgroundButton.classList.remove('active');
    widgetsButton.classList.remove('active');
    unsplashTags.classList.remove('active');
    flickrTags.classList.remove('active');
    if (languageOptionsMenu.classList.contains('active') && settingsMenu.classList.contains('hidden')) {
        languageOptionsMenu.classList.remove('active')
    }
});

languageButton.addEventListener('click', () => {
    languageOptionsMenu.classList.add('active');
    backgroundOptionsMenu.classList.remove('active');
    widgetsOptionsMenu.classList.remove('active');
    languageButton.classList.add('active');
    backgroundButton.classList.remove('active');
    widgetsButton.classList.remove('active');
    unsplashTags.classList.remove('active');
    flickrTags.classList.remove('active');
});

backgroundButton.addEventListener('click', () => {
    languageOptionsMenu.classList.remove('active');
    backgroundOptionsMenu.classList.add('active');
    widgetsOptionsMenu.classList.remove('active');
    languageButton.classList.remove('active');
    backgroundButton.classList.add('active');
    widgetsButton.classList.remove('active');
    if(unsplashBackground.checked) {
        unsplashTags.classList.add('active');
        flickrTags.classList.remove('active');
    }
    if(flickrBackground.checked) {
        unsplashTags.classList.remove('active');
        flickrTags.classList.add('active');
    }
});

widgetsButton.addEventListener('click', () => {
    languageOptionsMenu.classList.remove('active');
    backgroundOptionsMenu.classList.remove('active');
    widgetsOptionsMenu.classList.add('active');
    languageButton.classList.remove('active');
    backgroundButton.classList.remove('active');
    widgetsButton.classList.add('active');
    unsplashTags.classList.remove('active');
    flickrTags.classList.remove('active');
});

githubBackground.addEventListener('change', () => {
    unsplashTags.classList.remove('active');
    flickrTags.classList.remove('active');
});

unsplashBackground.addEventListener('change', () => {
    unsplashTags.classList.add('active');
    flickrTags.classList.remove('active');
});

flickrBackground.addEventListener('change', () => {
    unsplashTags.classList.remove('active');
    flickrTags.classList.add('active');
});

//Настройка смены источника фон

const backgroundChoices = document.querySelectorAll('.settings-options-background label');
const tagValueUnsplash = document.querySelector('.unsplash');
const tagValueFlickr = document.querySelector('.flickr');
const timeOfDay = TIME_OF_DAY[getTimeOfDay()];

function changeBackground(value, tag = timeOfDay) {
    removeListenerGitHub();
    removeListenerUnsplash();
    removeListenerFlickr();
    switch (value) {
        case 'github':
            setBg();
            addListenerGitHub();
            break;
        case 'unsplash':
            setBgUnsplash(tag);
            addListenerUnsplash(tag);
            break;
        case 'flickr':
            setBgFlickr(tag);
            addListenerFlickr(tag);
            break;
    }
}

backgroundChoices.forEach(element => {
    element.addEventListener('change', (event) => {
        changeBackground(event.target.value);
    });
})

tagValueUnsplash.addEventListener('blur', () => {
    changeBackground('unsplash', tagValueUnsplash.value);
});

tagValueFlickr.addEventListener('blur', () => {
    changeBackground('flickr', tagValueFlickr.value);
});

function setBackgroundToLocalStorage() {
    let githubBackgroundChecked;
    let unsplashBackgroundChecked;
    let flickrBackgroundChecked;

    if (githubBackground.checked) {
        githubBackgroundChecked = 1;
    } else {
        githubBackgroundChecked = 0;
    }

    if (unsplashBackground.checked) {
        unsplashBackgroundChecked = 1;
    } else {
        unsplashBackgroundChecked = 0;
    }

    if (flickrBackground.checked) {
        flickrBackgroundChecked = 1;
    } else {
        flickrBackgroundChecked = 0;
    }

    localStorage.setItem('github', githubBackgroundChecked);
    localStorage.setItem('unsplash', unsplashBackgroundChecked);
    localStorage.setItem('flickr', flickrBackgroundChecked);
    localStorage.setItem('tagUnsplash', tagValueUnsplash.value);
    localStorage.setItem('tagFlickr', tagValueFlickr.value);
}

window.addEventListener('beforeunload', setBackgroundToLocalStorage);

window.addEventListener('load', () => {
    if (localStorage.getItem('github') == 1) {
        githubBackground.setAttribute('checked', 'checked');
        unsplashBackground.removeAttribute('checked');
        flickrBackground.removeAttribute('checked');
        setBg();
    }
    if (localStorage.getItem('unsplash') == 1) {
        githubBackground.removeAttribute('checked');
        unsplashBackground.setAttribute('checked', 'checked');
        flickrBackground.removeAttribute('checked');
        if (localStorage.getItem('tagUnsplash')) {
            tagValueUnsplash.value = localStorage.getItem('tagUnsplash');
            setBgUnsplash(localStorage.getItem('tagUnsplash'));
        } else {
            setBgUnsplash();
        }
    }
    if (localStorage.getItem('flickr') == 1) {
        githubBackground.removeAttribute('checked');
        unsplashBackground.removeAttribute('checked');
        flickrBackground.setAttribute('checked', 'checked');
        if (localStorage.getItem('tagFlickr')) {
            tagValueFlickr.value = localStorage.getItem('tagFlickr');
            setBgFlickr(localStorage.getItem('tagFlickr'));
        } else {
            setBgFlickr();
        }
    }
});

//Настройка отображения виджетов

audioplayerCheckbox.addEventListener('change', () => {
    player.classList.toggle('hidden');
});

timeCheckbox.addEventListener('change', () => {
    time.classList.toggle('hidden');
});

dateCheckbox.addEventListener('change', () => {
    date.classList.toggle('hidden');
});

greetingCheckbox.addEventListener('change', () => {
    greeting.classList.toggle('hidden');
    name.classList.toggle('hidden');
});

weatherCheckbox.addEventListener('change', () => {
    weather.classList.toggle('hidden');
});

quotesCheckbox.addEventListener('change', () => {
    quotes.classList.toggle('hidden');
});

function setWidgetsToLocalStorage() {
    let playerChecked;
    let timeChecked;
    let dateChecked;
    let greetingChecked;
    let weatherChecked;
    let quotesChecked;
    let todoChecked;

    if (audioplayerCheckbox.checked) {
        playerChecked = 1;
    } else {
        playerChecked = 0;
    }

    if (timeCheckbox.checked) {
        timeChecked = 1;
    } else {
        timeChecked = 0;
    }

    if (dateCheckbox.checked) {
        dateChecked = 1;
    } else {
        dateChecked = 0;
    }

    if (greetingCheckbox.checked) {
        greetingChecked = 1;
    } else {
        greetingChecked = 0;
    }

    if (weatherCheckbox.checked) {
        weatherChecked = 1;
    } else {
        weatherChecked = 0;
    }

    if (quotesCheckbox.checked) {
        quotesChecked = 1;
    } else {
        quotesChecked = 0;
    }
    
    localStorage.setItem('audioplayer', playerChecked);
    localStorage.setItem('time', timeChecked);
    localStorage.setItem('date', dateChecked);
    localStorage.setItem('greeting', greetingChecked);
    localStorage.setItem('weather', weatherChecked);
    localStorage.setItem('quotes', quotesChecked); 
}

window.addEventListener('beforeunload', setWidgetsToLocalStorage);

window.addEventListener('load', () => {
    if (localStorage.getItem('audioplayer') == 0) {
        audioplayerCheckbox.removeAttribute('checked');
        player.classList.add('hidden'); 
    }
    if (localStorage.getItem('time') == 0) {
        timeCheckbox.removeAttribute('checked');
        time.classList.add('hidden'); 
    }
    if (localStorage.getItem('date') == 0) {
        dateCheckbox.removeAttribute('checked');
        date.classList.add('hidden'); 
    }
    if (localStorage.getItem('greeting') == 0) {
        greetingCheckbox.removeAttribute('checked');
        greeting.classList.add('hidden');
        name.classList.add('hidden'); 
    }
    if (localStorage.getItem('weather') == 0) {
        weatherCheckbox.removeAttribute('checked');
        weather.classList.add('hidden'); 
    }
    if (localStorage.getItem('quotes') == 0) {
        quotesCheckbox.removeAttribute('checked');
        quotes.classList.add('hidden'); 
    }
});
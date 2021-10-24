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


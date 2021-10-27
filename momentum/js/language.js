const DATE = {
    'ru': 'ru-RU',
    'en': 'en-EN'
}

const GREETING = {
    'ru': ['Доброй ночи,', 'Доброе утро,', 'Добрый день,', 'Добрый вечер,'],
    'en': ['Good night,', 'Good morning,', 'Good afternoon,', 'Good evening,']
}

const PLACEHOLDER = {
    'ru': '[Введите имя]',
    'en': '[Enter name]'
}

const WEATHER = {
    'ru': {
        'wind': 'Скорость ветра',
        'wind_units': 'м/с',
        'humidity': 'Влажность',
        'err': 'Ошибка загрузки данных. Введите город еще раз',
    },
    'en': {
      'wind': 'Wind speed',
      'wind_units': 'm/s',
      'humidity': 'Humidity',
      'err': 'Data loading error. Enter the city again',
    }
}

const DEFAULT_CITY = {
    'ru': 'Минск',
    'en': 'Minsk'
}

const QUOTES = {
    'ru': 'js/data-ru.json',
    'en': 'js/data.json'
}

const SETTINGS = {
    'ru': {
        'language': 'Язык',
        'background': 'Фон',
        'widgets': 'Виджеты',
        'russian': 'Русский',
        'english': 'Английский',
        'tag': 'Введите тэг(напр.nature)',
        'player': 'Музыка',
        'time': 'Время',
        'date': 'Дата',
        'greeting': 'Имя',
        'weather': 'Погода',
        'quotes': 'Цитаты',
        'todo': 'Задачи'
    },
    'en': {
        'language': 'Language',
        'background': 'Background',
        'widgets': 'Widgets',
        'russian': 'Russian',
        'english': 'English',
        'tag': 'Choose tag (optional)',
        'player': 'Player',
        'time': 'Time',
        'date': 'Date',
        'greeting': 'Greeting',
        'weather': 'Weather',
        'quotes': 'Quotes',
        'todo': 'To do list'
    }
}

const TODO = {
    'ru': {
        'title': 'Задачи на сегодня',
        'placeholder': 'Что необходимо сделать?'
    },
    'en': {
        'title': 'Daily ToDo',
        'placeholder': 'What is to be done?'
    }
}

export { DATE, GREETING, PLACEHOLDER, WEATHER, DEFAULT_CITY, QUOTES, SETTINGS, TODO };
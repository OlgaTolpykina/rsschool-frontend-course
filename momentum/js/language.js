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

export { DATE, GREETING, PLACEHOLDER, WEATHER, DEFAULT_CITY, QUOTES };
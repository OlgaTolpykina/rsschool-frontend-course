import { handleOnLoad } from './js/services/Router.js';
import { soundClick, changeVolumeLevel, setTimer, setTimeToTimer } from './js/services/Utils.js';
import { quizInit } from './js/views/components/Quiz.js';


handleOnLoad();
window.addEventListener('click', quizInit);


//Разобраться с асинхронным получением данных
//Прописать quiz.end(), который будет вызывать модельное окно с результатом
//Настроить отображение о количестве сыгранных вопросов
//Настроить отображение игралась ли уже категория или нет
//Вопрос по картинам....
//Доработать верстку, в т.ч. адаптив
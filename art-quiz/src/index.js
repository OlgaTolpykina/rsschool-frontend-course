import { handleOnLoad } from './js/services/Router.js';
import { soundClick, changeVolumeLevel, setTimer, setTimeToTimer } from './js/services/Utils.js';
import { quizInit } from './js/views/components/Quiz.js';


handleOnLoad();
window.addEventListener('click', quizInit);
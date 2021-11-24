import { handleOnLoad, handleClickRoute, parseLocation } from './js/services/Router.js';
import { soundClick, changeVolumeLevel, setTimer, setTimeToTimer } from './js/services/Utils.js';

window.addEventListener('load', () => {
  handleOnLoad();
  changeVolumeLevel();
  setTimer();
  setTimeToTimer();
  localStorage.setItem('currentQuestion', 0);
});

window.addEventListener('hashchange', () => {
  handleOnLoad();
  changeVolumeLevel();
  setTimer();
  setTimeToTimer();
  localStorage.setItem('currentQuestion', 0);
});

window.addEventListener('click', handleClickRoute);
// window.addEventListener('click', soundClick);


console.log("Буду благодарна, если сможете проверить в четверг вечером. Заранее спасибо!")



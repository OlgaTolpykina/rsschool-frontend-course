import { handleOnLoad, handleClickRoute, parseLocation } from './js/services/Router.js';
import { soundClick, changeVolumeLevel, setTimer, setTimeToTimer } from './js/services/Utils.js';
import Data from './js/imagesRu.json';
// import { getData } from "./js/services/renderCategories.js";

window.addEventListener('load', () => {
  handleOnLoad();
  changeVolumeLevel();
  setTimer();
  setTimeToTimer();
});

window.addEventListener('hashchange', () => {
  handleOnLoad();
  changeVolumeLevel();
  setTimer();
  setTimeToTimer();
});

window.addEventListener('click', handleClickRoute);
// window.addEventListener('click', soundClick);


console.log("Буду благодарна, если сможете проверить в четверг вечером. Заранее спасибо!")

// async function getData() {
//     const response = await fetch('./imagesRu.json');
//     const data = await response.json();

//     console.log(data);
// }

// getData();

// console.log(Data);

// let article = new Article();
// console.log(article.generateArticle());

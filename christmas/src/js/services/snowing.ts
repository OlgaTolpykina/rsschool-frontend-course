import { createSnowFlake } from '../views/components/Background';

const snowflakeBtn = document.querySelector('.theme') as HTMLElement;
let intervalId: NodeJS.Timer;
let isSnowing = false;

function runAndStopSnow() {
  if (!isSnowing) {
    intervalId = setInterval(createSnowFlake, 100);
    (document.querySelector('.theme') as HTMLElement).classList.add('active');
    isSnowing = true;
    localStorage.setItem('snow', isSnowing.toString());
  } else {
    clearInterval(intervalId);
    (document.querySelector('.theme') as HTMLElement).classList.remove('active');
    isSnowing = false;
    localStorage.setItem('snow', isSnowing.toString());
  }
}

function isSnowOnLoad() {
  if (localStorage.getItem('snow') === 'true') {
    intervalId = setInterval(createSnowFlake, 100);
    isSnowing = true;
  } 
}


snowflakeBtn.addEventListener('click', runAndStopSnow);
isSnowOnLoad();

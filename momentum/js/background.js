const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
let randomNumber = getRandomNum(1, 20);

const TIME_OF_DAY = ['night', 'morning', 'afternoon', 'evening'];

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    return Math.floor(hours / 6);
}

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function setBg() {
    const img = new Image();
    const timeOfDay = TIME_OF_DAY[getTimeOfDay()];
    const bgNum = randomNumber >= 10 ? randomNumber : '0' + randomNumber;
    img.src = `https://raw.githubusercontent.com/olgatolpykina/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.addEventListener('load', () => {
        body.style.backgroundImage =`url(${img.src})`;    
    });
}

function getSlideNext() {
    randomNumber = randomNumber >= 20 ? 1 : ++randomNumber;
    setBg();
}

function getSlidePrev() {
    randomNumber = randomNumber <= 1 ? 20 : --randomNumber;
    setBg();    
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

export { getTimeOfDay, setBg, getRandomNum, TIME_OF_DAY };
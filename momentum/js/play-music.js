import playList from './playlist.js';

const playButton = document.querySelector('.play');
const playListItems = document.querySelectorAll('.play-item');
const buttonNext = document.querySelector('.play-next');
const buttonPrevious = document.querySelector('.play-prev');
const customPlayer = document.querySelector('.custom-player');
const songTitle = document.querySelector('.song-title');
const timeline = document.querySelector('.timeline');
const songDuration = document.querySelector('.duration');
const playBar = document.querySelector('#play-bar');
const volumeBar = document.querySelector('#volume-bar');
const volumeButton = document.querySelector('.volume');

//Проигрывание-пауза музыки

let isPlay = false,
    playNum = 0,
    currentTime = 0,
    volumeValue = 0.3;

const audio = new Audio();

function playAudio() {
    if(!isPlay) {
        audio.src = playList[playNum].src;
        audio.volume = volumeValue;
        audio.play();
        
        isPlay = true;

        audio.addEventListener('ended', playNext);
    } else {
        audio.pause();

        isPlay = false;
    }
}

function togglePlayButton() {
    playButton.classList.toggle('pause');
}

function toggleActiveItem() {
    playListItems[playNum].classList.toggle('item-active');
    playButtonsSmall[playNum].classList.toggle('button-active');
}

playButton.addEventListener('click', () => {
    playAudio();
    togglePlayButton();
    toggleSmallPlayButton();
    toggleActiveItem();
    setCustomPlayer();
});

// Продвинутый аудиоплеер

function setCustomPlayer() {
    customPlayer.classList.toggle('hidden');
}

audio.addEventListener('timeupdate', () => {
    const value = audio.currentTime / audio.duration * 100;
    playBar.value = value || 0;
    playBar.style.background = `linear-gradient(to right, rgb(211, 211, 211) 0%, rgb(211, 211, 211) ${value - 1}%, #fff ${value + 1}%, #fff 100%)`;
    songTitle.textContent = playList[playNum].title;
    songDuration.textContent = playList[playNum].duration;
    timeline.textContent = getTimeFormat(audio.currentTime);
});

function getTimeFormat(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60));
    if (minutes < 10) {
        minutes = `0${minutes}`;
      };
    if (seconds < 10) {
      seconds = `0${seconds}`;
    };
    return `${minutes}:${seconds}`;
}

playBar.addEventListener('change', () => {
    const time = audio.duration * (playBar.value / 100);
    audio.currentTime = time;
    
});

playBar.addEventListener('mousedown', () => {
    if (isPlay) {
        audio.pause();
        togglePlayButton();
        toggleSmallPlayButton();

        isPlay = false;
    }
});

playBar.addEventListener('input', () => {
    playBar.style.background = `linear-gradient(to right, rgb(211, 211, 211) 0%, rgb(211, 211, 211) ${playBar.value}%, #fff ${playBar.value}%, #fff 100%)`;
    timeline.textContent = getTimeFormat(playBar.value / 100 * audio.duration);
});

playBar.addEventListener('mouseup', () => {
    if (!isPlay) {
        audio.play();
        togglePlayButton();
        toggleSmallPlayButton();

        isPlay = true;
    }
});

//Изменение громкости

function toggleVolumeButton() {
    volumeButton.classList.toggle('mute');
}

volumeButton.addEventListener('click', () => {
    if (!audio.muted) {
        audio.muted = true;
        volumeBar.value = 0;
        volumeBar.style.background = '#fff';
    } else {
        audio.muted = false;
        volumeBar.value = volumeValue;
        volumeBar.style.background = `linear-gradient(to right, rgb(211, 211, 211) 0%, rgb(211, 211, 211) ${volumeBar.value * 100}%, #fff ${volumeBar.value * 100}%, #fff 100%)`;
    }
    toggleVolumeButton();
});

volumeBar.addEventListener('change', () => {
    audio.volume = volumeBar.value;
    if (volumeBar.value == 0) {
        toggleVolumeButton();
        audio.muted = true;
    } else {
        volumeButton.classList.remove('mute');
        audio.muted = false;
    }
    volumeBar.style.background = `linear-gradient(to right, rgb(211, 211, 211) 0%, rgb(211, 211, 211) ${volumeBar.value * 100}%, #fff ${volumeBar.value * 100}%, #fff 100%)`;
});

volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value;
    volumeBar.style.background = `linear-gradient(to right, rgb(211, 211, 211) 0%, rgb(211, 211, 211) ${volumeBar.value * 100}%, #fff ${volumeBar.value * 100}%, #fff 100%)`;
});

//Запуск или остановка трека с помощью маленькой кнопки

const playButtonsSmall = document.querySelectorAll('.play-small');

function toggleSmallPlayButton () {
    playButtonsSmall[playNum].classList.toggle('pause');
}

playButtonsSmall.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (!isPlay) {
            playNum = index;
            playAudio();
            toggleSmallPlayButton();
            toggleActiveItem();
            setCustomPlayer();
            togglePlayButton();
        } else if (isPlay && playNum == index) {
            setCustomPlayer();
            playAudio();
            toggleSmallPlayButton();
            toggleActiveItem();
            togglePlayButton();
        } else {
            audio.pause();
            toggleSmallPlayButton();
            toggleActiveItem();
            setCustomPlayer();
            isPlay = false;
            playNum = index;
            playAudio();
            toggleSmallPlayButton();
            toggleActiveItem();
            setCustomPlayer();
        }
    });
});

//Перелистывание треков

function playNext() {
    if (isPlay) {
        audio.pause();
        isPlay = false;
        toggleActiveItem();
        toggleSmallPlayButton();
        playNum = playNum >= playList.length - 1 ? 0 : ++playNum;
        playAudio();
        toggleActiveItem();
        toggleSmallPlayButton();
    }
}

function playPrevious() {
    if (isPlay) {
        audio.pause();
        isPlay = false;
        toggleActiveItem();
        toggleSmallPlayButton();
        playNum = playNum <= 0 ? playList.length - 1 : --playNum;
        playAudio();
        toggleActiveItem();
        toggleSmallPlayButton();
    }
}

buttonNext.addEventListener('click', playNext);
buttonPrevious.addEventListener('click', playPrevious);
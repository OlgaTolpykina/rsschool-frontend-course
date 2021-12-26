
const musicBtn = document.querySelector('.volume') as HTMLElement;

let isPlay = false;

const audio = new Audio();
audio.src = './assets/audio/audio.mp3';
audio.volume = 0.3;

function playAudio() {
  if (!isPlay) {
    audio.play();    
    isPlay = true;
    localStorage.setItem('music', isPlay.toString());
  } else {
    audio.pause();
    isPlay = false;
    localStorage.setItem('music', isPlay.toString());
  }
}

musicBtn.addEventListener('click', () => {
  playAudio();
});

window.addEventListener('click', () => {
  if (localStorage.getItem('music') === 'true') {
    console.log(audio);
    audio.play();
    audio.volume = 0.3;
  } 
});
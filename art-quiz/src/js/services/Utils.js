function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const audio = document.querySelector('audio');

function soundClick(event) {
  if (event.target.className.split(' ').includes('click')) {
    audio.play();
  }
}

function changeVolumeLevel() {
  const volumeBar = document.querySelector('#volume-bar');
  if (volumeBar) {
    volumeBar.addEventListener('change', function () {
      audio.volume = volumeBar.value;
      volumeBar.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${
        volumeBar.value * 100
      }%, #A4A4A4 ${volumeBar.value * 100}%, #A4A4A4 100%)`;
      audio.play();
    });
    volumeBar.addEventListener('input', function () {
      volumeBar.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${
        volumeBar.value * 100
      }%, #A4A4A4 ${volumeBar.value * 100}%, #A4A4A4 100%)`;
    });
  }

  const muteBtn = document.querySelector('.mute');
  if (muteBtn) {
    muteBtn.addEventListener('click', function () {
      audio.volume = 0;
      volumeBar.value = 0;
      volumeBar.style.background = '#A4A4A4';
    });
  }

  const soundBtn = document.querySelector('.sound');
  if (soundBtn) {
    soundBtn.addEventListener('click', function () {
      audio.volume = 0.3;
      volumeBar.value = 0.3;
      volumeBar.style.background =
        'linear-gradient(to right, #FFBCA2 0%, #FFBCA2 30%, #A4A4A4 30%, #A4A4A4 100%)';
      audio.play();
    });
  }

  if (localStorage.getItem('volumeLevel') && volumeBar) {
    volumeBar.value = localStorage.getItem('volumeLevel');
    audio.volume = volumeBar.value;
    volumeBar.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${
      volumeBar.value * 100
    }%, #A4A4A4 ${volumeBar.value * 100}%, #A4A4A4 100%)`;
  }

  const saveBtn = document.querySelector('.save-button');
  if (saveBtn) {
    saveBtn.addEventListener('click', function () {
      localStorage.setItem('volumeLevel', volumeBar.value);
    });
  }
}

function setTimer() {
  const timerBtn = document.querySelector('#timer');
  const timerSwitcher = document.querySelector('.slider');

  if (timerBtn) {
    timerBtn.addEventListener('click', function (event) {
      console.log(event.target);
      console.log(event.target.checked);

      document.querySelector('#on').classList.toggle('hidden');
      document.querySelector('#off').classList.toggle('hidden');

      timerSwitcher.classList.toggle('on');
      timerSwitcher.classList.toggle('off');

      if (event.target.checked) {
        localStorage.setItem('timer', 'off');
      } else {
        localStorage.setItem('timer', 'on');
      }
    });
  }

  if (localStorage.getItem('timer') && timerSwitcher) {
    if (localStorage.getItem('timer') == 'on') {
      timerSwitcher.classList.remove('off');
      timerSwitcher.classList.add('on');

      document.querySelector('#on').classList.remove('hidden');
      document.querySelector('#off').classList.add('hidden');
    } else {
      timerSwitcher.classList.add('off');
      timerSwitcher.classList.remove('on');

      document.querySelector('#on').classList.add('hidden');
      document.querySelector('#off').classList.remove('hidden');
    }
  }
}

function setTimeToTimer() {
  const decreaseTimeBtn = document.querySelector('.less-time');
  const increaseTimeBtn = document.querySelector('.more-time');
  const timeInput = document.querySelector('#time-input');
  const timeInputValue = document.querySelector('.time-input-value');

  if (timeInputValue) {
    timeInputValue.innerHTML = timeInput.value;
  }

  if (decreaseTimeBtn) {
    decreaseTimeBtn.addEventListener('click', function () {
      if (timeInput.value > 5) timeInput.value -= 5;
      timeInputValue.innerHTML = timeInput.value;
    });
  }

  if (increaseTimeBtn) {
    increaseTimeBtn.addEventListener('click', function () {
      if (timeInput.value < 30) timeInput.value = +timeInput.value + 5;
      timeInputValue.innerHTML = timeInput.value;
    });
  }

  const saveBtn = document.querySelector('.save-button');
  if (saveBtn) {
    saveBtn.addEventListener('click', function () {
      localStorage.setItem('timeToAnswer', timeInput.value);
    });
  }

  if (localStorage.getItem('timeToAnswer') && timeInput) {
    timeInputValue.innerHTML = localStorage.getItem('timeToAnswer');
  }
}

export { getRandomNum, soundClick, changeVolumeLevel, setTimer, setTimeToTimer };

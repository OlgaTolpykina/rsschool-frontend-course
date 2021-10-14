
// let nextVideoContainer = document.querySelector('.video-next_container');
// let video = document.querySelectorAll('.video-next-iframe');

// console.log(video);

// nextVideoContainer.addEventListener('click', function(event) {
    
// });

const videos = document.querySelectorAll('.video-next_container iframe'),
  bigVideo = document.querySelector('.video__current');  
  videosContainer = document.querySelector('.video-next_container'),
  rightArrow = document.querySelector('.controls-right .right'),
  leftArrow = document.querySelector('.controls-left .left'),
  pagination = document.querySelectorAll('.pagination-circle');

  let currentVideo = 0,
  isPossible = true;

function changeCurrentVideo (n) {
  currentVideo = (n + videos.length) % videos.length;
  pagination.forEach(videoItem => videoItem.style.background = '#999999');
  pagination[currentVideo].style.background = '#333333';
}

function hideVideo () {
  isPossible = false;
  videos.forEach(video => {
      video.classList.remove('active');
    });
}

function showVideo () {
    bigVideo.poster = `assets/video/posters/poster${currentVideo}.jpg`;
    bigVideo.src = `assets/video/video/video${currentVideo}.mp4`;
    for (let i = 0; i < 3; i++) {
        let index = (currentVideo + i + videos.length) % videos.length;
        videos[index].style.order = i;
        videos[index].classList.add('active');
        isPossible = true;  
    }
}

function previousVideo (n) {
  hideVideo();
  changeCurrentVideo(n - 1);
  showVideo();
}

function nextVideo (n) {
  hideVideo();
  changeCurrentVideo(n + 1);
  showVideo();
}

leftArrow.addEventListener('click', function () {
  if (isPossible) {
    previousVideo (currentVideo)
  }
  videos.forEach(video => video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'));
  bigVideo.pause();
  btnPlayBig.style.opacity = '1';
  btnPlaySmall.classList.add('active');
  btnPause.classList.remove('active');
})

rightArrow.addEventListener('click', function () {
  if (isPossible) {
    nextVideo(currentVideo);
  }
  videos.forEach(video => video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'));
  bigVideo.pause();
  btnPlayBig.style.opacity = '1';
  btnPlaySmall.classList.add('active');
  btnPause.classList.remove('active');
})

pagination.forEach((element, index) =>{
  element.addEventListener('click', () => {
    if (isPossible) {
      hideVideo();
      changeCurrentVideo(index);
      showVideo();
    }
    videos.forEach(video => video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'));
    })
})

//Запуск или остановка основного видео

let btnPlayBig = document.querySelector('.button-play_big');
let btnPlaySmall = document.querySelector('.play-button-small');
let btnPause = document.querySelector('.pause-button');

btnPlayBig.addEventListener('click', function(e) {
    e.preventDefault();
    bigVideo.play();
    btnPlayBig.style.opacity = '0';
    btnPlaySmall.classList.remove('active');
    btnPause.classList.add('active');
});

btnPause.addEventListener('click', function() {
    bigVideo.pause();
    btnPlayBig.style.opacity = '1';
    btnPlaySmall.classList.add('active');
    btnPause.classList.remove('active');
});

btnPlaySmall.addEventListener('click', function() {
    bigVideo.play();
    btnPlayBig.style.opacity = '0';
    btnPlaySmall.classList.remove('active');
    btnPause.classList.add('active');
});

pagination.forEach((element) => {
    element.addEventListener('click', () => {
        bigVideo.pause();
        btnPlayBig.style.opacity = '1';
        btnPlaySmall.classList.add('active');
        btnPause.classList.remove('active');
    })
});

bigVideo.addEventListener('click', function() {
    if (bigVideo.paused == true) {
        bigVideo.play();
        btnPlayBig.style.opacity = '0';
        btnPlaySmall.classList.remove('active');
        btnPause.classList.add('active');
    } else {
        bigVideo.pause();
        btnPlayBig.style.opacity = '1';
        btnPlaySmall.classList.add('active');
        btnPause.classList.remove('active');
    }
});

//Ползунок

let playBar = document.querySelector('#play__bar');

playBar.addEventListener('change', () => {
    const time = bigVideo.duration * (playBar.value / 100);
    bigVideo.currentTime = time;
  });

  bigVideo.addEventListener('timeupdate', () => {
    const value = (100 / bigVideo.duration) * bigVideo.currentTime;

    playBar.value = value || 0;
    playBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value - 1}%, #C4C4C4 ${value + 1}%, #C4C4C4 100%)`;
    
    if (bigVideo.duration == bigVideo.currentTime) {
        btnPlayBig.style.opacity = '1';
        btnPlaySmall.classList.add('active');
        btnPause.classList.remove('active');
    }
  });

  playBar.addEventListener('mousedown', () => {
    bigVideo.pause();

    btnPlayBig.style.opacity = '1';
    btnPlaySmall.classList.add('active');
    btnPause.classList.remove('active');
  });

  playBar.addEventListener('mouseup', () => {
    bigVideo.play();
    btnPlayBig.style.opacity = '0';
    btnPlaySmall.classList.remove('active');
    btnPause.classList.add('active');
  });

  //Регулировка громкости

  let volumeBar = document.querySelector('#volume__bar');
  let btnVolume = document.querySelector('.volume-button');
  let btnMute = document.querySelector('.mute-button');

  btnVolume.addEventListener('click', function() {
    bigVideo.muted = true;
    volumeBar.value = 0;
    btnVolume.classList.remove('active');
    btnMute.classList.add('active');
    volumeBar.style.background = `linear-gradient(to right, #C4C4C4 0%, #C4C4C4 100%)`;
  });

  btnMute.addEventListener('click', function() {
    bigVideo.muted = false;
    volumeBar.value = 0.2;
    btnVolume.classList.add('active');
    btnMute.classList.remove('active');
    volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeBar.value * 100}%, #C4C4C4 ${volumeBar.value * 100}%, #C4C4C4 100%)`;
  });


  volumeBar.addEventListener('change', function() {
    console.log(volumeBar.value);
    bigVideo.volume = volumeBar.value;
    if (volumeBar.value == 0) {
        btnVolume.classList.remove('active');
        btnMute.classList.add('active');
        bigVideo.muted = true;
    } else {
        bigVideo.muted = false;
        btnVolume.classList.add('active');
        btnMute.classList.remove('active');
    }
    volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${volumeBar.value * 100}%, #C4C4C4 ${volumeBar.value * 100}%, #C4C4C4 100%)`;
  })

  //Полный экран

  let btnFullscreen = document.querySelector('.fullscreen-button');
  let btnExitFullscreen = document.querySelector('.fullscreen-exit-button');
  let bigVideoContainer = document.querySelector('.video_container');

  btnFullscreen.addEventListener('click', function() {
    bigVideoContainer.classList.add('video_fullscreen');
    btnFullscreen.classList.remove('active');
    btnExitFullscreen.classList.add('active');
    goTopButton.classList.remove('back-to-top-show');
  });

  btnExitFullscreen.addEventListener('click', function() {
    bigVideoContainer.classList.remove('video_fullscreen');
    btnFullscreen.classList.add('active');
    btnExitFullscreen.classList.remove('active');
    goTopButton.classList.add('back-to-top-show');
  });



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



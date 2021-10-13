
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

let left = 0;
for (let i = 0; i < videos.length; i++) {
    if(items[i].classList[0] == 'active') {
        items[i].style.left = left + '%';
        left += 35;
    }
}

function hideVideo () {
  isPossible = false;
  videos.forEach(video => video.classList.remove('active'));
}

function showVideo () {
  left = 0;
  bigVideo.poster = `assets/video/posters/poster${currentVideo}.jpg`;
  bigVideo.src = `assets/video/video/video${currentVideo}.mp4`;
  for (let i = 0; i < 3; i++) {
      let index = (currentVideo + i + videos.length) % videos.length;
      videos[index].classList.add('active');
      videos[index].style.left = left + '%';
      isPossible = true;
      left +=34.6;
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
})

rightArrow.addEventListener('click', function () {
  if (isPossible) {
    nextVideo(currentVideo)
  }
})

pagination.forEach((element, index) =>{
  element.addEventListener('click', () => {
    if (isPossible) {
      hideVideo();
      changeCurrentVideo(index);
      showVideo()
    }
  })
})
import playList from './playlist.js';

const playListContainer = document.querySelector('.play-list');

playList.forEach((element, index) => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = playList[index].title;
    
    const button = document.createElement('button');
    button.classList.add('play-small', 'player-icon');
    
    playListContainer.append(li);
    li.prepend(button);
});
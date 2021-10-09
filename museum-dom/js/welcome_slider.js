const items = document.querySelectorAll('.welcome__images_container .item'),
  itemsContainer = document.querySelector('.wrapper__welcome'),
  buttonRight = document.querySelector('.welcome__slider_button .right'),
  buttonLeft = document.querySelector('.welcome__slider_button .left'),
  list = document.querySelectorAll('.welcome__slider_list li'),
  number = document.querySelector('.numeration__current');

let currentItem = 0,
  isEnabled = true;

function changeCurrentItem (n) {
  currentItem = (n + items.length) % items.length;
  list.forEach(listItem => listItem.style.background = '#ffffff');
  list[currentItem].style.background = '#D2B183';
  number.textContent = `0` + (currentItem + 1);
}

function hideItem (direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('active', direction);
  })
}

function showItem (direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  })
}

function previousItem (n) {
  hideItem('to_right');
  changeCurrentItem(n - 1);
  showItem('from_left');
}

function nextItem (n) {
  hideItem('to_left');
  changeCurrentItem(n + 1);
  showItem('from_right');
}

buttonLeft.addEventListener('click', function () {
  if (isEnabled) {
    previousItem (currentItem)
  }
})

buttonRight.addEventListener('click', function () {
  if (isEnabled) {
    nextItem(currentItem)
  }
})

list.forEach((element, index) =>{
  element.addEventListener('click', () => {
    if (isEnabled) {
      hideItem('to_left');
      changeCurrentItem(index);
      showItem('from_right')
    }
  })
})

let isSwap = false,
  pageX = null;

itemsContainer.addEventListener('mousedown', (evt) => {
  isSwap = true;
  pageX = evt.pageX;
})

itemsContainer.addEventListener('mouseup', (evt) => {
  if (!isSwap) {
    return;
  }

  if (pageX > evt.pageX) {
    if (isEnabled) {
      nextItem(currentItem);
    }    
  }

  if (pageX < evt.pageX) {
    if (isEnabled) {
      previousItem(currentItem);
    }    
  }
})

itemsContainer.addEventListener('touchstart', (evt) => {
  isSwap = true;
  pageX = evt.touches[0].clientX;
}, { passive: true })

itemsContainer.addEventListener('touchend', (evt) => {
  if (!isSwap) {
    return;
  }

  if (pageX > evt.changedTouches[0].clientX) {
    if (isEnabled) {
      nextItem(currentItem);
    }
  }

  if (pageX < evt.changedTouches[0].clientX) {
    if (isEnabled) {
      previousItem(currentItem);
    }
  }
})
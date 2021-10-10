'use strict';

function initComparisons() {
    let x, i;
    x = document.querySelectorAll('.photo_filtered');
    for (i = 0; i < x.length; i++) {
        compareImages(x[i]);
    }

    function compareImages(image) {
        let clicked = 0;
        let w = image.offsetWidth;
        let h = image.offsetHeight;
        image.style.width = (w / 2) + 'px'; 

        let slider = document.createElement('div');
        slider.setAttribute('class', 'separator');
        image.parentElement.insertBefore(slider, image);
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + 'px';
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + 'px';

        let sliderLineTop = document.createElement('div');
        sliderLineTop.setAttribute('class', 'separator-line');
        image.parentElement.insertBefore(sliderLineTop, image);
        sliderLineTop.style.top = 0;
        sliderLineTop.style.left = (w / 2) - (sliderLineTop.offsetWidth / 2) + 'px';

        let sliderLineBottom = document.createElement('div');
        sliderLineBottom.setAttribute('class', 'separator-line');
        image.parentElement.insertBefore(sliderLineBottom, image);
        sliderLineBottom.style.bottom = 0;
        sliderLineBottom.style.left = (w / 2) - (sliderLineBottom.offsetWidth / 2) + 'px';
        
        slider.addEventListener('mousedown', slideReady);
        window.addEventListener('mouseup', slideFinish);
        slider.addEventListener('touchstart', slideReady);
        window.addEventListener('touchstop', slideFinish);

        function slideReady(e) {
            e.preventDefault();
            clicked = 1;
            window.addEventListener('mousemove', slideMove);
            window.addEventListener('touchmove', slideMove);
        }

        function slideFinish(e) {
            e.preventDefault();
            clicked = 0;
        }

        function slideMove(e) {
            let sliderPosition;

            if (clicked == 0) return false;

            sliderPosition = getSliderPosition(e);
            if (sliderPosition < 0) sliderPosition = 0;
            if (sliderPosition > w) sliderPosition = w;
            slide(sliderPosition); 
        }

        function getSliderPosition(e) {
            let a, x = 0;
            e = e || window.event;
            a = image.getBoundingClientRect();
            x = e.pageX - a.left;
            x = x - window.pageXOffset;
            return x;
        }

        function slide(x) {
            image.style.width = x + 'px';
            slider.style.left = image.offsetWidth - (slider.offsetWidth / 2) + 'px';
            sliderLineTop.style.left = image.offsetWidth - (sliderLineTop.offsetWidth / 2) + 'px';
            sliderLineBottom.style.left = image.offsetWidth - (sliderLineBottom.offsetWidth / 2) + 'px';
        }
    }
}

initComparisons();
const pictureInnerContainer = document.querySelector('.picture-inner-container');
let array = [
    `<img class="gallery__img img-5row" src="assets/img/gallery/gallery2.jpg" width="464" height="580" alt="The statue of Diana of Versailles">`,
    `<img class="gallery__img img-4row" src="assets/img/gallery/gallery1.jpg" width="464" height="464" alt="Psyche Revived by Cupid's Kiss">`,
    `<img class="gallery__img img-5row" src="assets/img/gallery/gallery7.jpg" width="464" height="580" alt="The Mona Lisa painting">`,
    `<img class="gallery__img img-5row" src="assets/img/gallery/gallery9.jpg" width="464" height="580" alt="Louvre statue collection">`,
    `<img class="gallery__img img-5row" src="assets/img/gallery/gallery8.jpg" width="464" height="580" alt="Louvre hall">`,
    `<img class="gallery__img img-5row" src="assets/img/gallery/gallery5.jpg" width="464" height="580" alt="Venus de Milo">`,
    `<img class="gallery__img img-4row" src="assets/img/gallery/gallery10.jpg" width="464" height="464" alt="Arts de l islam louvre">`,
    `<img class="gallery__img img-4row" src="assets/img/gallery/gallery4.jpg" width="464" height="464" alt="The sculpture nike of samothrace">`,
    `<img class="gallery__img img-5row" src="assets/img/gallery/gallery3.jpg" width="464" height="580" alt="Louvre statue collection">`,
    `<img class="gallery__img img-4row" src="assets/img/gallery/gallery15.jpg" width="464" height="464" alt="View of the Louvre">`,
    `<img class="gallery__img img-5row" src="assets/img/gallery/gallery6.jpg" width="464" height="580" alt="The Virgin and Child with St Anne by Leonardo Da Vinci">`,
    `<img class="gallery__img img-3row" src="assets/img/gallery/gallery12.jpg" width="464" height="348" alt="The Cour statue in the Louvre">`,
    `<img class="gallery__img img-4row" src="assets/img/gallery/gallery11.jpg" width="464" height="464" alt="Liberty Leading the People painting">`,
    `<img class="gallery__img img-3row" src="assets/img/gallery/gallery13.jpg" width="464" height="348" alt="The classical sculpture">`,
    `<img class="gallery__img img-5row" src="assets/img/gallery/gallery14.jpg" width="464" height="580" alt="Leonardo di ser Piero da Vinci">`,    
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffle(array).forEach((elem) => pictureInnerContainer.innerHTML += elem);
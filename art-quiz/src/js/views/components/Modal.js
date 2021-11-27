export class Modal {
    constructor(result, imageNumber, questions) {
        this.result = result; // correct || wrong
        this.imageNumber = imageNumber;
        this.questions = questions;
        this.modalButton;
    }

    generateModal() {
        let overlay = this.createElement('div', 'overlay');
        let modalContent = this.createElement('div', 'modal');

        let modalPicture = this.createElement('img', 'modal-picture');
        modalPicture.src = `https://raw.githubusercontent.com/OlgaTolpykina/image-data/master/img/${this.imageNumber}.jpg`;
        modalPicture.setAttribute('alt', `${this.questions[this.imageNumber].name}`);
        modalPicture.setAttribute('width', '300');
        modalPicture.setAttribute('height', '300');

        let resultIcon = this.createElement('span', 'modal-result', `${this.result}`);

        let modalTitle = this.createElement('p', 'modal-text', 'modal-title');
        modalTitle.innerHTML = `${this.questions[this.imageNumber].name}`;

        let modalSubTitle = this.createElement('p', 'modal-text', 'modal-subtitle');
        modalSubTitle.innerHTML = `${this.questions[this.imageNumber].author}, ${this.questions[this.imageNumber].year}`;

        let modalButtons = this.createElement('div', 'modal-buttons');
        let modalButton = this.createElement('buttons', 'button', 'button_colored', 'button-modal', 'close-modal');
        modalButton.innerHTML = 'Следующий вопрос';
        this.modalButton = modalButton;
        modalButtons.append(modalButton);

        modalContent.append(modalPicture);
        modalContent.append(resultIcon);
        modalContent.append(modalTitle);
        modalContent.append(modalSubTitle);
        modalContent.append(modalButtons);
        overlay.append(modalContent);

        this.bindEvents();

        return overlay;
    }

    createElement(element, ...classes) {
        element = document.createElement(element);
        element.classList.add(...classes);
        return element;
    };

    bindEvents() {
        this.modalButton.addEventListener('click', this.closeModal);
    }

    closeModal(e) {
        let classes = e.target.classList;
        if(classes.contains('button')) {
            document.querySelector('.overlay').remove();
        }
    }
}

{/* <div class="overlay">
<div class="modal">
    <img class="modal-picture" src="https://raw.githubusercontent.com/OlgaTolpykina/image-data/master/img/0.jpg" alt="Picture" width = "300" height="300">
    <span class="modal-result"></span>
    <p class="modal-text modal-title">Сватовство майора</p>
    <p class="modal-text modal-subtitle">Павел Федотов, 1852</p>
    <div class="modal-buttons">
        <button class="button button_colored button-modal">Следующий вопрос</button>
    </div>
</div>
</div> */}
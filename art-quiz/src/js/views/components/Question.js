export class Question {
    constructor(imageNumber) {
        this.imageNumber = imageNumber;
    }

    generateQuestion(categoryName) {
        let template = '';
        if (document.querySelector('.artists-picture')) {
            document.querySelector('.artists-picture').remove();
        }
        let question = document.createElement('div');
        question.className = 'artists-picture';

        question.style.backgroundImage = `url("https://raw.githubusercontent.com/OlgaTolpykina/image-data/master/img/${this.imageNumber}.jpg")`;
        question.setAttribute('id', `${categoryName}`);

        template += `
                <ul class="pagination">
                    <li data-id="first"></li>
                    <li data-id="second"></li>
                    <li data-id="third"></li>
                    <li data-id="fourth"></li>
                    <li data-id="fifth"></li>
                    <li data-id="sixth"></li>
                    <li data-id="seventh"></li>
                    <li data-id="eighth"></li>
                    <li data-id="nine"></li>
                    <li data-id="ten"></li>
                  </ul>
        `;

        question.innerHTML = template;

        return question;
    }
}
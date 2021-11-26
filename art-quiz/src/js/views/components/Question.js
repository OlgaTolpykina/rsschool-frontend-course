export class Question {
    constructor(imageNumber, categoryName, right, wrong) {
        this.imageNumber = imageNumber;
        this.categoryName = categoryName;
        this.right = right;
        this.wrong = wrong;
    }

    generateQuestion() {
        if (document.querySelector('.artists-picture')) {
            document.querySelector('.artists-picture').remove();
        }
        let question = document.createElement('div');
        question.className = 'artists-picture';
        question.style.backgroundImage = `url("https://raw.githubusercontent.com/OlgaTolpykina/image-data/master/img/${this.imageNumber}.jpg")`;

        let list = document.createElement('ul');
        list.className = 'pagination';

        let listItems = [];
        for(let i = (this.categoryName - 1) * 10; i < (this.categoryName - 1) * 10 + 10; i++) { //Здесь i для первой категории - от 0 до 10, для второй - от 10 до 20 и тд
            if(this.right.includes(i)) {
                let rightAnswer = document.createElement('li');
                rightAnswer.className = 'right';
                listItems.push(rightAnswer);
            } else if (this.wrong.includes(i)) {
                let wrongAnswer = document.createElement('li');
                wrongAnswer.className = 'wrong';
                listItems.push(wrongAnswer);
            } else {
                let unanswered = document.createElement('li');
                listItems.push(unanswered);
            }
        }

        for(let i = 0; i < listItems.length; i++) {
            list.insertAdjacentElement('beforeend', listItems[i]);
        }

        question.insertAdjacentElement('afterbegin', list);

        return question;
    }
}
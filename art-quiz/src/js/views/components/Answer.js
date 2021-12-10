import { getRandomNum } from "../../services/Utils.js";
import data from '../../imagesRu.json';

export class Answer {
    constructor(imageNumber, categoryName) { 
        // this.allAnswers = data;
        this.imageNumber = imageNumber;
        this.categoryName = categoryName;
    }

    // async getAnswers() {
    //     const res = await fetch('./imagesRu.json');
    //     const data = await res.json();
    //     this.allAnswers = await data;
    // }

    generateAnswers(data) {
        if (document.querySelector('.artists-answers')) {
            document.querySelector('.artists-answers').remove();
        }

        const questionWrapper = document.querySelector('.container-question');

        let answers = document.createElement('div');
        answers.className = 'artists-answers';
        
        let indexes = [this.imageNumber];
        for(let i = 0; i < 3; i++) {
            let randomNumber = getRandomNum(0, 240);
            if(!indexes.includes(randomNumber)) {
                indexes.push(randomNumber);
            }
        }    

        let variants = []; //массив с вариантами авторов
        while(variants.length < 4) {
            let randomIndex = getRandomNum(0, 3);
            let index = indexes[randomIndex];
            if(!variants.includes(data[index].author)) {
                variants.push(data[index].author);
            }
        }

        for(let i = 0; i < 4; i++) {
            let answer = document.createElement('div');
            answer.className = "artists-answer";
            answer.setAttribute('data-categoryname', this.categoryName);
            answer.innerHTML = `${variants[i]}`;

            answers.insertAdjacentElement('afterbegin', answer);
        }

        questionWrapper.append(answers);
    }
}
import { Article } from './Article.js';
import { Question } from './Question.js';
import { Answer } from './Answer.js';
import data from '../../imagesRu.json';
import { handleOnLoad ,routes } from '../../services/Router.js';
import { questions, results } from '../../services/Utils.js';

export default class Quiz {
  constructor() {
    this.type = '';
    this.category = '';
    this.path = '';
    this.questions = {};
    this.results = [];
    this.categoryName = 0;
    this.imageNumber = 0;
    this.innerHTML = '';
    this.answers = [];
    this.right = [];
    this.wrong = [];
    this.current = 0;
  }

  handleClickRoute(event) {
    const path = event.target.className.split(' ');
    this.type = event.target.dataset.type;
    this.categoryName = event.target.dataset.categoryname;
    this.innerHTML = event.target.innerHTML;
    
    for (let i = 0; i < routes.length; i++) {
      if (path.includes(routes[i].id)) {
        window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${routes[i].path}`;
        this.path = routes[i].path;
      }
    }

    if (path.includes('exit') && path.includes('categories-route')) {
      this.right = [];
      this.wrong = [];
      this.current = 0;
    }

    handleOnLoad();
    
    this.setContentToDom();
  } 

  setContentToDom() {
    const mainWrapper = document.querySelector('.application');
  
    switch (this.path) {
      case '/categories':
        let route = `${this.type}-quiz`;
        mainWrapper.insertAdjacentElement('beforeend', this.renderCategoriesToDom(route));
        break;
      case '/artists':
        if (this.current > 0 && this.current <= 10) {
          this.check();  
        } else {
          this.end();
        }

        const questionWrapper = document.querySelector('.container-question');
        questionWrapper.insertAdjacentElement('beforeend', this.renderQuestionToDom());
        questionWrapper.insertAdjacentElement('beforeend', this.renderAnswersToDom());
        this.current++;
        break;
      default:
        break;  
    }
  }

  getCategoriesWrapper() {
    let categoriesWrapper = document.createElement('div');
    categoriesWrapper.className = 'content content_categories';

    return categoriesWrapper;
  }

  renderCategoriesToDom(route) {
    let categoriesWrapper = this.getCategoriesWrapper();
    categoriesWrapper.innerHTML = '';
    if (this.type == 'artists') {
      for (let i = 1; i <= 12; i++) {
        this.category = i;
        let article = new Article(this.type, this.category, route);
        categoriesWrapper.append(article.generateArticle());
      }
    } else if (this.type == 'pictures') {
      for (let i = 13; i <= 24; i++) {
        this.category = i;
        let article = new Article(this.type, this.category, route);
        categoriesWrapper.append(article.generateArticle());
      }
    }
    return categoriesWrapper;
  }

  renderQuestionToDom() {
    this.imageNumber = this.categoryName > 1 ? (+this.categoryName - 1) * 10 + +this.current : 0 + +this.current;
    let question = new Question(this.imageNumber, this.categoryName, this.right, this.wrong);

    this.answers = new Answer(this.imageNumber, this.categoryName);

    return question.generateQuestion();
  }

  renderAnswersToDom() {
    return this.answers.generateAnswers();
  }

  check () {
    if(this.innerHTML == data[this.imageNumber].author) {
      this.right.push(this.imageNumber);
      //Должно вызываться модальное окно с указанием, что ответ верный и предложением перейти к следующему вопросу this.showModal(...)
    } else {
      this.wrong.push(this.imageNumber);
      //Должно вызываться модальное окно с указанием, что ответ неверный и предложением перейти к следующему вопросу this.showModal(...)
    };
  }

  end() {
    //Должно вызываться модальное окно с результатом раунда
  }
}

let quiz = new Quiz();

function quizInit(event) {
  quiz.handleClickRoute(event);
}

export { quizInit };
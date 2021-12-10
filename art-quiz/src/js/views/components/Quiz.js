import { Article } from './Article.js';
import { Question } from './Question.js';
import { Answer } from './Answer.js';
import data from '../../imagesRu.json';
import { handleOnLoad ,routes } from '../../services/Router.js';
import { Modal } from './Modal.js';
import Bottombar from './Bottombar.js';
import { questions, results } from '../../services/Utils.js';

export default class Quiz {
  constructor() {
    this.type = '';
    this.category = '';
    this.path = '';
    this.classes = '';
    this.results = [];
    this.categoryName = 0;
    this.imageNumber = 0;
    this.innerHTML = '';
    this.answers = [];
    this.variants;
    this.right = [];
    this.wrong = [];
    this.current = 0;
  }

  async getData(url) {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
    };

    return await response.json();
  }

  handleClickRoute(event) {
    const path = event.target.className.split(' ');
    this.classes = path;
    this.type = event.target.dataset.type;
    this.categoryName = event.target.dataset.categoryname;
    this.innerHTML = event.target.innerHTML;
    const mainWrapper = document.querySelector('.application');
    
    for (let i = 0; i < routes.length; i++) {
      if (this.classes.includes(routes[i].id)) {
        window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${routes[i].path}`;
        this.path = routes[i].path;
      }
    }

    if (this.classes.includes('exit') && this.classes.includes('categories-route')) {
      this.right = [];
      this.wrong = [];
      this.current = 0;
    } 

    if (this.classes.includes('categories-route') 
        || this.classes.includes('home-route') 
        || this.classes.includes('settings-route')
        || this.classes.includes('artists-quiz')
        || this.classes.includes('pictures-quiz')) {
      handleOnLoad();
      this.setContentToDom();
      mainWrapper.innerHTML += Bottombar.render();
    }

    if (this.classes.includes('artists-answer')) {
      this.setContentToDom();
    }
    
  } 

  setContentToDom() {
    const mainWrapper = document.querySelector('.application');
  
    switch (this.path) {
      case '/categories':
        let route = `${this.type}-quiz`;
        mainWrapper.insertAdjacentElement('beforeend', this.renderCategoriesToDom(route));
        break;
      case '/artists':
        if (this.current > 0 && this.current <= 10 && !this.classes.includes('close-modal')) {
          this.getData('./imagesRu.json').then((data) => this.check(data));  
        } else if(this.current > 10){
          this.end();
        }

        const questionWrapper = document.querySelector('.container-question');
        questionWrapper.insertAdjacentElement('beforeend', this.renderQuestionToDom());
        this.renderAnswersToDom();
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

 async renderAnswersToDom() {
    await this.getData('./imagesRu.json')
      .then((data) => this.answers.generateAnswers(data));
  }

  check(data) {
    if(this.innerHTML == data[this.imageNumber].author) {
      this.right.push(this.imageNumber);
      let modal = new Modal('correct', this.imageNumber, data, this.categoryName);

      const mainWrapper = document.querySelector('.application');
      mainWrapper.insertAdjacentElement('beforeend', modal.generateModal());
    } else {
      this.wrong.push(this.imageNumber);
      let modal = new Modal('wrong', this.imageNumber, data, this.categoryName);

      const mainWrapper = document.querySelector('.application');
      mainWrapper.insertAdjacentElement('beforeend', modal.generateModal());
    }
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
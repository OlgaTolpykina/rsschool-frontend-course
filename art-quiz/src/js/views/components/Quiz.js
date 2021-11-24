import { Article } from './Article.js';
import { Question } from './Question.js';
import { Answer } from './Answer.js';
import data from '../../imagesRu.json';

export default class Quiz {
  constructor(type, results) {
    this.type = type;
    this.results = results;
    this.categoryName = 0;
    this.answers = [];
    this.score = 0;
    this.result = 0;
    this.current = localStorage.getItem('currentQuestion') || 0;
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
        let article = new Article(i, route);
        categoriesWrapper.append(article.generateArticle());
      }
    } else if (this.type == 'pictures') {
      for (let i = 13; i <= 24; i++) {
        let article = new Article(i, route);
        categoriesWrapper.append(article.generateArticle());
      }
    }
    return categoriesWrapper;
  }

  renderQuestionToDom(categoryName) {
    if(this.current >= 10){ 
      this.end();
    }

    this.categoryName = categoryName;

    let imageNumber = this.categoryName > 1 ? (this.categoryName - 1) * 10 - 1 + +this.current : 0 + +this.current;
    let question = new Question(imageNumber);

    this.answers = new Answer(imageNumber);
    
    this.current++;
    localStorage.setItem('imageNumber', imageNumber);
    localStorage.setItem('currentQuestion', this.current);
    localStorage.setItem(`${this.categoryName}`, this.current);

    return question.generateQuestion(this.categoryName);
  }

  renderAnswersToDom() {
    return this.answers.generateAnswers();
  }

  check () {
    // проверить, правильный ли ответ
    if(localStorage.getItem('author') == data[localStorage.getItem('imageNumber')]) {
      this.result++;
      document.querySelector(localStorage.getItem('currentQuestion')).style.backgroundColor = green;
    };
  }

  // nextQuestion(category) {
  //   //будет вызываться кликом по варианту ответа
    
  //   this.current++;

  //   if(this.current > 10){ 
  //     this.end();
  //   }

  //   this.renderQuestionToDom(category);
  // }

  end() {
    
  }
}

//по нажатию на кнопку ответа должен опять вызываться renderQuestionToDom. Как проверять, что вопросы закончились? Надо создавать массив вопросов под categoryName?

//добавить на странице категорий id для каждой категории (от 1 до 24), чтобы он определялся в router по клику(event.target.getAttribute('id')) и передавался в renderquestionToDom
// определять массив данных для первого вопроса по индексу (аналогия с imageIndex см выше), затем при клиеке по варианту ответа будет index++
//сделать класс Question с методом generateQuestion, куда в template перенести из ArtistsQuiz часть с картиной и вариантами ответов. По аналогии с Article.
//сделать класс Answers, который будет вставлять часть с вариантами ответов + возвращать, правильный или нет ответ
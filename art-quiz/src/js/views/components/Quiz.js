import { Article } from './Article.js';

export default class Quiz {
  constructor(type, questions, results) {
    this.type = type;
    this.questions = questions;
    this.results = results;
    this.score = 0;
    this.result = 0;
    this.current = 0;
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
}

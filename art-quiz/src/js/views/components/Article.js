export class Article {
  constructor(type, categoryName, route) {
    this.type = type;
    this.categoryName = categoryName;
    this.answered = localStorage.getItem(`${this.categoryName}`) || 0;
    this.route = route;
    this.image;
  }

  generateArticle() {
    let template = '';
    let article = document.createElement('article');
    article.className = 'category';

    let imageIndex = this.categoryName > 1 ? (this.categoryName - 1) * 10 : 0;

    template += `<p class="category-name">${this.categoryName}</p>`;
    template += '<div class="category-statistics">';
    template += `<span class="answered">${this.answered}</span>`;
    template += '<span>/</span>';
    template += '<span class="total">10</span>';
    template += '</div>';
    template += `<img class="category-image ${this.route}" src="https://raw.githubusercontent.com/OlgaTolpykina/image-data/master/img/${imageIndex}.jpg" alt="Preview" width="195" height="206" data-categoryName="${this.categoryName}" data-type="${this.type}">`;

    article.innerHTML = template;

    return article;
  }
}

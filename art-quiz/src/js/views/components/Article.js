export class Article {
    constructor(categoryName) {
        this.categoryName = categoryName;
        this.answered = 0;
    }

    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'category';

        let imageIndex = (this.categoryName > 1) ? (this.categoryName-1) * 10 - 1 : 0;

        template += `<p class="category-name">${this.categoryName}</p>`;
        template += '<div class="category-statistics">';
        template += `<span class="answered">${this.answered}</span>`;
        template += '<span>/</span>';
        template += '<span class="total">10</span>';
        template += '</div>';
        template +=  `<img class="category-image" src="https://raw.githubusercontent.com/OlgaTolpykina/image-data/master/img/${imageIndex}.jpg" alt="Preview" width="195" height="206">`;     

        article.innerHTML = template;

        return article;
    }
}


// {/* <article class="category">
//                     <p class="category-name">1</p>
//                     <div class="category-statistics">
//                         <span class="answered">5</span>
//                         <span>/</span>
//                         <span class="total">10</span>
//                     </div>
//                     <div class="category-image"></div>
//                 </article> */}
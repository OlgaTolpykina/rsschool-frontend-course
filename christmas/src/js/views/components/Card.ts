import { ICardData } from '../../services/types';


export default class Card implements ICardData {
  readonly num: number;
  readonly name: string;
  readonly count: number;
  readonly year: number;
  readonly shape: string;
  readonly color: string;
  readonly size: string;
  readonly favorite: boolean;
  public selected?: boolean;

  constructor({ num, name, count, year, shape, color, size, favorite, selected = false }: ICardData) {
    this.num = num;
    this.name = name;
    this.count = count;
    this.year = year;
    this.shape = shape;
    this.color = color;
    this.size = size;
    this.favorite = favorite;
    this.selected = selected;
  }

  generateCard(idx: number): HTMLElement {
    let template = '';
    const card: HTMLElement = document.createElement('div');
    card.className = 'card';
    card.id = this.num.toString();
    // card.style.animationDelay = `${idx * 0.1}s`;
    if (this.selected) card.className = 'card active';

    const isFavorite: string = (this.favorite) ? 'да' : 'нет';

    template += 
          `<h2 class="card__title">${this.name}</h2>
           <img class="card__image" src="./assets/img/${this.num}.png" alt="${this.name}">
           <div class="card__description">
            <p>Количество: <span>${this.count}</span></p>
            <p>Год покупки: <span>${this.year}</span> год</p>
            <p>Форма игрушки: <span>${this.shape}</span></p>
            <p>Цвет игрушки: <span>${this.color}</span></p>
            <p>Размер игрушки: <span>${this.size}</span></p>
            <p>Любимая: <span>${isFavorite}</span></p>
           </div>
           <div class="ribbon"></div>
          `;
    
    card.innerHTML = template;

    return card;
  }

  selectCard() {
    this.selected = true;
  }
}
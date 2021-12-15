import { ICardData } from './ICardData';
import { LoadData } from './loadData';
import { Card } from './Card';

export class Toys {
  cardsOnPageArray: Array<ICardData> = [];
  selectedCards: Array<ICardData> = [];
  selectBtn: HTMLSelectElement;
  favoriteBtn: HTMLElement;

  constructor() {
    this.cardsOnPageArray = [];
    this.selectedCards = [];
    this.selectBtn = document.querySelector('.select') as HTMLSelectElement;
    this.favoriteBtn = document.querySelector('.favorite-number') as HTMLElement;    
  }

  getCardsList(): void  {

    const cards = new LoadData();
    cards.build().then((data: Array<ICardData>) => {
      data.forEach(card => {
        this.cardsOnPageArray.push(card);
      });

      this.cardsOnPageArray.sort((a, b) => a.name > b.name ? 1 : -1);

      this.renderCards(this.cardsOnPageArray);
      this.selectBtn.addEventListener('change', () => {
        this.sortCardsList();
      })
    })
  }

  sortCardsList():void {
      if (this.selectBtn.value === 'sort-name-max') {
        this.cardsOnPageArray.sort((a, b) => a.name > b.name ? 1 : -1);
      } else if (this.selectBtn.value === 'sort-name-min') {
        this.cardsOnPageArray.sort((a, b) => a.name > b.name ? -1 : 1);
      } else if (this.selectBtn.value === 'sort-count-max') {
        this.cardsOnPageArray.sort((a, b) => a.year > b.year ? 1 : -1);
      } else if (this.selectBtn.value === 'sort-count-min') {
        this.cardsOnPageArray.sort((a, b) => a.year > b.year ? -1 : 1);
      }
      this.renderCards(this.cardsOnPageArray);
  }

  renderCards(data: Array<ICardData>): void {
    const cardsWrapper:HTMLElement = document.querySelector('.cards-inner-container') as HTMLElement;
    cardsWrapper.innerHTML = '';
        
    data.forEach((cardInfo: ICardData) => {
      const card = new Card(cardInfo);
      const cardElement:HTMLElement = card.generateCard();
          
      cardsWrapper.append(cardElement);

      cardElement.addEventListener('click', () => {
        this.getSelectedCards(card, cardElement);
      });
    });
  }

  getSelectedCards(card: Card, cardElement:HTMLElement):void {

    if (this.selectedCards.length < 20 && !this.selectedCards.includes(card)) {
        this.selectedCards.push(card);
        cardElement.classList.add('active');
        this.favoriteBtn.innerHTML = `${this.selectedCards.length}`;
    } else if (this.selectedCards.includes(card)) {
        let index = this.selectedCards.indexOf(card);
        this.selectedCards.splice(index, 1);
        cardElement.classList.remove('active');
        this.favoriteBtn.innerHTML = `${this.selectedCards.length}`;
    } else {
        const limitPhrase = document.createElement('p');
        limitPhrase.className = 'favorite-number_limit';
        limitPhrase.innerHTML = 'Извините, все слоты заполнены';
        this.favoriteBtn.append(limitPhrase);
    }
  }
}
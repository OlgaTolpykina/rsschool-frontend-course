import { ICardData } from './ICardData';
import { LoadData } from './loadData';
import { Card } from './Card';
import { RangeSlider } from './RangeSlider';

export class Toys {
  allCardsArray: Array<ICardData> = [];
  cardsOnPageArray: Array<ICardData> = [];
  selectedCards: Array<ICardData> = [];
  rangeSortedArray: Array<ICardData> = [];
  selectBtn: HTMLSelectElement;
  favoriteBtn: HTMLElement;
  sliders: NodeListOf<HTMLInputElement>;

  constructor() {
    this.allCardsArray = [];
    this.cardsOnPageArray = [];
    this.selectedCards = [];
    this.rangeSortedArray = [];
    this.selectBtn = document.querySelector('.select') as HTMLSelectElement;
    this.favoriteBtn = document.querySelector('.favorite-number') as HTMLElement;
    this.sliders = document.querySelectorAll('.range__input') as NodeListOf<HTMLInputElement>;    
  }

  getCardsList(): void  {

    const cards = new LoadData();
    const rangeSliders = new RangeSlider();

    cards.build().then((data: Array<ICardData>) => {
      data.forEach(card => {
        this.allCardsArray.push(card);
      });

      this.allCardsArray.sort((a, b) => a.name > b.name ? 1 : -1); 
      this.renderCards(this.allCardsArray); 

      this.cardsOnPageArray = this.allCardsArray;

      this.selectBtn.addEventListener('change', () => {
        this.sortCards();
      })

      rangeSliders.setRangeSliders();
      this.sliders.forEach((slider) => {
        slider.addEventListener('change', () => {
          this.rangeFilterCards();
        })
      })
    })
  }

  renderCards(data: Array<ICardData>): void {
    const cardsWrapper:HTMLElement = document.querySelector('.cards-inner-container') as HTMLElement;
    cardsWrapper.innerHTML = '';
        
    data.forEach((cardInfo: ICardData) => {
      const card = new Card(cardInfo);
      const cardElement:HTMLElement = card.generateCard();
          
      cardsWrapper.append(cardElement);

      cardElement.addEventListener('click', () => {
        this.selectCards(card, cardElement);
      });
    });
  }

  sortCards():void {  

      if (this.selectBtn.value === 'sort-name-max') {
        this.cardsOnPageArray.sort((a, b) => a.name > b.name ? 1 : -1);
      } else if (this.selectBtn.value === 'sort-name-min') {
        this.cardsOnPageArray.sort((a, b) => a.name > b.name ? -1 : 1);
      } else if (this.selectBtn.value === 'sort-count-max') {
        this.cardsOnPageArray.sort((a, b) => a.year > b.year ? 1 : -1);
      } else if (this.selectBtn.value === 'sort-count-min') {
        this.cardsOnPageArray.sort((a, b) => a.year > b.year ? -1 : 1);
      }
      
      this.checkIfSelected();
      this.renderCards(this.cardsOnPageArray);
  }

  selectCards(card: Card, cardElement:HTMLElement):void {

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

  rangeFilterCards() {
    this.cardsOnPageArray = this.allCardsArray;
    
    this.rangeSortedArray = this.cardsOnPageArray.filter(card =>
      card.count >= parseInt(this.sliders[0].value) && 
      card.count <= parseInt(this.sliders[1].value) && 
      card.year >= parseInt(this.sliders[2].value) && 
      card.year <= parseInt(this.sliders[3].value) 
    );

    this.cardsOnPageArray = this.rangeSortedArray;

    this.sortCards();
    this.checkIfSelected();
    this.renderCards(this.cardsOnPageArray);
  }

  checkIfSelected():void {
    const selected = this.selectedCards.map(item => item.num);
    this.cardsOnPageArray = this.cardsOnPageArray.map((card) => selected.includes(card.num) ? {...card, selected: true} : card);
  }

}
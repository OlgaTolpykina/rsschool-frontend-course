import { ICardData, IFilters, Sort, SortDirection } from './types';
import { LoadData } from './loadData';
import { Card } from './Card';
import { RangeSlider } from './RangeSlider';
import { FiltersComponent } from './filtersComponents';

export class Toys {
  allCardsArray: Array<ICardData> = [];
  cardsOnPageArray: Array<ICardData> = [];
  selectedCards: Array<ICardData> = [];
  filteredCards: Array<ICardData> = [];
  rangeSortedArray: Array<ICardData> = [];
  filters: IFilters;
  sortConditions: Sort;
  selectBtn: HTMLSelectElement;
  selectedBtn: HTMLElement;
  favoriteBtn: HTMLInputElement;
  sizeBtns: NodeListOf<HTMLInputElement>;
  colorBtns: NodeListOf<HTMLElement>;
  shapeBtns: NodeListOf<HTMLElement>;
  sliders: NodeListOf<HTMLInputElement>;
  favoriteValue = false;
  sizeArray: Array<string>;
  colorArray: Array<string>;
  shapeArray: Array<string>;
  searchBtn: HTMLInputElement;

  constructor() {
    this.allCardsArray = [];
    this.cardsOnPageArray = [];
    this.selectedCards = [];
    this.filteredCards = [];
    this.rangeSortedArray = [];
    this.favoriteValue = false;
    this.sizeArray = [];
    this.colorArray = [];
    this.shapeArray = [];
    this.filters = {};
    this.sortConditions = {
      key: 'name',
      direction: SortDirection.ASC,
    };
    this.selectBtn = document.querySelector('.select') as HTMLSelectElement;
    this.selectedBtn = document.querySelector('.favorite-number') as HTMLElement;
    this.favoriteBtn = document.querySelector('.filter_favorite') as HTMLInputElement;
    this.sizeBtns = document.querySelectorAll('.filter_size') as NodeListOf<HTMLInputElement>;
    this.colorBtns = document.querySelectorAll('.filter_color') as NodeListOf<HTMLElement>;
    this.shapeBtns = document.querySelectorAll('.filter_shape') as NodeListOf<HTMLElement>;
    this.searchBtn = document.querySelector('.search') as HTMLInputElement;
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
      const filters = new FiltersComponent(this.filters, this.sortConditions);

      //Search field      
      this.searchBtn.addEventListener('change', () => {
        if (this.searchBtn.value) {
          this.filters.name = this.searchBtn.value.toLowerCase();
          this.searchBtn.style.backgroundImage = 'url("../assets/img/svg/cross.svg")';
        } else if (this.filters.name && !this.searchBtn.value) {
          delete this.filters.name;
          this.searchBtn.style.backgroundImage = 'url("../assets/img/svg/search.svg")';
        }

        this.cardsOnPageArray = filters.parceData(this.allCardsArray);

        this.checkIfSelected();
        this.renderCards(this.cardsOnPageArray);
      });

      //Select slider      
      this.selectBtn.addEventListener('change', () => {
        this.sortConditions.key = this.selectBtn.value.split('-')[0];
        
        if (this.selectBtn.value.split('-')[1].toUpperCase() === 'DSC') {
          this.sortConditions.direction = SortDirection.DSC;
        } else {
          this.sortConditions.direction = SortDirection.ASC;
        }

        this.cardsOnPageArray = filters.parceData(this.allCardsArray);

        this.checkIfSelected();
        this.renderCards(this.cardsOnPageArray);
      });

      //Filters

      this.favoriteBtn.addEventListener('click', () =>{
        (this.favoriteBtn.checked) ? this.filters.favorite = true : delete this.filters.favorite;

        this.cardsOnPageArray = filters.parceData(this.allCardsArray);

        this.checkIfSelected();
        this.renderCards(this.cardsOnPageArray);
      });

      this.sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.sizeArray = [];
          this.sizeBtns.forEach((button) => {
            if (button.checked) this.sizeArray.push((button.dataset.filter) as string);
          });
          (this.sizeArray.length > 0) ? this.filters.size = this.sizeArray : delete this.filters.size;

          this.cardsOnPageArray = filters.parceData(this.allCardsArray);

          this.checkIfSelected();
          this.renderCards(this.cardsOnPageArray);
        });
      });

      this.colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('active');
          this.colorArray = [];
          this.colorBtns.forEach((button) => {
            if (button.className.includes('active')) this.colorArray.push((button.dataset.filter) as string);
          });
          (this.colorArray.length > 0) ? this.filters.color = this.colorArray : delete this.filters.color;

          this.cardsOnPageArray = filters.parceData(this.allCardsArray);

          this.checkIfSelected();
          this.renderCards(this.cardsOnPageArray);
        });
      });

      this.shapeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('active');
          this.shapeArray = [];
          this.shapeBtns.forEach((button) => {
            if (button.className.includes('active')) this.shapeArray.push((button.dataset.filter) as string);
          });
          (this.shapeArray.length > 0) ? this.filters.shape = this.shapeArray : delete this.filters.shape;

          this.cardsOnPageArray = filters.parceData(this.allCardsArray);

          this.checkIfSelected();
          this.renderCards(this.cardsOnPageArray);
        });
      });

      // Range sliders

      rangeSliders.setRangeSliders();
      this.sliders.forEach((slider) => {
        slider.addEventListener('change', (e) => {
          if (e.target === this.sliders[0] || e.target === this.sliders[1] ) {
            this.filters.count = { from: Number(this.sliders[0].value), to: Number(this.sliders[1].value) };
          }

          if (e.target === this.sliders[2] || e.target === this.sliders[3] ) {
            this.filters.year = { from: Number(this.sliders[2].value), to: Number(this.sliders[3].value) };
          }

          this.cardsOnPageArray = filters.parceData(this.allCardsArray);

          this.checkIfSelected();
          this.renderCards(this.cardsOnPageArray);
        });
      });

    });
  }

  renderCards(data: Array<ICardData>): void {
    const cardsWrapper:HTMLElement = document.querySelector('.cards-inner-container') as HTMLElement;
    cardsWrapper.innerHTML = '';

    if (data.length === 0) {
      const div = document.createElement('div');
      div.innerHTML = 'Извините, совпадений не обнаружено';
      div.className = 'no-cards';
      cardsWrapper.append(div);
    }
        
    data.forEach((cardInfo: ICardData) => {
      const card = new Card(cardInfo);
      const cardElement:HTMLElement = card.generateCard();
          
      cardsWrapper.append(cardElement);

      cardElement.addEventListener('click', () => {
        this.selectCards(card, cardElement);
      });
    });
  }

  selectCards(card: ICardData, cardElement:HTMLElement):void {

    if (this.selectedCards.length < 20 && !this.selectedCards.includes(card)) {
      this.selectedCards.push(card);
      cardElement.classList.add('active');
      this.selectedBtn.innerHTML = `${this.selectedCards.length}`;
    } else if (this.selectedCards.includes(card)) {
      const index = this.selectedCards.indexOf(card);
      this.selectedCards.splice(index, 1);
      cardElement.classList.remove('active');
      this.selectedBtn.innerHTML = `${this.selectedCards.length}`;
    } else {
      const limitPhrase = document.createElement('p');
      limitPhrase.className = 'favorite-number_limit';
      limitPhrase.innerHTML = 'Извините, все слоты заполнены';
      this.selectedBtn.append(limitPhrase);
    }
  }

  checkIfSelected():void {
    const selected = this.selectedCards.map(item => item.num);
    this.cardsOnPageArray = this.cardsOnPageArray.map((card) => selected.includes(card.num) ? { ...card, selected: true } : card);
  }
}
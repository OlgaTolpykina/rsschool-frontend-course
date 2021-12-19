import { ICardData, IFilters, Sort, SortDirection } from './types';
import { LoadData } from './loadData';
import { Card } from './Card';
import { RangeSlider } from './RangeSlider';
import { FiltersComponent } from './filtersComponents';
import { Phrases } from './constants';

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
  resetBtn: HTMLElement;
  resetLocalStorageBtn: HTMLElement;

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
    this.resetBtn = document.querySelector('.reset') as HTMLElement;
    this.resetLocalStorageBtn = document.querySelector('.reset_local-storage') as HTMLElement;
    this.sliders = document.querySelectorAll('.range__input') as NodeListOf<HTMLInputElement>;    
  }

  public getCardsList(): void  {

    const cards = new LoadData();
    const rangeSliders = new RangeSlider();
    this.filters = JSON.parse(localStorage.getItem('filters') || '{}');
    this.sortConditions = JSON.parse(localStorage.getItem('sortConditions') || '{}');
    this.selectedCards = JSON.parse(localStorage.getItem('selectedCards') || '[]');
    this.setButtons();
    this.setSelected();

    cards.build().then((data: Array<ICardData>) => {
      data.forEach(card => {
        this.allCardsArray.push(card);
      });

      const filters = new FiltersComponent(this.filters, this.sortConditions);
      this.allCardsArray.sort((a, b) => a.name > b.name ? 1 : -1); 
      this.filterCards();

      //Search field      
      this.searchBtn.addEventListener('change', () => {
        if (this.searchBtn.value) {
          this.filters.name = this.searchBtn.value.toLowerCase();
          this.searchBtn.style.backgroundImage = 'url("../assets/img/svg/cross.svg")';
        } else if (this.filters.name && !this.searchBtn.value) {
          delete this.filters.name;
          this.searchBtn.style.backgroundImage = 'url("../assets/img/svg/search.svg")';
        }

        this.setLocalStorage();
        this.filterCards();
      });

      //Select slider      
      this.selectBtn.addEventListener('change', () => {
        this.sortConditions.key = this.selectBtn.value.split('-')[0];
        
        if (this.selectBtn.value.split('-')[1].toUpperCase() === 'DSC') {
          this.sortConditions.direction = SortDirection.DSC;
        } else {
          this.sortConditions.direction = SortDirection.ASC;
        }

        this.setLocalStorage();
        this.filterCards();
      });

      //Filters

      this.favoriteBtn.addEventListener('click', () =>{
        (this.favoriteBtn.checked) ? this.filters.favorite = true : delete this.filters.favorite;

        this.setLocalStorage();
        this.filterCards();
      });

      this.sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.sizeArray = [];
          this.sizeBtns.forEach((button) => {
            if (button.checked) this.sizeArray.push((button.dataset.filter) as string);
          });
          (this.sizeArray.length > 0) ? this.filters.size = this.sizeArray : delete this.filters.size;

          this.setLocalStorage();
          this.filterCards();
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

          this.setLocalStorage();
          this.filterCards();
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

          this.setLocalStorage();
          this.filterCards();
        });
      });

      // Range sliders

      rangeSliders.setRangeSliders(this.sliders);
      this.sliders.forEach((slider) => {
        slider.addEventListener('change', (e) => {
          if (e.target === this.sliders[0] || e.target === this.sliders[1] ) {
            this.filters.count = { from: Number(this.sliders[0].value), to: Number(this.sliders[1].value) };
          }

          if (e.target === this.sliders[2] || e.target === this.sliders[3] ) {
            this.filters.year = { from: Number(this.sliders[2].value), to: Number(this.sliders[3].value) };
          }

          this.setLocalStorage();
          this.filterCards();
        });
      });

      //Reset button

      this.resetBtn.addEventListener('click', () => {
        this.filters = {};
        this.setLocalStorage();
        this.favoriteBtn.checked = false;
        this.sizeBtns.forEach((btn) => {
          btn.checked = false;
        });
        this.colorBtns.forEach((btn) => {
          btn.classList.remove('active');
        });
        this.shapeBtns.forEach((btn) => {
          btn.classList.remove('active');
        });
        
        const resetRangeSliders = new RangeSlider();
        this.sliders[0].value = '0';
        this.sliders[1].value = '12';
        this.sliders[2].value = '1940';
        this.sliders[3].value = '2021';

        resetRangeSliders.setRangeSliders(this.sliders);

        this.filterCards();
      });

      //Reset Local Storage button

      this.resetLocalStorageBtn.addEventListener('click', () => {
        localStorage.removeItem('filters');
        localStorage.removeItem('sortConditions');
        localStorage.removeItem('selectedCards');
      });

    });
  }

  private renderCards(data: Array<ICardData>): void {
    const cardsWrapper:HTMLElement = document.querySelector('.cards-inner-container') as HTMLElement;
    cardsWrapper.innerHTML = '';

    if (data.length === 0) {
      const div = document.createElement('div');
      div.innerHTML = Phrases.noMatch;
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

  private filterCards() {
    const filters = new FiltersComponent(this.filters, this.sortConditions);
    this.cardsOnPageArray = filters.parseData(this.allCardsArray);
    this.checkIfSelected();
    this.renderCards(this.cardsOnPageArray);
  }

  private selectCards(card: ICardData, cardElement:HTMLElement):void {

    if (this.selectedCards.length < 20 && !this.selectedCards.includes(card)) {
      this.selectedCards.push(card);
      this.setLocalStorage();
      cardElement.classList.add('active');
      this.selectedBtn.innerHTML = `${this.selectedCards.length}`;
    } else if (this.selectedCards.includes(card)) {
      const index = this.selectedCards.indexOf(card);
      this.selectedCards.splice(index, 1);
      this.setLocalStorage();
      cardElement.classList.remove('active');
      this.selectedBtn.innerHTML = `${this.selectedCards.length}`;
    } else {
      const limitPhrase = document.createElement('p');
      limitPhrase.className = 'favorite-number_limit';
      limitPhrase.innerHTML = 'Извините, все слоты заполнены';
      this.selectedBtn.append(limitPhrase);
    }
  }

  private checkIfSelected():void {
    const selected = this.selectedCards.map(item => item.num);
    this.cardsOnPageArray = this.cardsOnPageArray.map((card) => selected.includes(card.num) ? { ...card, selected: true } : card);
  }

  private setLocalStorage():void {
    localStorage.setItem('filters', JSON.stringify(this.filters));
    localStorage.setItem('sortConditions', JSON.stringify(this.sortConditions));
    localStorage.setItem('selectedCards', JSON.stringify(this.selectedCards));
  }

  private setButtons() {
    if (this.sortConditions && this.sortConditions.key === 'name' && this.sortConditions.direction === SortDirection.ASC) {
      this.selectBtn.value = 'name-acs';
    }
    if (this.sortConditions && this.sortConditions.key === 'name' && this.sortConditions.direction === SortDirection.DSC) {
      this.selectBtn.value = 'name-dsc';
    }
    if (this.sortConditions && this.sortConditions.key === 'year' && this.sortConditions.direction === SortDirection.ASC) {
      this.selectBtn.value = 'year-acs';
    }
    if (this.sortConditions && this.sortConditions.key === 'year' && this.sortConditions.direction === SortDirection.DSC) {
      this.selectBtn.value = 'year-dsc';
    }
    if (this.filters.favorite === true) this.favoriteBtn.checked = true;
    this.sizeBtns.forEach((button) => {
      if (this.filters.size && this.filters.size.includes(button.dataset.filter as string)) { button.checked = true; }
    });
    this.colorBtns.forEach((button) => {
      if (this.filters.color && this.filters.color.includes(button.dataset.filter as string)) { button.classList.add('active'); }
    });
    this.shapeBtns.forEach((button) => {
      if (this.filters.shape && this.filters.shape.includes(button.dataset.filter as string)) { button.classList.add('active'); }
    }); 

    const reloadRangeSliders = new RangeSlider();
    if (this.filters.count) {
      this.sliders[0].value = (this.filters.count.from).toString();
      this.sliders[1].value = (this.filters.count.to).toString();
    }
    if (this.filters.year) {
      this.sliders[2].value = (this.filters.year.from).toString();
      this.sliders[3].value = (this.filters.year.to).toString();
    }
    reloadRangeSliders.setRangeSliders(this.sliders);
  }

  private setSelected() {
    this.selectedBtn.innerHTML = `${this.selectedCards.length}`;
  }
}
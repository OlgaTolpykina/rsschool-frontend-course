import { ICardData, IFilters, Sort } from './types';
import { SortDirection } from './constants';
import LoadData from './loadData';
import Card from '../views/components/Card';
import { Events } from '../views/components/Events';
// import { RangeSlider } from '../views/components/RangeSlider';
import { Phrases, Coefficients } from './constants';

export class Toys {
  allCardsArray: Array<ICardData> = [];
  cardsOnPageArray: Array<ICardData> = [];
  selectedCards: Array<ICardData> = [];
  rangeSortedArray: Array<ICardData> = [];
  filters: IFilters;
  sortConditions: Sort;
  selectedBtn: HTMLElement;
  favoriteValue = false;
  cardsWrapper: HTMLElement;
  sliders: NodeListOf<HTMLInputElement>;
  selectBtn: HTMLSelectElement;
  favoriteBtn: HTMLInputElement;
  sizeBtns: NodeListOf<HTMLInputElement>;
  colorBtns: NodeListOf<HTMLElement>;
  shapeBtns: NodeListOf<HTMLElement>;
  snowflakeBtn: HTMLElement;

  constructor() {
    this.allCardsArray = [];
    this.cardsOnPageArray = [];
    this.selectedCards = [];
    this.rangeSortedArray = [];
    this.favoriteValue = false;
    this.filters = {};
    this.sortConditions = {
      key: 'name',
      direction: SortDirection.ASC,
    };
    this.cardsWrapper = document.querySelector('.cards-inner-container') as HTMLElement;
    this.selectedBtn = document.querySelector('.favorite-number') as HTMLElement;
    this.sliders = document.querySelectorAll('.range__input') as NodeListOf<HTMLInputElement>;
    this.selectBtn = document.querySelector('.select') as HTMLSelectElement;
    this.favoriteBtn = document.querySelector('.filter_favorite') as HTMLInputElement;
    this.sizeBtns = document.querySelectorAll('.filter_size') as NodeListOf<HTMLInputElement>;
    this.colorBtns = document.querySelectorAll('.filter_color') as NodeListOf<HTMLElement>;
    this.shapeBtns = document.querySelectorAll('.filter_shape') as NodeListOf<HTMLElement>;
    this.snowflakeBtn = document.querySelector('.theme') as HTMLElement;
  }

  public getCardsList(): void  {

    const cards = LoadData;
    // const rangeSliders = new RangeSlider();
    // rangeSliders.setRangeSliders(this.sliders);

    this.filters = JSON.parse(localStorage.getItem('filters') || '{}');
    this.sortConditions = JSON.parse(localStorage.getItem('sortConditions') || '{}');
    this.selectedCards = JSON.parse(localStorage.getItem('selectedCards') || '[]');
    this.setButtons();
    // this.setSelected();

    cards.build().then((data: Array<ICardData>) => {
      localStorage.setItem('initialCardsListInfo', JSON.stringify(data));
      data.forEach(card => {
        this.allCardsArray.push(card);
        this.allCardsArray.sort((a, b) => a.name > b.name ? 1 : -1);
      });

      // const events = new Events(this.allCardsArray, this.filters, this.sortConditions);
      // events.setEvents();

      // events.filterCards(this.allCardsArray);
    });
  }

  // public renderCards(data: Array<ICardData>): void {
  //   this.cardsWrapper.innerHTML = '';

  //   if (data.length === 0) {
  //     const div = document.createElement('div');
  //     div.innerHTML = Phrases.noMatch;
  //     div.className = 'no-cards';
  //     this.cardsWrapper.append(div);
  //   }
        
  //   data.forEach((cardInfo: ICardData) => {
  //     const card = new Card(cardInfo);
  //     const cardElement:HTMLElement = card.generateCard(1);
          
  //     this.cardsWrapper.append(cardElement);

  //     cardElement.addEventListener('click', () => {
  //       this.selectCards(cardInfo, cardElement);
  //     });
  //   });
  // }

  // private selectCards(card: ICardData, cardElement:HTMLElement):void {

  //   if (this.selectedCards.length < Coefficients.favoriteToysMaxNumber && !card.selected) {
  //     card.selected = true;
  //     this.selectedCards.push(card);
  //     localStorage.setItem('selectedCards', JSON.stringify(this.selectedCards));
  //     cardElement.classList.add('active');
  //     this.selectedBtn.innerHTML = `${this.selectedCards.length}`;
  //   } else if (card.selected) {
  //     card.selected = false;
  //     const index = this.selectedCards.indexOf(card);
  //     this.selectedCards.splice(index, 1);
  //     localStorage.setItem('selectedCards', JSON.stringify(this.selectedCards));
  //     cardElement.classList.remove('active');
  //     this.selectedBtn.innerHTML = `${this.selectedCards.length}`;
  //   } else {
  //     const limitPhrase = document.createElement('p');
  //     limitPhrase.className = 'favorite-number_limit';
  //     limitPhrase.innerHTML = 'Извините, все слоты заполнены';
  //     this.selectedBtn.append(limitPhrase);
  //   }
  // }

  // public checkIfSelected(data: Array<ICardData>): Array<ICardData> {
  //   this.selectedCards = JSON.parse(localStorage.getItem('selectedCards') || '[]');
  //   const selected = this.selectedCards.map(item => item.num);
  //   return data.map((card) => selected.includes(card.num) ? { ...card, selected: true } : { ...card, selected: false });
  // }

  // public setLocalStorage(filters: IFilters, sortConditions: Sort):void {
  //   localStorage.setItem('filters', JSON.stringify(filters));
  //   localStorage.setItem('sortConditions', JSON.stringify(sortConditions));
  // }

  private setButtons(): void {
    if (localStorage.getItem('snow') === 'true') this.snowflakeBtn.classList.add('active');

    // if (this.sortConditions && this.sortConditions.key === 'name' && this.sortConditions.direction === SortDirection.ASC) {
    //   this.selectBtn.value = 'name-acs';
    // }
    // if (this.sortConditions && this.sortConditions.key === 'name' && this.sortConditions.direction === SortDirection.DSC) {
    //   this.selectBtn.value = 'name-dsc';
    // }
    // if (this.sortConditions && this.sortConditions.key === 'year' && this.sortConditions.direction === SortDirection.ASC) {
    //   this.selectBtn.value = 'year-acs';
    // }
    // if (this.sortConditions && this.sortConditions.key === 'year' && this.sortConditions.direction === SortDirection.DSC) {
    //   this.selectBtn.value = 'year-dsc';
    // }
    // if (this.filters.favorite === true) this.favoriteBtn.checked = true;
    // this.sizeBtns.forEach((button) => {
    //   if (this.filters.size && this.filters.size.includes(button.dataset.filter as string)) { button.checked = true; }
    // });
    // this.colorBtns.forEach((button) => {
    //   if (this.filters.color && this.filters.color.includes(button.dataset.filter as string)) { button.classList.add('active'); }
    // });
    // this.shapeBtns.forEach((button) => {
    //   if (this.filters.shape && this.filters.shape.includes(button.dataset.filter as string)) { button.classList.add('active'); }
    // }); 

    // const reloadRangeSliders = new RangeSlider();
    if (this.filters.count) {
      this.sliders[0].value = (this.filters.count.from).toString();
      this.sliders[1].value = (this.filters.count.to).toString();
    }
    if (this.filters.year) {
      this.sliders[2].value = (this.filters.year.from).toString();
      this.sliders[3].value = (this.filters.year.to).toString();
    }
    // reloadRangeSliders.setRangeSliders(this.sliders);
  }

  // private setSelected(): void {
  //   this.selectedBtn.innerHTML = `${this.selectedCards.length}`;
  // }
}
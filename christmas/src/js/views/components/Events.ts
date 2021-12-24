import { ICardData, IFilters, Sort, SortParams } from '../../services/types';
import { SortDirection } from '../../services/constants';
import { Filters } from '../../services/constants';
import { Toys } from '../../services/toysModel';
import { RangeSlider } from './RangeSlider';
import { FilterData } from '../../services/filterData';
import { createSnowFlake } from './Background';
const searchImg = require('../../../assets/img/svg/search.svg');
const deleteImg = require('../../../assets/img/svg/cross.svg');

export class Events {
  filters: IFilters;
  sortConditions: Sort;
  selectBtn: HTMLSelectElement;
  favoriteBtn: HTMLInputElement;
  sizeBtns: NodeListOf<HTMLInputElement>;
  colorBtns: NodeListOf<HTMLElement>;
  shapeBtns: NodeListOf<HTMLElement>;
  searchBtn: HTMLInputElement;
  resetBtn: HTMLElement;
  resetLocalStorageBtn: HTMLElement;
  sliders: NodeListOf<HTMLInputElement>;
  sizeArray: Array<string>;
  colorArray: Array<string>;
  shapeArray: Array<string>;
  toysModel: Toys = new Toys;
  data: ICardData[];
  snowflakeBtn: HTMLElement;
  intervalId!: NodeJS.Timer;

  constructor(data: Array<ICardData>, filters: IFilters, sortConditions: Sort) {
    this.data = data;
    this.filters = filters;
    this.sortConditions = sortConditions;
    this.snowflakeBtn = document.querySelector('.theme') as HTMLElement;
    this.selectBtn = document.querySelector('.select') as HTMLSelectElement;
    this.favoriteBtn = document.querySelector('.filter_favorite') as HTMLInputElement;
    this.sizeBtns = document.querySelectorAll('.filter_size') as NodeListOf<HTMLInputElement>;
    this.colorBtns = document.querySelectorAll('.filter_color') as NodeListOf<HTMLElement>;
    this.shapeBtns = document.querySelectorAll('.filter_shape') as NodeListOf<HTMLElement>;
    this.searchBtn = document.querySelector('.search') as HTMLInputElement;
    this.resetBtn = document.querySelector('.reset') as HTMLElement;
    this.resetLocalStorageBtn = document.querySelector('.reset_local-storage') as HTMLElement;
    this.sliders = document.querySelectorAll('.range__input') as NodeListOf<HTMLInputElement>;
    this.sizeArray = [];
    this.colorArray = [];
    this.shapeArray = [];
    this.intervalId; //eslint-disable-line
  }

  public setEvents(): void {

    this.toysModel = new Toys();

    //Search field
    this.searchBtn.addEventListener('change', () => {
      if (this.searchBtn.value) {
        this.filters.name = this.searchBtn.value.toLowerCase();
        this.searchBtn.style.backgroundImage = `url(${deleteImg})`;
      } else if (this.filters.name && !this.searchBtn.value) {
        delete this.filters.name;
        this.searchBtn.style.backgroundImage = `url(${searchImg})`;
      }

      this.filterCards(this.data);
    });

    this.searchBtn.addEventListener('click', () => {
      if (this.searchBtn.value) {
        delete this.filters.name;
        this.searchBtn.style.backgroundImage = `url(${searchImg})`;
        this.searchBtn.value = '';
      }

      this.filterCards(this.data);
    });

    //Select slider      
    this.selectBtn.addEventListener('change', () => {
      this.sortConditions.key = this.selectBtn.value.split('-')[0] as SortParams;
      
      if (this.selectBtn.value.split('-')[1].toUpperCase() === 'DSC') {
        this.sortConditions.direction = SortDirection.DSC;
      } else {
        this.sortConditions.direction = SortDirection.ASC;
      }

      this.toysModel.setLocalStorage(this.filters, this.sortConditions);
      this.filterCards(this.data);
    });

    //Filters
    this.favoriteBtn.addEventListener('click', () =>{

      (this.favoriteBtn.checked) ? this.filters.favorite = true : delete this.filters.favorite;

      this.toysModel.setLocalStorage(this.filters, this.sortConditions);
      this.filterCards(this.data);
    });

    this.sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.sizeArray = [];
        this.sizeBtns.forEach((button) => {
          if (button.checked) this.sizeArray.push((button.dataset.filter) as string);
        });
        (this.sizeArray.length > 0) ? this.filters.size = this.sizeArray : delete this.filters.size;

        this.toysModel.setLocalStorage(this.filters, this.sortConditions);
        this.filterCards(this.data);
      });
    });

    this.setButtonFilters(this.colorBtns, Filters.color);
    this.setButtonFilters(this.shapeBtns, Filters.shape);

    // Range sliders
    this.sliders.forEach((slider) => {
      slider.addEventListener('change', (e) => {
        if (e.target === this.sliders[0] || e.target === this.sliders[1] ) {
          this.filters.count = { from: Number(this.sliders[0].value), to: Number(this.sliders[1].value) };
        }

        if (e.target === this.sliders[2] || e.target === this.sliders[3] ) {
          this.filters.year = { from: Number(this.sliders[2].value), to: Number(this.sliders[3].value) };
        }

        this.toysModel.setLocalStorage(this.filters, this.sortConditions);
        this.filterCards(this.data);
      });
    });

    //Reset button

    this.resetBtn.addEventListener('click', () => {
      this.filters = {};
      this.toysModel.setLocalStorage(this.filters, this.sortConditions);
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

      this.filterCards(this.data);
    });

    //Snowflake button
    let isSnowing = false;

    this.snowflakeBtn.addEventListener('click', () => {
      if (!isSnowing) {
        this.intervalId = setInterval(createSnowFlake, 100);
        this.snowflakeBtn.classList.add('active');
        isSnowing = true;
      } else {
        clearInterval(this.intervalId);
        this.snowflakeBtn.classList.remove('active');
        isSnowing = false;
      }
    });

    //Reset Local Storage button

    this.resetLocalStorageBtn.addEventListener('click', () => {
      localStorage.removeItem('filters');
      localStorage.removeItem('sortConditions');
      localStorage.removeItem('selectedCards');
      localStorage.removeItem('path');
    });
  }

  private setButtonFilters(btns: NodeListOf<HTMLElement>, filter: Filters ) {
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');

        switch (filter) {
          case (Filters.color):
            this.colorArray = [];
            btns.forEach((btn) => { //eslint-disable-line
              if (btn.className.includes('active')) this.colorArray.push((btn.dataset.filter) as string);
            });
            (this.colorArray.length > 0) ? this.filters.color = this.colorArray : delete this.filters.color;
            break;
          case (Filters.shape):
            this.shapeArray = [];
            btns.forEach((btn) => { //eslint-disable-line
              if (btn.className.includes('active')) this.shapeArray.push((btn.dataset.filter) as string);
            });
            (this.shapeArray.length > 0) ? this.filters.shape = this.shapeArray : delete this.filters.shape;
            break;
        }

        this.toysModel.setLocalStorage(this.filters, this.sortConditions);
        this.filterCards(this.data);
      });
    });
  }

  public filterCards(data: Array<ICardData>): void {
    const filters = new FilterData(this.filters, this.sortConditions);
    const cardsOnPageArray = filters.parseData(data);
    this.toysModel.checkIfSelected();
    this.toysModel.renderCards(cardsOnPageArray);
  }
}
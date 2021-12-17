import { ICardData } from './ICardData';
import { LoadData } from './loadData';
import { Card } from './Card';
import { RangeSlider } from './RangeSlider';
import { Filter } from './filtersModel';

export class Toys {
  allCardsArray: Array<ICardData> = [];
  cardsOnPageArray: Array<ICardData> = [];
  selectedCards: Array<ICardData> = [];
  rangeSortedArray: Array<ICardData> = [];
  selectBtn: HTMLSelectElement;
  selectedBtn: HTMLElement;
  favoriteBtn: HTMLInputElement;
  sizeBtns: NodeListOf<HTMLInputElement>;
  colorBtns: NodeListOf<HTMLElement>;
  shapeBtns: NodeListOf<HTMLElement>;
  sliders: NodeListOf<HTMLInputElement>;
  favoriteValue: boolean = false;
  sizeArray: Array<string>;
  colorArray: Array<string>;
  shapeArray: Array<string>;

  constructor() {
    this.allCardsArray = [];
    this.cardsOnPageArray = [];
    this.selectedCards = [];
    this.rangeSortedArray = [];
    this.favoriteValue = false;
    this.sizeArray = [ 'большой', 'средний', 'малый' ];
    this.colorArray = [ 'белый', 'желтый', 'красный', 'синий', 'зелёный' ];
    this.shapeArray = [ 'колокольчик', 'шар', 'шишка', 'снежинка', 'фигурка' ];
    this.selectBtn = document.querySelector('.select') as HTMLSelectElement;
    this.selectedBtn = document.querySelector('.favorite-number') as HTMLElement;
    this.favoriteBtn = document.querySelector('.filter_favorite') as HTMLInputElement;
    this.sizeBtns = document.querySelectorAll('.filter_size') as NodeListOf<HTMLInputElement>;
    this.colorBtns = document.querySelectorAll('.filter_color') as NodeListOf<HTMLElement>;
    this.shapeBtns = document.querySelectorAll('.filter_shape') as NodeListOf<HTMLElement>;
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
      });

      this.favoriteBtn.addEventListener('click', () =>{
        this.favoriteValue = this.favoriteBtn.checked;
        this.filterCards(this.favoriteValue, this.sizeArray, this.colorArray, this.shapeArray);
      });

      this.sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.sizeArray = [];
          if(this.sizeBtns[0].checked) this.sizeArray.push((this.sizeBtns[0].dataset.filter) as string);
          if(this.sizeBtns[1].checked) this.sizeArray.push((this.sizeBtns[1].dataset.filter) as string);
          if(this.sizeBtns[2].checked) this.sizeArray.push((this.sizeBtns[2].dataset.filter) as string);

          if(!this.sizeBtns[0].checked && !this.sizeBtns[1].checked && !this.sizeBtns[2].checked) this.sizeArray = [ 'большой', 'средний', 'малый' ];

          this.filterCards(this.favoriteValue, this.sizeArray, this.colorArray, this.shapeArray);
        });
      });

      this.colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('active');
          this.colorArray = [];
          if(this.colorBtns[0].className.includes('active')) this.colorArray.push((this.colorBtns[0].dataset.filter) as string);
          if(this.colorBtns[1].className.includes('active')) this.colorArray.push((this.colorBtns[1].dataset.filter) as string);
          if(this.colorBtns[2].className.includes('active')) this.colorArray.push((this.colorBtns[2].dataset.filter) as string);
          if(this.colorBtns[3].className.includes('active')) this.colorArray.push((this.colorBtns[3].dataset.filter) as string);
          if(this.colorBtns[4].className.includes('active')) this.colorArray.push((this.colorBtns[4].dataset.filter) as string);

          if(!this.colorBtns[0].className.includes('active') && !this.colorBtns[1].className.includes('active') 
              && !this.colorBtns[2].className.includes('active') && !this.colorBtns[3].className.includes('active') 
              && !this.colorBtns[4].className.includes('active')) this.colorArray = [ 'белый', 'желтый', 'красный', 'синий', 'зелёный' ];
          
              this.filterCards(this.favoriteValue, this.sizeArray, this.colorArray, this.shapeArray);
        });
      });

      this.shapeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('active');
          this.shapeArray = [];
          if(this.shapeBtns[0].className.includes('active')) this.shapeArray.push((this.shapeBtns[0].dataset.filter) as string);
          if(this.shapeBtns[1].className.includes('active')) this.shapeArray.push((this.shapeBtns[1].dataset.filter) as string);
          if(this.shapeBtns[2].className.includes('active')) this.shapeArray.push((this.shapeBtns[2].dataset.filter) as string);
          if(this.shapeBtns[3].className.includes('active')) this.shapeArray.push((this.shapeBtns[3].dataset.filter) as string);
          if(this.shapeBtns[4].className.includes('active')) this.shapeArray.push((this.shapeBtns[4].dataset.filter) as string);

          if(!this.shapeBtns[0].className.includes('active') && !this.shapeBtns[1].className.includes('active') 
              && !this.shapeBtns[2].className.includes('active') && !this.shapeBtns[3].className.includes('active') 
              && !this.shapeBtns[4].className.includes('active')) this.shapeArray = [ 'колокольчик', 'шар', 'шишка', 'снежинка', 'фигурка' ];
          
              this.filterCards(this.favoriteValue, this.sizeArray, this.colorArray, this.shapeArray);
        });
      });

      rangeSliders.setRangeSliders();
      this.sliders.forEach((slider) => {
        slider.addEventListener('change', () => {
          this.rangeFilterCards();
        });
      });

    });
  }

  renderCards(data: Array<ICardData>): void {
    const cardsWrapper:HTMLElement = document.querySelector('.cards-inner-container') as HTMLElement;
    cardsWrapper.innerHTML = '';

    if (data.length === 0) {
      let div = document.createElement('div');
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

  selectCards(card: ICardData, cardElement:HTMLElement):void {

    if (this.selectedCards.length < 20 && !this.selectedCards.includes(card)) {
        this.selectedCards.push(card);
        cardElement.classList.add('active');
        this.selectedBtn.innerHTML = `${this.selectedCards.length}`;
    } else if (this.selectedCards.includes(card)) {
        let index = this.selectedCards.indexOf(card);
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

  filterCards(favorite: boolean, size: Array<string>, color: Array<string>, shape: Array<string>) {
    const filter = new Filter();
    this.cardsOnPageArray = filter.setFilters(this.allCardsArray, favorite, size, color, shape);

    this.sortCards(); 
    this.checkIfSelected();
    this.renderCards(this.cardsOnPageArray);
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
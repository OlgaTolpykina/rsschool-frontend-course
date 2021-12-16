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

    //////
    // const sliders: NodeListOf<HTMLInputElement> = document.querySelectorAll('.settings__input');
    // let minGap = 0;
    // let displayValueOne: HTMLInputElement = document.querySelector('#range1') as HTMLInputElement;
    // let displayValueTwo: HTMLInputElement = document.querySelector('#range2') as HTMLInputElement;
    // let sliderTrack: HTMLInputElement = document.querySelector('.settings__input') as HTMLInputElement;
    // let sliderMaxValue = sliderTrack.max;


    // sliders[0].addEventListener('input', (e) => {
    //   if(parseInt(sliders[1].value) - parseInt(sliders[0].value) <= minGap){
    //     sliders[0].value = `${parseInt(sliders[1].value) - minGap}`;
    //   }
    //   (displayValueOne as HTMLElement).textContent = sliders[0].value;
    //   let percent1 = (parseInt(sliders[0].value) / parseInt(sliderMaxValue)) * 100;
    //   let percent2 = (parseInt(sliders[1].value) / parseInt(sliderMaxValue)) * 100;
    //   sliderTrack.style.background = `linear-gradient(to right, #fff ${percent1}% , #278D9F ${percent1}% , #278D9F ${percent2}%, #fff ${percent2}%)`;
    // });
     
    //  sliders[1].addEventListener('input', (e) => {
    //   if(parseInt(sliders[1].value) - parseInt(sliders[0].value) <= minGap){
    //     sliders[1].value = `${parseInt(sliders[0].value) + minGap}`;
    //   }
    //   (displayValueTwo as HTMLElement).textContent = sliders[1].value;
    //   let percent1 = (parseInt(sliders[0].value) / parseInt(sliderMaxValue)) * 100;
    // let percent2 = (parseInt(sliders[1].value) / parseInt(sliderMaxValue)) * 100;
    // sliderTrack.style.background = `linear-gradient(to right, #fff ${percent1}% , #278D9F ${percent1}% , #278D9F ${percent2}%, #fff ${percent2}%)`;
    //  });
     

    // sliders.forEach((slider) => {
    //   slider.addEventListener('change', () => {
    //     console.log(`from ${sliders[0].value} to ${sliders[1].value}`);
    //   })
    // })

    ////

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

  checkIfSelected():void {
    const selected = this.selectedCards.map(item => item.num);
    this.cardsOnPageArray = this.cardsOnPageArray.map((card) => selected.includes(card.num) ? {...card, selected: true} : card);
  }

}
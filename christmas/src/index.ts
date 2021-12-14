import './sass/style.scss';
import { Card } from './components/Card';
import { LoadData } from './components/loadData';
import { ICardData } from './components/ICardData';


const cardsInfo = new LoadData();
cardsInfo.build()
  .then((data: Array<ICardData>) => {
    const cardsWrapper:HTMLElement = document.querySelector('.cards-inner-container') as HTMLElement;
    cardsWrapper.innerHTML = '';
    data.forEach((cardInfo: ICardData) => {
      const card = new Card(cardInfo);
      cardsWrapper.append(card.generateCard());
    });
  });


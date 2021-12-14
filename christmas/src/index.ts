import './sass/style.scss';
import { Card } from './components/Card';
import { LoadData } from './components/loadData';
import { ICardData } from './components/ICardData';


//Отрисовка карточек на странице с игрушками

export class Application {


  renderCards(): void {
    const cardsInfo = new LoadData();
    cardsInfo.build()
      .then((data: Array<ICardData>) => {
        const cardsWrapper:HTMLElement = document.querySelector('.cards-inner-container') as HTMLElement;
        cardsWrapper.innerHTML = '';

        const selectedCards: Array<ICardData> = [];

        data.forEach((cardInfo: ICardData) => {
          const card = new Card(cardInfo);
          const cardElement:HTMLElement = card.generateCard();
          
          cardsWrapper.append(cardElement);

          cardElement.addEventListener('click', () => {

            if (selectedCards.length < 20 && !selectedCards.includes(card)) {
              selectedCards.push(card);
              cardElement.classList.add('active');
              (document.querySelector('.favorite-number') as HTMLElement).innerHTML = `${selectedCards.length}`;
            } else if(selectedCards.includes(card)) {
              let index = selectedCards.indexOf(card);
              selectedCards.splice(index, 1);
              cardElement.classList.remove('active');
              (document.querySelector('.favorite-number') as HTMLElement).innerHTML = `${selectedCards.length}`;
            } else {
              const limitPhrase = document.createElement('p');
              limitPhrase.className = 'favorite-number_limit';
              limitPhrase.innerHTML = 'Извините, все слоты заполнены';
              (document.querySelector('.favorite')as HTMLElement).append(limitPhrase);
            }
          });
        });
      });
  }
}

const app = new Application();
app.renderCards();




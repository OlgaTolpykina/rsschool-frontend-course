import header from "../../components/header/header";
import filters from '../../components/filters/filter';
import buttons from '../../components/buttons/buttons';
import Card from '../../components/Card';
import footer from "../../components/footer/footer";
import storageManager from "../../../services/storageManager";
import { SortNames, SortValues, Phrases } from '../../../services/constants';
import { ICardData, Sort, IFilters } from '../../../services/types';

export class ToyPageView {
  private rootNode: HTMLElement;
  private selectedCards: Array<number>;

  constructor() {
    this.rootNode = <HTMLElement>document.getElementById('app');
    this.selectedCards = <Array<number>>storageManager.getItem('selectedCards', 'local') || [];
  }

  public render(sortConditions: Sort, filters: IFilters, sortCards: (e: Event) => void, filterCards: (e: Event) => void, handleRangeFiltering: (e: Event) => void, handleButtonClick: (e: Event) => void, handleSearchFieldChange: (e: Event) => void, handleSearchFieldClearance: (e: Event) => void): void {
    this.rootNode.textContent = '';
    this.createHeader(handleSearchFieldChange, handleSearchFieldClearance);
    this.createMainSection(sortConditions, filters, sortCards, filterCards, handleRangeFiltering, handleButtonClick);
    this.createFooter();
  }

  private createHeader(handleSearchFieldChange: (e: Event) => void, handleSearchFieldClearance: (e: Event) => void): void {
    this.rootNode.append(header.getTemplate(true, true, handleSearchFieldChange, handleSearchFieldClearance, this.selectedCards.length));
  }

  private createMainSection(sortConditions: Sort, filters: IFilters, sortCards: (e: Event) => void, filterCards: (e: Event) => void, handleRangeFiltering: (e: Event) => void, handleButtonClick: (e: Event) => void): void {
    const main = document.createElement('main');
    main.className = 'content content__toys';
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper toys__wrapper';
    this.createFiltersBlock(wrapper, sortConditions, filters, sortCards, filterCards, handleRangeFiltering, handleButtonClick);
    this.createCardsBlock(wrapper);
    
    main.append(wrapper);
    this.rootNode.append(main);
  }

  private createFiltersBlock(parentNode: HTMLElement, sortConditions: Sort, filters: IFilters, sortCards: (e: Event) => void, filterCards: (e: Event) => void, handleRangeFiltering: (e: Event) => void, handleButtonClick: (e: Event) => void): void {
    const filtersWrapper = document.createElement('div');
    this.createSortFilters(filtersWrapper, sortConditions, sortCards);
    this.createFilters(filtersWrapper, filters, filterCards, handleRangeFiltering);
    this.addButtons(filtersWrapper, handleButtonClick);

    parentNode.append(filtersWrapper);
  }

  private createSortFilters(parentNode: HTMLElement, sortConditions: Sort, sortCards: (e: Event) => void): void {
    const sortWrapper = document.createElement('div');
    sortWrapper.className = 'settings settings_wide';

    const sortTitle = document.createElement('span');
    sortTitle.className = 'settings__title';
    sortTitle.textContent = SortNames.title;

    const sortingValues = [SortValues.nameAsc, SortValues.nameDsc, SortValues.yearAsc, SortValues.yearDsc];
    const sortingNames = [SortNames.nameAsc, SortNames.nameDsc, SortNames.yearAsc, SortNames.yearDsc];
    const sortingChosen = this.setSortingChosen(sortConditions);
    sortWrapper.append(filters.getSortingTemplate('select button', sortingNames, sortingValues, sortingChosen, sortCards));

    parentNode.append(sortWrapper);
  }

  private setSortingChosen(sortConditions: Sort): string {
    const value = `${sortConditions.key}-${sortConditions.direction.slice(0,3).toLowerCase()}`;
    return value;
  }

  private createFilters(parentNode: HTMLElement, currentFilters: IFilters, filterCards: (e: Event) => void, handleRangeFiltering: (e: Event) => void): void {
    parentNode.append(filters.getFiltersTemplate(currentFilters, filterCards, handleRangeFiltering));
  }

  private addButtons(parentNode: HTMLElement, handleButtonClick: (e: Event) => void): void {
    parentNode.append(buttons.getTemplate(['Сброс настроек', 'Сбросить фильтры'], ['resetLS', 'reset'], handleButtonClick));
  }

  private createCardsBlock(parentNode: HTMLElement): void {
    const cardsContainer = <HTMLElement>document.createElement('div');
    cardsContainer.className = 'cards-container cards-layout';

    const cardsInnerContainer = <HTMLElement>document.createElement('div');
    cardsInnerContainer.className = 'cards-inner-container';
    
    cardsContainer.append(cardsInnerContainer);
    parentNode.append(cardsContainer);
  }

  public renderCards(cards: Array<ICardData>, selectCard: (e: Event) => void): void {
    const cardsInnerContainer = <HTMLElement>this.rootNode.querySelector('.cards-inner-container');
    cardsInnerContainer.textContent = '';

    if (cards.length === 0) {
      const div = document.createElement('div');
      div.innerHTML = Phrases.noMatch;
      div.className = 'no-cards';
      cardsInnerContainer.append(div);
    }

    cards.forEach((cardInfo: ICardData, idx: number) => {
      const card = new Card(cardInfo);
      const cardElement:HTMLElement = card.generateCard(idx);
      if(this.checkIfCardIsSelected(card)) cardElement.classList.add('active');
      cardElement.onclick = (e: Event) => selectCard(e);
          
      cardsInnerContainer.append(cardElement);
    });
  }

  private checkIfCardIsSelected(card: ICardData): boolean {
    let isSelected = false;
    
    if (this.selectedCards.includes(card.num)) isSelected = true;
    return isSelected;
  }

  private createFooter(): void {
    this.rootNode.append(footer.getTemplate());
  }
}

export default new ToyPageView();
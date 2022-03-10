import loadData from '../../../services/loadData';
import storageManager from '../../../services/storageManager';
import filterDataManager from '../../../services/filterDataManager';
import { ICardData, Sort, SortParams, IFilters } from '../../../services/types';
import { Coefficients, SortDirection } from '../../../services/constants';

class ToyPageModel {
  private allCards: Array<ICardData>;
  private selectedCards: Array<number>;
  public sortConditions: Sort;
  public filters: IFilters;

  constructor() {
    this.allCards = [];
    this.selectedCards = [];
    this.sortConditions = {
      key: 'name',
      direction: SortDirection.ASC,
    };
    this.filters = {};
  }

  public async getData(): Promise<Array<ICardData>> {
    this.allCards = await loadData.build();
    this.selectedCards = this.getSelectedCards();
    this.allCards.forEach((card) => {
      if (this.selectedCards.includes(card.num)) card.selected = true;
    });
    this.sortData();
    this.getFilters();
    return this.allCards;
  }

  public get cards(): Array<ICardData> {
    return this.allCards;
  }

  // Handle favorite card selection

  public updateSelectedCards(id: string, cardElement: HTMLElement): void {
    this.selectedCards = this.getSelectedCards();
    const selectedCard = this.allCards.find((card) => card.num === parseInt(id))!;
    const selectedContainer = <HTMLElement>document.querySelector('.favorite');
    const selectedIndicator = <HTMLElement>document.querySelector('.favorite-number');

    if (this.selectedCards.length < Coefficients.favoriteToysMaxNumber && !selectedCard.selected) {
      selectedCard.selected = true;
      this.selectedCards.push(selectedCard.num);
      cardElement.classList.add('active');
    } else if (selectedCard.selected) {
      selectedCard.selected = false;
      const index = this.selectedCards.indexOf(selectedCard.num);
      this.selectedCards.splice(index, 1);
      cardElement.classList.remove('active');
    } else {
      const limitPhrase = document.createElement('p');
      limitPhrase.className = 'favorite-number_limit';
      limitPhrase.innerHTML = 'Извините, все слоты заполнены';
      selectedContainer.append(limitPhrase);
      setTimeout(() => {
        limitPhrase.remove();
      }, 5000);
    }

    selectedIndicator.innerHTML = `${this.selectedCards.length}`;
    storageManager.addItem('selectedCards', this.selectedCards, 'local');
  }

  public getSelectedCards(): Array<number> {
    this.selectedCards = storageManager.getItem('selectedCards', 'local')! || [];
    return this.selectedCards;
  }

  //Handle cards sorting

  public sortData(): void {
    this.sortConditions = this.getSortingFilters();
    if (this.sortConditions.direction === SortDirection.ASC) {
      this.allCards.sort((a, b) => (a[this.sortConditions.key] > b[this.sortConditions.key] ? 1 : -1));
    } else {
      this.allCards.sort((a, b) => (a[this.sortConditions.key] > b[this.sortConditions.key] ? -1 : 1));
    }
  }

  public saveSortingFilters(value: string): void {
    this.sortConditions.key = <SortParams>value.split('-')[0];

    if (value.split('-')[1].toUpperCase() === 'DSC') {
      this.sortConditions.direction = SortDirection.DSC;
    } else {
      this.sortConditions.direction = SortDirection.ASC;
    }

    storageManager.addItem('sortConditions', this.sortConditions, 'local');
  }

  public getSortingFilters(): Sort {
    this.sortConditions = {
      key: 'name',
      direction: SortDirection.ASC,
    };
    if (storageManager.getItem('sortConditions', 'local')) {
      this.sortConditions = storageManager.getItem('sortConditions', 'local')!;
    }
    return this.sortConditions;
  }

  //Handle cards filtering

  public updateFilters(...args: Array<Partial<IFilters>>): void {
    const filters = [...args][0];

    if (filters.favorite) this.filters.favorite = true;
    if (filters.favorite === false) delete this.filters.favorite;
    if (filters.size) filters.size.length > 0 ? (this.filters.size = filters.size) : delete this.filters.size;
    if (filters.color) filters.color.length > 0 ? (this.filters.color = filters.color) : delete this.filters.color;
    if (filters.shape) filters.shape.length > 0 ? (this.filters.shape = filters.shape) : delete this.filters.shape;
    if (filters.count) this.filters.count = filters.count;
    if (filters.year) this.filters.year = filters.year;
    if (filters.name || filters.name === '')
      filters.name ? (this.filters.name = filters.name) : delete this.filters.name;

    this.saveFilters();
  }

  public filterData(): void {
    filterDataManager.filterData(this.allCards);
  }

  private saveFilters(): void {
    storageManager.addItem('filters', this.filters, 'local');
  }

  private getFilters(): void {
    this.filters = <IFilters>storageManager.getItem('filters', 'local') || {};
  }
}

export default ToyPageModel;

import storageManager from './storageManager';
import toysPageController from '../views/pages/toysPage/toysPageController';
import { IFilters, ICardData } from './types';

class FilterData {
  cardsToRender: Array<ICardData>;

  constructor() {
    this.cardsToRender = [];
  }

  public filterData(data: ICardData[]): void {
    this.cardsToRender = [];
    const filters = <IFilters>storageManager.getItem('filters', 'local') || {};
    data.map((card) => {
      let isCardToShow = true;

      if (
        (filters.name && !card.name.toLowerCase().includes(filters.name)) ||
        (Object.prototype.hasOwnProperty.call(filters, 'favorite') && filters.favorite !== card.favorite) ||
        (filters.size && !filters.size.some((size) => size === card.size)) ||
        (filters.color && !filters.color.some((color) => color === card.color)) ||
        (filters.shape && !filters.shape.some((shape) => shape === card.shape)) ||
        (filters.count && (filters.count.from > card.count || filters.count.to < card.count)) ||
        (filters.year && (filters.year.from > card.year || filters.year.to < card.year))
      ) {
        isCardToShow = false;
      }
      if (isCardToShow) this.cardsToRender.push(card);
      toysPageController.renderCards(this.cardsToRender);
    });
  }
}

export default new FilterData();

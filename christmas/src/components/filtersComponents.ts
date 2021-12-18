import { IFilters, Sort, SortDirection, ICardData } from './types';

export class FiltersComponent {
  cardsToShowArray: ICardData[];
  filters: IFilters;
  sortConditions: Sort;
  
  constructor(filters: IFilters, sortConditions: Sort) {
    this.cardsToShowArray = [];
    this.filters = filters;
    this.sortConditions = sortConditions;
  }

  parceData(data: ICardData[]): ICardData[] {
    this.filterData(data);
    this.sortData(this.cardsToShowArray);

    return this.cardsToShowArray;
  }

  filterData(data: ICardData[]):void {
    console.log(this.filters);
    this.cardsToShowArray = [];
    data.map((card) => {
      let isToyToShow = true;

      if (this.filters.name && isToyToShow) {
        if (!card.name.includes(this.filters.name)) isToyToShow = false;
      }

      if (this.filters.hasOwnProperty('favorite') && isToyToShow) {
        if (this.filters.favorite !== card.favorite) isToyToShow = false;
      }

      if (this.filters.size && isToyToShow) {
        isToyToShow = this.filters.size.some(size => size === card.size);
      }

      if (this.filters.color && isToyToShow) {
        isToyToShow = this.filters.color.some(color => color === card.color);
      }

      if (this.filters.shape && isToyToShow) {
        isToyToShow = this.filters.shape.some(shape => shape === card.shape);
      }

      if (this.filters.count && isToyToShow) {
        if (this.filters.count.from >= card.count || this.filters.count.to <= card.count) {
          isToyToShow = false;
        }
      }

      if (this.filters.year && isToyToShow) {
        if (this.filters.year.from >= card.year || this.filters.year.to <= card.year) {
          isToyToShow = false;
        }
      }

      if (isToyToShow) this.cardsToShowArray.push(card);
    });
  }

  sortData(data: ICardData[]): void {
    if(this.sortConditions.direction === SortDirection.ASC) {
      data.sort((a, b) => a[this.sortConditions.key] > b[this.sortConditions.key] ? 1 : -1);
    } else {
      data.sort((a, b) => a[this.sortConditions.key] > b[this.sortConditions.key] ? -1 : 1);
    }
  }
}
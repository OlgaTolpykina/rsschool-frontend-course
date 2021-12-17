import { ICardData } from './ICardData';

type FilterGroup = {
  key: string;
  filter: Array<string | boolean>;
}

export class Filter {

  filtersMap: Map<string, Array<string | boolean>>
  filteredArray: Array<ICardData> = [];
  filterFavorite: FilterGroup = { key: 'favorite', filter: [ true, false ] }
  filterSize: FilterGroup = { key: 'size', filter: [ 'большой', 'средний', 'малый' ] }
  filterColor: FilterGroup = { key: 'color', filter: [ 'белый', 'желтый', 'красный', 'синий', 'зелёный' ] }
  filterShape: FilterGroup = { key: 'shape', filter: [ 'колокольчик', 'шар', 'шишка', 'снежинка', 'фигурка' ] }

  constructor () {
    this.filtersMap = new Map<string, Array<string | boolean>>();
    this.filteredArray = [];
  }

  setFilters(data: Array<ICardData>, favoriteFilter:boolean, sizeFilter: Array<string>, colorFilter: Array<string>, shapeFilter: Array<string>): Array<ICardData> {
    if (favoriteFilter) {
      this.filterFavorite.filter = [ true ];
    } else { 
      this.filterFavorite.filter = [ true, false ];
    }

    this.filterSize.filter = sizeFilter;
    this.filterColor.filter = colorFilter;
    this.filterShape.filter = shapeFilter;

    this.setFiltersMap(data);

    return this.filteredArray;
  }

  setFiltersMap(data: Array<ICardData>): void {
    this.filtersMap.set(this.filterFavorite.key, this.filterFavorite.filter);
    this.filtersMap.set(this.filterSize.key, this.filterSize.filter);
    this.filtersMap.set(this.filterColor.key, this.filterColor.filter);
    this.filtersMap.set(this.filterShape.key, this.filterShape.filter);

    this.filterCards(data, this.filtersMap);
  }

  filterCards(data: Array<ICardData>, filtersMap: Map<string, Array<string | boolean>>): void {
    let result: Array<ICardData> = [];

    let filters: Array<string> = [];
    for(let j = 0; j < filtersMap.size; j++) {
      filters.push(Array.from(filtersMap.keys())[j]);
    }

    result = data.filter(card => 
    (filtersMap.get(filters[0]) as Array<string>).includes(card[filters[0]]) 
    && (filtersMap.get(filters[1]) as Array<string>).includes(card[filters[1]])
    && (filtersMap.get(filters[2]) as Array<string>).includes(card[filters[2]])
    && (filtersMap.get(filters[3]) as Array<string>).includes(card[filters[3]]));  
    
    console.log(result);  

    this.filteredArray = result;
  }

}
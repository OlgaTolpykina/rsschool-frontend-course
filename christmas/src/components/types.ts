export interface ICardData {
  num: number;
  name: string;
  count: number;
  year: number;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
  selected?: boolean;
}

export interface IFilters {
  name?: string,
  count?: IRangeFilter,
  year?: IRangeFilter,
  shape?: string[],
  color?: string[],
  size?: string[],
  favorite?: boolean,
}

export interface IRangeFilter {
  from: number;
  to: number;
}

export type SortParams = 'name' | 'year';

export interface Sort {
  key: SortParams;
  direction: SortDirection;
}

export enum SortDirection {
  ASC = 'ВВЕРХ',
  DSC = 'ВНИЗ',
}
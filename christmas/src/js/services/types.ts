import { SortDirection, RoutesID, Paths } from "./constants";

export interface ICardData {
  id?: number;
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
  name?: string;
  count?: IRangeFilter;
  year?: IRangeFilter;
  shape?: string[];
  color?: string[];
  size?: string[];
  favorite?: boolean;
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

export interface CardsPositions {
  idx: number;
  top: number;
  left: number;
}

type Page = {
  render: () => string;
}

export interface Routes {
  id: RoutesID,
  path: Paths,
  page: Page,
}
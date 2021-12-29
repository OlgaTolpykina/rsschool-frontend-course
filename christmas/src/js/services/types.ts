import { Events } from '../views/components/Events';
import { SortDirection, RoutesID, Paths } from './constants';

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
};

export interface Routes {
  id: RoutesID,
  path: Paths,
  page: Page,
}

export type DragObject = {
  element?: HTMLImageElement,
  avatar?: HTMLImageElement,
  downX?: number,
  downY?: number,
  shiftX?: number,
  shiftY?: number,
}

export type Coords = {
  top: number,
  left: number,
}

export interface IDrag {
  // dragObject: DragObject,
  // allowDrop(e: Event): void;
  onMouseDown(e: MouseEvent): void;
  onMouseMove(e: MouseEvent): boolean | undefined;
  onMouseUp(e: MouseEvent): void;
  finishDrag(e: Event): void;
  startDrag(e: Event): void;
  findDroppable(e: Event): HTMLElement | null;
  getCoords(element: HTMLElement): Coords;
}

export interface IAvatar extends HTMLImageElement {
  rollback(): void;
}

export interface IPosition {
  parent: Node | null,
  nextSibling: Node | null,
  position: string,
  left: string,
  top: string,
  zIndex: string,
}
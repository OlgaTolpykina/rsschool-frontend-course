import cardsDataUrl from '../assets/json/data.json';
import { ICardData } from './types';

interface ICardDto {
  num: string,
  name: string,
  count: string,
  year: string,
  shape: string,
  color: string,
  size: string,
  favorite: boolean,
}

export class LoadData {
  
  public async build() {
    return await this.load(cardsDataUrl) as Array<ICardData>;
  }

  private async load(url: string): Promise<Array<ICardData>> {
    const res = await fetch(url);
    const cardsData = await res.json();
    return cardsData.map((item: ICardDto) => {
      return {
        num: Number(item.num),
        name: item.name,
        count: Number(item.count),
        year: Number(item.year),
        shape: item.shape,
        color: item.color,
        size: item.size,
        favorite: item.favorite,
      } as ICardData;
    });
  }
}
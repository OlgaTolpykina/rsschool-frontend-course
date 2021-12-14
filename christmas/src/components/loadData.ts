import cardsDataUrl from '../assets/json/data.json';
import { ICardData } from './ICardData';

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
    const data: Array<ICardData> = await this.load(cardsDataUrl);
    return data;
  }

  private async load(url: string): Promise<Array<ICardData>> {
    const res = await fetch(url);
    const cardsData = await res.json();
    const modelData: Array<ICardData> = cardsData.map((item: ICardDto) => {
      const record: ICardData = {
        num: Number(item.num),
        name: item.name,
        count: Number(item.count),
        year: Number(item.year),
        shape: item.shape,
        color: item.color,
        size: item.size,
        favorite: item.favorite,
      };
      return record;
    });
    return modelData;
  }
}
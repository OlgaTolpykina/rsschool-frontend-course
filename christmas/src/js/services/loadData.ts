import cardsData from '../../assets/json/data.json';
import { ICardData } from './types';

interface ICardDto {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
}

class LoadData {
    public async build() {
        return (await this.load(cardsData)) as Array<ICardData>;
    }

    private async load(url: string): Promise<Array<ICardData>> {
        const res = await fetch(url);
        const cards = await res.json();
        return cards.map((item: ICardDto) => {
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

export default new LoadData();

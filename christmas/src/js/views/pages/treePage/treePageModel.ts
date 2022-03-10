import storageManager from '../../../services/storageManager';
import loadData from '../../../services/loadData';
import { ICardData } from '../../../services/types';
class TreePageModel {
  private allCards: Array<ICardData>;

  constructor() {
    this.allCards = [];
  }

  public async getData(): Promise<Array<ICardData>> {
    this.allCards = await loadData.build();
    return this.allCards;
  }

  public saveVariant(type: string, value: string): void {
    storageManager.addItem(`${type}`, value, 'local');
  }

  public getVariant(type: string): string {
    const variant = <string>storageManager.getItem(type, 'local');
    return variant;
  }

  public clearLS(): void {
    storageManager.deleteItem('tree', 'local');
    storageManager.deleteItem('bg', 'local');
    storageManager.deleteItem('lights', 'local');
    storageManager.deleteItem('lightsColor', 'local');
  }
}

export default new TreePageModel();

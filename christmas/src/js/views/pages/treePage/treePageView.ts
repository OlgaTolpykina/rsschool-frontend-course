import header from "../../components/header/header";
import settingBlock from '../../components/settings/settingBlock';
import buttons from "../../components/buttons/buttons";
import footer from "../../components/footer/footer";
import storageManager from "../../../services/storageManager";
import dragManager from "../../../services/dragManager";
import { ICardData } from "../../../services/types";

class TreePageView {
  private rootNode: HTMLElement;
  private selectedCards: Array<number>;
  private allCards: Array<ICardData>;
  private lightVariants: Array<string>;
  
  constructor() {
    this.rootNode = <HTMLElement>document.getElementById('app');
    this.allCards = [];
    this.selectedCards = <Array<number>>storageManager.getItem('selectedCards', 'local') || [];
    this.lightVariants = ['light_multicolor', 'light_red', 'light_blue', 'light_yellow', 'light_green'];
  }

  public render(treeVariant: string, bgVariant: string, cards: Array<ICardData>, handleVariantChoice: (e: Event) => void, handleButtonClick: (e: Event) => void): void {
    this.rootNode.textContent = '';
    this.allCards = cards;
    this.createHeader();
    this.createMainSection(treeVariant, bgVariant, handleVariantChoice, handleButtonClick);
    this.createFooter();
  }

  private createHeader(): void {
    this.selectedCards = <Array<number>>storageManager.getItem('selectedCards', 'local');
    this.rootNode.append(header.getTemplate(true, false, undefined, undefined, this.selectedCards.length));
    this.rootNode.querySelector('.tree-route')!.classList.add('link_active');
  }

  private createMainSection(treeVariant: string, bgVariant: string, handleVariantChoice: (e: Event) => void, handleButtonClick: (e: Event) => void): void {
    const main = document.createElement('main');
    main.className = 'content content__tree';
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper tree__wrapper';
    this.createSettingsBlock(wrapper, handleVariantChoice, handleButtonClick);
    this.createMainTreeBlock(wrapper, treeVariant, bgVariant);
    this.createFavoritiesBlock(wrapper, handleVariantChoice);

    main.append(wrapper);
    this.rootNode.append(main);
  }

  private createSettingsBlock(parentNode: HTMLElement, handleVariantChoice: (e: Event) => void, handleButtonClick: (e: Event) => void): void {
    const settingsWrapper = document.createElement('div');
    settingsWrapper.className = 'tree__settings';
    settingsWrapper.append(settingBlock.getTemplate('tree_choice', 'tree', 6, 'tree__variant', handleVariantChoice));
    settingsWrapper.append(settingBlock.getTemplate('bg_choice', 'bg', 10, 'bg__variant', handleVariantChoice));
    settingsWrapper.append(settingBlock.getLightsVariantsTemplate(this.lightVariants));
    settingsWrapper.append(buttons.getTemplate(['Сбросить настройки'], [''], handleButtonClick))

    parentNode.append(settingsWrapper);
  }

  private createMainTreeBlock(parentNode: HTMLElement, treeVariant: string, bgVariant: string, ): void {
    const mainTreeWrapper = <HTMLElement>document.createElement('div');
    mainTreeWrapper.className = 'tree__main-tree';
    mainTreeWrapper.style.background = `url("./assets/img/${bgVariant}.jpg") center / cover no-repeat`;
    
    const mainTreeImg = <HTMLImageElement>document.createElement('img');
    mainTreeImg.className = 'main-tree';
    mainTreeImg.src = `./assets/img/${treeVariant}.png`;
    mainTreeImg.setAttribute('usemap', '#tree-map');

    const mainTreeMap = <HTMLMapElement>document.createElement('map');
    mainTreeMap.setAttribute('name', 'tree-map');
    const mainTreeArea = <HTMLAreaElement>document.createElement('area');
    mainTreeArea.setAttribute('shape', 'poly');
    mainTreeArea.setAttribute('coords', '247,61,48,615,247,668,333,674,406,649,444,605');
    mainTreeMap.append(mainTreeArea);
    
    mainTreeWrapper.append(mainTreeImg);
    mainTreeWrapper.append(mainTreeMap);

    mainTreeArea.ondragover = (ev: DragEvent) => dragManager.dragOverHandler(ev);
    mainTreeArea.ondrop = (ev: DragEvent) => dragManager.dropHandler(ev);
    document.ondragover = (ev: DragEvent) => dragManager.dragOverHandler(ev);
    document.ondrop = (ev: DragEvent) => dragManager.dropHandler(ev);

    parentNode.append(mainTreeWrapper);
  }

  private createFavoritiesBlock(parentNode: HTMLElement, handleVariantChoice: (e: Event) => void): void {
    const favoritiesWrapper = <HTMLElement>document.createElement('div');
    const favoriteCardsArray = this.formFavoriteCardsArr();
    favoritiesWrapper.className = 'tree__favorites';
    favoritiesWrapper.append(settingBlock.getTemplate('favorites_container', 'favorites', 20, 'favorites__card', undefined, favoriteCardsArray));
    favoritiesWrapper.append(settingBlock.getTemplate('decorated_container', 'decorated', 6, 'decorated_container_inner', handleVariantChoice))

    parentNode.append(favoritiesWrapper);
  }

  private formFavoriteCardsArr(): Array<ICardData> {
    this.selectedCards = <Array<number>>storageManager.getItem('selectedCards', 'local') || [];
    let favoriteCards = <Array<Array<ICardData>>>[];
    let favoriteCardsArray = <Array<ICardData>>[];
    if (this.selectedCards.length > 0) {
      this.selectedCards.forEach((num) => {
        favoriteCards.push(this.allCards.filter((card) => card.num === num));
      });
    } else {
      favoriteCards.push(this.allCards.filter((card) => card.num <= 20));
    }
    favoriteCardsArray = favoriteCards.reduce((array1, array2) => [...array1, ...array2]);
    return favoriteCardsArray;
  }

  private createFooter(): void {
    this.rootNode.append(footer.getTemplate());
  }
}

export default new TreePageView();
import header from "../../components/header/header";
import settingBlock from '../../components/settings/settingBlock';
import footer from "../../components/footer/footer";
import storageManager from "../../../services/storageManager";

class TreePageView {
  private rootNode: HTMLElement;
  private selectedCards: Array<number>;
  lightVariants: Array<string>;
  
  constructor() {
    this.rootNode = <HTMLElement>document.getElementById('app');
    this.selectedCards = <Array<number>>storageManager.getItem('selectedCards', 'local') || [];
    this.lightVariants = ['light_multicolor', 'light_red', 'light_blue', 'light_yellow', 'light_green'];
  }

  public render(): void {
    this.rootNode.textContent = '';
    this.createHeader();
    this.createMainSection();
    this.createFooter();
  }

  private createHeader(): void {
    this.rootNode.append(header.getTemplate(true, false, undefined, undefined, this.selectedCards.length));
    this.rootNode.querySelector('.tree-route')!.classList.add('link_active');
  }

  private createMainSection(): void {
    const main = document.createElement('main');
    main.className = 'content content__tree';
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper tree__wrapper';
    this.createSettingsBlock(wrapper);
    this.createMainTreeBlock(wrapper);
    this.createFavoritiesBlock(wrapper);

    main.append(wrapper);
    this.rootNode.append(main);
  }

  private createSettingsBlock(parentNode: HTMLElement): void {
    const settingsWrapper = document.createElement('div');
    settingsWrapper.className = 'tree__settings';
    settingsWrapper.append(settingBlock.getTemplate('tree_choice', 'tree', 6, 'tree__variant'));
    settingsWrapper.append(settingBlock.getTemplate('bg_choice', 'bg', 10, 'bg__variant'));
    settingsWrapper.append(settingBlock.getLightsVariantsTemplate(this.lightVariants));

    parentNode.append(settingsWrapper);
  }

  private createMainTreeBlock(parentNode: HTMLElement): void {
    const mainTreeWrapper = <HTMLElement>document.createElement('div');
    mainTreeWrapper.className = 'tree__main-tree';

    parentNode.append(mainTreeWrapper);
  }

  private createFavoritiesBlock(parentNode: HTMLElement): void {
    const favoritiesWrapper = <HTMLElement>document.createElement('div');
    favoritiesWrapper.className = 'tree__favorites';
    favoritiesWrapper.append(settingBlock.getTemplate('favorites_container', '', 20, 'favorites__card'));
    favoritiesWrapper.append(settingBlock.getTemplate('favorites__decorated', '', 6, 'favorites__decorated_container'))

    parentNode.append(favoritiesWrapper);
  }


  private createFooter(): void {
    this.rootNode.append(footer.getTemplate());
  }
}

export default new TreePageView();
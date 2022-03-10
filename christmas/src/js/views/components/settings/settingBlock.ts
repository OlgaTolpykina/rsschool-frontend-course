import dragManager from '../../../services/dragManager';
import storageManager from '../../../services/storageManager';
import treePageController from '../../pages/treePage/treePageController';
import { ICardData } from '../../../services/types';
import { LightsColor } from '../../../services/constants';

class SettingBlock {
  private favoriteCard: Array<HTMLElement>;

  constructor() {
    this.favoriteCard = [];
  }

  public getTemplate(
    classText: string,
    type: string,
    optionsNumber: number,
    optionClass: string,
    handleVariantChoice?: (e: Event) => void,
    favoriteToys?: Array<ICardData>
  ): HTMLElement {
    this.favoriteCard = [];
    const wrapper = <HTMLElement>document.createElement('div');
    wrapper.className = 'settings__container';
    wrapper.textContent = '';
    wrapper.classList.add(classText);
    const ext = type === 'tree' || type === 'decorated' ? 'png' : 'jpg';

    for (let i = 0; i < optionsNumber; i++) {
      const variant = <HTMLElement>document.createElement('div');
      variant.className = `${optionClass} setting__item`;
      variant.dataset.name = `${classText.split('_')[0]}`;
      variant.dataset.value = `${classText.split('_')[0]}${i + 1}`;

      if (type !== 'favorites') {
        type = type === 'decorated' ? 'tree' : type;
        variant.style.backgroundImage = `url("./assets/img/${type}${i + 1}.${ext}")`;
      }

      if (type === 'favorites') {
        this.favoriteCard.push(variant);
      }

      if (handleVariantChoice) {
        variant.onclick = (e: Event) => handleVariantChoice(e);
      }
      wrapper.append(variant);
    }

    if (favoriteToys) {
      this.renderFavoriteToys(favoriteToys);
    }

    return wrapper;
  }

  private renderFavoriteToys(favoriteToys: Array<ICardData>): void {
    for (let i = 0; i < favoriteToys.length; i++) {
      const favoriteCardCount = document.createElement('p') as HTMLElement;
      favoriteCardCount.className = 'favorites__card_count';
      favoriteCardCount.innerHTML = favoriteToys[i].count.toString();
      this.favoriteCard[i].append(favoriteCardCount);

      for (let j = 1; j <= favoriteToys[i].count; j++) {
        const favoriteCardImg = document.createElement('img') as HTMLImageElement;
        favoriteCardImg.src = `assets/img/${favoriteToys[i].num}.png`;
        favoriteCardImg.className = 'favorites__card_img';
        favoriteCardImg.setAttribute('alt', 'toy');
        favoriteCardImg.setAttribute('id', `${i}_${j}`);
        favoriteCardImg.setAttribute('width', '55');
        favoriteCardImg.setAttribute('height', '55');
        favoriteCardImg.setAttribute('draggable', 'true');
        favoriteCardImg.style.zIndex = '2';
        favoriteCardImg.dataset.count = favoriteToys[i].count.toString();
        favoriteCardImg.ondragstart = (ev: DragEvent) => dragManager.dragStartHandler(ev);

        this.favoriteCard[i].append(favoriteCardImg);
      }
    }
  }

  public getLightsVariantsTemplate(lightVariants: Array<string>): HTMLElement {
    const wrapper = <HTMLElement>document.createElement('div');
    wrapper.className = 'lights_choice settings__container';
    wrapper.textContent = '';
    const lightButtonsWrapper = <HTMLElement>document.createElement('div');
    lightButtonsWrapper.className = 'light__variant_container';
    for (let i = 0; i <= 4; i++) {
      const lightVariant = <HTMLInputElement>document.createElement('button');
      lightVariant.className = 'light__variant';
      lightVariant.classList.add(lightVariants[i]);
      lightVariant.dataset.color = lightVariants[i];
      lightVariant.onclick = (e: Event) => this.handleLightsChoice(e);
      lightButtonsWrapper.append(lightVariant);
    }

    wrapper.append(lightButtonsWrapper);
    this.createLightsSwitcher(wrapper);
    return wrapper;
  }

  private createLightsSwitcher(parentNode: HTMLElement): void {
    const switcher = document.createElement('div') as HTMLElement;
    switcher.className = 'lights__switcher';

    const switcherInput = document.createElement('input') as HTMLInputElement;
    switcherInput.type = 'checkbox';
    switcherInput.setAttribute('checked', 'checked');
    switcherInput.className = 'lights__switcher_input';
    switcherInput.setAttribute('id', 'lights__switcher');

    const switcherLabel = document.createElement('label') as HTMLLabelElement;
    switcherLabel.className = 'lights__switcher_label';
    switcherLabel.setAttribute('for', 'lights__switcher');
    const switcherLabelInnerContainer = document.createElement('div') as HTMLElement;
    switcherLabelInnerContainer.className = 'switcher_inner-container';
    const switcherLabelIndicator = document.createElement('div') as HTMLElement;
    switcherLabelIndicator.className = 'switcher_indicator';

    switcherInput.onchange = (e: Event) => this.handleLightsSwitcher(e);

    switcherLabel.append(switcherLabelInnerContainer);
    switcherLabel.append(switcherLabelIndicator);

    switcher.append(switcherInput);
    switcher.append(switcherLabel);
    parentNode.append(switcher);
    this.setSwitcher(switcherInput, switcherLabel);
  }

  private setSwitcher(switcherInput: HTMLInputElement, switcherLabel: HTMLLabelElement): void {
    const switcherIndicator = <HTMLElement>switcherLabel.querySelector('.switcher_indicator');
    const switcheInnerContainer = <HTMLElement>switcherLabel.querySelector('.switcher_inner-container');
    const isLightsOn = storageManager.getItem('lights', 'local');
    switcherInput.checked = isLightsOn ? true : false;

    if (switcherInput.checked) {
      switcherIndicator.style.right = '0';
      switcheInnerContainer.style.margin = '0';
    } else {
      switcherIndicator.style.right = '55px';
      switcheInnerContainer.style.marginLeft = '-100%';
    }
  }

  private handleLightsSwitcher(e: Event): void {
    const switcherInput = <HTMLInputElement>e.target;
    const switcherLabel = <HTMLLabelElement>switcherInput.nextElementSibling;

    storageManager.addItem('lights', switcherInput.checked, 'local');
    this.setSwitcher(switcherInput, switcherLabel);
    treePageController.createPage();
  }

  private handleLightsChoice(e: Event): void {
    const clickedBtn = <HTMLElement>e.target;
    const clickedColor = <string>clickedBtn.dataset.color;
    const clickedBtnParentNode = <HTMLElement>clickedBtn.parentNode;
    const switcherInput = <HTMLInputElement>(
      (<HTMLElement>clickedBtnParentNode.nextElementSibling).querySelector('input')
    );
    const switcherLabel = <HTMLLabelElement>switcherInput.nextElementSibling;

    switcherInput.checked = true;
    storageManager.addItem('lights', switcherInput.checked, 'local');
    this.saveColor(clickedColor);
    this.setSwitcher(switcherInput, switcherLabel);
    treePageController.createPage();
  }

  private saveColor(color: string): void {
    switch (color) {
      case 'light_red':
        storageManager.addItem('lightsColor', LightsColor.light_red, 'local');
        break;
      case 'light_blue':
        storageManager.addItem('lightsColor', LightsColor.light_blue, 'local');
        break;
      case 'light_yellow':
        storageManager.addItem('lightsColor', LightsColor.light_yellow, 'local');
        break;
      case 'light_green':
        storageManager.addItem('lightsColor', LightsColor.light_green, 'local');
        break;
      case 'light_multicolor':
        storageManager.addItem('lightsColor', 'multicolor', 'local');
        break;
    }
  }
}

export default new SettingBlock();

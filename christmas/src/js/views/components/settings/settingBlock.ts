import dragManager from '../../../services/dragManager';
import { ICardData } from "../../../services/types";

class SettingBlock {
  private favoriteCard: Array<HTMLElement>;

  constructor() {
    this.favoriteCard = [];
  }

  public getTemplate(classText: string, type: string, optionsNumber: number, optionClass: string, handleVariantChoice?: (e: Event) => void, favoriteToys?: Array<ICardData>): HTMLElement {
    this.favoriteCard = [];
    const wrapper = <HTMLElement>document.createElement('div');
    wrapper.className = 'settings__container';
    wrapper.textContent = '';
    wrapper.classList.add(classText);
    const ext = (type === 'tree' || type === 'decorated') ? 'png' : 'jpg';

    for (let i = 0; i < optionsNumber; i++) {
      const variant = <HTMLElement>document.createElement('div');
      variant.className = `${optionClass} setting__item`;
      variant.dataset.name = `${classText.split('_')[0]}`;
      variant.dataset.value = `${classText.split('_')[0]}${i + 1}`;
      
      if (type !== 'favorites') {
        type = (type === 'decorated') ? 'tree' : type;
        variant.style.backgroundImage = `url("./assets/img/${type}${i + 1}.${ext}")`;
      }

      if (type === 'favorites') {
        this.favoriteCard.push(variant);
      }

      if (handleVariantChoice) {
        variant.onclick = (e: Event) => handleVariantChoice(e);
      }
      wrapper.append(variant);
    };
    
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
        lightButtonsWrapper.append(lightVariant);
    }
    wrapper.append(lightButtonsWrapper);
    return wrapper;
  }
} 

export default new SettingBlock();
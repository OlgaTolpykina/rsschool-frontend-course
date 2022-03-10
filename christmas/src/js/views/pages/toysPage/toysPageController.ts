import { ICardData } from '../../../services/types';
import { Colors, Coefficients } from '../../../services/constants';
import toysPageView from './toysPageView';
import ToyPageModel from './toysPageModel';
import filterDataManager from '../../../services/filterDataManager';
import storageManager from '../../../services/storageManager';
import settingsManager from '../../../services/settingsManager';
import animationManager from '../../../services/animationManager';
import searchImg from '../../../../assets/img/svg/search.svg';
import deleteImg from '../../../../assets/img/svg/cross.svg';

export class ToyPageController {
  private view: typeof toysPageView;
  private model: ToyPageModel;

  constructor() {
    this.model = new ToyPageModel();
    this.view = toysPageView;
  }

  public async createPage(): Promise<void> {
    const cards = await this.model.getData();
    const sortConditions = this.model.sortConditions;
    const filters = this.model.filters;
    this.view.render(
      sortConditions,
      filters,
      this.sortCards.bind(this),
      this.filterCards.bind(this),
      this.handleRangeFiltering.bind(this),
      this.handleCardsRerendering.bind(this),
      this.handleButtonClick.bind(this),
      this.handleSearchFieldChange.bind(this),
      this.handleSearchFieldClearance.bind(this)
    );
    filterDataManager.filterData(cards);
    settingsManager.init();
    animationManager.init();
  }

  public renderCards(cards: Array<ICardData>): void {
    this.view.renderCards(cards, this.selectCard.bind(this));
  }

  private selectCard(e: Event): void {
    const clickedCard = <HTMLElement>e.currentTarget;
    this.model.updateSelectedCards(clickedCard.id, clickedCard);
  }

  private sortCards(e: Event): void {
    const sortCondition = (<HTMLSelectElement>e.target).value;
    this.model.saveSortingFilters(sortCondition);
    this.model.sortData();
    this.view.renderCards(this.model.cards, this.selectCard.bind(this));
  }

  private filterCards(e: Event): void {
    const clickedElement = <HTMLElement>e.target;
    if (clickedElement.tagName === 'LABEL') return;
    const key = <string>clickedElement.dataset.name;

    if (key === 'favorite') {
      this.model.updateFilters({ [key]: (<HTMLInputElement>clickedElement).checked });
      this.model.filterData();
      return;
    }

    if (key === 'size') {
      const sizeBtns = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.filter_size');
      const sizeArray = <Array<string>>[];
      sizeBtns.forEach((button) => {
        if (button.checked) sizeArray.push(<string>button.dataset.filter);
      });
      this.model.updateFilters({ [key]: sizeArray });
      this.model.filterData();
      return;
    }

    if (key === 'color' || key === 'shape') {
      clickedElement.classList.toggle('active');
      const btns = <NodeListOf<HTMLInputElement>>document.querySelectorAll(`.filter_${key}`);
      const valuesArray = <Array<string>>[];
      btns.forEach((button) => {
        if (button.className.includes('active')) valuesArray.push(<string>button.dataset.filter);
      });
      this.model.updateFilters({ [key]: valuesArray });
      this.model.filterData();
      return;
    }
  }

  private handleRangeFiltering(e: Event): void {
    const parentNode = <HTMLElement>e.currentTarget;
    const slider = <HTMLInputElement>e.target;
    const key = <string>slider.dataset.name;

    if (key === 'count' || key === 'year') {
      this.limitBindSliderValues(slider, key);
      this.updateSliderTextValues(parentNode, slider);
    }
  }

  private handleCardsRerendering(): void {
    this.model.filterData();
  }

  private limitBindSliderValues(slider: HTMLInputElement, key: string): void {
    let bindSlider;

    if (slider.previousElementSibling!.tagName !== 'INPUT') {
      bindSlider = <HTMLInputElement>slider.nextElementSibling;
      slider.value = +bindSlider.value - +slider.value <= 0 ? bindSlider.value : slider.value;
      this.colorSliders(slider, bindSlider);
      this.model.updateFilters({ [key]: { from: Number(slider.value), to: Number(bindSlider.value) } });
    } else {
      bindSlider = <HTMLInputElement>slider.previousElementSibling;
      slider.value = +slider.value - +bindSlider.value <= 0 ? bindSlider.value : slider.value;
      this.colorSliders(bindSlider, slider);
      this.model.updateFilters({ [key]: { from: Number(bindSlider.value), to: Number(slider.value) } });
    }
  }

  public updateSliderTextValues(parentNode: HTMLElement, slider: HTMLInputElement): void {
    const id = <string>slider.dataset.value;
    const valueTextField = <HTMLElement>parentNode.querySelector(`#${id}`);
    valueTextField.textContent = slider.value;
  }

  public colorSliders(slider: HTMLInputElement, bindSlider: HTMLInputElement): void {
    const sliderValue = parseInt(slider.value);
    const bindSliderValue = parseInt(bindSlider.value);
    const minValue = parseInt(slider.min);
    const maxValue = parseInt(slider.max);

    const percent1 = ((sliderValue - minValue) / (maxValue - minValue)) * Coefficients.percent;
    const percent2 = ((bindSliderValue - minValue) / (maxValue - minValue)) * Coefficients.percent;

    slider.style.background = `linear-gradient(to right, ${Colors.white} ${percent1}% , ${Colors.main} ${percent1}% , ${Colors.main} ${percent2}%, ${Colors.white} ${percent2}%)`;
  }

  private handleButtonClick(e: Event): void {
    const clickedElement = <HTMLElement>e.target;
    const type = clickedElement.dataset.name;
    const filters = this.model.filters;

    if (type === 'resetLS') {
      localStorage.clear();
      if (Object.keys(filters).length > 0) this.createPage();
    } else if (Object.keys(filters).length > 0) {
      storageManager.deleteItem('filters', 'local');
      this.createPage();
    }
  }

  handleSearchFieldChange(e: Event): void {
    const searchField = <HTMLInputElement>e.target;
    const key = <string>searchField.dataset.name;

    if (searchField.value) {
      const searchBtn = <HTMLElement>document.querySelector("[data-value='search']");
      searchBtn.style.backgroundImage = `url(${deleteImg})`;
      searchBtn.dataset.value = 'delete';
    } else {
      const deleteBtn = <HTMLElement>document.querySelector("[data-value='delete']");
      deleteBtn.style.backgroundImage = `url(${searchImg})`;
      deleteBtn.dataset.value = 'search';
    }

    this.model.updateFilters({ [key]: searchField.value });
  }

  handleSearchFieldClearance(e: Event): void {
    const clickedBtn = <HTMLInputElement>e.target;
    if (<string>clickedBtn.dataset.value === 'delete') {
      const searchField = <HTMLInputElement>clickedBtn.previousElementSibling;
      const key = <string>searchField.dataset.name;
      searchField.value = '';
      clickedBtn.style.backgroundImage = `url(${searchImg})`;
      clickedBtn.dataset.value = 'search';
      this.model.updateFilters({ [key]: searchField.value });
    }
  }
}

export default new ToyPageController();

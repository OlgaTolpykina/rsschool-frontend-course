import toysPageController from '../../pages/toysPage/toysPageController';
import { IFilters } from '../../../services/types';
import { sortFilterTemplate, filtersBlockTemplate } from './template';

class Filters {
    private sortWrapper: HTMLSelectElement;
    private filtersWrapper: HTMLDivElement;

    constructor() {
        this.sortWrapper = document.createElement('select');
        this.filtersWrapper = document.createElement('div');
        this.filtersWrapper.className = 'filters';
    }

    public getSortingTemplate(
        selectClass: string,
        sortNames: Array<string>,
        sortValues: Array<string>,
        sortValueChosen: string,
        sortCards: (e: Event) => void
    ): HTMLElement {
        this.sortWrapper.className = selectClass;
        this.sortWrapper.textContent = '';

        sortNames.forEach((sortName, index) => {
            this.sortWrapper.insertAdjacentHTML('afterbegin', sortFilterTemplate(sortValues[index], sortName));
            if (sortValues[index] === sortValueChosen) {
                this.sortWrapper.value = sortValueChosen;
            }
        });
        this.sortWrapper.onchange = (e: Event) => sortCards(e);
        return this.sortWrapper;
    }

    public getFiltersTemplate(
        filters: IFilters,
        filterCards: (e: Event) => void,
        handleRangeFiltering: (e: Event) => void
    ): HTMLElement {
        this.filtersWrapper.textContent = '';
        this.filtersWrapper.insertAdjacentHTML('afterbegin', filtersBlockTemplate());
        this.activateButtons(filters);
        this.activateSliders(filters);
        this.filtersWrapper.onclick = (e: Event) => filterCards(e);
        this.filtersWrapper.oninput = (e: Event) => handleRangeFiltering(e);
        return this.filtersWrapper;
    }

    private activateButtons(filters: IFilters): void {
        const filterKeys = Object.keys(filters);
        filterKeys.forEach((key) => {
            const btns = <NodeListOf<HTMLInputElement>>this.filtersWrapper.querySelectorAll(`.filter_${key}`);
            btns.forEach((btn) => {
                switch (key) {
                    case 'favorite':
                        if (filters.favorite) btn.checked = true;
                        break;
                    case 'size':
                        if (filters[key]!.includes(btn.dataset.filter!)) btn.checked = true;
                        break;
                    case 'color':
                    case 'shape':
                        if (filters[key]!.includes(btn.dataset.filter!)) btn.classList.add('active');
                        break;
                }
            });
        });
    }

    private activateSliders(filters: IFilters): void {
        const filterKeys = Object.keys(filters);
        filterKeys.forEach((key) => {
            const sliders = <NodeListOf<HTMLInputElement>>this.filtersWrapper.querySelectorAll(`[data-name=${key}]`);
            switch (key) {
                case 'count':
                case 'year':
                    if (filters[key]) {
                        sliders[0].value = filters[key]!.from.toString();
                        sliders[1].value = filters[key]!.to.toString();
                        toysPageController.colorSliders(sliders[0], sliders[1]);
                        toysPageController.updateSliderTextValues(this.filtersWrapper, sliders[0]);
                        toysPageController.updateSliderTextValues(this.filtersWrapper, sliders[1]);
                    }
            }
        });
    }
}

export default new Filters();

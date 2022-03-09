import header from '../../components/header/header';
import settingBlock from '../../components/settings/settingBlock';
import buttons from '../../components/buttons/buttons';
import footer from '../../components/footer/footer';
import storageManager from '../../../services/storageManager';
import dragManager from '../../../services/dragManager';
import utils from '../../../services/utils';
import { ICardData, IToyCoords } from '../../../services/types';
import { LightsColor } from '../../../services/constants';

class TreePageView {
    private rootNode: HTMLElement;
    private lightsContainer: HTMLElement;
    private selectedCards: Array<number>;
    private allCards: Array<ICardData>;
    private lightVariants: Array<string>;
    private lightsColor: string;
    private intervalID1: NodeJS.Timer | null;
    private intervalID2: NodeJS.Timer | null;
    private intervalID3: NodeJS.Timer | null;
    private intervalID4: NodeJS.Timer | null;
    private intervalID5: NodeJS.Timer | null;
    private intervalID6: NodeJS.Timer | null;
    private intervalID7: NodeJS.Timer | null;

    constructor() {
        this.rootNode = <HTMLElement>document.getElementById('app');
        this.lightsContainer = document.createElement('div') as HTMLElement;
        this.allCards = [];
        this.selectedCards = <Array<number>>storageManager.getItem('selectedCards', 'local') || [];
        this.lightsColor = storageManager.getItem('lightsColor', 'local') || LightsColor.light_yellow;
        this.lightVariants = ['light_multicolor', 'light_red', 'light_blue', 'light_yellow', 'light_green'];
        this.intervalID1 = null;
        this.intervalID2 = null;
        this.intervalID3 = null;
        this.intervalID4 = null;
        this.intervalID5 = null;
        this.intervalID6 = null;
        this.intervalID7 = null;
    }

    public render(
        treeVariant: string,
        bgVariant: string,
        cards: Array<ICardData>,
        handleVariantChoice: (e: Event) => void,
        handleButtonClick: (e: Event) => void
    ): void {
        this.rootNode.textContent = '';
        this.clearIntervals();
        this.allCards = cards;
        this.createHeader();
        this.createMainSection(treeVariant, bgVariant, handleVariantChoice, handleButtonClick);
        const isLightsOn = storageManager.getItem('lights', 'local');
        if (storageManager.getItem('lightsColor', 'local')) {
            this.lightsColor = <string>storageManager.getItem('lightsColor', 'local');
        }
        if (isLightsOn) {
            this.renderLights(this.lightsContainer, this.lightsColor);
        }
        this.checkToysCoords();
        this.createFooter();
    }

    private createMulticolor(): string {
        const multicolorArray = [
            LightsColor.dark_blue,
            LightsColor.light_blue,
            LightsColor.dark_green,
            LightsColor.light_green,
            LightsColor.dark_red,
            LightsColor.light_red,
            LightsColor.dark_yellow,
            LightsColor.light_yellow,
        ];
        const randomNum = utils.getRandomNum(0, multicolorArray.length);
        const color = multicolorArray[randomNum];
        return color;
    }

    private createHeader(): void {
        this.selectedCards = <Array<number>>storageManager.getItem('selectedCards', 'local') || [];
        this.rootNode.append(header.getTemplate(true, false, undefined, undefined, this.selectedCards.length));
        this.rootNode.querySelector('.tree-route')!.classList.add('link_active');
    }

    private createMainSection(
        treeVariant: string,
        bgVariant: string,
        handleVariantChoice: (e: Event) => void,
        handleButtonClick: (e: Event) => void
    ): void {
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

    private createSettingsBlock(
        parentNode: HTMLElement,
        handleVariantChoice: (e: Event) => void,
        handleButtonClick: (e: Event) => void
    ): void {
        const settingsWrapper = document.createElement('div');
        settingsWrapper.className = 'tree__settings';
        settingsWrapper.append(
            settingBlock.getTemplate('tree_choice', 'tree', 6, 'tree__variant', handleVariantChoice)
        );
        settingsWrapper.append(settingBlock.getTemplate('bg_choice', 'bg', 10, 'bg__variant', handleVariantChoice));
        settingsWrapper.append(settingBlock.getLightsVariantsTemplate(this.lightVariants));
        settingsWrapper.append(buttons.getTemplate(['Сбросить настройки'], [''], handleButtonClick));

        parentNode.append(settingsWrapper);
    }

    private createMainTreeBlock(parentNode: HTMLElement, treeVariant: string, bgVariant: string): void {
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
        this.createLightRope(mainTreeWrapper);

        mainTreeArea.ondragover = (ev: DragEvent) => dragManager.dragOverHandler(ev);
        mainTreeArea.ondrop = (ev: DragEvent) => dragManager.dropHandler(ev);
        document.ondragover = (ev: DragEvent) => dragManager.dragOverHandler(ev);
        document.ondrop = (ev: DragEvent) => dragManager.dropHandler(ev);

        parentNode.append(mainTreeWrapper);
    }

    private createLightRope(parentNode: HTMLElement): void {
        this.lightsContainer.textContent = '';
        this.lightsContainer.className = 'lights__onTree-container';
        parentNode.append(this.lightsContainer);
    }

    private renderLights(parentNode: HTMLElement, color: string): void {
        const canvas = <HTMLCanvasElement>document.createElement('canvas');
        canvas.setAttribute('id', 'canvas');
        canvas.width = parentNode.offsetWidth;
        canvas.height = parentNode.offsetHeight;
        window.addEventListener('resize', () => {
            canvas.width = parentNode.offsetWidth;
            canvas.height = parentNode.offsetHeight;
        });

        const context = <CanvasRenderingContext2D>canvas.getContext('2d');
        this.intervalID1 = setInterval(() => {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }, 1500);
        this.intervalID2 = this.setInterval(canvas, context, -2, 3, 170, color, 300);
        this.intervalID3 = this.setInterval(canvas, context, -3, 5, 250, color, 500);
        this.intervalID4 = this.setInterval(canvas, context, -5, 7, 350, color, 400);
        this.intervalID5 = this.setInterval(canvas, context, -6, 9, 450, color, 200);
        this.intervalID6 = this.setInterval(canvas, context, -8, 10, 550, color, 300);
        this.intervalID7 = this.setInterval(canvas, context, -10, 13, 650, color, 400);

        parentNode.append(canvas);
    }

    private setInterval(
        canvas: HTMLCanvasElement,
        context: CanvasRenderingContext2D,
        number1: number,
        number2: number,
        number3: number,
        color: string,
        delay: number
    ): NodeJS.Timer {
        const intervalID = setInterval(() => {
            for (let i = number1; i < number2; i += 3) {
                context.beginPath();
                context.arc(canvas.width / 2 + i * 15, number3 - Math.pow(i, 2), 5, 0, 2 * Math.PI);
                context.stroke();

                this.setContext(context, color);
            }
        }, delay);

        return intervalID;
    }

    private setContext(context: CanvasRenderingContext2D, color: string) {
        let colorOfLights = color;
        if (color === 'multicolor') colorOfLights = this.createMulticolor();
        context.fillStyle = colorOfLights;
        context.strokeStyle = colorOfLights;
        context.shadowColor = colorOfLights;
        context.shadowBlur = 10;
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.fill();
    }

    private clearIntervals() {
        clearInterval(this.intervalID1!);
        clearInterval(this.intervalID2!);
        clearInterval(this.intervalID3!);
        clearInterval(this.intervalID4!);
        clearInterval(this.intervalID5!);
        clearInterval(this.intervalID6!);
        clearInterval(this.intervalID7!);
    }

    private createFavoritiesBlock(parentNode: HTMLElement, handleVariantChoice: (e: Event) => void): void {
        const favoritiesWrapper = <HTMLElement>document.createElement('div');
        const favoriteCardsArray = this.formFavoriteCardsArr();
        favoritiesWrapper.className = 'tree__favorites';
        favoritiesWrapper.append(
            settingBlock.getTemplate(
                'favorites_container',
                'favorites',
                20,
                'favorites__card',
                undefined,
                favoriteCardsArray
            )
        );
        favoritiesWrapper.append(
            settingBlock.getTemplate(
                'decorated_container',
                'decorated',
                6,
                'decorated_container_inner',
                handleVariantChoice
            )
        );

        parentNode.append(favoritiesWrapper);
    }

    private formFavoriteCardsArr(): Array<ICardData> {
        this.selectedCards = <Array<number>>storageManager.getItem('selectedCards', 'local') || [];
        const favoriteCards = <Array<Array<ICardData>>>[];
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

    private checkToysCoords(): void {
        const toysCoords: IToyCoords = storageManager.getItem('toysCoords', 'local') || {};
        const dropZone = <HTMLAreaElement>this.rootNode.querySelector('area');
        Object.keys(toysCoords).forEach((toyId) => {
            const toy = <HTMLElement>document.getElementById(`${toyId}`);
            const toysNumberElement = <HTMLElement>(<HTMLElement>toy.parentNode).firstChild;
            toy.style.left = toysCoords[toyId].left;
            toy.style.top = toysCoords[toyId].top;
            toysNumberElement.innerHTML = toysCoords[toyId].count;
            dropZone.append(toy);
        });
    }

    private createFooter(): void {
        this.rootNode.append(footer.getTemplate());
    }
}

export default new TreePageView();

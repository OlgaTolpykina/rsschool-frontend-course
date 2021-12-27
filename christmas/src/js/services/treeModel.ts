import { ICardData } from './types';
import { Phrases } from './constants';
import { LightsColor } from './constants';

const treeVarianImg1 = require('../../assets/img/tree/1.png');
const treeVarianImg2 = require('../../assets/img/tree/2.png');
const treeVarianImg3 = require('../../assets/img/tree/3.png');
const treeVarianImg4 = require('../../assets/img/tree/4.png');
const treeVarianImg5 = require('../../assets/img/tree/5.png');
const treeVarianImg6 = require('../../assets/img/tree/6.png');
const bgVarianImg1 = require('../../assets/img/bg/1.jpg');
const bgVarianImg2 = require('../../assets/img/bg/2.jpg');
const bgVarianImg3 = require('../../assets/img/bg/3.jpg');
const bgVarianImg4 = require('../../assets/img/bg/4.jpg');
const bgVarianImg5 = require('../../assets/img/bg/5.jpg');
const bgVarianImg6 = require('../../assets/img/bg/6.jpg');
const bgVarianImg7 = require('../../assets/img/bg/7.jpg');
const bgVarianImg8 = require('../../assets/img/bg/8.jpg');
const bgVarianImg9 = require('../../assets/img/bg/9.jpg');
const bgVarianImg10 = require('../../assets/img/bg/10.jpg');

export class TreeModel {
  treeWrapper: HTMLElement;
  treeVariantImgs: Array<string>;
  treeBgWrapper: HTMLElement;
  bgVariantsImgs: Array<string>;
  treeLightsWrapper: HTMLElement;
  lightVariants: Array<string>;
  treeMainWrapper: HTMLElement;
  treeFavoritesWrapper: HTMLElement;
  selectedCards: Array<ICardData>;
  favoriteCard: Array<HTMLElement>;
  settingsContainer: HTMLElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  lightsContainer: HTMLElement;
  lightsColor: string;
  intervalID1: number;
  intervalID2: number;
  intervalID3: number;
  intervalID4: number;
  intervalID5: number;
  intervalID6: number;
  intervalID7: number;


  constructor() {
    this.selectedCards = [];
    this.favoriteCard = [];
    this.settingsContainer = document.querySelector('.tree__settings') as HTMLElement;
    this.treeWrapper = document.querySelector('.tree_choice') as HTMLElement;
    this.treeBgWrapper = document.querySelector('.bg_choice') as HTMLElement;
    this.treeLightsWrapper = document.querySelector('.lights_choice') as HTMLElement;
    this.treeMainWrapper = document.querySelector('.tree__main-tree') as HTMLElement;
    this.treeFavoritesWrapper  = document.querySelector('.tree__favorites') as HTMLElement;
    this.canvas = document.createElement('canvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.lightsContainer = document.createElement('div') as HTMLElement;
    this.lightsColor = localStorage.getItem('lightsColor') || LightsColor.yellow_light;

    this.intervalID1 = 0;
    this.intervalID2 = 0;
    this.intervalID3 = 0;
    this.intervalID4 = 0;
    this.intervalID5 = 0;
    this.intervalID6 = 0;
    this.intervalID7 = 0;

    this.treeVariantImgs = [treeVarianImg1, treeVarianImg2, treeVarianImg3, treeVarianImg4, treeVarianImg5, treeVarianImg6];
    this.bgVariantsImgs = [bgVarianImg1, bgVarianImg2, bgVarianImg3, bgVarianImg4, bgVarianImg5, bgVarianImg6, bgVarianImg7, bgVarianImg8, bgVarianImg9, bgVarianImg10];
    this.lightVariants = ['light_multicolor', 'light_red', 'light_blue', 'light_yellow', 'light_green'];
  } 

  renderTreeVariants() {
    this.treeWrapper.innerHTML = '';

    for (let i = 1; i <= 6; i++) {
      const treeVariant: HTMLElement = (document.createElement('div') as HTMLElement);
      treeVariant.className = 'tree__variant setting__item';
      treeVariant.style.backgroundImage = `url("${this.treeVariantImgs[i - 1]}")`;
      treeVariant.addEventListener('click', () => this.chooseTree(i));
      this.treeWrapper.append(treeVariant);
    }
    this.renderBgVariants();
  }

  chooseTree(idx: number): void {
    (document.querySelector('.main-tree') as HTMLImageElement).src = `${this.treeVariantImgs[idx - 1]}`;
    localStorage.setItem('chosenTree', idx.toString());
  }

  renderBgVariants() {
    this.treeBgWrapper.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
      const bgVariant: HTMLElement = document.createElement('div') as HTMLElement;
      bgVariant.className = 'bg__variant setting__item';
      bgVariant.style.backgroundImage = `url("${this.bgVariantsImgs[i - 1]}")`;
      bgVariant.addEventListener('click', () => this.chooseBg(i));
      this.treeBgWrapper.append(bgVariant);
    }

    this.renderLightsVariants();
  }

  chooseBg(idx: number) {
    this.treeMainWrapper.style.backgroundImage = `url(${this.bgVariantsImgs[idx - 1]})`;
    localStorage.setItem('chosenBg', idx.toString());
  }

  renderLightsVariants() {
    const lightsBtnsWrapper = document.createElement('div') as HTMLElement;
    lightsBtnsWrapper.className = 'light__variant_container';
    let isMulticolor: boolean = false;
    if (localStorage.getItem('isMulticolor') === 'true') isMulticolor = true;

    for (let i = 0; i <= 4; i++) {
      const lightVariant = document.createElement('button') as HTMLInputElement;
      lightVariant.className = 'light__variant';
      lightVariant.classList.add(this.lightVariants[i]);
      lightVariant.addEventListener('click', () => {
      
        if (i === 0) {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.clearIntervals();
          isMulticolor = true;
          this.renderLights(this.lightsContainer, LightsColor.red_light, isMulticolor);
          localStorage.setItem('isMulticolor', 'true');
        }

        if (i === 1) {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.lightsColor = LightsColor.red_light;
          this.clearIntervals();
          isMulticolor = false;
          this.renderLights(this.lightsContainer, LightsColor.red_light, isMulticolor);
          localStorage.setItem('lightsColor', LightsColor.red_light);
          localStorage.setItem('isMulticolor', 'false');
        }
        if (i === 2) {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.lightsColor = LightsColor.blue_light;
          this.clearIntervals();
          isMulticolor = false;
          this.renderLights(this.lightsContainer, LightsColor.blue_light, isMulticolor);
          localStorage.setItem('lightsColor', LightsColor.blue_light);
          localStorage.setItem('isMulticolor', 'false');
        }
        if (i === 3) {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.lightsColor = LightsColor.yellow_light;
          this.clearIntervals();
          isMulticolor = false;
          this.renderLights(this.lightsContainer, LightsColor.yellow_light, isMulticolor);
          localStorage.setItem('lightsColor', LightsColor.yellow_light);
          localStorage.setItem('isMulticolor', 'false');
        }
        if (i === 4) {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.lightsColor = LightsColor.green_light;
          this.clearIntervals();
          isMulticolor = false;
          this.renderLights(this.lightsContainer, LightsColor.green_light, isMulticolor);
          localStorage.setItem('lightsColor', LightsColor.green_light);
          localStorage.setItem('isMulticolor', 'false');
        }
      });
      lightsBtnsWrapper.append(lightVariant);
    }

    const switcher = document.createElement('div') as HTMLElement;
    switcher.className = 'lights__switcher';

    const switcherInput = document.createElement('input') as HTMLInputElement;
    switcherInput.type = 'checkbox';
    switcherInput.setAttribute('checked', 'checked');
    switcherInput.className = 'lights__switcher_input';
    switcherInput.setAttribute('id', 'lights__switcher');
    switcherInput.addEventListener('click', () => {
      if (!switcherInput.checked) { 
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      } else {
        const color = localStorage.getItem('lightsColor') || this.lightsColor;
        
        this.renderLights(this.lightsContainer, color, isMulticolor);
      }
    });

    const switcherLabel = document.createElement('label') as HTMLLabelElement;
    switcherLabel.className = 'lights__switcher_label';
    switcherLabel.setAttribute('for', 'lights__switcher');

    const switcherLabelInnerContainer = document.createElement('div') as HTMLElement;
    switcherLabelInnerContainer.className = 'switcher_inner-container';
    const switcherLabelIndicator = document.createElement('div') as HTMLElement;
    switcherLabelIndicator.className = 'switcher_indicator';

    switcherLabel.append(switcherLabelInnerContainer);
    switcherLabel.append(switcherLabelIndicator);

    switcher.append(switcherInput);
    switcher.append(switcherLabel);

    this.treeLightsWrapper.append(lightsBtnsWrapper);
    this.treeLightsWrapper.append(switcher);

    this.renderMainTree();
  }

  clearIntervals() {
    clearInterval(this.intervalID1);
    clearInterval(this.intervalID2);
    clearInterval(this.intervalID3);
    clearInterval(this.intervalID4);
    clearInterval(this.intervalID5);
    clearInterval(this.intervalID6);
    clearInterval(this.intervalID7);
  }

  renderMainTree() {
    let bgUrl = '';
    (localStorage.getItem('chosenBg')) ? bgUrl = `url("${this.bgVariantsImgs[Number(localStorage.getItem('chosenBg')) - 1]}")`
                                       : bgUrl = `url("${this.bgVariantsImgs[0]}")`;
    this.treeMainWrapper.style.backgroundImage = bgUrl;

    this.lightsContainer.className = 'lights__onTree-container';

    const mainTree = document.createElement('img') as HTMLImageElement;
    let mainTreeSrc = '';
    (localStorage.getItem('chosenTree')) ? mainTreeSrc = `${this.treeVariantImgs[Number(localStorage.getItem('chosenTree')) - 1]}`
                                         : mainTreeSrc = `${this.treeVariantImgs[0]}`;
    mainTree.src = mainTreeSrc;
    mainTree.setAttribute('alt', 'tree');
    mainTree.setAttribute('width', '500');
    mainTree.setAttribute('height', '714');
    mainTree.className = 'main-tree';

    this.treeMainWrapper.append(this.lightsContainer);
    this.treeMainWrapper.append(mainTree);

    this.renderSelected();
    this.renderLights(this.lightsContainer, this.lightsColor, true);
  }

  renderSelected() {
    this.selectedCards = JSON.parse(localStorage.getItem('selectedCards') || '[]');

    const favoritesContainer = document.createElement('div') as HTMLElement;
    favoritesContainer.className = 'favorites_container settings__container';
    
    for (let i = 0; i < 20; i++) {
      const favoriteCard = document.createElement('div') as HTMLElement;
      favoriteCard.className = 'favorites__card'; 
      this.favoriteCard.push(favoriteCard);
      favoritesContainer.append(favoriteCard); 
    }

    for (let i = 0; i < this.selectedCards.length; i++) {
      const favoriteCardCount = document.createElement('p') as HTMLElement;
      favoriteCardCount.className = 'favorites__card_count';
      favoriteCardCount.innerHTML = this.selectedCards[i].count.toString();
      
      this.favoriteCard[i].append(favoriteCardCount);

      for (let j = 1; j <= this.selectedCards[i].count; j++) {
        const favoriteCardImg = document.createElement('img') as HTMLImageElement;
        favoriteCardImg.src = `assets/img/${i + 1}.png`;
        favoriteCardImg.className = 'favorites__card_img';
        favoriteCardImg.setAttribute('alt', 'toy');
        favoriteCardImg.setAttribute('width', '70');
        favoriteCardImg.setAttribute('height', '70');
        favoriteCardImg.setAttribute('draggable', 'true');

        this.favoriteCard[i].append(favoriteCardImg);
      }
    }
    
    this.treeFavoritesWrapper.append(favoritesContainer);

    this.renderDecorated();
  }

  renderDecorated() {
    const decoratedTree = document.createElement('div') as HTMLElement;
    decoratedTree.className = 'favorites__decorated settings__container';
    this.treeFavoritesWrapper.append(decoratedTree);

    const decoratedTreeContainer = document.createElement('div') as HTMLElement;
    decoratedTreeContainer.className = 'favorites__decorated_container';
    decoratedTree.append(decoratedTreeContainer);

    for (let i = 0; i < 6; i++) {
      const decoratedTreeVariant = document.createElement('div') as HTMLElement;
      decoratedTreeVariant.className = 'tree_decorated';
      decoratedTreeContainer.append(decoratedTreeVariant);

      const decoratedTreeImg = document.createElement('img') as HTMLImageElement;
      decoratedTreeImg.src = `${this.treeVariantImgs[i]}`;
      decoratedTreeImg.className = 'tree_decorated_img';
      decoratedTreeImg.setAttribute('alt', 'Наряженная ёлка');
      decoratedTreeImg.setAttribute('height', '110');
      decoratedTreeVariant.append(decoratedTreeImg);
    }

    this.renderBtn();
  }

  renderBtn() {
    const bntContainer = document.createElement('div') as HTMLElement;
    bntContainer.className = 'button__container';

    const resetBtn = document.createElement('button') as HTMLElement;
    resetBtn.className = 'button button_small';
    resetBtn.innerHTML = Phrases.reset;
    resetBtn.addEventListener('click', this.resetLocalStorage);

    this.settingsContainer.append(bntContainer);
    bntContainer.append(resetBtn);
  }

  renderLights(container: HTMLElement, color: string, isMulticolor: boolean):void {
    let multicolorArray = [LightsColor.blue_dark, LightsColor.blue_light, LightsColor.green_dark, LightsColor.green_light, LightsColor.red_dark, LightsColor.red_light, LightsColor.yellow_dark, LightsColor.yellow_light];
    let randomNum = 0;

    this.canvas.setAttribute('id', 'canvas');
    this.canvas.width = container.offsetWidth;
    this.canvas.height = container.offsetHeight;
    window.addEventListener('resize', () => {
      this.canvas.width = container.offsetWidth;
      this.canvas.height = container.offsetHeight;
    });
    
    this.intervalID1 = (setInterval(() => { this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); }, 1500) as unknown as number);

    this.intervalID2 = (setInterval(() => {
      for (let i = -2; i < 3; i+=3) {
        this.context.beginPath();  
        this.context.arc(this.canvas.width / 2 + i*15, 170-Math.pow(i,2), 5, 0, 2 * Math.PI);
        this.context.stroke();

        if (isMulticolor) {
          randomNum = this.getRandomNum(0, multicolorArray.length);
          color = multicolorArray[randomNum];
        }
        this.setContext(this.context, color);      
      }
    }, 300) as unknown as number);

    this.intervalID3 = (setInterval(() => {
      for (let i = -3; i < 5; i+=3) {
        this.context.beginPath();  
        this.context.arc(this.canvas.width / 2 + i*15, 250-Math.pow(i,2), 5, 0, 2 * Math.PI);
        this.context.stroke();

        if (isMulticolor) {
          randomNum = this.getRandomNum(0, multicolorArray.length);
          color = multicolorArray[randomNum];
        }
        this.setContext(this.context, color);
      }
    }, 500) as unknown as number);

    this.intervalID4 = (setInterval(() => {
      for (let i = -5; i < 7; i+=3) {
        this.context.beginPath();  
        this.context.arc(this.canvas.width / 2 + i*15, 350-Math.pow(i,2), 5, 0, 2 * Math.PI);
        this.context.stroke();

        if (isMulticolor) {
          randomNum = this.getRandomNum(0, multicolorArray.length);
          color = multicolorArray[randomNum];
        }
        this.setContext(this.context, color);
      }
    }, 400)as unknown as number);


    this.intervalID5 = (setInterval(() => {
      for (let i = -6; i < 9; i+=3) {
        this.context.beginPath();  
        this.context.arc(this.canvas.width / 2 + i*15, 450-Math.pow(i,2), 5, 0, 2 * Math.PI);
        this.context.stroke();

        if (isMulticolor) {
          randomNum = this.getRandomNum(0, multicolorArray.length);
          color = multicolorArray[randomNum];
        }
        this.setContext(this.context, color);
      }
    }, 200) as unknown as number);

    this.intervalID6 = (setInterval(() => {
      for (let i = -8; i < 10; i+=3) {
        this.context.beginPath();  
        this.context.arc(this.canvas.width / 2 + i*15, 550-Math.pow(i,2), 5, 0, 2 * Math.PI);
        this.context.stroke();

        if (isMulticolor) {
          randomNum = this.getRandomNum(0, multicolorArray.length);
          color = multicolorArray[randomNum];
        }
        this.setContext(this.context, color);
      }
    }, 300) as unknown as number);

    this.intervalID7 = (setInterval(() => {
      for (let i = -10; i < 13; i+=3) {
        this.context.beginPath();  
        this.context.arc(this.canvas.width / 2 + i*15, 650-Math.pow(i,2), 5, 0, 2 * Math.PI);
        this.context.stroke();

        if (isMulticolor) {
          randomNum = this.getRandomNum(0, multicolorArray.length);
          color = multicolorArray[randomNum];
        }
        this.setContext(this.context, color);
      }
    }, 400) as unknown as number);

    container.append(this.canvas);
  }

  setContext(ctx: CanvasRenderingContext2D, color: string) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.fill();
  }

  resetLocalStorage() {
    localStorage.removeItem('chosenTree');
    localStorage.removeItem('chosenBg');
    localStorage.removeItem('music');
    localStorage.removeItem('snow');
    localStorage.removeItem('lightsColor');
  }

  getRandomNum(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
}
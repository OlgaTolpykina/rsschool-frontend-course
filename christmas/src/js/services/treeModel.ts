import { ICardData } from './types';
import { Phrases } from './constants';

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
  settingsComtainer: HTMLElement;


  constructor() {
    this.selectedCards = [];
    this.favoriteCard = [];
    this.settingsComtainer = document.querySelector('.tree__settings') as HTMLElement;
    this.treeWrapper = document.querySelector('.tree_choice') as HTMLElement;
    this.treeBgWrapper = document.querySelector('.bg_choice') as HTMLElement;
    this.treeLightsWrapper = document.querySelector('.lights_choice') as HTMLElement;
    this.treeMainWrapper = document.querySelector('.tree__main-tree') as HTMLElement;
    this.treeFavoritesWrapper  = document.querySelector('.tree__favorites') as HTMLElement;

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

    for (let i = 0; i <= 4; i++) {
      const lightVariant = document.createElement('button') as HTMLInputElement;
      lightVariant.className = 'light__variant';
      lightVariant.classList.add(this.lightVariants[i]);
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

  renderMainTree() {
    let bgUrl = '';
    (localStorage.getItem('chosenBg')) ? bgUrl = `url("${this.bgVariantsImgs[Number(localStorage.getItem('chosenBg')) - 1]}")`
                                       : bgUrl = `url("${this.bgVariantsImgs[0]}")`;
    this.treeMainWrapper.style.backgroundImage = bgUrl;

    const lightsContainer = document.createElement('div') as HTMLElement;
    lightsContainer.className = 'lights__onTree-container';

    const mainTree = document.createElement('img') as HTMLImageElement;
    let mainTreeSrc = '';
    (localStorage.getItem('chosenTree')) ? mainTreeSrc = `${this.treeVariantImgs[Number(localStorage.getItem('chosenTree')) - 1]}`
                                         : mainTreeSrc = `${this.treeVariantImgs[0]}`;
    mainTree.src = mainTreeSrc;
    mainTree.setAttribute('alt', 'tree');
    mainTree.setAttribute('width', '500');
    mainTree.setAttribute('height', '714');
    mainTree.className = 'main-tree';

    this.treeMainWrapper.append(lightsContainer);
    this.treeMainWrapper.append(mainTree);

    this.renderSelected();
    this.renderLights(lightsContainer);
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

    this.settingsComtainer.append(bntContainer);
    bntContainer.append(resetBtn);
  }

  renderLights(container: HTMLElement):void {
    const canvas = document.createElement('canvas') as HTMLCanvasElement;
    canvas.setAttribute('id', 'first');
    canvas.width = 500;
    canvas.height = 714;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    
    for (let i = -3; i < 5; i+=3) {
      ctx.beginPath();  
      ctx.arc(250+i*15, 170-Math.pow(i,2), 5, 0, 2 * Math.PI);
      ctx.stroke();

      this.setContext(ctx);
    }

    for (let i = -5; i < 7; i+=3) {
      ctx.beginPath();  
      ctx.arc(250+i*15, 250-Math.pow(i,2), 5, 0, 2 * Math.PI);
      ctx.stroke();

      this.setContext(ctx);
    }

    for (let i = -7; i < 9; i+=3) {
      ctx.beginPath();  
      ctx.arc(250+i*15, 350-Math.pow(i,2), 5, 0, 2 * Math.PI);
      ctx.stroke();

      this.setContext(ctx);
    }

    for (let i = -8; i < 10; i+=3) {
      ctx.beginPath();  
      ctx.arc(250+i*15, 450-Math.pow(i,2), 5, 0, 2 * Math.PI);
      ctx.stroke();

      this.setContext(ctx);
    }

    for (let i = -10; i < 12; i+=3) {
      ctx.beginPath();  
      ctx.arc(250+i*15, 550-Math.pow(i,2), 5, 0, 2 * Math.PI);
      ctx.stroke();

      this.setContext(ctx);
    }

    for (let i = -11; i < 14; i+=3) {
      ctx.beginPath();  
      ctx.arc(250+i*15, 650-Math.pow(i,2), 5, 0, 2 * Math.PI);
      ctx.stroke();

      this.setContext(ctx);
    }

    container.append(canvas);
  }

  setContext(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#FDD700';
    ctx.strokeStyle = '#FDD700';
    ctx.shadowColor = '#FDD700';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.fill();
  }

  // animateColorChanging(container: HTMLElement, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, color1: string, color2: string) {
  //   const colors: Array<string> = [color1, color2];
  //   context.clearRect(0, 0, canvas.width, canvas.height);

  //   for (let j = 0; j < colors.length; j++) {
  //     for (let i = -20; i < 20; i+=2) {
  //       context.beginPath();  
  //       context.arc(65+i*10, 65-Math.pow(i,2), 5, 0.5, 2 * Math.PI);
  //       context.fillStyle = `${colors[j]}`;
  //       context.strokeStyle = `${colors[j]}`;
  //       context.shadowColor = `${colors[j]}`;
  //       context.shadowBlur = 10;
  //       context.shadowOffsetX = 5;
  //       context.shadowOffsetY = 5;
  //       context.fill();
  //       context.stroke();
  
  //       container.append(canvas);
  //     }
  //   }
  // }

  resetLocalStorage() {
    localStorage.removeItem('chosenTree');
    localStorage.removeItem('chosenBg');
    localStorage.removeItem('music');
    localStorage.removeItem('snow');
    localStorage.removeItem('light');
  }
}
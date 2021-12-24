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


  constructor () {
    this.treeWrapper = document.querySelector('.tree_choice') as HTMLElement;
    this.treeBgWrapper = document.querySelector('.bg_choice') as HTMLElement;
    this.treeLightsWrapper = document.querySelector('.lights_choice') as HTMLElement;
    this.treeMainWrapper = document.querySelector('.tree__main-tree') as HTMLElement;

    this.treeVariantImgs = [treeVarianImg1, treeVarianImg2, treeVarianImg3, treeVarianImg4, treeVarianImg5, treeVarianImg6];
    this.bgVariantsImgs = [bgVarianImg1, bgVarianImg2, bgVarianImg3, bgVarianImg4, bgVarianImg5, bgVarianImg6, bgVarianImg7, bgVarianImg8, bgVarianImg9, bgVarianImg10];
    this.lightVariants = ['light_multicolor', 'light_red', 'light_blue', 'light_yellow', 'light_green'];
  } 

  renderTreeVariants() {
    this.treeWrapper.innerHTML = '';

    for (let i = 1; i <= 6; i++) {
      const treeVariant: HTMLElement = (document.createElement('div') as HTMLElement);
      treeVariant.className = 'tree__variant setting__item';
      treeVariant.style.backgroundImage = `url("${this.treeVariantImgs[i-1]}")`;
      treeVariant.addEventListener('click', () => this.chooseTree(i));
      this.treeWrapper.append(treeVariant);
    }
    this.renderBgVariants();
  }

  chooseTree(idx: number): void {
    (document.querySelector('.main-tree') as HTMLImageElement).src = `${this.treeVariantImgs[idx-1]}`;
    localStorage.setItem('chosenTree', idx.toString());
  }

  renderBgVariants() {
    this.treeBgWrapper.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
      const bgVariant: HTMLElement = document.createElement('div') as HTMLElement;
      bgVariant.className = 'bg__variant setting__item';
      bgVariant.style.backgroundImage = `url("${this.bgVariantsImgs[i-1]}")`;
      bgVariant.addEventListener('click', () => this.chooseBg(i));
      this.treeBgWrapper.append(bgVariant);
    }

    this.renderLightsVariants();
  }

  chooseBg(idx: number) {
    this.treeMainWrapper.style.backgroundImage = `url(${this.bgVariantsImgs[idx-1]})`;
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
    switcherInput.setAttribute('id', 'lights__switcher')
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
    const lightsContainer = document.createElement('div') as HTMLElement;
    lightsContainer.className = 'lights__onTree-container';

    const mainTree = document.createElement('img') as HTMLImageElement;
    mainTree.src = `${this.treeVariantImgs[0]}`;
    mainTree.setAttribute('alt', 'tree');
    mainTree.setAttribute('width', '500');
    mainTree.setAttribute('height', '714');
    mainTree.className = 'main-tree';

    this.treeMainWrapper.append(lightsContainer);
    this.treeMainWrapper.append(mainTree);
  }
}
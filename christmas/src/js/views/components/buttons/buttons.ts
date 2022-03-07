import buttonTemplate from "./template";

class Buttons {
  private rootNode: HTMLElement;

  constructor() {
    this.rootNode = <HTMLElement>document.createElement('div');
    this.rootNode.className = 'button__container';
  }

  public getTemplate(buttons: Array<string>, dataAttr: Array<string>, handleButtonClick: (e: Event) => void): HTMLElement {
    this.rootNode.textContent = '';
    buttons.forEach((button, idx) => {
      this.rootNode.insertAdjacentHTML('afterbegin', buttonTemplate(button, dataAttr[idx]));
    });
    this.rootNode.onclick = (e: Event) => handleButtonClick(e);
    return this.rootNode;
  }
}

export default new Buttons();
import headerTemplate from "./template";

class Header {
  private rootNode: HTMLElement;

  constructor() {
    this.rootNode = document.createElement('header');
    this.rootNode.className = 'header';
  }

  public getTemplate(withContents: boolean, isSearchNeeded?: boolean, handleSearchFieldChange?: (e: Event) => void, handleSearchFieldClearance?: (e: Event) => void, favoritesNumber?: number): HTMLElement {
    this.rootNode.textContent = '';
    if (withContents) {
      this.rootNode.insertAdjacentHTML('afterbegin', headerTemplate(isSearchNeeded, favoritesNumber));
    }
    if (handleSearchFieldChange) {
      this.rootNode.onchange = (e: Event) => handleSearchFieldChange!(e);
    }
    if (handleSearchFieldClearance) {
      this.rootNode.onclick = (e: Event) => handleSearchFieldClearance!(e);
    }
    return this.rootNode;
  }
}

export default new Header();

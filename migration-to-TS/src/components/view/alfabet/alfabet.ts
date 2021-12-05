import './alfabet.css';

class Alfabet {
  range(size: number, startAt = 0): ReadonlyArray<number> {
    return [...Array(size).keys()].map((i) => i + startAt);
  }

  characterRange(startChar: string, endChar: string): Readonly<string> {
    return String.fromCharCode(
      ...this.range(endChar.charCodeAt(0) - startChar.charCodeAt(0) + 1, startChar.charCodeAt(0))
    );
  }

  draw(): void {
    const alfabet: Array<string> = this.characterRange('A', 'Z').split('');

    const alfabetContainer: HTMLElement = document.querySelector('.alfabet') as HTMLElement;
    alfabetContainer.innerHTML = '';

    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#alfabetItemTemp') as HTMLTemplateElement;

    alfabet.forEach((item: string) => {
      const sourceClone: HTMLTemplateElement = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
      (sourceClone.querySelector('.alfabet__item-name') as HTMLTemplateElement).textContent = item;

      fragment.append(sourceClone);
    });

    (document.querySelector('.alfabet') as HTMLElement).append(fragment);
  }
}

export default Alfabet;

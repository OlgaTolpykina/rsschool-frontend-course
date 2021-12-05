import './sources.css';
import { ISource } from '../appView';

class Sources {
  draw(data: ISource[], letter: string): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
    const sourceContainer: HTMLElement = document.querySelector('.sources') as HTMLElement;
    sourceContainer.innerHTML = '';

    data.forEach((item: ISource) => {
      if (item.name.split('')[0] == letter) {
        // Сюда надо передавать содержание кнопки алфавита, по которой кликнули. А - по дефолту
        const sourceClone: HTMLTemplateElement = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

        (sourceClone.querySelector('.source__item-name') as HTMLTemplateElement).textContent = item.name;
        (sourceClone.querySelector('.source__item') as HTMLTemplateElement).setAttribute('data-source-id', item.id);

        fragment.append(sourceClone);
      }
    });

    (document.querySelector('.sources') as HTMLElement).append(fragment);
  }
}

export default Sources;

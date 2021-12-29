import { IDrag, IPosition, Coords, IAvatar } from '../../services/types';
import { Drag } from '../../services/constants';

export class DragManager {
  [x: string]: any; //eslint-disable-line
  id!: string;

  constructor() {

  }

  onDragStart(event: DragEvent) {
    (event.dataTransfer as DataTransfer).setData('id', this.id);
    const draggedItem = this;
  }
  
  onDragEnd(event: DragEvent) {
    // console.log('dragend');
  }

  onDrag(event: DragEvent) {
    // console.log('drag');
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    console.log('dragenter');
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    console.log('dragover');
  }
  
  onDragLeave(event: DragEvent) {
    console.log(event);
  }

  onDrop(event: DragEvent) {
    const dragFlag = (event.dataTransfer as DataTransfer).getData('id');
    const dragItem = document.getElementById(dragFlag) as HTMLElement;

    const shiftX = dragItem.getBoundingClientRect().width / 2;
    const shiftY = dragItem.getBoundingClientRect().height * 2;

    const positionX = event.clientX - shiftX;
    const positionY = event.clientY - shiftY;

    const mainTree = document.querySelector('.main-tree');

    dragItem.style.left = positionX + 'px';
    dragItem.style.top = positionY + 'px';

    if (parseInt((dragItem.parentNode?.firstChild as HTMLElement).innerHTML) > 0) {
       let count = parseInt((dragItem.parentNode?.firstChild as HTMLElement).innerHTML);
      (dragItem.parentNode?.firstChild as HTMLElement).innerHTML = (count - 1).toString();  
    }

    console.log(event);
    
    this.append(dragItem);
  }

}

// export class DragManager implements IDrag {
//   onDragCancel: any; // eslint-disable-line
//   onDragEnd: any; //eslint-disable-line
//   element: HTMLImageElement;
//   downX: number;
//   downY: number;
//   shiftX: number;
//   shiftY: number;
//   initialPosition: IPosition;

//   constructor() {
//     this.element = document.querySelector('.draggable') as HTMLImageElement;
//     this.downX = 0;
//     this.downY = 0;
//     this.shiftX = 0;
//     this.shiftY = 0;
//     this.initialPosition = {
//       parent: this.element.parentNode,
//       nextSibling: this.element.nextSibling,
//       position: this.element.style.position || '',
//       left: this.element.style.left || '',
//       top: this.element.style.top || '',
//       zIndex: this.element.style.zIndex || ''
//     };
//   }
  
//   onMouseDown(e: MouseEvent) {
//     const element = (e.target as HTMLImageElement).closest('.draggable') as HTMLImageElement;

//     if (!element) return;
//     this.element = element;

//     this.downX = e.pageX;
//     this.downY = e.pageY;

//     // this.initialPosition.position = this

//     console.log(element);
//   }

//   onMouseMove(e: MouseEvent): boolean | undefined {
//     if (!this.element) return false;

//     const moveX = e.pageX - (this.downX as number);
//     const moveY = e.pageY - (this.downY as number);
//     if ( Math.abs(moveX) < Drag.minDistance && Math.abs(moveY) < Drag.minDistance ) {
//       console.log('1');
//       return; 
//     }

//     const coords: Coords = this.getCoords(this.element);
//     this.shiftX = (this.downX as number) - coords.left;
//     this.shiftY = (this.downY as number) - coords.top;

//     this.startDrag(e);

//     this.element.style.left = e.pageX - (this.shiftX as number) + 'px';
//     this.element.style.top = e.pageY - (this.shiftY as number) + 'px';

//     return false;
//   }

//   onMouseUp(e: MouseEvent): void {
//     console.log('mouseup');
//     if (this.element) {
//       this.finishDrag(e);
//     }
//   }

//   startDrag(e: Event): void {
//     document.body.appendChild(this.element);
//     this.element.style.zIndex = '9999';
//     this.element.style.position = 'absolute';;
//   }

//   returnBack():void {
//     (this.initialPosition.parent as HTMLElement).append(this.element);
//     this.element.style.position = this.initialPosition.position;
//     this.element.style.left = this.initialPosition.left;
//     this.element.style.top = this.initialPosition.top;
//     this.element.style.zIndex = this.initialPosition.zIndex
//   }

//   finishDrag(e: MouseEvent): void {
//     const dropElem = this.findDroppable(e);

//     console.log(dropElem);

//     if (!dropElem) {
//       this.returnBack();
//     } else {
//       dropElem.append(this.element as HTMLElement);
//     }
//   }

//   findDroppable(e: MouseEvent): HTMLElement | null {
//     (this.element as HTMLElement).hidden = true;

//     const elem = document.elementFromPoint(e.clientX, e.clientY);
//     (this.element as HTMLElement).hidden = false;

//     if (elem == null) {
//       return null;
//     }

//     return elem.closest('.droppable');
//   }

//   getCoords(element: HTMLElement): Coords {
//     const box = element.getBoundingClientRect();

//     return {
//     top: box.top + scrollY,
//     left: box.left + scrollX,
//     };
//   }

// }
export class DragManager {
  [x: string]: any; //eslint-disable-line
  id!: string;

  onDragStart(event: DragEvent) {
    (event.dataTransfer as DataTransfer).setData('id', this.id);
  }
  
  onDragEnd(event: DragEvent) {
  }

  onDrag(event: DragEvent) {
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
       const count = parseInt((dragItem.parentNode?.firstChild as HTMLElement).innerHTML);
      (dragItem.parentNode?.firstChild as HTMLElement).innerHTML = (count - 1).toString();  
    }

    console.log(event);
    
    this.append(dragItem);
  }

}

const dragItems: NodeListOf<HTMLImageElement> = document.querySelectorAll('.draggable') as NodeListOf<HTMLImageElement>;
const dropZone: NodeListOf<HTMLImageElement> = document.querySelectorAll('.droppable');
const treePageContainer: HTMLElement = document.querySelector('.tree__wrapper') as HTMLElement;
 
dragItems.forEach((dragItem) => {
  dragItem.addEventListener('dragstart', handlerDragStart);
  dragItem.addEventListener('dragend', handlerDragEnd);
  dragItem.addEventListener('drag', handlerDrag);
});

function handlerDragStart(this: HTMLImageElement, event: DragEvent) {
  console.log(this);
}

function handlerDragEnd(this: HTMLImageElement, event: DragEvent) {
  console.log(this);
}

function handlerDrag(this: HTMLImageElement, event: DragEvent) {
  console.log('drag');
}    



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
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
  
  onDragLeave(event: DragEvent) {
  }

  onDrop(event: DragEvent) {
    const dragFlag = (event.dataTransfer as DataTransfer).getData('id');
    const dragItem = document.getElementById(dragFlag) as HTMLImageElement;
    const areaZone = document.querySelector('area');
    const favoritesCards = document.querySelectorAll('.favorites__card');
    const favoritesCardNumber = parseInt(dragItem.id.split('_')[0]);
    let count = (dragItem.parentNode?.firstChild as HTMLElement).innerHTML as string;
    let countNew = (favoritesCards[favoritesCardNumber].firstChild as HTMLElement).innerHTML as string;
    const dragItemNumber = parseInt(dragItem.src.split('/')[5].split('.')[0]);
    const allCards = JSON.parse(localStorage.getItem('initialCardsListInfo') as string);
    const dragItemCount = allCards[dragItemNumber - 1].count;

    if (event.target === areaZone) {
      const shiftX = dragItem.getBoundingClientRect().width / 2;
      const shiftY = dragItem.getBoundingClientRect().height * 2;

      const positionX = event.clientX - shiftX;
      const positionY = event.clientY - shiftY;

      dragItem.style.left = positionX + 'px';
      dragItem.style.top = positionY + 'px';

      if (parseInt((dragItem.parentNode?.firstChild as HTMLElement).innerHTML) > 0) {
        (dragItem.parentNode?.firstChild as HTMLElement).innerHTML = (parseInt(count) - 1).toString();  
      }

      (event.target as HTMLAreaElement).append(dragItem);
    } else {
      dragItem.style.left = '0px';
      dragItem.style.top = '0px';
      if (parseInt(countNew) < dragItemCount) {
        (favoritesCards[favoritesCardNumber].firstChild as HTMLElement).innerHTML = (parseInt(countNew) + 1).toString();
      }
      favoritesCards[favoritesCardNumber].append(dragItem);
    }
  }

}

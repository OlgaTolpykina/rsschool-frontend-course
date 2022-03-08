import loadData from "./loadData";

class DragManager {

  static dragStartHandler(ev: DragEvent): void {
    (ev.dataTransfer!).setData("id", (<HTMLElement>ev.target).id);
  }

  static dragOverHandler(ev: DragEvent): void {
    ev.preventDefault();
    (<DataTransfer>ev.dataTransfer).dropEffect = "move";
  }

  static async dropHandler(ev: DragEvent): Promise<void> {
    ev.preventDefault();
    const dragFlag = (<DataTransfer>ev.dataTransfer).getData('id');
    const dragItem = <HTMLElement>document.getElementById(dragFlag);
    if (dragItem) { 
      const areaZone = document.querySelector('area');
      const dropZone = <HTMLElement>ev.target;
      const favoritesCards = document.querySelectorAll('.favorites__card');
      const favoritesCardNumber = parseInt(dragItem.id.split('_')[0]);
      const toysNumberElement = (<HTMLElement>(<HTMLElement>dragItem.parentNode).firstChild)  
      const count = toysNumberElement.innerHTML;
      const countNew = (<HTMLElement>favoritesCards[favoritesCardNumber].firstChild).innerHTML; 
      const dragItemNumber = parseInt(<string>dragItem.dataset.count);
      const allCards = await loadData.build();
      const dragItemCount = allCards[dragItemNumber - 1].count;
      
      if (dropZone === areaZone) {
        const shiftX = dragItem.getBoundingClientRect().width / 2;
        const shiftY = dragItem.getBoundingClientRect().height * 2;

        const positionX = ev.clientX - shiftX;
        const positionY = ev.clientY - shiftY;
        
        dragItem.style.left = positionX + 'px';
        dragItem.style.top = positionY + 'px';
        
        if (parseInt(toysNumberElement.innerHTML) > 0) {
          toysNumberElement.innerHTML = (parseInt(count) - 1).toString();  
        }
        
        dropZone.append(dragItem);
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
}

export default DragManager;
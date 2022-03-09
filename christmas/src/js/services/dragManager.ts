import loadData from './loadData';
import storageManager from './storageManager';
import { IToyCoords } from './types';

class DragManager {
    public dragStartHandler(ev: DragEvent): void {
        (<DataTransfer>ev.dataTransfer).setData('id', (<HTMLElement>ev.target).id);
    }

    public dragOverHandler(ev: DragEvent): void {
        ev.preventDefault();
        (<DataTransfer>ev.dataTransfer).dropEffect = 'move';
    }

    public async dropHandler(ev: DragEvent): Promise<void> {
        ev.preventDefault();
        const dragFlag = (<DataTransfer>ev.dataTransfer).getData('id');
        const dragItem = <HTMLElement>document.getElementById(dragFlag);
        if (dragItem) {
            const areaZone = document.querySelector('area');
            const dropZone = <HTMLElement>ev.target;
            const favoritesCards = document.querySelectorAll('.favorites__card');
            const favoritesCardNumber = parseInt(dragItem.id.split('_')[0]);
            const toysNumberElement = <HTMLElement>(<HTMLElement>dragItem.parentNode).firstChild;
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
                this.saveToysCoords(dragItem.id, dragItem.style.left, dragItem.style.top, toysNumberElement.innerHTML);
            } else {
                dragItem.style.left = '0px';
                dragItem.style.top = '0px';

                if (parseInt(countNew) < dragItemCount) {
                    (favoritesCards[favoritesCardNumber].firstChild as HTMLElement).innerHTML = (
                        parseInt(countNew) + 1
                    ).toString();
                }
                favoritesCards[favoritesCardNumber].append(dragItem);
                this.deleteToyCoords(dragItem.id);
            }
        }
    }

    private saveToysCoords(id: string, left: string, top: string, count: string): void {
        const toysCoords: IToyCoords = storageManager.getItem('toysCoords', 'local') || {};
        toysCoords[id] = { left: left, top: top, count: count };
        storageManager.addItem('toysCoords', toysCoords, 'local');
    }

    private deleteToyCoords(id: string): void {
        const toysCoords: IToyCoords = storageManager.getItem('toysCoords', 'local') || {};
        console.log(toysCoords[id]);
        delete toysCoords[id];
        storageManager.addItem('toysCoords', toysCoords, 'local');
    }
}

export default new DragManager();

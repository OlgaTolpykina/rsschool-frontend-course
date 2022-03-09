import buttonTemplate from './template';

class Buttons {
    private rootNode: HTMLElement;

    constructor() {
        this.rootNode = <HTMLElement>document.createElement('div');
        this.rootNode.className = 'button__container';
    }

    public getTemplate(
        buttons: Array<string>,
        dataAttr: Array<string>,
        handleButtonClick: (e: Event) => void
    ): HTMLElement {
        this.rootNode.textContent = '';
        buttons.forEach((button, idx) => {
            this.rootNode.insertAdjacentHTML('afterbegin', buttonTemplate(button, dataAttr[idx]));
        });
        this.rootNode.onclick = (e: Event) => handleButtonClick(e);
        // this.rootNode.addEventListener('click', this.createRipple);
        return this.rootNode;
    }

    // private createRipple(e: MouseEvent): void {
    //     const button = <HTMLElement>e.target;
    //     const circle = document.createElement("span");
    //     const diameter = Math.max(button.clientWidth, button.clientHeight);
    //     const radius = diameter / 2;
    //     circle.style.width = circle.style.height = `${diameter}px`;
    //     circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
    //     circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
    //     circle.classList.add("ripple");

    //     const ripple = button.getElementsByClassName("ripple")[0];
    //     if (ripple) {
    //         ripple.remove();
    //     }

    //     button.appendChild(circle);
    // }
}

export default new Buttons();

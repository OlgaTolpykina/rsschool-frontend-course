class AnimationManager {
  public init(): void {
    const buttons = <NodeListOf<HTMLElement>>document.querySelectorAll('[data-type=button]');
    if (buttons) {
      buttons.forEach((btn) => {
        btn.addEventListener('click', this.createRipple);
      });
    }
  }

  private createRipple(e: MouseEvent): void {
    const button = <HTMLElement>e.target;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.append(circle);
  }
}

export default new AnimationManager();

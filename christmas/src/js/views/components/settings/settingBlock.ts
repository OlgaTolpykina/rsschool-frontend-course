
class SettingBlock {

  static getTemplate(classText: string, type: string, optionsNumber: number, optionClass: string): HTMLElement {
    const wrapper = <HTMLElement>document.createElement('div');
    wrapper.className = 'settings__container';
    wrapper.textContent = '';
    wrapper.classList.add(classText);
    const ext = (type === 'tree') ? 'png' : 'jpg';

    for (let i = 0; i < optionsNumber; i++) {
      const variant = <HTMLElement>document.createElement('div');
      variant.className = `${optionClass} setting__item`;
      if (type !== '') {
        variant.style.backgroundImage = `url("./assets/img/${type}${i + 1}.${ext}")`;
      }
      wrapper.append(variant);
    };

    return wrapper;
  }

  static getLightsVariantsTemplate(lightVariants: Array<string>): HTMLElement {
    const wrapper = <HTMLElement>document.createElement('div');
    wrapper.className = 'lights_choice settings__container';
    wrapper.textContent = '';
    const lightButtonsWrapper = <HTMLElement>document.createElement('div');
    lightButtonsWrapper.className = 'light__variant_container';
    for (let i = 0; i <= 4; i++) {
        const lightVariant = <HTMLInputElement>document.createElement('button');
        lightVariant.className = 'light__variant';
        lightVariant.classList.add(lightVariants[i]);
        lightButtonsWrapper.append(lightVariant);
    }
    wrapper.append(lightButtonsWrapper);
    return wrapper;
  }
} 

export default SettingBlock;
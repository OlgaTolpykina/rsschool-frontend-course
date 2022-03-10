import treePageModel from './treePageModel';
import treePageView from './treePageView';
import settingsManager from '../../../services/settingsManager';
import animationManager from '../../../services/animationManager';

class TreePageController {
  private model: typeof treePageModel;
  private view: typeof treePageView;
  private treeVariant: string;
  private bgVariant: string;

  constructor() {
    this.model = treePageModel;
    this.view = treePageView;
    this.treeVariant = 'tree1';
    this.bgVariant = 'bg1';
  }

  public async createPage(): Promise<void> {
    const cards = await this.model.getData();
    this.treeVariant = this.model.getVariant('tree') ? this.model.getVariant('tree') : 'tree1';
    this.bgVariant = this.model.getVariant('bg') ? this.model.getVariant('bg') : 'bg1';
    this.view.render(
      this.treeVariant,
      this.bgVariant,
      cards,
      this.handleVariantChoice.bind(this),
      this.handleButtonClick.bind(this)
    );
    settingsManager.init();
    animationManager.init();
  }

  handleVariantChoice(e: Event): void {
    const clickedElement = <HTMLElement>e.target;
    const type = <string>clickedElement.dataset.name;
    const variant = <string>clickedElement.dataset.value;
    if (type === 'tree') this.treeVariant = variant;
    if (type === 'bg') this.bgVariant = variant;
    this.model.saveVariant(type, variant);
    this.createPage();
  }

  private handleButtonClick(): void {
    this.model.clearLS();
    this.createPage();
  }
}

export default new TreePageController();

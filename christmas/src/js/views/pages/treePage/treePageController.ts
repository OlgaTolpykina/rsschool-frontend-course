import treePageModel from "./treePageModel";
import treePageView from "./treePageView";
import settingsManager from "../../../services/settingsManager";

class TreePageController {
  model: typeof treePageModel;
  view: typeof treePageView;

  constructor() {
    this.model = treePageModel;
    this.view = treePageView;
  }

  public createPage(): void {
    this.view.render();
    settingsManager.init();
  }
}

export default new TreePageController();
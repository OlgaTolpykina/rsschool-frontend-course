import HomePageView from "./homePageView";


export default class HomePageController {
  private view: HomePageView;

  constructor() {
    this.view = new HomePageView();
  }

  public createPage(): void {
    this.view.render();
  }
}
import AppController from '../controller/controller';
import { AppView, IArticle, ISource } from '../view/appView';

class App {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: MouseEvent) =>
      this.controller.getNews(e, (data?: { articles: IArticle[] }) => this.view.drawNews(data))
    );
    this.controller.getSources((data?: { sources: ISource[] }) => this.view.drawSources(data));
  }
}

export default App;

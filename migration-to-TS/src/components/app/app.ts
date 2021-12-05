import AppController from '../controller/controller';
import Alfabet from '../view/alfabet/alfabet';
import { AppView, IData } from '../view/appView';
import Sources from '../view/sources/sources';

class App {
  private controller: AppController;
  private view: AppView;
  private alfabet: Alfabet;
  private sources: Sources;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.alfabet = new Alfabet();
    this.sources = new Sources();
  }

  start(): void {
    (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: MouseEvent) =>
      this.controller.getNews(e, (data: IData) => this.view.drawNews(data))
    );
    this.alfabet.draw();
    this.controller.getSources((data: IData, letter = 'A') => this.view.drawSources(data, letter));
    (document.querySelector('.alfabet') as HTMLElement).addEventListener('click', (e: MouseEvent) =>
      this.controller.getSources((data: IData, letter: string = (e.target as HTMLElement).innerHTML) =>
        this.view.drawSources(data, letter)
      )
    );
  }
}

export default App;

import AppController from '../controller/controller';
import { AppView, IArticle, ISource } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document
            .querySelector('.sources') as HTMLElement)
            .addEventListener('click', (e) => this.controller.getNews(e, (data: {articles: Array<IArticle>}) => this.view.drawNews(data)));
        this.controller.getSources((data: {sources: Array<ISource>}) => this.view.drawSources(data));
    }
}

export default App;

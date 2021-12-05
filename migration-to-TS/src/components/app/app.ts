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

console.log(
    `Согласно самооценке выполнены все пункты задания: 150/150. Буду благодарна за обратную связь, особенно в случае ошибок, 
     с Typescript работала впервые.

     [1] Репозиторий +20
         (PR в соответствии с требованиями, коммиты в соответствии с требованиями)
     [2] Качество кода +80
         (приложение полностью смигрировано на TS, все протипизировано
          используются различные возможности TS: Everyday Types, Generics, Object Types и тд
          ESLint настроен, ошибки отсутствуют
          Webpack настроен и работает)
     [3] Оформление и функционал приложения +20
          (адаптив присутствует, доп функционал - возможность отфильтровать источники новостей в соответствии с алфавитом).`
);

export default App;

import AppLoader from './appLoader';
import { IData } from '../view/appView';
import { Endpoints, CallbackType } from './loader';

class AppController extends AppLoader {
  getSources(callback: CallbackType<IData>): void {
    super.getResp(
      {
        endpoint: Endpoints.getSources,
      },

      callback
    );
  }

  getNews(e: Event, callback: CallbackType<IData>): void {
    let target: HTMLElement = e.target as HTMLElement;
    const newsContainer: HTMLElement = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId: string = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: Endpoints.getNews,
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;

import Loader from './loader';

class AppLoader extends Loader<string> {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: '37f462e2880c4ccfb439e0c9d9dbc773', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;

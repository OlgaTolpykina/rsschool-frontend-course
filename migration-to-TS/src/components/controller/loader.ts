import { IData } from '../view/appView';

type ObjectDictionary<T> = { [key: string]: T };
enum Methods {
  GET = 'GET',
  POST = 'POST',
}

export enum Endpoints {
  getSources = 'sources',
  getNews = 'everything',
}

export type CallbackType<T> = (data: T) => void;
class Loader<T> {
  readonly baseLink;
  readonly options;

  constructor(baseLink: T, options: ObjectDictionary<T>) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options }: { endpoint: Endpoints; options?: Record<string, T> },
    callback: CallbackType<IData> = () => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load(Methods.GET, endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: ObjectDictionary<T>, endpoint: Endpoints): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: Methods, endpoint: Endpoints, callback: CallbackType<IData>, options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: IData) => callback(data))
      .catch((err: Response) => console.error(err));
  }
}

export default Loader;

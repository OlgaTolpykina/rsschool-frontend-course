type ObjectDictionary = { [key: string]: string };
enum Methods {
    GET = 'GET',
    POST = 'POST'
}

export enum Endpoints {
    getSources = 'sources',
    getNews = 'everything'
}


class Loader {
  readonly baseLink;
  readonly options;

  constructor(baseLink: string, options: ObjectDictionary) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options }: {endpoint: Endpoints, options?: Record<string, string>},
    callback = (): void => {
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

  makeUrl(options: ObjectDictionary, endpoint: Endpoints) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: Methods, endpoint: Endpoints, callback: (data?: { sources: string }) => void, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;

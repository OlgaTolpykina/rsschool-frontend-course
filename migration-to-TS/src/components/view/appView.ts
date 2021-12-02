import News from './news/news';
import Sources from './sources/sources';

export type Source = {
  id: string;
  name: string;
};

export interface IArticle {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export class AppView {
  news: News;
  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data?: { articles: Array<IArticle> }) {
    const values: IArticle[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data?: { sources: Array<ISource> }) {
    const values: ISource[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;

import { Routes } from './types';
import { RoutesID, Paths } from './constants';
import  HomePage from '../views/pages/HomePage';
import ToysPage from '../views/pages/ToysPage';
import TreePage from '../views/pages/TreePage';
import { Toys } from './toysModel';
import { TreeModel } from './treeModel';

export class Router {

  routes: Array<Routes>;
  path: string;
  mainWrapper: HTMLElement;

  constructor() {
    this.routes = [
      {
        id: RoutesID.home,
        path: Paths.home,
        page: HomePage,
      },
      {
        id: RoutesID.toys,
        path: Paths.toys,
        page: ToysPage,
      },
      {
        id: RoutesID.tree,
        path: Paths.tree,
        page: TreePage,
      },
    ];
    this.path = '';
    this.mainWrapper = document.querySelector('main') as HTMLElement;
  }

  init(path: string): void {
    window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
    this.path = path;
    this.parseLocation();
  }

  parseLocation(): void {
    this.path = location.hash.slice(1).toLowerCase() || '/';
    this.renderPage();
  }

  findPagebyPath(): Routes {
    return this.routes.find((r) => r.path.match(new RegExp(`^\\${this.path}$`, 'gm'))) as Routes;
  }

  renderPage() {
    const route:Routes = this.findPagebyPath();
    this.mainWrapper.innerHTML = route.page.render();

    this.bindEvents();

    const toysModel = new Toys();
    const treeModel = new TreeModel();

    if (this.path === Paths.home) {
      (document.querySelector('.header__wrapper') as HTMLElement).classList.add('hidden');
      this.mainWrapper.classList.remove('content__tree');
    }

    if (this.path === Paths.toys) {
      (document.querySelector('.header__wrapper') as HTMLElement).classList.remove('hidden');
      (document.querySelector('.toys-route') as HTMLElement).classList.add('link_active');
      (document.querySelector('.tree-route') as HTMLElement).classList.remove('link_active');
      this.mainWrapper.classList.remove('content__tree');

      toysModel.getCardsList();
    }

    if (this.path === Paths.tree) {
      (document.querySelector('.toys-route') as HTMLElement).classList.remove('link_active');
      (document.querySelector('.tree-route') as HTMLElement).classList.add('link_active');
      this.mainWrapper.classList.add('content__tree');

      treeModel.renderTreeVariants();
    }
  }

  bindEvents() {
    (document.querySelectorAll('a') as NodeListOf<HTMLElement>).forEach(btn => {
      btn.addEventListener('click', (evt) => {
        this.routePage(evt);
      });
    });
  }

  routePage(evt: MouseEvent) {
    const path = (evt.target as HTMLElement).className.split(' ');
    for (let i = 0; i < this.routes.length; i++) {
      if (path.includes(this.routes[i].id)) {
        window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${this.routes[i].path}`;
        this.path = this.routes[i].path;

        this.renderPage();
        
      }
    }  
  }
}
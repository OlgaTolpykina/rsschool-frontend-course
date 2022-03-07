import { IRouteOption } from '../router/interfaces';
import { Page } from '../services/types';
import TreePage from '../views/pages/TreePage';
import HomePageController from '../views/pages/homePage/homePageController';
import toysPageController from '../views/pages/toysPage/toysPageController';
import treePageController from '../views/pages/treePage/treePageController';

class Config {
  homePageController: HomePageController;
  toysPageController: typeof toysPageController;
  treePageController: typeof treePageController;

  constructor() {
    this.homePageController = new HomePageController();
    this.toysPageController = toysPageController;
    this.treePageController = treePageController;
  }

  public getRoutes(): IRouteOption[] {
    const currRoutes: IRouteOption[] = [
        {
            path: / /,
            callback: () => this.homePageController.createPage(),
        },
        {
          path: /toys/,
          callback: () => this.toysPageController.createPage(),
        },
        {
          path: /tree/,
          callback: () => this.treePageController.createPage(),
        }, 
    ];

      return currRoutes;
  }
}

export default new Config();
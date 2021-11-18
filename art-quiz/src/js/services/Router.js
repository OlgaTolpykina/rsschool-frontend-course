import HomePage from "../views/pages/Home.js";
import CategoriesPage from "../views/pages/Categories.js";
import SettingsPage from "../views/pages/Settings.js";
import ErrorPage from "../views/pages/ErrorPage.js";
import Bottombar from "../views/components/Bottombar.js";

const routes = [
    {
      id: 'home-route',
      path: '/',
      page: HomePage,  
    },
    {
      id: 'categories-route',
      path: '/categories',
      page: CategoriesPage,  
    },
    {
      id: 'settings-route',
      path: '/settings',
      page: SettingsPage,  
    },
    {
      id: 'error',
      path: '/error',
      page: ErrorPage,  
    },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findPageByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

const handleOnLoad = () => {
    const path = parseLocation();
    const { page = ErrorPage } = findPageByPath(path, routes) || {};
    document.querySelector('.application').innerHTML = page.render();
    document.querySelector('.application').innerHTML += Bottombar.render();
};

function handleClickRoute(event) {
    const id = event.target.className.split(" ");
    for (let i = 0; i < routes.length; i++) {
        if (id.includes(routes[i].id)) {
            console.log(i);
            window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${routes[i].path}`;
        }
    }
    // for (let i = 0; i < routes.length; i++) {
    //   if (routes[i].id === id) {
    //     const template = routes[i].page();
    //     historyMethods.push(routes[i].path);
    //     render(template, document.querySelector(".application"));
    //     return;
    //   }
    // }
    // pageNotFound();
  }

export { handleOnLoad, handleClickRoute };

/*
import { render, pageNotFound } from './Utils.js';
import HomePage from "../views/pages/Home.js";
import CategoriesPage from "../views/pages/Categories.js";
import SettingsPage from "../views/pages/Settings.js";
import ErrorPage from "../views/pages/ErrorPage.js";

let pathList = [];

const routes = [
    {
      id: 'home',
      path: '/',
      page: HomePage,  
    },
    {
      id: 'categories',
      path: '/categories',
      page: CategoriesPage,  
    },
    {
      id: 'settings',
      path: '/settings',
      page: SettingsPage,  
    },
    {
      id: 'error',
      path: '/error',
      page: ErrorPage,  
    },
];

class createHistory {
    constructor(path) {
        this.path = path;
    }

    push() {
      pathList.push(this.path);
      window.history.pushState(null, "", this.path);
    };
  
    replace() {
      pathList.pop();
      pathList.push(this.path);
      window.history.replaceState(null, "", this.path);
    };
  
    goBack() {
      window.history.pushState(null, "", this.path);
    };
};

// const createHistory = () => {
//     push = (path) => {
//       pathList.push(path);
//       window.history.pushState(null, "", path);
//     };
  
//     replace = (path) => {
//       pathList.pop();
//       pathList.push(path);
//       window.history.replaceState(null, "", path);
//     };
  
//     goBack = (path) => {
//       window.history.pushState(null, "", path);
//     };

//     return { push, replace, goBack };
//   };
  
const handleOnLoad = () => {
  const path = window.location.pathname;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].path === path) {
        const template = routes[i].page();
        historyMethods.push(path);
        render(template, document.querySelector('.application'));
        return;
      }
    }
    pageNotFound();
};

function handleClickRoute(event) {
    const id = event.target.id;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].id === id) {
        const template = routes[i].page();
        historyMethods.push(routes[i].path);
        render(template, document.querySelector(".application"));
        return;
      }
    }
    pageNotFound();
  }
  

const prev = () => {
    pathList.pop();
    if (pathList.length === 0) {
      return;
    }
    const path = pathList[pathList.length - 1];
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].path === path) {
        const template = routes[i].page();
        historyMethods.goBack(path);
        render(template, document.querySelector(".application"));
        return;
      }
    }
    pageNotFound();
  };

export { routes, createHistory, handleOnLoad, handleClickRoute, prev };
*/
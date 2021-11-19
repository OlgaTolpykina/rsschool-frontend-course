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
            window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${routes[i].path}`;
        }
    }
  }

export { handleOnLoad, handleClickRoute, parseLocation };
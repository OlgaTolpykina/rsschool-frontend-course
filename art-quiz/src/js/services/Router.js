import HomePage from "../views/pages/Home.js";
import CategoriesPage from "../views/pages/Categories.js";
import SettingsPage from "../views/pages/Settings.js";
import ErrorPage from "../views/pages/ErrorPage.js";
import Bottombar from "../views/components/Bottombar.js";
import Quiz from "../views/components/Quiz.js";

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
      type: ['artists', 'pictures'],  
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
const mainWrapper = document.querySelector('.application');

const handleOnLoad = () => {
    const path = parseLocation();
    const { page = ErrorPage } = findPageByPath(path, routes) || {};
    mainWrapper.innerHTML = page.render();
    mainWrapper.innerHTML += Bottombar.render();

};

function handleClickRoute(event) {
  
    const path = event.target.className.split(" ");
    for (let i = 0; i < routes.length; i++) {
        if (path.includes(routes[i].id)) {
            window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${routes[i].path}`;
        }
    }

    setTimeout(() => {
      if(window.location.hash == '#/categories') {
        const type = event.target.getAttribute('id');
        let quiz = new Quiz(type);
        mainWrapper.insertAdjacentElement('beforeend', quiz.renderCategoriesToDom());
      }
    }, 0);
  } 

export { handleOnLoad, handleClickRoute, parseLocation };
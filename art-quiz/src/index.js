import CategoriesPage from "./js/views/pages/Categories.js";
import HomePage from "./js/views/pages/Home.js";
import SettingsPage from "./js/views/pages/Settings.js";
import { ErrorPage } from "./js/services/utils.js";

import Bottombar from "./js/views/components/BottomBar.js";

const routes = [
  { path: '/', page: HomePage, },
  { path: '/categories', page: CategoriesPage, },
  { path: '/settings', page: SettingsPage, }

];  

const router = () => {
    const path = parseLocation();
    if (path !== '/') {
        document.querySelector('.application').style.backgroundImage = 'none';
    }
    const { page = ErrorPage } = findPageByPath(path, routes) || {};
    document.querySelector('.application').innerHTML = page.render();
    document.querySelector('.application').innerHTML += Bottombar.render();
}

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
const findPageByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

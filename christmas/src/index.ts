import './sass/style.scss';
// import { Router } from './js/services/Router';
import config from './js/router/config';
import router from './js/router/router';
// import './js/services/playmusic';
// import './js/services/snowing';

// const app = new Router();
// const path = '/';
// app.init(path);

const routes = config.getRoutes();
router.addAllPath(routes);




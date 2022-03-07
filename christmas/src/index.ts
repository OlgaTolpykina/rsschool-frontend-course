import './sass/style.scss';
import config from './js/router/config';
import router from './js/router/router';


const routes = config.getRoutes();
router.addAllPath(routes);




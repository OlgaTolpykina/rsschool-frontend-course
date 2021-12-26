import './sass/style.scss';
// import { Toys } from './js/services/toysModel';
import { Router } from './js/services/Router';
import './js/services/playmusic';
import './js/services/snowing';

const app = new Router();
const path = '/';
app.init(path);

// const events = new Events();
// if (localStorage.getItem('snow') === 'true') {
//   localStorage.setItem('intervalID')
// }



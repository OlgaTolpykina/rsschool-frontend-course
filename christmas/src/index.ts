import './sass/style.scss';
// import { Toys } from './js/services/toysModel';
import { Router } from './js/services/Router'


//Страница с игрушками

// const app = new Toys();
// app.getCardsList();

const app = new Router();
const path:string = '/';
app.init(path);



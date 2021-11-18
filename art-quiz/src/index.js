import { handleOnLoad, handleClickRoute } from "./js/services/Router.js";
import { soundClick } from "./js/services/Utils.js";

window.addEventListener('load', handleOnLoad);
window.addEventListener('hashchange', handleOnLoad);
window.addEventListener('click', handleClickRoute);
// window.addEventListener('click', soundClick);
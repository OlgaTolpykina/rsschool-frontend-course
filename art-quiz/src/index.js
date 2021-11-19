import { handleOnLoad, handleClickRoute } from "./js/services/Router.js";
import { soundClick, changeVolumeLevel, setTimer, setTimeToTimer } from "./js/services/Utils.js";

window.addEventListener('load', () => {
    handleOnLoad();
    changeVolumeLevel();
    setTimer();
    setTimeToTimer();
});

window.addEventListener('hashchange', () => {
    handleOnLoad();
    changeVolumeLevel();
    setTimer();
    setTimeToTimer();
});

window.addEventListener('click', handleClickRoute);
window.addEventListener('click', soundClick);


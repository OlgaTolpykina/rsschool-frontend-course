import HomePageView from './homePageView';
import settingsManager from '../../../services/settingsManager';
import animationManager from '../../../services/animationManager';

export default class HomePageController {
    private view: HomePageView;

    constructor() {
        this.view = new HomePageView();
    }

    public createPage(): void {
        this.view.render();
        settingsManager.init();
        animationManager.init();
    }
}

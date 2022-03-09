import header from '../../components/header/header';
import footer from '../../components/footer/footer';

class HomePageView {
    private rootNode: HTMLElement;

    constructor() {
        this.rootNode = <HTMLElement>document.getElementById('app');
    }

    public render(): void {
        this.rootNode.textContent = '';
        this.createHeader();
        this.createMainSection();
        this.createFooter();
    }

    private createHeader(): void {
        this.rootNode.append(header.getTemplate(false));
    }

    private createMainSection(): void {
        const mainWrapper = <HTMLElement>document.createElement('main');
        mainWrapper.className = 'content';
        mainWrapper.insertAdjacentHTML('afterbegin', this.template());
        this.rootNode.append(mainWrapper);
    }

    private template(): string {
        return `
    <div class="bg__ball bg_ball1"></div>
    <div class="bg__ball bg_ball2"></div>
    <h1 class="home-page_title">Новогодняя игра <span>"Наряди ёлку"</span></h1>
    <a href="#/toys" class="home-page_switch">Начать</a>  
    `;
    }

    private createFooter(): void {
        this.rootNode.append(footer.getTemplate());
    }
}

export default HomePageView;

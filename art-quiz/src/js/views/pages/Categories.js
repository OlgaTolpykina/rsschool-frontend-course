const CategoriesPage = {
    render: () => {
        let template = '';
        template += `
            <div class="header">
                <div class="navigation">
                    <div class="home-route logo-small"></div>
                    <nav>
                        <ul class="navigation navigation-links">
                            <li class="home-route click">Home</li>
                        </ul>
                    </nav>
                </div>
                <div class="settings settings-route click"></div>
            </div>
        `;

        return template;
    }
}

export default CategoriesPage;


//Сформировать data.json с данными. +
//Настроить асинхронное получение данных +-
//Сверстать страницу категорий+

//Написать класс для 1(одной) категории вопросов
//Заполнить страницу контентом с помощью класса
//Создать класс QUIZ (изначальный) с указанием типа и маршрутизацией на картины или художников в зависимости от типа

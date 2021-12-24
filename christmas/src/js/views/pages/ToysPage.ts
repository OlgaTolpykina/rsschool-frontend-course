const ToysPage = {
  render: () => {
    return `
    <div class="wrapper toys__wrapper">
      <div>
        <div class="settings settings_wide">
          <span class="settings__title">Сортировать</span>
          <select class="select button">
            <option value="name-acs">По названию от «А» до «Я»</option>
            <option value="name-dsc">По названию от «Я» до «А»</option>
            <option value="year-acs">По году приобретения по возрастанию</option>
            <option value="year-dsc">По году приобретения по убыванию</option>
          </select>
        </div>
        <div class="filters">
          <div class="settings settings_narrow">
            <p class="settings__title">Категории</p>
            <div class="filter">
              Только любимые:
              <div>
                <input class="filter__input filter_favorite" type="checkbox" id="favorities">
                <label class="filter__label" for="favorities"></label>
              </div>
            </div>
          </div>
          <div class="settings settings_wide">
            <p class="settings__title">Размер</p>
            <div class="filter">
              Большая:
              <div>
                <input class="filter__input filter_size" type="checkbox" data-filter="большой" id="big">
                <label class="filter__label" for="big"></label>
              </div>
            </div>
            <div class="filter">
              Средняя:
              <input class="filter__input filter_size" type="checkbox" data-filter="средний" id="medium">
              <label class="filter__label" for="medium"></label>
            </div>
            <div class="filter">
              Маленькая:
              <input class="filter__input filter_size" type="checkbox" data-filter="малый" id="small">
              <label class="filter__label" for="small"></label>
            </div>
          </div>
          <div class="settings settings_narrow color">
            <p class="settings__title">Цвет</p>
            <button class="filter_color" data-filter="белый"></button>
            <button class="filter_color" data-filter="желтый"></button>
            <button class="filter_color" data-filter="красный"></button>
            <button class="filter_color" data-filter="синий"></button>
            <button class="filter_color" data-filter="зелёный"></button>
          </div>
          <div class="settings settings_narrow">
            <p class="settings__title">Форма</p>
            <span class="icon_small bell filter_shape" data-filter="колокольчик"></span>
            <span class="icon_small ball filter_shape" data-filter="шар"></span>
            <span class="icon_small cone filter_shape" data-filter="шишка"></span>
            <span class="icon_small snowflake filter_shape" data-filter="снежинка"></span>
            <span class="icon_small toy filter_shape" data-filter="фигурка"></span>
          </div>
        </div>
        <div class="filters">
          <div class="range">
            <p class="settings__title">Количество экземпляров</p>
            <div class="range__container">
              <span class="number" id="range1">0</span>
              <div class="range__container_inner">
                <div class="range__track"></div>
                <input class="range__input" type="range" step="1" value="0" min="0" max="12" data-filter="count-from" id="rangeTrack1">
                <input class="range__input" type="range" step="1" value="12" min="0" max="12" data-filter="count-to" id="rangeTrack1">
              </div>
              <span class="number" id="range2">12</span>
            </div>
          </div>
          <div class="range">
            <p class="settings__title">Год приобретения</p>
            <div class="range__container">
              <span class="number" id="range3">1940</span>
              <div class="range__container_inner">
                <div class="range__track"></div>
                <input class="range__input" type="range" step="1" min="1940" max="2021" value="1940" data-filter="year-from" id="rangeTrack2">
                <input class="range__input" type="range" step="1" min="1940" max="2021" value="2021" data-filter="year-to" id="rangeTrack2">
              </div>
              <span class="number" id="range4">2021</span>
            </div>
          </div>
        </div>
        <div class="button__container">
          <button class="button button_small reset_local-storage">Сброс настроек</button>
          <button class="button button_small reset">Сбросить фильтры</button>
        </div>
      </div>
      <div class="cards-container cards-layout">
        <div class="cards-inner-container"></div>
      </div>
    </div>   
    `;
  },
};

export default ToysPage;
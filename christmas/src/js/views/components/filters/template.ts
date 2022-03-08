export function sortFilterTemplate(value: string, name: string): string {
  return `
  <option value='${value}'>${name}</option>
  `;
}

export function filtersBlockTemplate(): string {
  return `
        <div class="settings settings_narrow">
            <p class="settings__title">Категории</p>
            <div class="filter">
              Только любимые:
              <div>
                <input class="filter__input filter_favorite" type="checkbox" id="favorities" data-name="favorite">
                <label class="filter__label" for="favorities"></label>
              </div>
            </div>
          </div>
          
          <div class="settings settings_wide">
            <p class="settings__title">Размер</p>
            <div class="filter">
              Большая:
              <div>
                <input class="filter__input filter_size" type="checkbox" data-filter="большой" id="big" data-name="size">
                <label class="filter__label" for="big"></label>
              </div>
            </div>
            <div class="filter">
              Средняя:
              <input class="filter__input filter_size" type="checkbox" data-filter="средний" id="medium" data-name="size">
              <label class="filter__label" for="medium"></label>
            </div>
            <div class="filter">
              Маленькая:
              <input class="filter__input filter_size" type="checkbox" data-filter="малый" id="small" data-name="size">
              <label class="filter__label" for="small"></label>
            </div>
          </div>
          
          <div class="settings settings_narrow color">
            <p class="settings__title">Цвет</p>
            <button class="filter_color" data-filter="белый" data-name="color"></button>
            <button class="filter_color" data-filter="желтый" data-name="color"></button>
            <button class="filter_color" data-filter="красный" data-name="color"></button>
            <button class="filter_color" data-filter="синий" data-name="color"></button>
            <button class="filter_color" data-filter="зелёный" data-name="color"></button>
          </div>

          <div class="settings settings_narrow">
            <p class="settings__title">Форма</p>
            <span class="icon_small bell filter_shape" data-filter="колокольчик"  data-name="shape"></span>
            <span class="icon_small ball filter_shape" data-filter="шар" data-name="shape"></span>
            <span class="icon_small cone filter_shape" data-filter="шишка" data-name="shape"></span>
            <span class="icon_small snowflake filter_shape" data-filter="снежинка" data-name="shape"></span>
            <span class="icon_small toy filter_shape" data-filter="фигурка" data-name="shape"></span>
          </div>
        </div>
        
        <div class="filters">
          <div class="range">
            <p class="settings__title">Количество экземпляров</p>
            <div class="range__container">
              <span class="number" id="range1">0</span>
              <div class="range__container_inner">
                <div class="range__track"></div>
                <input class="range__input" type="range" step="1" value="0" min="0" max="12" data-name="count" data-value="range1" data-filter="count-from" id="rangeTrack1">
                <input class="range__input" type="range" step="1" value="12" min="0" max="12" data-name="count" data-value="range2" data-filter="count-to" id="rangeTrack1">
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
                <input class="range__input" type="range" step="1" min="1940" max="2021" value="1940" data-name="year" data-value="range3" data-filter="year-from" id="rangeTrack2">
                <input class="range__input" type="range" step="1" min="1940" max="2021" value="2021" data-name="year" data-value="range4" data-filter="year-to" id="rangeTrack2">
              </div>
              <span class="number" id="range4">2021</span>
            </div>
        </div>
  `;
}
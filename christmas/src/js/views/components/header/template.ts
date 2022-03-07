export default function headerTemplate(isSearchNeeded?: boolean, favorites?: number): string {
  let favoritesNumber = (favorites) ? favorites : 0;
  let searchClass = (isSearchNeeded) ? '' : 'hidden';
  return `
  <div class="wrapper header__wrapper">
    <div class="inner-container inner-container_left">
      <span class="icon volume"></span>
      <span class="icon theme"></span>
      <div class="search-container">
        <input type="search" class="search button ${searchClass}" placeholder="Поиск" autocomplete="off" autofocus  data-name="name">
        <span class="search-icon ${searchClass}" data-value="search">
      </div>
    </div>
    <div class="inner-container inner-container_right">
      <div class="navigation">
        <a href="#/" class="link__text icon tree home-route"></a>
        <a href="#/toys" class="link__text toys-route">Игрушки</a>
        <a href="#/tree" class="link__text tree-route">Ёлка</a>
      </div>
      <div class="icon favorite">
        <span class="favorite-number">${favoritesNumber}</span>
      </div>
    </div>
  </div>
  `
}
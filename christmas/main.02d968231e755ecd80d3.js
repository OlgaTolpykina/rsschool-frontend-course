(()=>{"use strict";var t={247:()=>{const t=document.querySelector(".volume");let e=!1;const s=new Audio;s.src="./assets/audio/audio.mp3",s.volume=.3,t.addEventListener("click",(()=>{e?(s.pause(),e=!1,localStorage.setItem("music",e.toString())):(s.play(),e=!0,localStorage.setItem("music",e.toString()))})),window.addEventListener("click",(()=>{"true"===localStorage.getItem("music")&&(s.play(),s.volume=.3)}))},516:(t,e,s)=>{t.exports=s.p+"2edf659aa2ce15b6027d.jpg"},589:(t,e,s)=>{t.exports=s.p+"3cdf483e44dfeea519ee.jpg"},353:(t,e,s)=>{t.exports=s.p+"4a633ed09b3214173844.jpg"},130:(t,e,s)=>{t.exports=s.p+"a7579227151cefbf1659.jpg"},825:(t,e,s)=>{t.exports=s.p+"93365c4b44c36c5db260.jpg"},375:(t,e,s)=>{t.exports=s.p+"eef7dbc2106d2ceb2919.jpg"},523:(t,e,s)=>{t.exports=s.p+"cf2ddfa837b4497fd4d0.jpg"},303:(t,e,s)=>{t.exports=s.p+"bd143edab05a2524c828.jpg"},382:(t,e,s)=>{t.exports=s.p+"251c9031b6f9eed34116.jpg"},74:(t,e,s)=>{t.exports=s.p+"cf884a6ca3480b42f6ef.jpg"},377:(t,e,s)=>{t.exports=s.p+"ca702ce66d387e612f6d.svg"},195:(t,e,s)=>{t.exports=s.p+"34d5c2d6ef9d1d77b576.svg"},183:(t,e,s)=>{t.exports=s.p+"e040db2edc06f3e605fe.svg"},321:(t,e,s)=>{t.exports=s.p+"f8724de1d5ef384cddea.png"},173:(t,e,s)=>{t.exports=s.p+"212f97eac30c80e65752.png"},253:(t,e,s)=>{t.exports=s.p+"62b63d8739c64a4337eb.png"},568:(t,e,s)=>{t.exports=s.p+"9723e94957e9678f555a.png"},550:(t,e,s)=>{t.exports=s.p+"85525b4c7f09d8694039.png"},205:(t,e,s)=>{t.exports=s.p+"0310cfdee3d4675de037.png"},769:(t,e,s)=>{t.exports=s.p+"f3387537af443030ea20.json"}},e={};function s(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,s),a.exports}s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;s.g.importScripts&&(t=s.g.location+"");var e=s.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=t})(),(()=>{var t,e,i,r,a,n,l,o,c;!function(t){t.white="#fff",t.main="#278D9F"}(t||(t={})),function(t){t[t.percent=100]="percent"}(e||(e={})),function(t){t.noMatch="Извините, совпадений не обнаружено",t.reset="Сбросить настройки"}(i||(i={})),function(t){t.ASC="ВВЕРХ",t.DSC="ВНИЗ"}(r||(r={})),function(t){t.color="color",t.shape="shape"}(a||(a={})),function(t){t.home="home-route",t.toys="toys-route",t.tree="tree-route"}(n||(n={})),function(t){t.home="/",t.toys="/toys",t.tree="/tree"}(l||(l={})),function(t){t.yellow_light="rgba(255, 255, 0, 1)",t.yellow_dark="rgba(255, 255, 0, 0.2)",t.green_light="rgba(0, 247, 165, 1)",t.green_dark="rgba(0, 247, 165, 0.2)",t.blue_light="rgba(0, 255, 255, 1)",t.blue_dark="rgba(0, 255, 255, 0.4)",t.red_light="rgba(247, 0, 118, 1)",t.red_dark="rgba(247, 0, 118, 0.4)"}(o||(o={})),function(t){t[t.minDistance=1]="minDistance"}(c||(c={}));const h={render:()=>'\n        <div class="bg__ball bg_ball1"></div>\n        <div class="bg__ball bg_ball2"></div>\n        <h1 class="home-page_title">Новогодняя игра <span>"Наряди ёлку"</span></h1>\n        <a href="#" class="home-page_switch toys-route">Начать</a>  \n        '},d={render:()=>'\n    <div class="wrapper toys__wrapper">\n      <div>\n        <div class="settings settings_wide">\n          <span class="settings__title">Сортировать</span>\n          <select class="select button">\n            <option value="name-acs">По названию от «А» до «Я»</option>\n            <option value="name-dsc">По названию от «Я» до «А»</option>\n            <option value="year-acs">По году приобретения по возрастанию</option>\n            <option value="year-dsc">По году приобретения по убыванию</option>\n          </select>\n        </div>\n        <div class="filters">\n          <div class="settings settings_narrow">\n            <p class="settings__title">Категории</p>\n            <div class="filter">\n              Только любимые:\n              <div>\n                <input class="filter__input filter_favorite" type="checkbox" id="favorities">\n                <label class="filter__label" for="favorities"></label>\n              </div>\n            </div>\n          </div>\n          <div class="settings settings_wide">\n            <p class="settings__title">Размер</p>\n            <div class="filter">\n              Большая:\n              <div>\n                <input class="filter__input filter_size" type="checkbox" data-filter="большой" id="big">\n                <label class="filter__label" for="big"></label>\n              </div>\n            </div>\n            <div class="filter">\n              Средняя:\n              <input class="filter__input filter_size" type="checkbox" data-filter="средний" id="medium">\n              <label class="filter__label" for="medium"></label>\n            </div>\n            <div class="filter">\n              Маленькая:\n              <input class="filter__input filter_size" type="checkbox" data-filter="малый" id="small">\n              <label class="filter__label" for="small"></label>\n            </div>\n          </div>\n          <div class="settings settings_narrow color">\n            <p class="settings__title">Цвет</p>\n            <button class="filter_color" data-filter="белый"></button>\n            <button class="filter_color" data-filter="желтый"></button>\n            <button class="filter_color" data-filter="красный"></button>\n            <button class="filter_color" data-filter="синий"></button>\n            <button class="filter_color" data-filter="зелёный"></button>\n          </div>\n          <div class="settings settings_narrow">\n            <p class="settings__title">Форма</p>\n            <span class="icon_small bell filter_shape" data-filter="колокольчик"></span>\n            <span class="icon_small ball filter_shape" data-filter="шар"></span>\n            <span class="icon_small cone filter_shape" data-filter="шишка"></span>\n            <span class="icon_small snowflake filter_shape" data-filter="снежинка"></span>\n            <span class="icon_small toy filter_shape" data-filter="фигурка"></span>\n          </div>\n        </div>\n        <div class="filters">\n          <div class="range">\n            <p class="settings__title">Количество экземпляров</p>\n            <div class="range__container">\n              <span class="number" id="range1">0</span>\n              <div class="range__container_inner">\n                <div class="range__track"></div>\n                <input class="range__input" type="range" step="1" value="0" min="0" max="12" data-filter="count-from" id="rangeTrack1">\n                <input class="range__input" type="range" step="1" value="12" min="0" max="12" data-filter="count-to" id="rangeTrack1">\n              </div>\n              <span class="number" id="range2">12</span>\n            </div>\n          </div>\n          <div class="range">\n            <p class="settings__title">Год приобретения</p>\n            <div class="range__container">\n              <span class="number" id="range3">1940</span>\n              <div class="range__container_inner">\n                <div class="range__track"></div>\n                <input class="range__input" type="range" step="1" min="1940" max="2021" value="1940" data-filter="year-from" id="rangeTrack2">\n                <input class="range__input" type="range" step="1" min="1940" max="2021" value="2021" data-filter="year-to" id="rangeTrack2">\n              </div>\n              <span class="number" id="range4">2021</span>\n            </div>\n          </div>\n        </div>\n        <div class="button__container">\n          <button class="button button_small reset_local-storage">Сброс настроек</button>\n          <button class="button button_small reset">Сбросить фильтры</button>\n        </div>\n      </div>\n      <div class="cards-container cards-layout">\n        <div class="cards-inner-container"></div>\n      </div>\n    </div>   \n    '},g={render:()=>'\n        <div class="wrapper tree__wrapper">\n          <div class="tree__settings">\n            <div class="tree_choice settings__container"></div>\n            <div class="bg_choice settings__container"></div>\n            <div class="lights_choice settings__container"></div>\n          </div>\n          <div class="tree__main-tree"></div>\n          <div class="tree__favorites">\n          </div>\n        </div>   \n        '};var u=s(769),p=function(t,e,s,i){return new(s||(s=Promise))((function(r,a){function n(t){try{o(i.next(t))}catch(t){a(t)}}function l(t){try{o(i.throw(t))}catch(t){a(t)}}function o(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,l)}o((i=i.apply(t,e||[])).next())}))};class m{build(){return p(this,void 0,void 0,(function*(){return yield this.load(u)}))}load(t){return p(this,void 0,void 0,(function*(){const e=yield fetch(t);return(yield e.json()).map((t=>({num:Number(t.num),name:t.name,count:Number(t.count),year:Number(t.year),shape:t.shape,color:t.color,size:t.size,favorite:t.favorite})))}))}}class v{constructor({num:t,name:e,count:s,year:i,shape:r,color:a,size:n,favorite:l,selected:o=!1},c){this.num=t,this.name=e,this.count=s,this.year=i,this.shape=r,this.color=a,this.size=n,this.favorite=l,this.selected=o,this.idx=c}generateCard(){let t="";const e=document.createElement("div");e.className="card",this.selected&&(e.className="card active");const s=this.favorite?"да":"нет";return t+=`<h2 class="card__title">${this.name}</h2>\n           <img class="card__image" src="./assets/img/${this.num}.png" alt="${this.name}">\n           <div class="card__description">\n            <p>Количество: <span>${this.count}</span></p>\n            <p>Год покупки: <span>${this.year}</span> год</p>\n            <p>Форма игрушки: <span>${this.shape}</span></p>\n            <p>Цвет игрушки: <span>${this.color}</span></p>\n            <p>Размер игрушки: <span>${this.size}</span></p>\n            <p>Любимая: <span>${s}</span></p>\n           </div>\n           <div class="ribbon"></div>\n          `,e.innerHTML=t,e}selectCard(){this.selected=!0}}class f{constructor(){this.sliders=document.querySelectorAll(".range__input"),this.displayValueOne=document.querySelector("#range1"),this.displayValueTwo=document.querySelector("#range2"),this.displayValueThree=document.querySelector("#range3"),this.displayValueFour=document.querySelector("#range4"),this.sliderTracks=document.querySelectorAll(".range__input"),this.sliderOneMaxValue=this.sliderTracks[0].max,this.sliderOneMinValue=this.sliderTracks[0].min,this.sliderTwoMaxValue=this.sliderTracks[2].max,this.sliderTwoMinValue=this.sliderTracks[2].min}setRangeSliders(t){this.sliders=t,this.colorSlider(this.sliders),this.sliders[0].addEventListener("input",(()=>{parseInt(this.sliders[1].value)-parseInt(this.sliders[0].value)<=0&&(this.sliders[0].value=`${parseInt(this.sliders[1].value)}`),this.colorSlider(this.sliders)})),this.sliders[1].addEventListener("input",(()=>{parseInt(this.sliders[1].value)-parseInt(this.sliders[0].value)<=0&&(this.sliders[1].value=`${parseInt(this.sliders[0].value)}`),this.colorSlider(this.sliders)})),this.sliders[2].addEventListener("input",(()=>{parseInt(this.sliders[3].value)-parseInt(this.sliders[2].value)<=0&&(this.sliders[2].value=`${parseInt(this.sliders[3].value)}`),this.colorSlider(this.sliders)})),this.sliders[3].addEventListener("input",(()=>{parseInt(this.sliders[3].value)-parseInt(this.sliders[2].value)<=0&&(this.sliders[3].value=`${parseInt(this.sliders[2].value)}`),this.colorSlider(this.sliders)}))}colorSlider(s){this.displayValueOne.textContent=s[0].value,this.displayValueTwo.textContent=s[1].value,this.displayValueThree.textContent=s[2].value,this.displayValueFour.textContent=s[3].value;const i=(parseInt(s[0].value)-parseInt(this.sliderOneMinValue))/(parseInt(this.sliderOneMaxValue)-parseInt(this.sliderOneMinValue))*e.percent,r=(parseInt(s[1].value)-parseInt(this.sliderOneMinValue))/(parseInt(this.sliderOneMaxValue)-parseInt(this.sliderOneMinValue))*e.percent,a=(parseInt(s[2].value)-parseInt(this.sliderTwoMinValue))/(parseInt(this.sliderTwoMaxValue)-parseInt(this.sliderTwoMinValue))*e.percent,n=(parseInt(s[3].value)-parseInt(this.sliderTwoMinValue))/(parseInt(this.sliderTwoMaxValue)-parseInt(this.sliderTwoMinValue))*e.percent;this.sliderTracks[0].style.background=`linear-gradient(to right, ${t.white} ${i}% , ${t.main} ${i}% , ${t.main} ${r}%, ${t.white} ${r}%)`,this.sliderTracks[2].style.background=`linear-gradient(to right, ${t.white} ${a}% , ${t.main} ${a}% , ${t.main} ${n}%, ${t.white} ${n}%)`}}class _{constructor(t,e){this.cardsToShowArray=[],this.filters=t,this.sortConditions=e}parseData(t){return this.filterData(t),this.sortData(this.cardsToShowArray),this.cardsToShowArray}filterData(t){this.cardsToShowArray=[],t.map((t=>{let e=!0;this.filters.name&&e&&(t.name.toLowerCase().includes(this.filters.name)||(e=!1)),Object.prototype.hasOwnProperty.call(this.filters,"favorite")&&e&&this.filters.favorite!==t.favorite&&(e=!1),this.filters.size&&e&&(e=this.filters.size.some((e=>e===t.size))),this.filters.color&&e&&(e=this.filters.color.some((e=>e===t.color))),this.filters.shape&&e&&(e=this.filters.shape.some((e=>e===t.shape))),this.filters.count&&e&&(this.filters.count.from>t.count||this.filters.count.to<t.count)&&(e=!1),this.filters.year&&e&&(this.filters.year.from>t.year||this.filters.year.to<t.year)&&(e=!1),e&&this.cardsToShowArray.push(t)}))}sortData(t){this.sortConditions.direction===r.ASC?t.sort(((t,e)=>t[this.sortConditions.key]>e[this.sortConditions.key]?1:-1)):t.sort(((t,e)=>t[this.sortConditions.key]>e[this.sortConditions.key]?-1:1))}}const y=s(195),S=s(377);class b{constructor(t,e,s){this.toysModel=new I,this.data=t,this.filters=e,this.sortConditions=s,this.selectBtn=document.querySelector(".select"),this.favoriteBtn=document.querySelector(".filter_favorite"),this.sizeBtns=document.querySelectorAll(".filter_size"),this.colorBtns=document.querySelectorAll(".filter_color"),this.shapeBtns=document.querySelectorAll(".filter_shape"),this.searchBtn=document.querySelector(".search"),this.resetBtn=document.querySelector(".reset"),this.resetLocalStorageBtn=document.querySelector(".reset_local-storage"),this.sliders=document.querySelectorAll(".range__input"),this.sizeArray=[],this.colorArray=[],this.shapeArray=[],this.intervalId,this.cardsOnPageArray=[]}setEvents(){this.toysModel=new I,this.searchBtn.addEventListener("change",(()=>{this.searchBtn.value?(this.filters.name=this.searchBtn.value.toLowerCase(),this.searchBtn.style.backgroundImage=`url(${S})`):this.filters.name&&!this.searchBtn.value&&(delete this.filters.name,this.searchBtn.style.backgroundImage=`url(${y})`),this.filterCards(this.data)})),this.searchBtn.addEventListener("click",(()=>{this.searchBtn.value&&(delete this.filters.name,this.searchBtn.style.backgroundImage=`url(${y})`,this.searchBtn.value=""),this.filterCards(this.data)})),this.selectBtn.addEventListener("change",(()=>{this.sortConditions.key=this.selectBtn.value.split("-")[0],"DSC"===this.selectBtn.value.split("-")[1].toUpperCase()?this.sortConditions.direction=r.DSC:this.sortConditions.direction=r.ASC,this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.filterCards(this.data)})),this.favoriteBtn.addEventListener("click",(()=>{this.favoriteBtn.checked?this.filters.favorite=!0:delete this.filters.favorite,this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.filterCards(this.data)})),this.sizeBtns.forEach((t=>{t.addEventListener("click",(()=>{this.sizeArray=[],this.sizeBtns.forEach((t=>{t.checked&&this.sizeArray.push(t.dataset.filter)})),this.sizeArray.length>0?this.filters.size=this.sizeArray:delete this.filters.size,this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.filterCards(this.data)}))})),this.setButtonFilters(this.colorBtns,a.color),this.setButtonFilters(this.shapeBtns,a.shape),this.sliders.forEach((t=>{t.addEventListener("change",(t=>{t.target!==this.sliders[0]&&t.target!==this.sliders[1]||(this.filters.count={from:Number(this.sliders[0].value),to:Number(this.sliders[1].value)}),t.target!==this.sliders[2]&&t.target!==this.sliders[3]||(this.filters.year={from:Number(this.sliders[2].value),to:Number(this.sliders[3].value)}),this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.filterCards(this.data)}))})),this.resetBtn.addEventListener("click",(()=>{this.filters={},this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.favoriteBtn.checked=!1,this.sizeBtns.forEach((t=>{t.checked=!1})),this.colorBtns.forEach((t=>{t.classList.remove("active")})),this.shapeBtns.forEach((t=>{t.classList.remove("active")}));const t=new f;this.sliders[0].value="0",this.sliders[1].value="12",this.sliders[2].value="1940",this.sliders[3].value="2021",t.setRangeSliders(this.sliders),this.filterCards(this.data)})),this.resetLocalStorageBtn.addEventListener("click",(()=>{localStorage.removeItem("filters"),localStorage.removeItem("sortConditions"),localStorage.removeItem("selectedCards"),localStorage.removeItem("path"),localStorage.removeItem("music"),localStorage.removeItem("snow")}))}setButtonFilters(t,e){t.forEach((s=>{s.addEventListener("click",(()=>{switch(s.classList.toggle("active"),e){case a.color:this.colorArray=[],t.forEach((t=>{t.className.includes("active")&&this.colorArray.push(t.dataset.filter)})),this.colorArray.length>0?this.filters.color=this.colorArray:delete this.filters.color;break;case a.shape:this.shapeArray=[],t.forEach((t=>{t.className.includes("active")&&this.shapeArray.push(t.dataset.filter)})),this.shapeArray.length>0?this.filters.shape=this.shapeArray:delete this.filters.shape}this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.filterCards(this.data)}))}))}filterCards(t){const e=new _(this.filters,this.sortConditions);this.cardsOnPageArray=e.parseData(t),this.cardsOnPageArray=this.toysModel.checkIfSelected(this.cardsOnPageArray),this.toysModel.renderCards(this.cardsOnPageArray)}}class I{constructor(){this.allCardsArray=[],this.cardsOnPageArray=[],this.selectedCards=[],this.rangeSortedArray=[],this.favoriteValue=!1,this.allCardsArray=[],this.cardsOnPageArray=[],this.selectedCards=[],this.rangeSortedArray=[],this.favoriteValue=!1,this.filters={},this.sortConditions={key:"name",direction:r.ASC},this.cardsWrapper=document.querySelector(".cards-inner-container"),this.selectedBtn=document.querySelector(".favorite-number"),this.sliders=document.querySelectorAll(".range__input"),this.selectBtn=document.querySelector(".select"),this.favoriteBtn=document.querySelector(".filter_favorite"),this.sizeBtns=document.querySelectorAll(".filter_size"),this.colorBtns=document.querySelectorAll(".filter_color"),this.shapeBtns=document.querySelectorAll(".filter_shape"),this.snowflakeBtn=document.querySelector(".theme")}getCardsList(){const t=new m;(new f).setRangeSliders(this.sliders),this.filters=JSON.parse(localStorage.getItem("filters")||"{}"),this.sortConditions=JSON.parse(localStorage.getItem("sortConditions")||"{}"),this.selectedCards=JSON.parse(localStorage.getItem("selectedCards")||"[]"),this.setButtons(),this.setSelected(),t.build().then((t=>{localStorage.setItem("initialCardsListInfo",JSON.stringify(t)),t.forEach((t=>{this.allCardsArray.push(t),this.allCardsArray.sort(((t,e)=>t.name>e.name?1:-1))}));const e=new b(this.allCardsArray,this.filters,this.sortConditions);e.setEvents(),e.filterCards(this.allCardsArray)}))}renderCards(t){if(this.cardsWrapper.innerHTML="",0===t.length){const t=document.createElement("div");t.innerHTML=i.noMatch,t.className="no-cards",this.cardsWrapper.append(t)}t.forEach(((t,e)=>{const s=new v(t,e).generateCard();this.cardsWrapper.append(s),s.addEventListener("click",(()=>{this.selectCards(t,s)}))}))}selectCards(t,e){if(this.selectedCards.length<20&&!t.selected)t.selected=!0,this.selectedCards.push(t),localStorage.setItem("selectedCards",JSON.stringify(this.selectedCards)),e.classList.add("active"),this.selectedBtn.innerHTML=`${this.selectedCards.length}`;else if(t.selected){t.selected=!1;const s=this.selectedCards.indexOf(t);this.selectedCards.splice(s,1),localStorage.setItem("selectedCards",JSON.stringify(this.selectedCards)),e.classList.remove("active"),this.selectedBtn.innerHTML=`${this.selectedCards.length}`}else{const t=document.createElement("p");t.className="favorite-number_limit",t.innerHTML="Извините, все слоты заполнены",this.selectedBtn.append(t)}}checkIfSelected(t){this.selectedCards=JSON.parse(localStorage.getItem("selectedCards")||"[]");const e=this.selectedCards.map((t=>t.num));return t.map((t=>e.includes(t.num)?Object.assign(Object.assign({},t),{selected:!0}):Object.assign(Object.assign({},t),{selected:!1})))}setLocalStorage(t,e){localStorage.setItem("filters",JSON.stringify(t)),localStorage.setItem("sortConditions",JSON.stringify(e))}setButtons(){"true"===localStorage.getItem("snow")&&this.snowflakeBtn.classList.add("active"),this.sortConditions&&"name"===this.sortConditions.key&&this.sortConditions.direction===r.ASC&&(this.selectBtn.value="name-acs"),this.sortConditions&&"name"===this.sortConditions.key&&this.sortConditions.direction===r.DSC&&(this.selectBtn.value="name-dsc"),this.sortConditions&&"year"===this.sortConditions.key&&this.sortConditions.direction===r.ASC&&(this.selectBtn.value="year-acs"),this.sortConditions&&"year"===this.sortConditions.key&&this.sortConditions.direction===r.DSC&&(this.selectBtn.value="year-dsc"),!0===this.filters.favorite&&(this.favoriteBtn.checked=!0),this.sizeBtns.forEach((t=>{this.filters.size&&this.filters.size.includes(t.dataset.filter)&&(t.checked=!0)})),this.colorBtns.forEach((t=>{this.filters.color&&this.filters.color.includes(t.dataset.filter)&&t.classList.add("active")})),this.shapeBtns.forEach((t=>{this.filters.shape&&this.filters.shape.includes(t.dataset.filter)&&t.classList.add("active")}));const t=new f;this.filters.count&&(this.sliders[0].value=this.filters.count.from.toString(),this.sliders[1].value=this.filters.count.to.toString()),this.filters.year&&(this.sliders[2].value=this.filters.year.from.toString(),this.sliders[3].value=this.filters.year.to.toString()),t.setRangeSliders(this.sliders)}setSelected(){this.selectedBtn.innerHTML=`${this.selectedCards.length}`}}class C{onDragStart(t){t.dataTransfer.setData("id",this.id)}onDragEnd(t){}onDrag(t){}onDragEnter(t){t.preventDefault(),console.log("dragenter")}onDragOver(t){t.preventDefault(),console.log("dragover")}onDragLeave(t){console.log(t)}onDrop(t){var e,s,i;const r=t.dataTransfer.getData("id"),a=document.getElementById(r),n=a.getBoundingClientRect().width/2,l=2*a.getBoundingClientRect().height,o=t.clientX-n,c=t.clientY-l;if(document.querySelector(".main-tree"),a.style.left=o+"px",a.style.top=c+"px",parseInt((null===(e=a.parentNode)||void 0===e?void 0:e.firstChild).innerHTML)>0){const t=parseInt((null===(s=a.parentNode)||void 0===s?void 0:s.firstChild).innerHTML);(null===(i=a.parentNode)||void 0===i?void 0:i.firstChild).innerHTML=(t-1).toString()}console.log(t),this.append(a)}}const w=s(321),L=s(173),k=s(253),x=s(568),E=s(550),A=s(205),M=s(516),B=s(353),$=s(130),D=s(825),N=s(375),T=s(523),q=s(303),V=s(382),O=s(74),P=s(589);class W{constructor(){this.selectedCards=[],this.favoriteCard=[],this.settingsContainer=document.querySelector(".tree__settings"),this.treeWrapper=document.querySelector(".tree_choice"),this.treeBgWrapper=document.querySelector(".bg_choice"),this.treeLightsWrapper=document.querySelector(".lights_choice"),this.treeMainWrapper=document.querySelector(".tree__main-tree"),this.treeFavoritesWrapper=document.querySelector(".tree__favorites"),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.lightsContainer=document.createElement("div"),this.lightsColor=localStorage.getItem("lightsColor")||o.yellow_light,this.intervalID1=0,this.intervalID2=0,this.intervalID3=0,this.intervalID4=0,this.intervalID5=0,this.intervalID6=0,this.intervalID7=0,this.treeVariantImgs=[w,L,k,x,E,A],this.bgVariantsImgs=[M,B,$,D,N,T,q,V,O,P],this.lightVariants=["light_multicolor","light_red","light_blue","light_yellow","light_green"]}renderTreeVariants(){this.treeWrapper.innerHTML="";for(let t=1;t<=6;t++){const e=document.createElement("div");e.className="tree__variant setting__item",e.style.backgroundImage=`url("${this.treeVariantImgs[t-1]}")`,e.addEventListener("click",(()=>this.chooseTree(t))),this.treeWrapper.append(e)}this.renderBgVariants()}chooseTree(t){document.querySelector(".main-tree").src=`${this.treeVariantImgs[t-1]}`,localStorage.setItem("chosenTree",t.toString())}renderBgVariants(){this.treeBgWrapper.innerHTML="";for(let t=1;t<=10;t++){const e=document.createElement("div");e.className="bg__variant setting__item",e.style.backgroundImage=`url("${this.bgVariantsImgs[t-1]}")`,e.addEventListener("click",(()=>this.chooseBg(t))),this.treeBgWrapper.append(e)}this.renderLightsVariants()}chooseBg(t){this.treeMainWrapper.style.backgroundImage=`url(${this.bgVariantsImgs[t-1]})`,localStorage.setItem("chosenBg",t.toString())}renderLightsVariants(){const t=document.createElement("div");t.className="light__variant_container";let e=!1;"true"===localStorage.getItem("isMulticolor")&&(e=!0);for(let s=0;s<=4;s++){const r=document.createElement("button");r.className="light__variant",r.classList.add(this.lightVariants[s]),r.addEventListener("click",(()=>{i.checked=!0,localStorage.setItem("lights",i.checked.toString()),i.checked?(document.querySelector(".switcher_indicator").style.right="0",document.querySelector(".switcher_inner-container").style.margin="0"):(document.querySelector(".switcher_indicator").style.right="55px",document.querySelector(".switcher_inner-container").style.marginLeft="-100%"),0===s&&(this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.clearIntervals(),e=!0,this.renderLights(this.lightsContainer,o.red_light,e),localStorage.setItem("isMulticolor","true")),1===s&&(this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.lightsColor=o.red_light,this.clearIntervals(),e=!1,this.renderLights(this.lightsContainer,o.red_light,e),localStorage.setItem("lightsColor",o.red_light),localStorage.setItem("isMulticolor","false")),2===s&&(this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.lightsColor=o.blue_light,this.clearIntervals(),e=!1,this.renderLights(this.lightsContainer,o.blue_light,e),localStorage.setItem("lightsColor",o.blue_light),localStorage.setItem("isMulticolor","false")),3===s&&(this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.lightsColor=o.yellow_light,this.clearIntervals(),e=!1,this.renderLights(this.lightsContainer,o.yellow_light,e),localStorage.setItem("lightsColor",o.yellow_light),localStorage.setItem("isMulticolor","false")),4===s&&(this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.lightsColor=o.green_light,this.clearIntervals(),e=!1,this.renderLights(this.lightsContainer,o.green_light,e),localStorage.setItem("lightsColor",o.green_light),localStorage.setItem("isMulticolor","false"))})),t.append(r)}const s=document.createElement("div");s.className="lights__switcher";const i=document.createElement("input");i.type="checkbox",i.setAttribute("checked","checked"),i.className="lights__switcher_input",i.setAttribute("id","lights__switcher"),i.checked=!1,i.addEventListener("click",(()=>{if(localStorage.setItem("lights",i.checked.toString()),"true"===localStorage.getItem("lights")&&(i.checked=!0),i.checked?(document.querySelector(".switcher_indicator").style.right="0",document.querySelector(".switcher_inner-container").style.margin="0"):(document.querySelector(".switcher_indicator").style.right="55px",document.querySelector(".switcher_inner-container").style.marginLeft="-100%"),i.checked){const t=localStorage.getItem("lightsColor")||this.lightsColor;"true"===localStorage.getItem("isMulticolor")&&(e=!0),this.renderLights(this.lightsContainer,t,e)}else this.clearIntervals(),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}));const r=document.createElement("label");r.className="lights__switcher_label",r.setAttribute("for","lights__switcher");const a=document.createElement("div");a.className="switcher_inner-container";const n=document.createElement("div");n.className="switcher_indicator",r.append(a),r.append(n),s.append(i),s.append(r),this.treeLightsWrapper.append(t),this.treeLightsWrapper.append(s),"true"===localStorage.getItem("lights")&&(i.checked=!0),"false"===localStorage.getItem("lights")&&(i.checked=!1),i.checked?(document.querySelector(".switcher_indicator").style.right="0",document.querySelector(".switcher_inner-container").style.margin="0"):(document.querySelector(".switcher_indicator").style.right="55px",document.querySelector(".switcher_inner-container").style.marginLeft="-100%"),this.renderMainTree()}clearIntervals(){clearInterval(this.intervalID1),clearInterval(this.intervalID2),clearInterval(this.intervalID3),clearInterval(this.intervalID4),clearInterval(this.intervalID5),clearInterval(this.intervalID6),clearInterval(this.intervalID7)}renderMainTree(){let t="";t=localStorage.getItem("chosenBg")?`url("${this.bgVariantsImgs[Number(localStorage.getItem("chosenBg"))-1]}")`:`url("${this.bgVariantsImgs[0]}")`,this.treeMainWrapper.style.backgroundImage=t,this.lightsContainer.className="lights__onTree-container";const e=new C,s=document.createElement("map");s.setAttribute("name","tree-map");const i=document.createElement("area");i.setAttribute("shape","poly"),i.setAttribute("coords","228,65,174,244,131,357,78,473,19,614,83,685,297,688,477,628,439,572,334,280,333,265,314,227,273,106,251,38"),s.append(i),i.addEventListener("dragenter",e.onDragEnter),i.addEventListener("dragover",e.onDragOver),i.addEventListener("dragleave",e.onDragLeave),i.addEventListener("drop",e.onDrop);const r=document.createElement("img");let a="";a=localStorage.getItem("chosenTree")?`${this.treeVariantImgs[Number(localStorage.getItem("chosenTree"))-1]}`:`${this.treeVariantImgs[0]}`,r.src=a,r.setAttribute("alt","tree"),r.setAttribute("width","500"),r.setAttribute("height","714"),r.setAttribute("usemap","#tree-map"),r.className="main-tree",this.treeMainWrapper.append(this.lightsContainer),this.treeMainWrapper.append(s),this.treeMainWrapper.append(r),this.renderSelected();let n=!1;if("true"===localStorage.getItem("lights")&&(n=!0),n){let t=!1;"true"===localStorage.getItem("isMulticolor")&&(t=!0),this.renderLights(this.lightsContainer,this.lightsColor,t)}}renderSelected(){this.selectedCards=JSON.parse(localStorage.getItem("selectedCards")||"[]");const t=JSON.parse(localStorage.getItem("initialCardsListInfo")),e=new C,s=document.createElement("div");s.className="favorites_container settings__container";for(let t=0;t<20;t++){const t=document.createElement("div");t.className="favorites__card",this.favoriteCard.push(t),s.append(t)}if(this.selectedCards.length>0)for(let t=0;t<this.selectedCards.length;t++){const s=document.createElement("p");s.className="favorites__card_count",s.innerHTML=this.selectedCards[t].count.toString(),this.favoriteCard[t].append(s);for(let s=1;s<=this.selectedCards[t].count;s++){const i=document.createElement("img");i.src=`assets/img/${t+1}.png`,i.className="favorites__card_img",i.setAttribute("alt","toy"),i.setAttribute("id",`${t}${s}`),i.setAttribute("width","55"),i.setAttribute("height","55"),i.setAttribute("draggable","true"),i.addEventListener("dragstart",e.onDragStart),this.favoriteCard[t].append(i)}}else for(let s=0;s<20;s++){const i=document.createElement("p");i.className="favorites__card_count",i.innerHTML=t[s].count.toString(),this.favoriteCard[s].append(i);for(let i=1;i<=t[s].count;i++){const t=document.createElement("img");t.src=`assets/img/${s+1}.png`,t.className="favorites__card_img draggable",t.setAttribute("alt","toy"),t.setAttribute("id",`${s}${i}`),t.setAttribute("width","55"),t.setAttribute("height","55"),t.setAttribute("draggable","true"),t.addEventListener("dragstart",e.onDragStart),t.addEventListener("dragend",e.onDragEnd),t.addEventListener("drag",e.onDrag),this.favoriteCard[s].append(t)}}this.treeFavoritesWrapper.append(s),this.renderDecorated(),this.dragAndDrop()}renderDecorated(){const t=document.createElement("div");t.className="favorites__decorated settings__container",this.treeFavoritesWrapper.append(t);const e=document.createElement("div");e.className="favorites__decorated_container",t.append(e);for(let t=0;t<6;t++){const s=document.createElement("div");s.className="tree_decorated",e.append(s);const i=document.createElement("img");i.src=`${this.treeVariantImgs[t]}`,i.className="tree_decorated_img",i.setAttribute("alt","Наряженная ёлка"),i.setAttribute("height","110"),s.append(i)}this.renderBtn()}renderBtn(){const t=document.createElement("div");t.className="button__container";const e=document.createElement("button");e.className="button button_small",e.innerHTML=i.reset,e.addEventListener("click",this.resetLocalStorage),this.settingsContainer.append(t),t.append(e)}renderLights(t,e,s){const i=[o.blue_dark,o.blue_light,o.green_dark,o.green_light,o.red_dark,o.red_light,o.yellow_dark,o.yellow_light];let r=0;this.canvas.setAttribute("id","canvas"),this.canvas.width=t.offsetWidth,this.canvas.height=t.offsetHeight,window.addEventListener("resize",(()=>{this.canvas.width=t.offsetWidth,this.canvas.height=t.offsetHeight})),this.intervalID1=setInterval((()=>{this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}),1500),this.intervalID2=setInterval((()=>{for(let t=-2;t<3;t+=3)this.context.beginPath(),this.context.arc(this.canvas.width/2+15*t,170-Math.pow(t,2),5,0,2*Math.PI),this.context.stroke(),s&&(r=this.getRandomNum(0,i.length),e=i[r]),this.setContext(this.context,e)}),300),this.intervalID3=setInterval((()=>{for(let t=-3;t<5;t+=3)this.context.beginPath(),this.context.arc(this.canvas.width/2+15*t,250-Math.pow(t,2),5,0,2*Math.PI),this.context.stroke(),s&&(r=this.getRandomNum(0,i.length),e=i[r]),this.setContext(this.context,e)}),500),this.intervalID4=setInterval((()=>{for(let t=-5;t<7;t+=3)this.context.beginPath(),this.context.arc(this.canvas.width/2+15*t,350-Math.pow(t,2),5,0,2*Math.PI),this.context.stroke(),s&&(r=this.getRandomNum(0,i.length),e=i[r]),this.setContext(this.context,e)}),400),this.intervalID5=setInterval((()=>{for(let t=-6;t<9;t+=3)this.context.beginPath(),this.context.arc(this.canvas.width/2+15*t,450-Math.pow(t,2),5,0,2*Math.PI),this.context.stroke(),s&&(r=this.getRandomNum(0,i.length),e=i[r]),this.setContext(this.context,e)}),200),this.intervalID6=setInterval((()=>{for(let t=-8;t<10;t+=3)this.context.beginPath(),this.context.arc(this.canvas.width/2+15*t,550-Math.pow(t,2),5,0,2*Math.PI),this.context.stroke(),s&&(r=this.getRandomNum(0,i.length),e=i[r]),this.setContext(this.context,e)}),300),this.intervalID7=setInterval((()=>{for(let t=-10;t<13;t+=3)this.context.beginPath(),this.context.arc(this.canvas.width/2+15*t,650-Math.pow(t,2),5,0,2*Math.PI),this.context.stroke(),s&&(r=this.getRandomNum(0,i.length),e=i[r]),this.setContext(this.context,e)}),400),t.append(this.canvas)}setContext(t,e){t.fillStyle=e,t.strokeStyle=e,t.shadowColor=e,t.shadowBlur=10,t.shadowOffsetX=5,t.shadowOffsetY=5,t.fill()}resetLocalStorage(){localStorage.removeItem("chosenTree"),localStorage.removeItem("chosenBg"),localStorage.removeItem("music"),localStorage.removeItem("snow"),localStorage.removeItem("lightsColor"),localStorage.removeItem("lights")}getRandomNum(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}dragAndDrop(){}}s(247);const z=s(183);function R(){const t=document.createElement("span");t.classList.add("snowflake_falling"),t.style.backgroundImage=`url("${z}")`,t.style.left=Math.random()*window.innerWidth+"px",t.style.animationDuration=3*Math.random()+2+"s",t.style.width=10*Math.random()+20+"px",t.style.height=t.style.width,document.body.appendChild(t),setTimeout((()=>{t.remove()}),5e3)}const j=document.querySelector(".theme");let H,J=!1;j.addEventListener("click",(function(){J?(clearInterval(H),document.querySelector(".theme").classList.remove("active"),J=!1,localStorage.setItem("snow",J.toString())):(H=setInterval(R,100),document.querySelector(".theme").classList.add("active"),J=!0,localStorage.setItem("snow",J.toString()))})),"true"===localStorage.getItem("snow")&&(H=setInterval(R,100),J=!0);(new class{constructor(){this.routes=[{id:n.home,path:l.home,page:h},{id:n.toys,path:l.toys,page:d},{id:n.tree,path:l.tree,page:g}],this.path="",this.mainWrapper=document.querySelector("main")}init(t){window.location.href=`${window.location.href.replace(/#(.*)$/,"")}#${t}`,this.path=t,this.parseLocation()}parseLocation(){this.path=location.hash.slice(1).toLowerCase()||"/",this.renderPage()}findPagebyPath(){return this.routes.find((t=>t.path.match(new RegExp(`^\\${this.path}$`,"gm"))))}renderPage(){const t=this.findPagebyPath();this.mainWrapper.innerHTML=t.page.render(),this.bindEvents();const e=new I,s=new W;this.path===l.home&&(document.querySelector(".header__wrapper").classList.add("hidden"),this.mainWrapper.classList.remove("content__tree")),this.path===l.toys&&(document.querySelector(".header__wrapper").classList.remove("hidden"),document.querySelector(".toys-route").classList.add("link_active"),document.querySelector(".tree-route").classList.remove("link_active"),this.mainWrapper.classList.remove("content__tree"),e.getCardsList()),this.path===l.tree&&(document.querySelector(".toys-route").classList.remove("link_active"),document.querySelector(".tree-route").classList.add("link_active"),this.mainWrapper.classList.add("content__tree"),s.renderTreeVariants())}bindEvents(){document.querySelectorAll("a").forEach((t=>{t.addEventListener("click",(t=>{this.routePage(t)}))}))}routePage(t){const e=t.target.className.split(" ");for(let t=0;t<this.routes.length;t++)e.includes(this.routes[t].id)&&(window.location.href=`${window.location.href.replace(/#(.*)$/,"")}#${this.routes[t].path}`,this.path=this.routes[t].path,this.renderPage())}}).init("/"),console.log('Drag & Drop и доп. функционал в процессе. Буду благодарна, если проверите позже. Спасибо!\n  \n  Самооценка as is: 190 / 200\n  \n  1. +30 Вёрстка. Выполнена вёрстка всех страниц согласно ТЗ + добавлен адаптив.\n  2. +50 Меню с настройками (можно выбрать елку, фон, снег, включить музыку, сохранить настройки в local storage).\n         Кнопка сброса настроек сбрасывает настройки, выбранные на данной странице.\n  3. +40 Гирлянда генерируется из JS. Реализована без использования картинок. Многоцветная + одноцветные. \n         Инфо о цвете + вкл/выкл хранится в localStorage.\n  4. +70 На странице с елкой отображаются в выбранных игрушки, добавленные в избранное на странице с игрушками. \n         Если не была добавлена ни одна игрушка, то отображаются первые 20 из изначального массива данных.\n         Игрушки из слотов с игрушками можно перетянуть на ёлку используя drag and drop\n         Если в процессе перетягивания игрушку отпускают за пределами ёлки, она возвращается в свой слот\n         Повешенные на ёлку игрушки можно перетягивать в пределах ёлки\n         возле слота с каждой игрушкой указывается количество игрушек в слоте равное количеству экземпляров игрушки в массиве с исходными данными\n         когда игрушку "вешают на ёлку" количество игрушек в слоте уменьшается, когда игрушку "снимают с ёлки", количество игрушек в слоте увеличивается,\n         когда все экземпляры игрушки помещаются на ёлку, отображается пустой слот \n  ')})()})();
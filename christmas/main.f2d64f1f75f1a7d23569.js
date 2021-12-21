(()=>{"use strict";var t={377:(t,e,s)=>{t.exports=s.p+"ca702ce66d387e612f6d.svg"},195:(t,e,s)=>{t.exports=s.p+"34d5c2d6ef9d1d77b576.svg"},183:(t,e,s)=>{t.exports=s.p+"e040db2edc06f3e605fe.svg"},769:(t,e,s)=>{t.exports=s.p+"f3387537af443030ea20.json"}},e={};function s(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,s),a.exports}s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;s.g.importScripts&&(t=s.g.location+"");var e=s.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=t})(),(()=>{var t;!function(t){t.ASC="ВВЕРХ",t.DSC="ВНИЗ"}(t||(t={}));var e,i,r,a,n,l=s(769),o=function(t,e,s,i){return new(s||(s=Promise))((function(r,a){function n(t){try{o(i.next(t))}catch(t){a(t)}}function l(t){try{o(i.throw(t))}catch(t){a(t)}}function o(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,l)}o((i=i.apply(t,e||[])).next())}))};class h{build(){return o(this,void 0,void 0,(function*(){return yield this.load(l)}))}load(t){return o(this,void 0,void 0,(function*(){const e=yield fetch(t);return(yield e.json()).map((t=>({num:Number(t.num),name:t.name,count:Number(t.count),year:Number(t.year),shape:t.shape,color:t.color,size:t.size,favorite:t.favorite})))}))}}class c{constructor({num:t,name:e,count:s,year:i,shape:r,color:a,size:n,favorite:l,selected:o=!1},h){this.num=t,this.name=e,this.count=s,this.year=i,this.shape=r,this.color=a,this.size=n,this.favorite=l,this.selected=o,this.idx=h}generateCard(){let t="";const e=document.createElement("div");e.className="card",this.selected&&(e.className="card active");const s=this.favorite?"да":"нет";return t+=`<h2 class="card__title">${this.name}</h2>\n           <img class="card__image" src="./assets/img/${this.num}.png" alt="${this.name}">\n           <div class="card__description">\n            <p>Количество: <span>${this.count}</span></p>\n            <p>Год покупки: <span>${this.year}</span> год</p>\n            <p>Форма игрушки: <span>${this.shape}</span></p>\n            <p>Цвет игрушки: <span>${this.color}</span></p>\n            <p>Размер игрушки: <span>${this.size}</span></p>\n            <p>Любимая: <span>${s}</span></p>\n           </div>\n           <div class="ribbon"></div>\n          `,e.innerHTML=t,e}selectCard(){this.selected=!0}}!function(t){t.white="#fff",t.main="#278D9F"}(e||(e={})),function(t){t[t.percent=100]="percent"}(i||(i={})),function(t){t.noMatch="Извините, совпадений не обнаружено"}(r||(r={})),function(t){t[t.width=190]="width",t[t.height=280]="height",t[t.gap=30]="gap"}(a||(a={})),function(t){t.color="color",t.shape="shape"}(n||(n={}));class d{constructor(){this.sliders=document.querySelectorAll(".range__input"),this.displayValueOne=document.querySelector("#range1"),this.displayValueTwo=document.querySelector("#range2"),this.displayValueThree=document.querySelector("#range3"),this.displayValueFour=document.querySelector("#range4"),this.sliderTracks=document.querySelectorAll(".range__input"),this.sliderOneMaxValue=this.sliderTracks[0].max,this.sliderOneMinValue=this.sliderTracks[0].min,this.sliderTwoMaxValue=this.sliderTracks[2].max,this.sliderTwoMinValue=this.sliderTracks[2].min}setRangeSliders(t){this.sliders=t,this.colorSlider(this.sliders),this.sliders[0].addEventListener("input",(()=>{parseInt(this.sliders[1].value)-parseInt(this.sliders[0].value)<=0&&(this.sliders[0].value=`${parseInt(this.sliders[1].value)}`),this.colorSlider(this.sliders)})),this.sliders[1].addEventListener("input",(()=>{parseInt(this.sliders[1].value)-parseInt(this.sliders[0].value)<=0&&(this.sliders[1].value=`${parseInt(this.sliders[0].value)}`),this.colorSlider(this.sliders)})),this.sliders[2].addEventListener("input",(()=>{parseInt(this.sliders[3].value)-parseInt(this.sliders[2].value)<=0&&(this.sliders[2].value=`${parseInt(this.sliders[3].value)}`),this.colorSlider(this.sliders)})),this.sliders[3].addEventListener("input",(()=>{parseInt(this.sliders[3].value)-parseInt(this.sliders[2].value)<=0&&(this.sliders[3].value=`${parseInt(this.sliders[2].value)}`),this.colorSlider(this.sliders)}))}colorSlider(t){this.displayValueOne.textContent=t[0].value,this.displayValueTwo.textContent=t[1].value,this.displayValueThree.textContent=t[2].value,this.displayValueFour.textContent=t[3].value;const s=(parseInt(t[0].value)-parseInt(this.sliderOneMinValue))/(parseInt(this.sliderOneMaxValue)-parseInt(this.sliderOneMinValue))*i.percent,r=(parseInt(t[1].value)-parseInt(this.sliderOneMinValue))/(parseInt(this.sliderOneMaxValue)-parseInt(this.sliderOneMinValue))*i.percent,a=(parseInt(t[2].value)-parseInt(this.sliderTwoMinValue))/(parseInt(this.sliderTwoMaxValue)-parseInt(this.sliderTwoMinValue))*i.percent,n=(parseInt(t[3].value)-parseInt(this.sliderTwoMinValue))/(parseInt(this.sliderTwoMaxValue)-parseInt(this.sliderTwoMinValue))*i.percent;this.sliderTracks[0].style.background=`linear-gradient(to right, ${e.white} ${s}% , ${e.main} ${s}% , ${e.main} ${r}%, ${e.white} ${r}%)`,this.sliderTracks[2].style.background=`linear-gradient(to right, ${e.white} ${a}% , ${e.main} ${a}% , ${e.main} ${n}%, ${e.white} ${n}%)`}}class u{constructor(t,e){this.cardsToShowArray=[],this.filters=t,this.sortConditions=e}parseData(t){return this.filterData(t),this.sortData(this.cardsToShowArray),this.cardsToShowArray}filterData(t){this.cardsToShowArray=[],t.map((t=>{let e=!0;this.filters.name&&e&&(t.name.toLowerCase().includes(this.filters.name)||(e=!1)),Object.prototype.hasOwnProperty.call(this.filters,"favorite")&&e&&this.filters.favorite!==t.favorite&&(e=!1),this.filters.size&&e&&(e=this.filters.size.some((e=>e===t.size))),this.filters.color&&e&&(e=this.filters.color.some((e=>e===t.color))),this.filters.shape&&e&&(e=this.filters.shape.some((e=>e===t.shape))),this.filters.count&&e&&(this.filters.count.from>t.count||this.filters.count.to<t.count)&&(e=!1),this.filters.year&&e&&(this.filters.year.from>t.year||this.filters.year.to<t.year)&&(e=!1),e&&this.cardsToShowArray.push(t)}))}sortData(e){this.sortConditions.direction===t.ASC?e.sort(((t,e)=>t[this.sortConditions.key]>e[this.sortConditions.key]?1:-1)):e.sort(((t,e)=>t[this.sortConditions.key]>e[this.sortConditions.key]?-1:1))}}const f=s(183);function p(){const t=document.createElement("span");t.classList.add("snowflake_falling"),t.style.backgroundImage=`url("${f}")`,t.style.left=Math.random()*window.innerWidth+"px",t.style.animationDuration=3*Math.random()+2+"s",t.style.width=10*Math.random()+20+"px",t.style.height=t.style.width,document.body.appendChild(t),setTimeout((()=>{t.remove()}),5e3)}const v=s(195),m=s(377);class y{constructor(t,e,s){this.toysModel=new g,this.data=t,this.filters=e,this.sortConditions=s,this.snowflakeBtn=document.querySelector(".theme"),this.selectBtn=document.querySelector(".select"),this.favoriteBtn=document.querySelector(".filter_favorite"),this.sizeBtns=document.querySelectorAll(".filter_size"),this.colorBtns=document.querySelectorAll(".filter_color"),this.shapeBtns=document.querySelectorAll(".filter_shape"),this.searchBtn=document.querySelector(".search"),this.resetBtn=document.querySelector(".reset"),this.resetLocalStorageBtn=document.querySelector(".reset_local-storage"),this.sliders=document.querySelectorAll(".range__input"),this.sizeArray=[],this.colorArray=[],this.shapeArray=[],this.intervalId}setEvents(){this.toysModel=new g,this.searchBtn.addEventListener("change",(()=>{this.searchBtn.value?(this.filters.name=this.searchBtn.value.toLowerCase(),this.searchBtn.style.backgroundImage=`url(${m})`):this.filters.name&&!this.searchBtn.value&&(delete this.filters.name,this.searchBtn.style.backgroundImage=`url(${v})`),this.filterCards(this.data)})),this.searchBtn.addEventListener("click",(()=>{this.searchBtn.value&&(delete this.filters.name,this.searchBtn.style.backgroundImage=`url(${v})`,this.searchBtn.value=""),this.filterCards(this.data)})),this.selectBtn.addEventListener("change",(()=>{this.sortConditions.key=this.selectBtn.value.split("-")[0],"DSC"===this.selectBtn.value.split("-")[1].toUpperCase()?this.sortConditions.direction=t.DSC:this.sortConditions.direction=t.ASC,this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.filterCards(this.data)})),this.favoriteBtn.addEventListener("click",(()=>{this.favoriteBtn.checked?this.filters.favorite=!0:delete this.filters.favorite,this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.filterCards(this.data)})),this.sizeBtns.forEach((t=>{t.addEventListener("click",(()=>{this.sizeArray=[],this.sizeBtns.forEach((t=>{t.checked&&this.sizeArray.push(t.dataset.filter)})),this.sizeArray.length>0?this.filters.size=this.sizeArray:delete this.filters.size,this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.filterCards(this.data)}))})),this.setButtonFilters(this.colorBtns,n.color),this.setButtonFilters(this.shapeBtns,n.shape),this.sliders.forEach((t=>{t.addEventListener("change",(t=>{t.target!==this.sliders[0]&&t.target!==this.sliders[1]||(this.filters.count={from:Number(this.sliders[0].value),to:Number(this.sliders[1].value)}),t.target!==this.sliders[2]&&t.target!==this.sliders[3]||(this.filters.year={from:Number(this.sliders[2].value),to:Number(this.sliders[3].value)}),this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.filterCards(this.data)}))})),this.resetBtn.addEventListener("click",(()=>{this.filters={},this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.favoriteBtn.checked=!1,this.sizeBtns.forEach((t=>{t.checked=!1})),this.colorBtns.forEach((t=>{t.classList.remove("active")})),this.shapeBtns.forEach((t=>{t.classList.remove("active")}));const t=new d;this.sliders[0].value="0",this.sliders[1].value="12",this.sliders[2].value="1940",this.sliders[3].value="2021",t.setRangeSliders(this.sliders),this.filterCards(this.data)}));let e=!1;this.snowflakeBtn.addEventListener("click",(()=>{e?(clearInterval(this.intervalId),this.snowflakeBtn.classList.remove("active"),e=!1):(this.intervalId=setInterval(p,100),this.snowflakeBtn.classList.add("active"),e=!0)})),this.resetLocalStorageBtn.addEventListener("click",(()=>{localStorage.removeItem("filters"),localStorage.removeItem("sortConditions"),localStorage.removeItem("selectedCards")}))}setButtonFilters(t,e){t.forEach((s=>{s.addEventListener("click",(()=>{switch(s.classList.toggle("active"),e){case n.color:this.colorArray=[],t.forEach((t=>{t.className.includes("active")&&this.colorArray.push(t.dataset.filter)})),this.colorArray.length>0?this.filters.color=this.colorArray:delete this.filters.color;break;case n.shape:this.shapeArray=[],t.forEach((t=>{t.className.includes("active")&&this.shapeArray.push(t.dataset.filter)})),this.shapeArray.length>0?this.filters.shape=this.shapeArray:delete this.filters.shape}this.toysModel.setLocalStorage(this.filters,this.sortConditions),this.filterCards(this.data)}))}))}filterCards(t){const e=new u(this.filters,this.sortConditions).parseData(t);this.toysModel.checkIfSelected(),this.toysModel.renderCards(e)}}class g{constructor(){this.allCardsArray=[],this.cardsOnPageArray=[],this.selectedCards=[],this.rangeSortedArray=[],this.favoriteValue=!1,this.allCardsArray=[],this.cardsOnPageArray=[],this.selectedCards=[],this.rangeSortedArray=[],this.favoriteValue=!1,this.filters={},this.sortConditions={key:"name",direction:t.ASC},this.cardsWrapper=document.querySelector(".cards-inner-container"),this.selectedBtn=document.querySelector(".favorite-number"),this.sliders=document.querySelectorAll(".range__input"),this.selectBtn=document.querySelector(".select"),this.favoriteBtn=document.querySelector(".filter_favorite"),this.sizeBtns=document.querySelectorAll(".filter_size"),this.colorBtns=document.querySelectorAll(".filter_color"),this.shapeBtns=document.querySelectorAll(".filter_shape")}getCardsList(){const t=new h;(new d).setRangeSliders(this.sliders),this.filters=JSON.parse(localStorage.getItem("filters")||"{}"),this.sortConditions=JSON.parse(localStorage.getItem("sortConditions")||"{}"),this.selectedCards=JSON.parse(localStorage.getItem("selectedCards")||"[]"),this.setButtons(),this.setSelected(),t.build().then((t=>{t.forEach((t=>{this.allCardsArray.push(t),this.allCardsArray.sort(((t,e)=>t.name>e.name?1:-1))}));const e=new y(this.allCardsArray,this.filters,this.sortConditions);e.setEvents(),e.filterCards(this.allCardsArray)}))}renderCards(t){if(this.cardsWrapper.innerHTML="",0===t.length){const t=document.createElement("div");t.innerHTML=r.noMatch,t.className="no-cards",this.cardsWrapper.append(t)}t.forEach(((t,e)=>{const s=new c(t,e),i=s.generateCard();this.cardsWrapper.append(i),i.addEventListener("click",(()=>{this.selectCards(s,i)}))}))}selectCards(t,e){if(this.selectedCards.length<20&&!this.selectedCards.includes(t))this.selectedCards.push(t),localStorage.setItem("selectedCards",JSON.stringify(this.selectedCards)),e.classList.add("active"),this.selectedBtn.innerHTML=`${this.selectedCards.length}`;else if(this.selectedCards.includes(t)){const s=this.selectedCards.indexOf(t);this.selectedCards.splice(s,1),localStorage.setItem("selectedCards",JSON.stringify(this.selectedCards)),e.classList.remove("active"),this.selectedBtn.innerHTML=`${this.selectedCards.length}`}else{const t=document.createElement("p");t.className="favorite-number_limit",t.innerHTML="Извините, все слоты заполнены",this.selectedBtn.append(t)}}checkIfSelected(){const t=this.selectedCards.map((t=>t.num));this.cardsOnPageArray=this.cardsOnPageArray.map((e=>t.includes(e.num)?Object.assign(Object.assign({},e),{selected:!0}):e))}setLocalStorage(t,e){localStorage.setItem("filters",JSON.stringify(t)),localStorage.setItem("sortConditions",JSON.stringify(e))}setButtons(){this.sortConditions&&"name"===this.sortConditions.key&&this.sortConditions.direction===t.ASC&&(this.selectBtn.value="name-acs"),this.sortConditions&&"name"===this.sortConditions.key&&this.sortConditions.direction===t.DSC&&(this.selectBtn.value="name-dsc"),this.sortConditions&&"year"===this.sortConditions.key&&this.sortConditions.direction===t.ASC&&(this.selectBtn.value="year-acs"),this.sortConditions&&"year"===this.sortConditions.key&&this.sortConditions.direction===t.DSC&&(this.selectBtn.value="year-dsc"),!0===this.filters.favorite&&(this.favoriteBtn.checked=!0),this.sizeBtns.forEach((t=>{this.filters.size&&this.filters.size.includes(t.dataset.filter)&&(t.checked=!0)})),this.colorBtns.forEach((t=>{this.filters.color&&this.filters.color.includes(t.dataset.filter)&&t.classList.add("active")})),this.shapeBtns.forEach((t=>{this.filters.shape&&this.filters.shape.includes(t.dataset.filter)&&t.classList.add("active")}));const e=new d;this.filters.count&&(this.sliders[0].value=this.filters.count.from.toString(),this.sliders[1].value=this.filters.count.to.toString()),this.filters.year&&(this.sliders[2].value=this.filters.year.from.toString(),this.sliders[3].value=this.filters.year.to.toString()),e.setRangeSliders(this.sliders)}setSelected(){this.selectedBtn.innerHTML=`${this.selectedCards.length}`}}(new g).getCardsList(),console.log("Самооценка: 200 из 200\n\n  1. +10 Вёрстка\n  2. +10 Карточка игрушки содержит необходимые данные + добавляется динамически из JS \n  3. +20 Добавление игрушек в избранное + вывод сообщения, если уже добавлено 20штук\n  4. +20 Сортировка игрушек, которые на данный момент на странице \n  5. +30 Фильтры в указанном диапазоне от и до\n  6. +30 Фильтры по значению. Выделенные фильтры выделяются стилем + можно отфильтровать игрушки по нескольким фильтрам одного типа (в данном случае работает как ИЛИ)\n  7. +20 Можно отфильтровать игрушки по нескольким фильтрам разного типа (в данном случае фильтры работают как И). Если нет совпадений, то выводится сообщение.\n  8. +20 Сброс фильтров\n  9. +10 Сохранение настроек в local storage\n  10. +30 Поиск\n\n  +10 Дополнительный функционал - при клике на снежинку слева от поиска начинают падать снежинки. При повторном клике снежинки отключаются.\n  ")})()})();
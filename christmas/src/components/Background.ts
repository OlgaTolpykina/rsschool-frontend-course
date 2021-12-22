const snowflakeImg = require('../assets/img/svg/snowflake_blue.svg');

export function createSnowFlake():void {
  const snowflake: HTMLElement = document.createElement('span');
  snowflake.classList.add('snowflake_falling');
  snowflake.style.backgroundImage = `url("${snowflakeImg}")`;
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
  // snowflake.style.opacity = Math.random();
  snowflake.style.width = Math.random() * 10 + 20 + 'px';
  snowflake.style.height = snowflake.style.width;
	
  document.body.appendChild(snowflake);
	
  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}
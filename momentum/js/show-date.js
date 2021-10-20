const day = document.querySelector('.date');

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDay = date.toLocaleDateString('ru-Ru', options);
    day.textContent = currentDay;
};

export { showDate };
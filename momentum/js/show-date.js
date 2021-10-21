const day = document.querySelector('.date');

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDay = date.toLocaleDateString('en-En', options);
    day.textContent = currentDay;
};

export { showDate };
const greeting = document.querySelector('.greeting');

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    switch (Math.floor(hours / 6)) {
        case 0: 
            return 'night';
            break;
        case 1: 
            return 'morning';
            break;
        case 2: 
            return 'afternoon';
            break;
        case 3: 
            return 'evening';
            break;
    };
}

function showGreeting() {
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}

export { getTimeOfDay, showGreeting }


const activeClientsCount = 50; //ctiveClientsCount  numbers
const systemUsersCount = 34.386;  // systemUsersCount numbers
const availableportalscount = 3; // availableportalscount numbers

// this make the counter to animate
function animateCounter(id, finalCount) {
    let currentCount = 0;
    const counterElement = document.getElementById(id);
    const increment = Math.ceil(finalCount / 50);   // the speed 

    const timer = setInterval(() => {
        currentCount += increment;
        counterElement.textContent = currentCount;
        if (currentCount >= finalCount) {
            clearInterval(timer);
            counterElement.textContent = finalCount;
        }
    }, 40); //  the interval
}

// this make it that when you load or reload the page the counter starts counting
document.addEventListener('DOMContentLoaded', () => {
    animateCounter('active-clients-counter', activeClientsCount);
    animateCounter('system-users-counter', systemUsersCount);
    animateCounter('available-portals-counter', availableportalscount);
});

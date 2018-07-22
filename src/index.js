const moment = require('moment');

function init() {
    animateTime();

    setInterval(function () {
        animateTime();
    }, 1000)
}

function formatTime(format) {
    return moment().format(format);
}

function animateTime() {
    document.querySelector('#time-container').innerHTML = (formatTime('MMMM Do YYYY, h:mm:ss a'));
}

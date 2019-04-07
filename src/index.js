const moment = require('moment');
const { remote } = require('electron');
let timeContainer = document.getElementById('time-container');
console.log(`timecontainer: ${timeContainer}`);
let tContainer = () => { return timeContainer };

let wX;
let wY;
let dragging = false;

/*timeContainer.addEventListener('mousedown', function (e) {
    dragging = true;
    wX = e.pageX;
    wY = e.pageY;
});*/

window.addEventListener('mousemove', function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (dragging) {
        var xLoc = e.screenX - wX;
        var yLoc = e.screenY - wY;

        try {
            remote.BrowserWindow.getFocusedWindow().setPosition(xLoc, yLoc);
        } catch (err) {
            console.log(err);
        }
    }
});

window.addEventListener('mouseup', function () {
    dragging = false;
});
// var clear = drag('body');
function init() {
    animateTime();

    setInterval(() => {
        animateTime();
    }, 1000);

    // setupListeners();
}

function formatTime(format) {
    return moment().format(format);
}

function animateTime() {
    timeContainer.innerHTML = (formatTime('MMMM Do YYYY, h:mm:ss a'));
}

// function setupListeners() {
window.addEventListener('contextmenu', (event) => {
    // event.preventDefault();
    console.log('target ' + event);
    if (event.target.id == "time-container") {
        console.log("Right-click");
        // menu.popup();
    }
});
// }

module.exports = { "chris": timeContainer };
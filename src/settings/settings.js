//let timeContainer = require('../index.js').chris;
let xxxx = require('../index.js').chris;
console.log("jsengifdsl");
console.log(`same?: ${xxxx}`);
let sidebarGeneral = document.getElementById('sidebar-general');
let sidebarAppearance = document.getElementById('sidebar-appearance');
let mainGeneral = document.getElementById('main-general');
let mainAppearance = document.getElementById('main-appearance');
let sidebarItems = document.getElementsByClassName('sidebar-item-li');
let sidebarItemsText = document.getElementsByClassName('sidebar-text-li');
let mainItems = document.getElementsByClassName('main-item');

let fontSelectElement = document.getElementById('font-selection-main');
let fontColorElement = document.getElementById('color-selection-main');
let fontSizeElement = document.getElementById('font-size-selection-main');
let sampleText = document.getElementById('test-sample-text');

let applyButton = document.getElementById('apply-button');

let defaultFontFamily = 'Arial';
let defaultFontSize = "12";
let defaultFontColor = "White";

// let fontStyleOptions = {
//     fontFamily: defaultFontFamily,
//     fontSize: defaultFontSize,
//     fontColor: defaultFontColor
// }

/**
 * potentially store user settings
 */
function init() {
    // setActiveEl(sidebarGeneral);
    setActiveEl(sidebarAppearance);
    setInactiveEl(sidebarGeneral);
    // showEl(mainGeneral);
    // hideEl(mainAppearance);
    showEl(mainAppearance);
    hideEl(mainGeneral);
    setSampleFontFamily(defaultFontFamily);
    setSampleFontSize(defaultFontSize);
    setSampleFontColor(defaultFontColor);
    fontColorElement.value = defaultFontColor;
    fontSelectElement.value = defaultFontFamily;
    fontSizeElement.value = defaultFontSize;
    setupListeners();
}

function setSampleFontFamily(font) {
    sampleText.style.fontFamily = font;
}
function setSampleFontSize(size) {
    sampleText.style.fontSize = size;
}
function setSampleFontColor(color) {
    sampleText.style.color = color;
}

function setActiveEl(el) {
    el.classList.add('active');
}

function setInactiveEl(el) {
    el.classList.remove('active');
}
function hideEl(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}
function showEl(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}

function setupListeners() {
    Array.from(sidebarItems).forEach(element => {
        element.addEventListener('click', (event) => {
            let currentActiveItem = document.getElementsByClassName('active');
            //remove the active class
            currentActiveItem[0].className = currentActiveItem[0].className.replace(" active", "");
            //set clicked el to active class
            element.className += " active";

            Array.from(mainItems).forEach(el => {
                if (el.classList.contains('show')) {
                    el.className = el.className.replace(" show", " hide");
                } else if (el.classList.contains('hide')) {
                    el.className = el.className.replace(" hide", " show");
                }
            })
        })
    });

    //Tab indices
    sidebarGeneral.addEventListener('keypress', (event) => {
        if (event.keyCode == 13) {

        }
    });

    // Attribute Listeners
    fontSelectElement.addEventListener("change", (event) => {
        var selectedElIndex = event.target.selectedIndex;
        for (var i = 0; i < fontSelectElement.options.length; i++) {
            if (i == selectedElIndex) {
                setSampleFontFamily(event.target.value);
            }
        }
    });

    fontColorElement.addEventListener("input", (event) => {
        setSampleFontColor(event.target.value);
    });

    fontSizeElement.addEventListener("input", (event) => {
        setSampleFontSize(event.target.value + "px");
    });

    applyButton.addEventListener('click', (event) => {
        console.log("need to implement this");
        // timeContainer.style.color = "red";
    });
}

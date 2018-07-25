let sidebarGeneral = document.getElementById('sidebar-general');
let sidebarAppearance = document.getElementById('sidebar-appearance');
let mainGeneral = document.getElementById('main-general');
let mainAppearance = document.getElementById('main-appearance');
let sidebarItems = document.getElementsByClassName('sidebar-item-li');
let sidebarItemsText = document.getElementsByClassName('sidebar-text-li');
let mainItems = document.getElementsByClassName('main-item');

/**
 * potentially store user settings
 */
function init() {
    setActiveEl(sidebarGeneral);
    showEl(mainGeneral);
    hideEl(mainAppearance);
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
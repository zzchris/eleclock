let sidebarGeneral = document.getElementById('sidebar-general');
let sidebarAppearance = document.getElementById('sidebar-appearance');
let mainGeneral = document.getElementById('main-general');
let mainAppearance = document.getElementById('main-appearance');

/**
 * potentially store user settings
 */
function init() {
    setActiveEl(document.getElementById('sidebar-general'));
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

document.addEventListener('click', (event) => {
    if (event.target.classList.contains("sidebar-item-li") || event.target.classList.contains("sidebar-text-li")) {
        if (event.target.innerText == "General") {
            setActiveEl(sidebarGeneral);
            setInactiveEl(sidebarAppearance);
            showEl(mainGeneral)
            hideEl(mainAppearance);
        }
        if (event.target.innerText == "Appearance") {
            setActiveEl(sidebarAppearance);
            setInactiveEl(sidebarGeneral);
            showEl(mainAppearance); 
            hideEl(mainGeneral);
        }
    }
});
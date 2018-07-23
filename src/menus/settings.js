/**
 * potentially store user settings
 */
function init() {
    setActiveEl(document.getElementById('sidebar-general'));
}

function setActiveEl(el) {
    el.classList.add('active');
}

function setInactiveEl(el) {
    el.classList.remove('active');
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains("sidebar-item-li") || event.target.classList.contains("sidebar-text-li")) {
        if (event.target.innerText == "General") {
            setActiveEl(document.getElementById('sidebar-general'));
            setInactiveEl(document.getElementById('sidebar-appearance'));
        }
        if (event.target.innerText == "Appearance") {
            setActiveEl(document.getElementById('sidebar-appearance'));
            setInactiveEl(document.getElementById('sidebar-general'));
        }
    }
});
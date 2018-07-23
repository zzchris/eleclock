const { Menu, MenuItem, BrowserWindow} = require('electron');

  
module.exports = {
    createMenu(win) {
        const ctxMenu = new Menu();
        ctxMenu.append(new MenuItem({
            label: 'Preferences',
            click() {
                require('../main').createSettingsMenu();
            }
        }));

        win.webContents.on('context-menu', (event) => {
          event.preventDefault();
          ctxMenu.popup({window: win});
        })
    }
}
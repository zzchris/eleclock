const {Menu} = require('electron');

const template = [
    {
        label: 'Preferences',
        click () {
            console.log("Preferences clicked");
        }
    }
]

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
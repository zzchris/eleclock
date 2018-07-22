const { Menu } = require('electron');
const electron = require('electron');
const app = electron.app;

let template = [
    {
        label: 'Preferences',
        submenu: [{
            label: 'Settings',
            click() {
                console.log("Settings clicked");
            }

        }
        ],
    }
];

if (process.platform === 'darwin') {
    const name = app.getName()
    template.unshift({
        label: name,
        submenu: [
            {
                role: 'about', label: 'About' + " " + app.getName()
            },
            {
                type: 'separator'
            },
            {
                role: 'services', label: 'Services',
                submenu: []
            },
            {
                type: 'separator'
            },
            {
                role: 'hide', label: 'Hide' + " " + app.getName()
            },
            {
                role: 'hideothers', label: 'Hide others'
            },
            {
                role: 'unhide', label: 'Unhide'
            },
            {
                type: 'separator'
            },
            {
                role: 'quit', label: 'Quit' + " " + app.getName()
            }
        ]
    });
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
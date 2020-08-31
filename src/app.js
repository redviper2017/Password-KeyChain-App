const {app, BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width:1024,
        height:764,
        webPreferences:{
            nodeIntegration: true
        },
        frame: false
    });
    win.loadURL('file://'+__dirname+'/windows/main/main.html');
    win.openDevTools();
}

app.on('ready',(()=>{
    createWindow();
}));



const { BrowserWindow, app, ipcMain } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

var mainWindow;

// Prepare the renderer once the app is ready
app.on('ready', async () => {
	mainWindow = new BrowserWindow({
		width: 300, 
		height: 400, 
		minWidth: 300,
		minHeight: 400,
		//frame: false,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})

	mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

	mainWindow.webContents.on('did-finish-load', () => {
	})

	//Opens links on the client's default browser
	mainWindow.webContents.on('new-window', function(e, url) {
		e.preventDefault();
		require('electron').shell.openExternal(url);
	  });
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)

// listen the channel `message`
ipcMain.on('message', (event, message) => {
})
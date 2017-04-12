// Get electron
const electron = require('electron');

// Controls the application life
const app = electron.app;

// Native browser window
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, to prevent the window
// from closing whenJavaScript object is garbage collected.
let win;

function createWindow () {
  // Create the window
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: false,
    titleBarStyle: 'hidden',
    title: 'Angular Electron Example App',
    icon: path.join(__dirname, '/favicon.ico')
  });

  // load index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Fires when window is closed
  win.on('closed', function () {
    // Reset the window object to null
    win = null;
  });
}

// create the windows after electron was instantiated
app.on('ready', createWindow);

// Quit after all windows has been closed
app.on('window-all-closed', function () {
  // keep app in application bar on OSX (because it's common)
  if (process.platform !== 'darwin') { app.quit(); }
});

app.on('activate', function () {
  // reactivate app on OSX if it was closed and clicked in application bar
  if (win === null) { createWindow(); }
});

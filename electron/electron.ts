import { app, BrowserWindow } from 'electron';

export default class ElectronApp {
  static app: Electron.App;
  static mainWindow: Electron.BrowserWindow;
  static BrowserWindow;

  static main(
    app: Electron.App,
    browserWindow: typeof BrowserWindow
  ) {
    ElectronApp.app = app;
    ElectronApp.BrowserWindow = browserWindow;
    ElectronApp.app.on('ready', ElectronApp.onReady);
    ElectronApp.app.on('window-all-closed', ElectronApp.onWindowAllClosed);
    ElectronApp.app.on('activate', ElectronApp.onActivate);
  }

  // call when ready
  private static onReady() {
    // Create the window
    ElectronApp.mainWindow = new BrowserWindow({
      width: 1200,
      height: 800,
      resizable: false,
      titleBarStyle: 'hidden',
      title: 'Angular Electron Example App',
      icon: __dirname + '/favicon.ico'
    });

    // load index.html
    ElectronApp.mainWindow.loadURL('file://' + __dirname + '/index.html');

    // close the window
    ElectronApp.mainWindow.on('closed', ElectronApp.onClose);
  }

  // Quit after all windows has been closed
  private static onWindowAllClosed() {
    // keep app in application bar on OSX (because it's common)
    if (process.platform !== 'darwin') { ElectronApp.app.quit(); }
  }

  // fires if the window is closed
  private static onClose() {
    // Reset the window object to null
    ElectronApp.mainWindow = null;
  }

  // recreate if activated again
  private static onActivate() {
    if (ElectronApp.mainWindow === null) { ElectronApp.onReady(); }
  }

}

ElectronApp.main(app, BrowserWindow);

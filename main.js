const { default: installExtension } = require('electron-devtools-installer');
const { app, BrowserWindow } = require('electron')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: "soundcloud-logo.png",
    webPreferences: {
	webviewTag: true
    }
  })

  win.loadFile('index.html')
}
app.whenReady().then(() => {
  installExtension("cjpalhdlnbpafiamejdnhcphjbkeiagm")
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
  createWindow()
})

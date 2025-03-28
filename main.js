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

import path from "path";
import process from "process";
import { BrowserWindow, App, app } from "electron";
import electronReloader from "electron-reloader";

class Main {
  static mainWindow: BrowserWindow | null;

  static app: App;

  private static createWindow() {
    Main.mainWindow = new BrowserWindow({
      title: "21",
      // frame: process.platform === "darwin",
      transparent: process.platform === "darwin",
      titleBarStyle: "hiddenInset",
      // webPreferences: {
      //   nodeIntegration: true,
      // },
      height: 600,
      width: 800,
    });
    // Main.mainWindow.loadURL("http://localhost:1234");
    Main.mainWindow.loadURL(
      `file://${path.join(__dirname, "/renderer/index.html")}`,
    );
    Main.mainWindow.webContents.openDevTools();
    Main.mainWindow.on("closed", Main.onClose);
  }

  private static onClose() {
    Main.mainWindow = null;
  }

  private static onWindowActivate() {
    if (BrowserWindow.getAllWindows().length === 0) {
      Main.createWindow();
    }
  }

  private static onWindowAllClosed() {
    if (process.platform !== "darwin") {
      app.quit();
    }
  }

  static main(application: App) {
    Main.app = application;
    Main.app.on("ready", Main.createWindow);
    Main.app.on("activate", Main.onWindowActivate);
    Main.app.on("window-all-closed", Main.onWindowAllClosed);
  }
}

try {
  electronReloader(module);
} catch {
  //
}

Main.main(app);

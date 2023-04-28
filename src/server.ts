/* eslint-disable no-new */
import App from './app';
import ConnectApp from './model/Connection';
import 'dotenv/config';

export default class Server {
  private app: App

  private port: string

  constructor(app: App) {
    this.app = app;
    this.port = process.env.PORT || '3000';

    this.app.start(this.port);
  }
}

const app = new App(new ConnectApp());
new Server(app);
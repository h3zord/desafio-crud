import App from "./app";
import 'dotenv/config';

class Server {
  private app: App
  private port: string

  constructor() {
    this.app = new App()
    this.port = process.env.PORT || "3000"

    this.app.start(this.port)
  }
}

new Server()
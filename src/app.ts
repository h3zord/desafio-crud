import express, { Request, Response, Express } from "express";

const app = express()

class App {
  public app: Express;

  constructor() {
    this.app = express()

    this.config()
  }

  private config():void {
    this.app.use(express.json())

    this.app.get("/", (_req: Request, res: Response) => res.status(200).json({ message: "ok" }))
  }

  public start(PORT: string ):void {
    this.app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }

}


export default App;
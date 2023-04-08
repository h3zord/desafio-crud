import express, { Request, Response, Express, response } from "express";
import ConnectApp from "./model/Connection";
import EmployeeODM from "./model/EmployeeODM";


const app = express()

class App {
  private app: Express;
  private connectApp: ConnectApp;
  private employeeODM: EmployeeODM;

  constructor() {
    this.app = express()
    this.connectApp = new ConnectApp()
    this.employeeODM = new EmployeeODM()

    this.config()
  }

  private config():void {
    this.app.use(express.json())

    this.app.get("/", (_req: Request, res: Response) => res.status(200).json({ message: "ok" }))
  }

  public start(PORT: string ) {
    try {
      this.connectApp.start()
      this.app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    } catch (error) {
      console.error(error)
    }
  }

}


export default App;
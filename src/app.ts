import express, { Request, Response, Express } from "express";
import "express-async-errors";
import ConnectApp from "./model/Connection";
import EmployeeODM from "./model/EmployeeODM";
import EmployeeController from "./controller/EmployeeController";
import EmployeeService from "./service/EmployeeService";
import EmployeeRoutes from "./routes/EmployeeRoutes";
import ErrorHandler from "./middleware/ErrorHander";

class App {
  private app: Express;
  private connectApp: ConnectApp;
  private employeeRoutes: EmployeeRoutes;
  private employeeController: EmployeeController;
  private employeeService: EmployeeService;
  private employeeODM: EmployeeODM;

  constructor(connection: ConnectApp) {
    this.app = express()
    this.connectApp = connection;
    this.employeeODM = new EmployeeODM();
    this.employeeService = new EmployeeService(this.employeeODM);
    this.employeeController = new EmployeeController(this.employeeService);
    this.employeeRoutes = new EmployeeRoutes(this.employeeController);

    this.config()
  }

  private config():void {
    this.app.use(express.json())

    this.app.get("/", (_req: Request, res: Response) => res.status(200).json({ message: "ok" }))

    this.app.use(this.employeeRoutes.router);
    
    this.app.use(ErrorHandler.catchError)
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
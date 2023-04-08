import { Router, Request, Response } from "express";
import EmployeeController from "../controller/EmployeeController";

class EmployeeRoutes {
  public router: Router;
  private employeeController: EmployeeController;

  constructor(employeeController: EmployeeController) {
    this.router = Router();
    this.employeeController = employeeController;

    this.router.post("/employee", (req: Request, res: Response) => this.employeeController
      .create(req, res));   
  }
}

export default EmployeeRoutes;


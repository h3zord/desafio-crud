import { Router, Request, Response } from "express";
import IEmployeeController from "../Interfaces/IEmployeeController";

class EmployeeRoutes {
  public router: Router;
  private employeeController: IEmployeeController;

  constructor(employeeController: IEmployeeController) {
    this.router = Router();
    this.employeeController = employeeController;

    this.router.post("/employee", (req: Request, res: Response) => this.employeeController
      .create(req, res));

    this.router.get("/employee", (req: Request, res: Response) => this.employeeController
      .getAll(req, res));

    this.router.get("/employee/:id", (req: Request, res: Response) => this.employeeController
      .findById(req, res));

    this.router.put("/employee/:id", (req: Request, res: Response) => this.employeeController
      .updateById(req, res));

    this.router.delete("/employee/:id", (req: Request, res: Response) => this.employeeController
      .deleteById(req, res));
  }
}

export default EmployeeRoutes;


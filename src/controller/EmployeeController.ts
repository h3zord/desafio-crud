import { Request, Response } from "express";
import IEmployeeMethods from "../Interfaces/IEmployeeODM";

class EmployeeController {
  employeeService: IEmployeeMethods;

  constructor(employeeService: IEmployeeMethods) {
    this.employeeService = employeeService;
  }

  public async create(req: Request, res: Response) {
    const result = await this.employeeService.create(req.body);

    return res.status(201).json(result);
  }
}

export default EmployeeController;
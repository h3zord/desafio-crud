import { Request, Response } from "express";
import IEmployeeMethods from "../Interfaces/IEmployeeMethods";

class EmployeeController {
  employeeService: IEmployeeMethods;

  constructor(employeeService: IEmployeeMethods) {
    this.employeeService = employeeService;
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const result = await this.employeeService.create(req.body);

    return res.status(201).json(result);
  }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const result = await this.employeeService.getAll();

    return res.status(200).json(result);
  }

  public async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const result = await this.employeeService.findById(id);

    return res.status(200).json(result);
  }

  public async updateById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const result = await this.employeeService.updateById(id, req.body);

    return res.status(200).json(result);
  }

  public async deleteById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const result = await this.employeeService.deleteById(id);

    return res.status(200).json(result);
  }
}

export default EmployeeController;
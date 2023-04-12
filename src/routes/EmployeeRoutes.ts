import { Router, Request, Response } from 'express';
import IEmployeeController from '../Interfaces/IEmployeeController';

class EmployeeRoutes {
  public router: Router;

  private employeeController: IEmployeeController;

  constructor(employeeController: IEmployeeController) {
    this.router = Router();
    this.employeeController = employeeController;

    const endpoint = '/employee/:id';

    this.router.post('/employee', (req: Request, res: Response) => this.employeeController
      .create(req, res));

    this.router.get('/employee', (req: Request, res: Response) => this.employeeController
      .getAll(req, res));

    this.router.get(endpoint, (req: Request, res: Response) => this.employeeController
      .findById(req, res));

    this.router.put(endpoint, (req: Request, res: Response) => this.employeeController
      .updateById(req, res));

    this.router.delete(endpoint, (req: Request, res: Response) => this.employeeController
      .deleteById(req, res));
  }
}

export default EmployeeRoutes;

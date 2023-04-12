import { Request, Response } from 'express';

export default interface IEmployeeController {
  create(req: Request, res: Response): Promise<Response>,
  getAll(req: Request, res: Response): Promise<Response>,
  findById(req: Request, res: Response): Promise<Response>,
  updateById(req: Request, res: Response): Promise<Response>,
  deleteById(req: Request, res: Response): Promise<Response>,
}
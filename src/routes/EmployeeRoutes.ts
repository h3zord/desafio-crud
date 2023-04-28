/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines-per-function */
import { Router, Request, Response } from 'express';
import IEmployeeController from '../Interfaces/IEmployeeController';

class EmployeeRoutes {
  public router: Router;
  
  private employeeController: IEmployeeController;
  
  constructor(employeeController: IEmployeeController) {
    this.router = Router();
    this.employeeController = employeeController;

    this.router.post(
      '/employee', (req: Request, res: Response) => this.employeeController
      .create(req, res)

      // #swagger.tags = ['Employees']
      // #swagger.summary = 'Cadastrar um novo funcionário'
      // #swagger.description = 'Endpoint para cadastrar um novo funcionário no banco de dados.'

      /* #swagger.parameters['info'] = {
        in: 'body',
        type: 'object',
        description: 'Informações necessárias para cadastrar um novo funcionário.',
        schema: { $ref: "#/definitions/Employee" },
      } */

      /* #swagger.responses[201] = {
        schema: { $ref: "#/definitions/Employee" },
        description: 'Requisição para cadastrar um novo funcionário efetuada com sucesso!'
      } */

      /* #swagger.responses[401] = {
        schema: { $ref: "#/definitions/CreateError" },
        description: 'Error! A requisição para criar um novo funcionário falhou!'
      } */

      /* #swagger.responses[422] = {
        schema: { $ref: "#/definitions/DataError" },
        description: 'Error! Preencha corretamente todos os campos!'
      } */,
    );

    this.router.get(
      '/employee', (req: Request, res: Response) => this.employeeController
      .getAll(req, res)
      
      // #swagger.tags = ['Employees']
      // #swagger.summary = 'Listar todos os funcionários'
      // #swagger.description = 'Endpoint para listar todos os funcionários cadastrados no banco de dados.'

      /* #swagger.responses[200] = {
        schema: { $ref: "#/definitions/EmployeeList" },
        description: 'Requisição para listar todos os funcionários efetuada com sucesso!'
      } */,
    );

    this.router.get(
      '/employee/:id', (req: Request, res: Response) => this.employeeController
      .findById(req, res)
      
      // #swagger.tags = ['Employees']
      // #swagger.summary = 'Buscar um funcionário pelo seu ID'
      // #swagger.description = 'Endpoint para buscar um funcionário cadastrado no banco de dados pelo seu ID'

      /* #swagger.responses[200] = {
        schema: { $ref: "#/definitions/Employee" },
        description: 'Requisição para buscar um funcionário pelo seu ID efetuada com sucesso!'
      } */

      /* #swagger.responses[400] = {
        schema: { $ref: "#/definitions/InvalidIdError" },
        description: 'Error! O id fornecido para consulta é inválido!'
      } */

      /* #swagger.responses[404] = {
        schema: { $ref: "#/definitions/EmployeeNotFound" },
        description: 'Error! O funcionário não foi encontrado no banco de dados!'
      } */,
    );

    this.router.put(
      '/employee/:id', (req: Request, res: Response) => this.employeeController
      .updateById(req, res)
      
      // #swagger.tags = ['Employees']
      // #swagger.summary = 'Atualizar um funcionário pelo seu ID'
      // #swagger.description = 'Endpoint para atualizar um funcionário cadastrado no banco de dados pelo seu ID'

      /* #swagger.parameters['info'] = {
        in: 'body',
        type: 'object',
        description: 'Informações necessárias para atualizar um funcionário pelo seu ID.',
        schema: { $ref: "#/definitions/Employee" },
      } */

      /* #swagger.responses[200] = {
        schema: { $ref: "#/definitions/Employee" },
        description: 'Requisição para atualizar um funcionário pelo seu ID efetuada com sucesso!'
      } */

      /* #swagger.responses[400] = {
        schema: { $ref: "#/definitions/InvalidIdError" },
        description: 'Error! O id fornecido para consulta é inválido!'
      } */
      
      /* #swagger.responses[401] = {
        schema: { $ref: "#/definitions/UpdateError" },
        description: 'Error! A requisição para atualizar um funcionário pelo seu ID falhou!'
      } */

      /* #swagger.responses[422] = {
        schema: { $ref: "#/definitions/DataError" },
        description: 'Error! Preencha corretamente todos os campos!'
      } */,
    );

    this.router.delete(
      '/employee/:id', (req: Request, res: Response) => this.employeeController
      .deleteById(req, res)
      
      // #swagger.tags = ['Employees']
      // #swagger.summary = 'Deletar um funcionário pelo seu ID'
      // #swagger.description = 'Endpoint para deletar um funcionário cadastrado no banco de dados pelo seu ID'

      /* #swagger.responses[200] = {
        schema: { $ref: "#/definitions/Employee" },
        description: 'Requisição para deletar um funcionário pelo seu ID efetuada com sucesso!'
      } */

      /* #swagger.responses[400] = {
        schema: { $ref: "#/definitions/InvalidIdError" },
        description: 'Error! O id fornecido para consulta é inválido!'
      } */
      
      /* #swagger.responses[401] = {
        schema: { $ref: "#/definitions/DeleteError" },
        description: 'Error! A requisição para deletar um funcionário pelo seu ID falhou!'
      } */,
    );
  }
}

export default EmployeeRoutes;

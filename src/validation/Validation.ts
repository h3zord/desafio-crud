import Joi from 'joi';
import IEmployee from '../Interfaces/IEmployee';
import HttpException from '../utils/HttpException';

class Validation {
  static createEmployee(employeeData: IEmployee) {    
    const schema = Joi.object({
      nome: Joi.string().required(),
      idade: Joi.number().required(),
      cargo: Joi.string().required(),
    });

    const { error } = schema.validate(employeeData);    

    if (error) throw new HttpException(422, 'Fill in the fields correctly');
  }

  static updateEmployee(employeeData: Partial<IEmployee>) {
    const schema = Joi.object({
      nome: Joi.string(),
      idade: Joi.number(),
      cargo: Joi.string(),
    });

    const { error } = schema.validate(employeeData);

    if (error) throw new HttpException(422, 'Fill in the fields correctly');
  }
}

export default Validation;
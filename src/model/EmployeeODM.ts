import { Schema, Model, model, models, isValidObjectId } from 'mongoose';
import IEmployee from '../Interfaces/IEmployee';
import HttpException from '../utils/HttpException';

class EmployeeODM {
  private employeeSchema: Schema;
  private model: Model<IEmployee>;
  private ERROR_MSG: string = "Invalid ID"

  constructor() {
    this.employeeSchema = new Schema<IEmployee>({
      nome: { type: String, required: true },
      idade: { type: Number, required: true },
      cargo: { type: String, required: true },
    });

    this.employeeSchema.set('versionKey', false);

    this.model = models.Employee || model('Employee', this.employeeSchema);
  }

  public async create(employeeData: IEmployee): Promise<IEmployee> {    
    const result = await this.model.create({ ...employeeData });

    if (!result) throw new HttpException(400, "Failed to create employee");

    return result;
  }

  public async getAll(): Promise<IEmployee[]> {
    return await this.model.find();
  }

  public async findById(id: string): Promise<IEmployee> {
    if (!isValidObjectId(id)) throw new HttpException(400, this.ERROR_MSG);

    const result = await this.model.findById(id);    

    if (!result) throw new HttpException(404, "Employee not found");

    return result;
  }

  public async updateById(id: string, employeeData: Partial<IEmployee>): Promise<IEmployee> {
    if (!isValidObjectId(id)) throw new HttpException(400, this.ERROR_MSG);    

    const result = await this.model.findByIdAndUpdate(
      { _id: id },
      { ...employeeData },
      { new: true },
    );
      
    if (!result) throw new HttpException(422, "Failed to update employee");

    return result;
  }

  public async deleteById(id: string): Promise<IEmployee> {
    if (!isValidObjectId(id)) throw new HttpException(400, this.ERROR_MSG);

    const result = await this.model.findByIdAndDelete(id);

    if (!result) throw new HttpException(422, "Failed to delete employee")

    return result;
  }
}

export default EmployeeODM;
import { Schema, Model, model, models } from "mongoose";
import IEmployee from "../Interfaces/IEmployee";

export default class EmployeeODM {
  private employeeSchema: Schema;
  private model: Model<IEmployee>;

  constructor() {
    this.employeeSchema = new Schema<IEmployee>({
      nome: { type: String, required: true },
      idade: { type: Number, required: true },
      cargo: { type: String, required: true },
    })

    this.employeeSchema.set('versionKey', false);

    this.model = models.Employee || model('Employee', this.employeeSchema);
  }
}
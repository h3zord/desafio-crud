import IEmployee from "./IEmployee";

export default interface IEmployeeMethods {
  create(employeeData: IEmployee): Promise<IEmployee>,
  getAll(): Promise<IEmployee[]>,
  findById(id: string): Promise<IEmployee>,
  updateById(id: string, employeeData: Partial<IEmployee>): Promise<IEmployee>,
  deleteById(id: string): Promise<IEmployee>
}
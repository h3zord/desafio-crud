import IEmployee from "../Interfaces/IEmployee";
import IEmployeeMethods from "../Interfaces/IEmployeeODM";
import HttpException from "../utils/HttpException";


class EmployeeService {
  private employeeODM: IEmployeeMethods

  constructor(EmployeeODM: IEmployeeMethods) {
    this.employeeODM = EmployeeODM
  }

  public async create(employeeData: IEmployee): Promise<IEmployee> {
    const { nome, idade, cargo } = employeeData;

    if (!nome || !idade || !cargo) throw new HttpException(422, "Fill in the fields correctly");

    return await this.employeeODM.create(employeeData);
  }

  public async getAll(): Promise<IEmployee[]> {
    return await this.employeeODM.getAll();
  }

  public async findById(id: string): Promise<IEmployee> {
    return await this.employeeODM.findById(id);
  }

  public async updateById(id: string, employeeData: Partial<IEmployee>): Promise<IEmployee> {
    return await this.employeeODM.updateById(id, employeeData);
  }

  public async deleteById(id: string): Promise<IEmployee> {
    return await this.employeeODM.deleteById(id);
  }
}

export default EmployeeService;
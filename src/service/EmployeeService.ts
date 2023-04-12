import IEmployee from "../Interfaces/IEmployee";
import IEmployeeMethods from "../Interfaces/IEmployeeMethods";
import Validation from "../validation/Validation";


class EmployeeService {
  private employeeODM: IEmployeeMethods;

  constructor(EmployeeODM: IEmployeeMethods) {
    this.employeeODM = EmployeeODM;
  }

  public async create(employeeData: IEmployee): Promise<IEmployee> {    
    Validation.createEmployee(employeeData);

    return await this.employeeODM.create(employeeData);
  }

  public async getAll(): Promise<IEmployee[]> {
    return await this.employeeODM.getAll();
  }

  public async findById(id: string): Promise<IEmployee> {
    return await this.employeeODM.findById(id);
  }

  public async updateById(id: string, employeeData: Partial<IEmployee>): Promise<IEmployee> {
    Validation.updateEmployee(employeeData);
    
    return await this.employeeODM.updateById(id, employeeData);
  }

  public async deleteById(id: string): Promise<IEmployee> {
    return await this.employeeODM.deleteById(id);
  }
}

export default EmployeeService;
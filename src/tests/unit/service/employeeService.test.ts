import { expect } from "chai";
import sinon from "sinon";
import EmployeeService from "../../../service/EmployeeService";
import EmployeeODM from "../../../model/EmployeeODM";
import { invalidMock, validMock } from "../../mock/mock";
import IEmployee from "../../../Interfaces/IEmployee";

const employeeODM = new EmployeeODM()
const employeeService = new EmployeeService(employeeODM);

describe("Testing service layer", () => {
  afterEach(() => {
    sinon.restore()
  })

  describe("Testing create method", () => {
    it("Testing if it returns an error when create data is invalid", async () => {

      try {
        await employeeService.create(invalidMock[0] as any);
      } catch (error: any) {
        expect(error.message).to.be.eq("Fill in the fields correctly");
        expect(error.status).to.be.eq(422);
      }
    })

    it("Testing if it creates an employee correctly", async () => {
      sinon.stub(employeeODM, "create").resolves(validMock[0] as IEmployee);

      const result = await employeeService.create(validMock[0] as IEmployee);

      expect(result).to.be.deep.eq(validMock[0]);
    })
  })

  describe("Testing get all method", () => {
    it("Testing if it correctly returns all employees", async () => {
      sinon.stub(employeeODM, "getAll").resolves(validMock as IEmployee[]);

      const result = await employeeService.getAll();

      expect(result).to.be.deep.eq(validMock);
    })
  })

  describe("Testing find by id method", () => {
    it("Testing if it returns an employee finding by id correctly", async () => {
      sinon.stub(employeeODM, "findById").resolves(validMock[0] as IEmployee);

      const result = await employeeService.findById("64349418dcda922959854a8a");

      expect(result).to.be.deep.eq(validMock[0]);
    })
  })

  describe("Testing update by id method", () => {
    it("Testing if it returns an error when update data is invalid", async () => {

      try {
        await employeeService.updateById("64349418dcda922959854a8a", invalidMock[0] as any);
      } catch (error: any) {
        expect(error.message).to.be.eq("Fill in the fields correctly");
        expect(error.status).to.be.eq(422);
      } 
    })

    it("Testing if it updates an employee correctly", async () => {
      sinon.stub(employeeODM, "updateById").resolves(validMock[0] as IEmployee);

      const result = await employeeService.updateById("64349418dcda922959854a8a", validMock[0] as IEmployee);

      expect(result).to.be.deep.eq(validMock[0]);
    })
  })

  describe("Testing delete by id method", () => {
    it("Testing if it deletes an employee correctly", async () => {
      sinon.stub(employeeODM, "deleteById").resolves(validMock[0] as IEmployee);

      const result = await employeeService.deleteById("64349418dcda922959854a8a");

      expect(result).to.be.deep.eq(validMock[0]);
    })
  })
})
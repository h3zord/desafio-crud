import { expect } from "chai";
import sinon from "sinon";
import EmployeeODM from "../../../model/EmployeeODM";
import { validMock } from "../../mock/mock";
import IEmployee from "../../../Interfaces/IEmployee";

const employeeODM = new EmployeeODM()

describe('Testing model layer', () => {
  afterEach(() => {
    sinon.restore();
  });
  describe('Testing create method', () => {
    it('Testing if it creates an employee correctly', async () => {
      sinon.stub(employeeODM['model'], "create" as any).resolves(validMock[0]);
  
      const result = await employeeODM.create(validMock[0]);
  
      expect(result).to.be.deep.eq(validMock[0]);
    })
  
    it ('Testing if it returns an error when create is invalid', async () => {
      sinon.stub(employeeODM['model'], "create").resolves(undefined);
  
      try {
        await employeeODM.create(validMock[0])
      } catch (error: any) {
        expect(error.message).to.be.eq("Failed to create employee");
        expect(error.status).to.be.eq(400);
      }
    })
  })

  describe('Testing get all method', () => {
    it('Testing if it correctly returns all employees', async () => {
      sinon.stub(employeeODM['model'], "find").resolves(validMock);
  
      const result = await employeeODM.getAll(); 
  
      expect(result).to.be.deep.eq(validMock);
    })
  })

  describe('Testing find by id method', () => {
    it('Testing if it returns an error when id is invalid', async () => {
      try {
        await employeeODM.findById("0");
      } catch (error: any) {
        expect(error.message).to.be.eq("Invalid ID");
        expect(error.status).to.be.eq(400);
      }
    })
  
    it('Testing if it returns an error when not found employee', async () => {
      sinon.stub(employeeODM["model"], "findById").resolves(undefined);
  
      try {
        await employeeODM.findById("64349418dcda922959854a8a");
      } catch (error: any) {
        expect(error.message).to.be.eq("Employee not found");
        expect(error.status).to.be.eq(404);
      }
    })
  
    it('Testing if it returns an employee finding by id correctly', async () => {
      sinon.stub(employeeODM["model"], "findById").resolves(validMock);
  
      const result = await employeeODM.findById("64349418dcda922959854a8a");
  
      expect(result).to.be.deep.eq(result);
    })
  })

  describe('Testing update by id method', () => {
    it('Testing if it returns an error when id is invalid', async () => {
      try {
        await employeeODM.updateById("0", validMock as Partial<IEmployee>)
      } catch (error: any) {
        expect(error.message).to.be.eq("Invalid ID");
        expect(error.status).to.be.eq(400);
      }
    })

    it('Testing if it returns an error when update is invalid', async () => {
      sinon.stub(employeeODM["model"], "findByIdAndUpdate").resolves(undefined)

      try {
        await employeeODM.updateById("64349418dcda922959854a8a", validMock as Partial<IEmployee>);
      } catch (error: any) {
        expect(error.message).to.be.eq("Failed to update employee");
        expect(error.status).to.be.eq(422);
      }
    })

    it('Testing if it updates an employee correctly', async () => {
      sinon.stub(employeeODM["model"], "findByIdAndUpdate").resolves(validMock);

      const result = await employeeODM.updateById("64349418dcda922959854a8a", validMock as Partial<IEmployee>)

      expect(result).to.be.deep.eq(validMock);
    })
  })

  describe('Testing delete by id method', () => {
    it('Testing if it returns an error when id is invalid', async () => {
      try {
        await employeeODM.deleteById("0")
      } catch (error: any) {
        expect(error.message).to.be.eq("Invalid ID");
        expect(error.status).to.be.eq(400);
      }
    })

    it('Testing if it returns an error when delete is invalid', async () => {
      sinon.stub(employeeODM["model"], "findByIdAndDelete").resolves(undefined)

      try {
        await employeeODM.deleteById("64349418dcda922959854a8a");
      } catch (error: any) {
        expect(error.message).to.be.eq("Failed to delete employee");
        expect(error.status).to.be.eq(422);
      }
    })

    it('Testing if it deletes an employee correctly', async () => {
      sinon.stub(employeeODM["model"], "findByIdAndDelete").resolves(validMock);

      const result = await employeeODM.deleteById("64349418dcda922959854a8a")

      expect(result).to.be.deep.eq(validMock);
    })
  })



})
import { expect } from "chai";
import sinon from "sinon";
import EmployeeController from "../../../controller/EmployeeController";
import EmployeeService from "../../../service/EmployeeService";
import EmployeeODM from "../../../model/EmployeeODM";
import { validMock } from "../../mock/mock";
import IEmployee from "../../../Interfaces/IEmployee";

const employeeODM = new EmployeeODM();
const employeeService = new EmployeeService(employeeODM);
const employeeController = new EmployeeController(employeeService);

describe("Testing controller layer", () => {
  afterEach(() => {
    sinon.restore()
  })

  describe("Testing create method", () => {
    it("Testing if it creates an employee correctly", async () => {
      sinon.stub(employeeService, "create").resolves(validMock[0] as IEmployee);

      const req = { body: sinon.stub().returns(validMock[0]) } as any
      const res = { status: sinon.stub(), json: sinon.stub() } as any;

      res.status = sinon.stub().returns(res);

      await employeeController.create(req, res);

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(validMock[0])).to.be.true;
    })
  })

  describe("Testing get all method", () => {
    it("Testing if it correctly returns all employees", async () => {
      sinon.stub(employeeService, "getAll").resolves(validMock as IEmployee[]);

      const req = {} as any;
      const res = { status: sinon.stub(), json: sinon.stub() } as any;
      
      res.status = sinon.stub().returns(res);

      await employeeController.getAll(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(validMock)).to.be.true;
    })
  })

  describe("Testing find by id method", () => {
    it("Testing if it returns an employee finding by id correctly", async () => {
      sinon.stub(employeeService, "findById").resolves(validMock[0] as IEmployee);

      const req = { params: { id: sinon.stub().returns("64349418dcda922959854a8a") } } as any
      const res = { status: sinon.stub(), json: sinon.stub() } as any;

      res.status = sinon.stub().returns(res);

      await employeeController.findById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(validMock[0])).to.be.true;
    })
  })

  describe("Testing update by id method", () => {
    it("Testing if it updates an employee correctly", async () => {
      sinon.stub(employeeService, "updateById").resolves(validMock[0] as IEmployee);

      const res = { status: sinon.stub(), json: sinon.stub() } as any;
      const req = { 
        params: { id: sinon.stub().returns("64349418dcda922959854a8a") },
        body: sinon.stub().returns(validMock[0] as IEmployee), 
      } as any

      res.status = sinon.stub().returns(res);

      await employeeController.updateById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(validMock[0])).to.be.true;
    })
  })

  describe("Testing delete by id method", async () => {
    it("Testing if it deletes an employee correctly", async () => {
      sinon.stub(employeeService, "deleteById").resolves(validMock[0] as IEmployee);

      const req = { params: { id: sinon.stub().returns("64349418dcda922959854a8a") } } as any
      const res = { status: sinon.stub(), json: sinon.stub() } as any;

      res.status = sinon.stub().returns(res);

      await employeeController.deleteById(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(validMock[0])).to.be.true;
    })
  })
})
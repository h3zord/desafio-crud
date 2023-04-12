import chai, { expect } from "chai";
import sinon from "sinon";
import chaiHttp from "chai-http";
import App from "../../../app";
import ConnectApp from "../../../model/Connection";
import EmployeeODM from "../../../model/EmployeeODM";
import { invalidMock, validMock } from "../../mock/mock";
import IEmployee from "../../../Interfaces/IEmployee";

chai.use(chaiHttp);

const { app } = new App(new ConnectApp());
const employeeODM = new EmployeeODM()

describe("Employee entity integration tests", () => {
  afterEach(() => {
    sinon.restore()
  });

  describe("Testing create method", () => {
    it("Testing if it returns an error when create data is invalid", async () => {
      const result = await chai.request(app).post("/employee").send(invalidMock as any);

      expect(result.status).to.be.eq(422);
      expect(result.body).to.be.deep.eq({ message: 'Fill in the fields correctly' });
    })

    it("Testing if it returns an error when create is invalid", async () => {
      sinon.stub(employeeODM["model"], "create").resolves(undefined);

      const result = await chai.request(app).post("/employee").send(validMock[0] as IEmployee);

      expect(result.status).to.be.eq(400);
      expect(result.body).to.be.deep.eq({ message: 'Failed to create employee' });
    })

    it("Testing if it creates an employee correctly", async () => {
      sinon.stub(employeeODM["model"], "create" as any).resolves(validMock[0] as IEmployee);

      const result = await chai.request(app).post("/employee").send(validMock[0] as IEmployee);

      expect(result.status).to.be.eq(201);
      expect(result.body).to.be.deep.eq(validMock[0])
    })
  })

  describe("Testing get all method", () => {
    it("Testing if it correctly returns all employees", async () => {
      sinon.stub(employeeODM["model"], "find").resolves(validMock as IEmployee[]);

      const result = await chai.request(app).get("/employee");

      expect(result.status).to.be.eq(200);
      expect(result.body).to.be.deep.eq(validMock);      
    })
  })

  describe("Testing find by id method", () => {
    it("Testing if it returns an error when id is invalid", async () => {
      const result = await chai.request(app).get("/employee/0");

      expect(result.status).to.be.eq(400);
      expect(result.body).to.be.deep.eq({ message: "Invalid ID" });
    })

    it("Testing if it returns an error when not found employee", async () => {
      sinon.stub(employeeODM["model"], "findById").resolves(undefined);

      const result = await chai.request(app).get("/employee/64349418dcda922959854a8a");

      expect(result.status).to.be.eq(404);
      expect(result.body).to.be.deep.eq({ message: "Employee not found" });
    })

    it("Testing if it returns an employee finding by id correctly", async () => {
      sinon.stub(employeeODM["model"], "findById").resolves(validMock[0] as IEmployee);

      const result = await chai.request(app).get("/employee/64349418dcda922959854a8a");

      expect(result.status).to.be.eq(200);
      expect(result.body).to.be.deep.eq(validMock[0]);
    })
  })

  describe("Testing update by id method", () => {
    it("Testing if it returns an error when update data is invalid", async () => {
      const result = await chai.request(app).put("/employee/64349418dcda922959854a8a").send(invalidMock as any);

      expect(result.status).to.be.eq(422);
      expect(result.body).to.be.deep.eq({ message: 'Fill in the fields correctly' });
    })

    it("Testing if it returns an error when id is invalid", async () => {
      const result = await chai.request(app).put("/employee/0");

      expect(result.status).to.be.eq(400);
      expect(result.body).to.be.deep.eq({ message: "Invalid ID" });
    })

    it("Testing if it returns an error when update is invalid", async () => {
      sinon.stub(employeeODM["model"], "findByIdAndUpdate").resolves(undefined);

      const result = await chai.request(app).put("/employee/64349418dcda922959854a8a").send(validMock[0] as IEmployee);

      expect(result.status).to.be.eq(422);
      expect(result.body).to.be.deep.eq({ message: "Failed to update employee" });
    })

    it("Testing if it updates an employee correctly", async () => {
      sinon.stub(employeeODM["model"], "findByIdAndUpdate").resolves(validMock[0] as IEmployee);

      const result = await chai.request(app).put("/employee/64349418dcda922959854a8a").send(validMock[0] as IEmployee);

      expect(result.status).to.be.eq(200);
      expect(result.body).to.be.deep.eq(validMock[0]);
    })
  })

  describe("Testing delete by id method", () => {
    it("Testing if it returns an error when id is invalid", async () => {
      const result = await chai.request(app).delete("/employee/0");

      expect(result.status).to.be.eq(400);
      expect(result.body).to.be.deep.eq({ message: "Invalid ID" });
    })
  })

  it("Testing if it returns an error when delete is invalid", async () => {
    sinon.stub(employeeODM["model"], "findByIdAndDelete").resolves(undefined);

    const result = await chai.request(app).delete("/employee/64349418dcda922959854a8a");

    expect(result.status).to.be.eq(422);
    expect(result.body).to.be.deep.eq({ message: "Failed to delete employee" });
  })

  it("Testing if it deletes an employee correctly", async () => {
    sinon.stub(employeeODM["model"], "findByIdAndDelete").resolves(validMock[0] as IEmployee);

    const result = await chai.request(app).delete("/employee/64349418dcda922959854a8a");

    expect(result.status).to.be.eq(200);
    expect(result.body).to.be.deep.eq(validMock[0]);
  })
})
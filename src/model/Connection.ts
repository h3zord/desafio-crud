import { connect } from "mongoose";

class ConnectApp {
  private user: string;
  private pass: string;
  private dbName: string;
  private host: string;
  private port: string;

  constructor() {
    this.user = process.env.MONGOUSER || "mongo",
    this.pass = process.env.MONGOPASSWORD || "password",
    this.dbName = process.env.MONGODATABASE || "mydatabase"
    this.host = process.env.MONGOHOST || "db"
    this.port = process.env.MONGOPORT || "27017"
  }

  public start() {
    const options = {
      user: this.user,
      pass: this.pass,
      dbName: this.dbName
    };    

    connect(`mongodb://${this.host}:${this.port}`, options)
  }
}

export default ConnectApp
import { connect } from 'mongoose';

class ConnectApp {
  private user: string | undefined;

  private pass: string | undefined;

  private dbName: string | undefined;

  private host: string | undefined;

  private port: string | undefined;

  constructor() {
    this.user = process.env.MONGOUSER;
    this.pass = process.env.MONGOPASSWORD;
    this.dbName = process.env.MONGODATABASE;
    this.host = process.env.MONGOHOST;
    this.port = process.env.MONGOPORT;
  }

  public start() {
    const options = {
      user: this.user,
      pass: this.pass,
      dbName: this.dbName,
    };    

    connect(`mongodb://${this.host}:${this.port}`, options);
  }
}

export default ConnectApp;
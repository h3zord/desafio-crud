import { connect } from "mongoose";

class ConnectApp {  
  public start() {
    const options = {
      user: process.env.MONGOUSER || "mongo",
      pass: process.env.MONGOPASSWORD || "password",
      dbName: process.env.MONGODATABASE || "mydatabase",
    };    

    connect(`mongodb://${process.env.MONGOHOST || "db"}:${process.env.MONGOPORT || "27017"}`, options)
  }
}

export default ConnectApp
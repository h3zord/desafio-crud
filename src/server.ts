import App from "./app";
import 'dotenv/config';

const app = new App()
const PORT = process.env.PORT || "3000";
console.log(typeof PORT);


app.start(PORT)
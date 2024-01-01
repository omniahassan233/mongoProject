import cors from "cors";
import express from "express";
import { connection } from "./data_base/connection.js";


const port = 55555;
const app = express();

app.use(cors());
app.use(express.json());

connection();

app.listen(port , () => {
    console.log("App is Up and running on port: "+port);
})
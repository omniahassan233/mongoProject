import cors from "cors";
import express from "express";
import { connection } from "./data_base/connection.js";

import userRoutes from "./src/modules/user/user.routes.js"

const port = 55555;
const app = express();

connection();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user",userRoutes);

app.listen(port , () => {
    console.log("App is Up and running on port: "+port);
})
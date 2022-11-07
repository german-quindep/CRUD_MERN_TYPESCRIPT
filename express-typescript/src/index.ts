import express from "express";
import cors from "cors";
import db from "./shared/db/connection";
import indexRoutes from "./shared/routes/index.routes";
import { optionsCors } from "./shared/middleware/cors.middleware";


const app = express();
//TRANSFORM JSON BODY REQUEST

const port: number = 3001;

/* DB CONNECTION */
const mysql = async () => {
  try {
    await db.authenticate();
    console.log("connection online");
  } catch (error: any) {
    throw new Error(error);
  }
};
/* CONNECTION MYSQL */
mysql();
/* MIDDLWARES */
app.use(cors(optionsCors));
app.use(express.json());

/* ROUTES */
indexRoutes(app);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

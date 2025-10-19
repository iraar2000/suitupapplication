import path from "path";
import express from "express";
import dotenv from "dotenv";
import route from "./Routes/DBRoutes/productsRoutes.js";
import initDB from "./config/db.js";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initializing server application
const app = express();

// configurations
dotenv.config(); // configuration to allow us to use .env file
app.use(express.json());
app.use(cors());

// variable definitions
const port = process.env.PORTDBSERVER;

// end nodes definition and initialization
app.use("/api/Ecommerce", route)

// listening the application requests
initDB().then(
    app.listen(port, () => console.log("the Server application is running on port: ", port))
);
import path from "path";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { fileURLToPath } from "url";
import route from "./Routes/IMGRoutes/imageRoutes.js";
import { CompressAll } from "./utils/CompressAllImages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initializing server application
const app = express();

// configurations
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
dotenv.config(); // configuration to allow us to use .env file

// variable definitions
const port = process.env.PORTIMGSERVER;
const ImagesPath = path.join(__dirname, "assets/ImageCache");
const msrntGuideImage = path.join(__dirname, "assets/MeasurementImages");

// end nodes definition and initialization
app.use("/images", express.static(ImagesPath, { maxAge: "2d" })); // this route accesses the images which exists in the imagecache folder
app.use("/msrntImages", express.static(msrntGuideImage, {maxAge: "2d"}));
app.use("/api",route); // this route is used to make custom images store them in ImageCache folder and retrieve it 


// listening the application requests
app.listen(port, () => console.log("the Image Server application is running on port: ", port))

import express from "express";
import { getCompressedImage } from "../../Controllers/IMGControllers/imageControllers.js";

const route = express.Router();

route.get("/images/:image", getCompressedImage);

export default route;

import express from "express";
import  { GetProducts, GetProductsByColumnValue, PostProducts}  from "../../Controllers/DBControllers/productsControllers.js";


// initializing the express routes
const route = express.Router();

// configuring all api node routes

route.get("/allProducts", GetProducts);
route.post("/Product", GetProductsByColumnValue);
route.post("/newProduct", GetProductsByColumnValue);
route.post("/ProductCreate",PostProducts);

// configuring offline api server


// exporting the routes
export default route;

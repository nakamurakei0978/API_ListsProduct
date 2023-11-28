//import express
import  express  from "express";

//import function from controller
import { createProduct, showProducts } from "../controllers/product.js";

//init express router
const router = express.Router();

//Get All Product
router.get('/products', showProducts);

//Create New product
router.post('/products', createProduct);

//export default router
export default router;
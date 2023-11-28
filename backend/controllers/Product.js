//import function from Product Model
import { getProducts, insertProduct } from "../models/productModel.js";

//Get all products
export const showProducts = (req, res)=>{
    getProducts((err, result)=>{
        if(err){
            res.send(err);
        }else{
            res.json(result);
        }
    });
}

//Create new product
export const createProduct = (req, res)=>{
    const data = req.body;
    insertProduct(data, (err, results)=>{
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    });
}


    
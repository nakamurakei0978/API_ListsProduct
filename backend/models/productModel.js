//import connection
import db from '../config/db.js';

//Get all products
export const getProducts = (result) => {
    db.query('select * from product', (err, results) => {
        if(err){
            console.log(err);
            result(err,null);
        }else{
            result(null, results);
        }
    })
}

//Insert product to db
export const insertProduct = (data, result)=>{
    db.query("insert into product set ?", [data], (err, results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }else {
            result(null,results);
        }
    });
}

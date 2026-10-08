import express from "express";
import {products} from "./data.js";

const app = express();

//returns name,image,price of all products
app.get("/api/products", (req, res) => {
let sortedProducts = products.map(({name,image,price,id})=>({
    name,
    image,
    price,
    id,
}));
let sortedProducts = products.map((item)=>
res.status(200).json({count:sortedProducts.length,data:sortedProducts})
})

//get all details of particular product using productID
app.get("/api/products/:productID", (req,res) => {
    const {productID} = req.params;
    const item = products.find((product) => product.id === Number(productID))
    if(!item)
    {
        res.status(200).json({msg:`Product with id ${productID} not found`});
    }
    else{
        res.status(200).json({msg:"Product Found"})
    }
    }


app.use((req,res)=>{
    res.status(404).send("<h1>Page not found");
});

app.listen(4444, () => console.log("prg4 is running at 4444"));
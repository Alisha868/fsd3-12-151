import express from "express";
const app = express();

app.get("/",(req,res) => {
  //  res.send("Hello Express");
   // res.send("<h1>Hello Express</h1>");
   res.send(`
    <h1>Hello server</h1>
    <h2>I am respnding from express server</h2>
    <h3>The code is minimal and easy to understand</h3>
    `);
   });

    app.get("/about",(req,res) => {

        res.send("<h2>About page</h2>");
    });

    app.get("/products",(req,res) => {
        const product = {
            id: 1,
            name: "Iphone 14",
            price: 120000,
        };
        res.send(product);
    });
        








//this line must be last line of code
app.listen(4444, () =>console.log("prg1 is running at 4444"));


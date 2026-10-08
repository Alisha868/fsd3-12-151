import express from "express";
const app = express();

app.get("/",(req,res) => {
    res.send("Hello Express");
});







//this line must be last line of code
app.listen(4444,() =>console.log("prg1 is running at 4444"));

## Static import
In express we can add any static html pages with the help of express.static

Express support milddle ware, whwn we have to execute some function before server execution then app.use always applied to insert any middle ware.


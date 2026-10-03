import {writeFile,appendFile,readFile} from "fs/promises";

const writeData=async()=>{
    try{
        await writeFile("hello1.txt", "Hello, World!");
        console.log("Data written to file successfully.");
    }
    catch (error) {
        console.log(error.message);
    }
};



const readData=async(filename)=>{
    try{
        const content=await readFile(filename, "utf8");
        console.log(content);
        console.log("Data read from file successfully.");
    } catch (error) {
        console.log(error.message);
        console.log("File not found");
    }finally{
        console.log("Read data finished");
    }
};

// if a function uses await keyword then that function should be declared as async function

const appendData=async()=>{
    try{
        await appendFile("hello1.txt", "\nAppended text!");
        console.log("Data appended to file successfully.");
    } catch (error) {
        console.log(error.message);
    }
};
const deleteFile=async(filename)=>{
    try{
        await unlink(filename);
        console.log("Data deleted from file successfully.");
    } catch (error) {
        console.log(error.message);
    }
};

await readData("hello.txt");

// writeData();
// readData();
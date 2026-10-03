
import {stat} from "fs/promises";

const fileinfo=async(filename)=>{
    try{
        const stats=await stat(filename);
        console.log(`File Size: ${stats.size} bytes`);
        console.log(`Created At: ${stats.birthtime}`);
        console.log(`Last Modified At: ${stats.mtime}`);
        console.log(`Is File: ${stats.isFile()}`);
        console.log(`Is Directory: ${stats.isDirectory()}`);
        console.log(`Is Symbolic Link: ${stats.isSymbolicLink()}`);
    } catch (error) {
        console.log(error.message);
    }
};
await fileinfo("hello.txt");
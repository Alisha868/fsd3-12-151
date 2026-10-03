import {writeFile} from "fs/promises";
import {appendFile} from "fs/promises";
import {readFile} from "fs/promises";
// await writeFile("hello.txt", "console.log('mic');");
// await appendFile("hello.txt", "\nFS is much easy than others");
await appendFile("hello.txt", "\n🤣🤣🤣🤣");
const content = await readFile("hello.txt", "utf8");
console.log(content);
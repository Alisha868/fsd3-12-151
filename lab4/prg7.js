import http from 'http'
import { getUsers } from "./users.js";

const server = http.createServer((req, res) => {

    if((req.url === "/") && (req.method === "GET")) {
        res.end(JSON.stringify({ message: "all users" }));
    }

    else if((req.url === "/") && (req.method === "POST")) {
        let body ='';
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end',() => {
            const user = JSON.parse(body);
            console.log(user);
        })
        res.end(JSON.stringify({ message: "add user" }));
    }
    else if((req.url === '/api/users') && (req.method === "GET")) {
        res.end(JSON.stringify({ message: "all users" }));
    }
    else if((req.url === '/api/users') && (req.method === "POST")) {
        res.end(JSON.stringify({ message: "add user" }));
    }
    else if((req.url === '/api/users/1') && (req.method === "GET")) {
        res.end(JSON.stringify({ message: "single user with id 1" }));
    }
    else if((req.url === '/api/users/1') && (req.method === "PUT")) {
        res.end(JSON.stringify({ message: "update user with id 1" }));
    }
    else if((req.url === '/api/users/1') && (req.method === "DELETE")) {
        res.end(JSON.stringify({ message: "remove 1" }));
    }
    else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000, () => console.log("prg7 is running..."));


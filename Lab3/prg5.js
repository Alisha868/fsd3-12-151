import http from 'http';

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.write("<h1>Home Page</h1>");
        res.end(`
            <a href="/product">Product Page</a>
            <a href="/contact">Contact Us</a>
        `);
    } else if (req.url === "/product") {
        res.writeHead(`
            <h1>Iphone XL</h1>
            <h2>Price: 85000</h2>
            <h3>Discount: 15%</h3>
            `);
                res.end();  
        }
        else if (req.url === "/contact") {
            res.end("<h1>Contact Us</h1>");
        } else {
            res.statusCode = 404;
            res.end(`
                <h1>Page Not Found</h1>
                <a href="/">Home</a>
            `);
        }
});

server.listen(3000, () => console.log("Server is running at 3000..."));
import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    console.log("Client URL:", req.url);

    const product = [
        {
            name: "iPhone",
            price: 85000,
            qty: 2,
            discount: 15,
        },
        {
            name: "Samsung",
            price: 65000,
            qty: 1,
            discount: 10,
        },
        {
            name: "OnePlus",
            price: 45000,
            qty: 3,
            discount: 12,
        }
    ];

    res.end(JSON.stringify(product, null, 2));
});

server.listen(3000, () => console.log("Server is running at port 3000..."));
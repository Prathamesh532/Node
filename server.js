const http = require("node:http")

const port = 5000;
const hostname = '127.0.0.1';

const server = http.createServer((req , res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html')
    res.end('<h1>Hello From node world</h1>\n')
})

server.listen(port , hostname , () => {
    console.log(`Server is running at http://${hostname}:${port}`)
})
var http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hola Mundo");
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000/")
});
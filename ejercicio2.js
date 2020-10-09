var http = require("http");
var fs = require("fs");

let count = 0;

var server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }

  fs.appendFile("archivo.txt", ++count + "\n", (err) => {
    if (err) {
      return res.end("Ha ocurrido un error");
    }
    res.end("Se ha creado un archivo");
  });
});

server.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000/");
});

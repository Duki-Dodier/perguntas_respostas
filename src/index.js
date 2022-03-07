const express = require("express");
const res = require("express/lib/response");

const app = express();

// Configura o express para usar o EJS com View Engine
app.set("view engine", "ejs");
//indicando ao express onde fica os arquivos estáticos
app.use(express.static('public'))


app.get("/", (request, response) => {
    response.render("index");
});
app.get("/perguntar", (request, response) => {
  response.render("perguntar");
})

const port = 3000;
app.listen(port, function (e) {
  if (e) console.error(`ERROR SERVIDOR >>> ${e}`);
  console.log("ServidorRodando 🚀");
});

const express = require("express");
const bodyparser = require("body-parser");
const app = express();

// Configura o express para usar o EJS com View Engine
app.set("view engine", "ejs");

//indicando ao express onde fica os arquivos estáticos
app.use(express.static("public"));

//Node.js em si não sabe converter os dados da requisição
// para o formato que queremos, o body-parser faz isso
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


//rotas
app.get("/", (request, response) => {
  response.render("index");
});
app.get("/perguntar", (request, response) => {
  response.render("perguntar");
});

app.post("/salvarpergunta", (request, response) => {
  const formu = request.body.titulo;
  console.log(formu);
  response.send(`titulo:${formu}`);
});

const port = 3000;
app.listen(port, function (e) {
  if (e) console.error(`ERROR SERVIDOR >>> ${e}`);
  console.log("ServidorRodando 🚀");
});

const express = require("express");
const bodyparser = require("body-parser");
const connection = require("../database/database");
const Pergunta = require("../database/Model/Pergunta");

connection
  .authenticate()
  .then(() => {
    console.log("conexão banco de dados feita com sucesso🤖");
  })
  .catch((e) => {
    console.log(`❌FALHA NA CONEXAO:${e}`);
  });

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
  Pergunta.findAll({ raw: true }).then(perguntas => {
    console.log(perguntas)
    response.render("index", {perguntas:perguntas});
  })
  
});



app.get("/perguntar", (request, response) => {
  response.render("perguntar");
});

app.post("/salvarpergunta", (request, response) => {
  const titulo = request.body.titulo;
  const descricao = request.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    response.redirect("/");
  });
});

const port = 3000;
app.listen(port, function (e) {
  if (e) console.error(`❌ERROR SERVIDOR >>> ${e}`);
  console.log("ServidorRodando 🚀");
});

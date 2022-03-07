const express = require("express");

const app = express();

// Configura o express para usar o EJS com View Engine
app.set("view engine", "ejs");

app.get("/:nome", (request, response) => {
    const nome = request.params.nome;
    const msg = true;

    let produtos = [
        { nome: "coca", preco: 5 },
        { nome: "pipoca", preco: 3 },
        {nome:"cerveja", preco:7}
    ]

  response.render("index",{nome, msg,produtos});
});

const port = 3000;
app.listen(port, function (e) {
  if (e) console.error(`ERROR SERVIDOR >>> ${e}`);
  console.log("ServidorRodando 🚀");
});

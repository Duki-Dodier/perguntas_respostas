const express = require("express");

const app = express();

// Configura o express para usar o EJS com View Engine
app.set("view engine", "ejs");

app.get("/:nome", (request, response) => {
    const nome = request.params.nome;

    const msg = true;
  response.render("index",{nome, msg});
});

const port = 3000;
app.listen(port, function (e) {
  if (e) console.error(`ERROR SERVIDOR >>> ${e}`);
  console.log("ServidorRodando 🚀");
});

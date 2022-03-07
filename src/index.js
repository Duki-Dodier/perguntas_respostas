const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("bem vindo");
});

const port = 3000
app.listen(port, function(e){
  if (e) console.error(`ERROR SERVIDOR >>> ${e}`);
  console.log("ServidorRodando 🚀");
});

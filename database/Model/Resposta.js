const Sequelize = require("sequelize");
const connection = require("../database");

const Resposta = connection.define(
  "Resposta",
  {
      corpo: {
          type: Sequelize.TEXT,
          allowNull: false,
      },
      perguntaId: {
          type: Sequelize.INTEGER,
          allowNull: false,
      }
  },
  {}
);

Resposta.sync({ force: false })
  .then(() => {
    console.log("tabela Resposta criada com sucesso");
  })
  .catch((e) => {
    console.log(`❌Erro Criar TABELA Resposta ${e}`);
  });
// force:false, não vai forçar caso tabela já exista

module.exports = Resposta;

const Sequelize = require("sequelize");
const connection = require("../database");

const Pergunta = connection.define(
  "pergunta",
  {
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {}
);

Pergunta.sync({ force: false }).then(() => { console.log("tabela criada com sucesso")})
    .catch((e) => { console.log(`❌Erro Criar TABELA ${e}`) })
 // force:false, não vai forçar caso tabela já exista

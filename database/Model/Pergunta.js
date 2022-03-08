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

Pergunta.sync({ force: false }).then(() => { console.log("tabela criada Pergunta com sucesso")})
    .catch((e) => { console.log(`❌Erro Criar TABELA Pergunta ${e}`) })
 // force:false, não vai forçar caso tabela já exista

 module.exports = Pergunta;
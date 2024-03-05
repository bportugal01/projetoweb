const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function () {
    console.log("Caralho do servidor ativo")
}).catch(function (erro) {
    console.log("Falha de conexão"+erro)
})

const agendamento = sequelize.define("agendamento", {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING

    },
    estado: {
        type: Sequelize.STRING
    },
    observacao: {
        type: Sequelize.STRING
    }
})




module.exports = agendamento;

//agendamento.sync({force : true})

// Importando o módulo express
const express = require("express");
const agendamento = require("./banco");

// Criando uma instância do express
const app = express();
const PORT = 8081;


// Iniciando o servidor
app.listen(PORT, function () {
    console.log(`\nA porra do servidor está rodando na porta ${PORT}`);
    console.log("Servidor iniciado com sucesso!");
});

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req, res) {
    const { nome, endereco, bairro, cep, cidade, estado, observacao } = req.params;
    
    agendamento.create({
        nome: nome,
        endereco: endereco,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        estado: estado,
        observacao: observacao
    }).then(function() {
        res.send("Cadastro realizado com sucesso!");
    }).catch(function(erro) {
        res.send("Erro ao cadastrar: " + erro);
    });
});

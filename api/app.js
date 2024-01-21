const express = require('express');
const app = express();
app.use(express.json());
const clientes = [
    {
        nome: "Maria Alice",
        cpf: "123456789",
        rg: "3216547899",
        end: "Rua da felicidade, 50"
    },
    {
        nome: "Maria Yasmim",
        cpf: "123456789",
        rg: "3216547899",
        end: "Rua da felicidade, 50"
    }       
]
app.get('/', function(req, res){
return res.json(clientes)
});
app.post('/clientes', function(req, res){
   const {nome, cpf, rg, end} = req.body
   const novoCliente = {nome, cpf, rg, end}
   clientes.push(novoCliente);
   return res.status(201).json({mensagem: "cliente criado com sucesso"})
});
app.listen(8080,function () {
console.log("servidor rodando na porta 8080");
});
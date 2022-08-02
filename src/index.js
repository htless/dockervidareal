var express = require('express');
var app = express();
require('dotenv').config();

const enviroment = process.env.ENVIROMENT;

app.get('/', function(req, res) {
  res.send(`Olá turma 21 - Teste no ambiente ${enviroment}`);
});

app.listen(3000, () => console.log(`Aplicação rodando na porta 3000!`))
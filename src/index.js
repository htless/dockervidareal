var express = require('express');
var app = express();
require('dotenv').config();

const enviroment = process.env.ENVIROMENT;
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send(`Olá turma 21 - Teste no ambiente ${enviroment}`);
});

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}!`))
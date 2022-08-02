var express = require('express');
var app = express();

const port = 3000;

app.get('/', function(req, res) {
  res.send('Olá turma 21 - Teste 4');
});

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}!`))
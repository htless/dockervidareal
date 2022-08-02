var express = require('express');
var app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;
const enviroment = process.env.ENVIROMENT;

const randColor = () =>  {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

app.get('/', function(req, res) {
  const color = parseInt((Math.random() * Math.pow(255, 3)).toString(), 16)
  res.send(`<body style="background-color: ${randColor()}">Olá turma 21 - Teste no ambiente ${enviroment}</body>`);
});

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}!`))

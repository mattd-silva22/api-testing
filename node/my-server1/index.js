const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')

app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));



let porta = 3456;

consign().include('routes').into(app);



app.listen(porta, '127.0.0.1', ()=>{

    console.log('servidor rodando na porta: ' + porta);


})



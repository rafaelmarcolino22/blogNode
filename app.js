const express = require("express");
const app = express();
const handlebars  = require('express-handlebars');
const bodyParser = require('body-parser')
//const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
 
app.get("/", (req, res) => {
    res.send("Deus e bom");
});

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(8081, () => {
    console.log("Conectado com sucesso ");
});


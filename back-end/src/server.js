const express = require("express");
const app = express();
const routes = require("./routes");
require('./database');
const path = require("path");
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');

//app.locals.teste = teste;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname,'views'));

app.use(express.static('public'));


app.use(routes);

app.listen(3333);


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/seriestv', function(err, res){
    if(err) console.log('ERROR: Conectando a la BD: ' + err);
    else console.log('Conexion a la BD realizada');
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

// app.use(express.bodyParse());
// app.use(express.methodOverride());
// app.use(app.router);

app.get('/', function(req, res){
    res.send('Hola , Mundo');
});
require('./routes')(app);

app.listen(5000);
console.log('Servidor Express escuchando por el puerto 5000')